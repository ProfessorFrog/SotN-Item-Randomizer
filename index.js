(function() {
  let isNode
  try {
    isNode = !!module
  } catch (e) {}

  let data

  if (isNode) {
    data = require('./data')
  } else {
    data = window.sotnRandoItems.data
  }

  const TYPE = data.TYPE
  const ZONE = data.ZONE
  const zones = data.zones
  const items = data.items

  // List of zone strings for logging.
  const zoneNames = [
    'ST0',
    'ARE',
    'CAT',
    'CHI',
    'DAI',
    'LIB',
    'NO0',
    'NO1',
    'NO2',
    'NO3',
    'NP3',
    'NO4',
    'NZ0',
    'NZ1',
    'TOP',
    'RARE',
    'RCAT',
    'RCHI',
    'RDAI',
    'RLIB',
    'RNO0',
    'RNO1',
    'RNO2',
    'RNO3',
    'RNO4',
    'RNZ0',
    'RNZ1',
    'RTOP',
  ]

  // The base address of Alucard's equipped item list.
  const equipBaseAddress = 0x11a0d0

  // This is applied to item ids that are found in zone data.
  const tileIdOffset = 0x80

  // This is applied to helmet, armor, cloak, and other ids that are sold in
  // the librarian's shop menu or are in an equipment slot.
  const equipIdOffset = -0xa9

  // This is applied to equipment ids to get the inventory slot it occupies.
  const equipmentInvIdOffset = 0x798a

  function itemFromName(name) {
    return items.filter(function(item) {
      return item.name === name
    })[0]
  }

  function itemFromId(id, filter, list) {
    return (list || items).filter(function(item) {
      return item.id === id && (!filter || filter(item))
    })[0]
  }

  function typeFilter(types) {
    return function(item) {
      return types.indexOf(item.type) !== -1
    }
  }

  const powerupFilter = typeFilter([TYPE.POWERUP])
  const weaponFilter = typeFilter([TYPE.WEAPON1, TYPE.WEAPON2])
  const shieldFilter = typeFilter([TYPE.SHIELD])
  const helmetFilter = typeFilter([TYPE.HELMET])
  const armorFilter = typeFilter([TYPE.ARMOR])
  const cloakFilter = typeFilter([TYPE.CLOAK])
  const accessoryFilter = typeFilter([TYPE.ACCESSORY])
  const subweaponFilter = typeFilter([TYPE.SUBWEAPON])

  function foodFilter(item) {
    return item.food
  }

  function usableFilter(item) {
    return typeFilter([TYPE.USABLE])(item) && !foodFilter(item)
  }

  function salableFilter(item) {
    return item.salable
  }

  function nonsalableFilter(item) {
    return accessoryFilter(item) && !salableFilter(item)
  }

  function tilesFilter(item) {
    return Array.isArray(item.tiles)
  }

  function candleTileFilter(tile) {
    return typeof(tile.candle) !== 'undefined'
  }

  function zoneTileFilter(zone) {
    return function(tile) {
      return tile.zone === zone
    }
  }

  function typeReduce(types, item) {
    if (!types) {
      types = []
    }
    if (!types[item.type]) {
      types[item.type] = []
    }
    types[item.type].push(item)
    return types
  }

  function blacklist(item) {
    return function(tile) {
      if (item.blacklist) {
        for (let i = 0; i < item.blacklist.length; i++) {
          if (tile.addresses.indexOf(item.blacklist[i]) !== -1) {
            return false
          }
        }
      }
      return true
    }
  }

  function takeTile(list, filter) {
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (filter && !filter(item)) {
        continue
      }
      list.splice(i, 1)
      return item
    }
  }

  function takePermaTile(tiles, filter) {
    return takeTile(tiles, function(tile) {
      return filter(tile) && !tile.despawn
    })
  }

  function pushTile() {
    const item = arguments[0]
    const tiles = Array.prototype.slice.call(arguments, 1)
    item.tiles = item.tiles || []
    Array.prototype.push.apply(item.tiles, tiles)
  }

  function tileCountReduce(count, item) {
    if (item.tiles) {
      return count + item.tiles.length
    }
    return count
  }

  function eachTileItem(all, pool, filter, each) {
    let count = all.filter(filter).reduce(tileCountReduce, 0)
    pool = pool.filter(filter)
    while (count--) {
      each(pool)
    }
  }

  function randItem(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  function shuffled(array) {
    const copy = array.slice()
    const shuffled = []
    while (copy.length) {
      const rand = Math.floor(Math.random() * copy.length)
      shuffled.push(copy.splice(rand, 1)[0])
    }
    return shuffled
  }

  function writeShort(data, address, value) {
    data[address + 0] = value & 0xff
    data[address + 1] = value >>> 8
  }

  function flattened() {
    const flattened = []
    for (let i = 0; i < arguments.length; i++) {
      const nonNull = arguments[i].filter(function(types) {
        return !!types
      })
      const flatTypes = Array.prototype.concat.apply([], nonNull)
      Array.prototype.push.apply(flattened, flatTypes)
    }
    return flattened
  }

  function collectTiles(items, filter) {
    return flattened(items.map(function(item) {
      return item.tiles || []
    })).filter(function(tile) {
      if (filter) {
        return filter(tile)
      }
      return true
    })
  }

  function tileValue(item, tile) {
    if (tile.byte) {
      return item.id
    }
    let id = ((tile.candle || 0x00) << 8) | item.id
    if (tile && tile.shop) {
      // Apply offset for some item types in the shop menu.
      switch (item.type) {
      case TYPE.HELMET:
      case TYPE.ARMOR:
      case TYPE.CLOAK:
      case TYPE.ACCESSORY:
        id += equipIdOffset
        break
      }
    } else if (typeof(tile.candle) !== 'undefined' && item.id > tileIdOffset) {
      id += tileIdOffset
    } else {
      // Apply tile offset for some tile items.
      switch (item.type) {
      case TYPE.POWERUP:
      case TYPE.HEART:
      case TYPE.GOLD:
      case TYPE.SUBWEAPON:
        break
      default:
        id += tileIdOffset
        break
      }
    }
    return id
  }

  function writeTiles(data) {
    return function(item) {
      item.tiles.forEach(function(tile) {
        tile.addresses.forEach(function(address) {
          if (tile.byte) {
            data[address] = item.id
          } else {
            writeShort(data, address, tileValue(item, tile))
          }
        })
      })
    }
  }

  function numToHex(num, width) {
    const zeros = Array(width).fill('0').join('')
    const hex = (zeros + num.toString(16)).slice(-width)
    return '0x' + hex
  }

  function bufToHex(buf) {
    return Array.from(buf).map(function(byte) {
      return ('00' + byte.toString(16)).slice(-2)
    }).join('')
  }

  function readUInt32LE(data, offset) {
    offset = offset || 0
    const buf = new ArrayBuffer(4)
    new Uint8Array(buf).set(data.subarray(offset, offset + 4))
    return new DataView(buf).getUint32(0, true)
  }
    
  function readUInt16LE(data, offset) {
    offset = offset || 0
    const buf = new ArrayBuffer(2)
    new Uint8Array(buf).set(data.subarray(offset, offset + 2))
    return new DataView(buf).getUint16(0, true)
  }

  function restoreZone(data, offset, zoneLength) {
    const dataLength = zoneLength + Math.floor(zoneLength / 0x800) * 0x130
    data = data.subarray(offset, offset + dataLength)
    const zone = new Uint8Array(zoneLength)
    let curr = zone
    while (data.length) {
      curr.set(data.subarray(0, 0x800))
      curr = curr.subarray(0x800)
      data = data.subarray(0x800 + 0x130)
    }
    return zone
  }

  function isCandle(zoneId, entity) {
    const id = readUInt16LE(entity, 4)
    if (id === 0xa001) {
      const states = []
      switch (zoneId) {
      case ZONE.ST0:
        states.push(0x20, 0x30, 0x80, 0x90)
        break
      case ZONE.ARE:
        states.push(0x10)
        break
      case ZONE.CAT:
        states.push(0x00, 0x10, 0x20)
        break
      case ZONE.CHI:
        states.push(0x00, 0x10)
        break
      case ZONE.DAI:
        states.push(0x00, 0x10)
        break
      case ZONE.LIB:
        states.push(0x00)
        break
      case ZONE.NO0:
        states.push(0x00, 0x10, 0x20, 0x80)
        break
      case ZONE.NO1:
        states.push(0x50, 0x60)
        break
      case ZONE.NO2:
        states.push(0x00, 0x10, 0x20, 0x30, 0x40, 0x60)
        break
      case ZONE.NO3:
      case ZONE.NP3:
        states.push(0x00)
        break
      case ZONE.NO4:
        states.push(0x00, 0x50, 0x60)
        break
      case ZONE.NZ0:
        states.push(0x00, 0x10, 0x20)
        break
      case ZONE.NZ1:
        states.push(0x00, 0x10, 0x40, 0x50, 0x60)
        break
      case ZONE.TOP:
        states.push(0x20, 0x30, 0x60)
        break
      case ZONE.RARE:
        states.push(0x10)
        break
      case ZONE.RCAT:
        states.push(0x00, 0x10, 0x20)
        break
      case ZONE.RCHI:
        states.push(0x00, 0x10)
        break
      case ZONE.RDAI:
        states.push(0x00, 0x10)
        break
      case ZONE.RLIB:
        states.push(0x00)
        break
      case ZONE.RNO0:
        states.push(0x00, 0x10, 0x20, 0x80)
        break
      case ZONE.RNO1:
        states.push(0x50, 0x60)
        break
      case ZONE.RNO2:
        states.push(0x00, 0x10, 0x20, 0x30, 0x40, 0x60)
        break
      case ZONE.RNO3:
        states.push(0x00)
        break
      case ZONE.RNO4:
        states.push(0x00, 0x50, 0x60)
        break
      case ZONE.RNZ0:
        states.push(0x00, 0x10, 0x20)
        break
      case ZONE.RNZ1:
        states.push(0x10, 0x40, 0x50, 0x60)
        break
      case ZONE.RTOP:
        states.push(0x20, 0x30, 0x60)
        break
      }
      if (states.indexOf(entity[9] & 0xf0) !== -1) {
        return true
      }
    }
  }

  function getCandleEntities(zoneId, zone, rooms, offset, candles) {
    for (let i = 0; i < rooms; i++) {
      const ptr = readUInt32LE(zone, offset) - 0x80180000
      let entitiy
      let count = 0
      do {
        const p = ptr + 10 * count++
        entity = zone.subarray(p, p + 10)
        if (isCandle(zoneId, entity)) {
          const candle = bufToHex(entity)
          candles[i][candle] = candles[i][candle] || []
          candles[i][candle].push(p)
        }
      } while (readUInt32LE(entity) != 0xffffffff)
      offset += 4
    }
  }

  function findCandleAddresses(zoneId, data, pos, len) {
    const zone = restoreZone(data, pos, len)
    // Get pointers to sorted tile layout structures.
    let layout = readUInt32LE(zone, 0x10) - 0x80180000
    let rooms = 0
    while (zone[layout] != 0x40) {
      rooms++
      layout += 8
    }
    const enter = readUInt32LE(zone, 0x0c) - 0x80180000
    const offX = readUInt16LE(zone, enter + 0x1c)
    const offY = readUInt16LE(zone, enter + 0x28)
    const candles = Array(rooms).fill(null).map(function() {
      return {}
    })
    // Get candle data.
    getCandleEntities(zoneId, zone, rooms, offX, candles)
    getCandleEntities(zoneId, zone, rooms, offY, candles)
    // Add candle data to item list.
    candles.forEach(function(room) {
      Object.getOwnPropertyNames(room).forEach(function(key) {
        const entity = key.match(/[0-9a-f]{2}/g).map(function(byte) {
          return parseInt(byte, 16)
        })
        const state = (entity[9] << 8) + entity[8]
        let candle = (state & 0xf000) >>> 8
        let id = state & 0x0fff
        let filter
        if (id > tileIdOffset) {
          id -= tileIdOffset
          filter = typeFilter([
            TYPE.WEAPON1,
            TYPE.WEAPON2,
            TYPE.SHIELD,
            TYPE.HELMET,
            TYPE.ARMOR,
            TYPE.CLOAK,
            TYPE.ACCESSORY,
            TYPE.USABLE,
          ])
        }
        const item = itemFromId(id, filter)
        const addresses = room[key]
        if (!item.tiles) {
          item.tiles = []
        }
        item.tiles.push({
          zone: zoneId,
          addresses: addresses.map(function(address) {
            address += 8
            return pos + address + Math.floor(address / 0x800) * 0x130
          }),
          candle: candle,
        })
      })
    })
  }

  function randomizeStartingEquipment(data, info) {
    // Select random starting equipment.
    const weapon = randItem(items.filter(typeFilter([TYPE.WEAPON1])))
    const shield = randItem(items.filter(shieldFilter))
    const helmet = randItem(items.filter(helmetFilter))
    const armor = randItem(items.filter(armorFilter))
    const cloak = randItem(items.filter(cloakFilter))
    const accessory = randItem(items.filter(accessoryFilter))
    // Their values when equipped.
    const weaponEquipVal = weapon.id
    const shieldEquipVal = shield.id
    const helmetEquipVal = helmet.id + equipIdOffset
    const armorEquipVal = armor.id + equipIdOffset
    const cloakEquipVal = cloak.id + equipIdOffset
    const accessoryEquipVal = accessory.id + equipIdOffset
    // Their inventory locations.
    const weaponInvOffset = weapon.id + equipmentInvIdOffset
    const shieldInvOffset = shield.id + equipmentInvIdOffset
    const helmetInvOffset = helmet.id + equipmentInvIdOffset
    const armorInvOffset = armor.id + equipmentInvIdOffset
    const cloakInvOffset = cloak.id + equipmentInvIdOffset
    const accessoryInvOffset = accessory.id + equipmentInvIdOffset
    // Equip the items.
    writeShort(data, equipBaseAddress +  0, weaponEquipVal)
    writeShort(data, equipBaseAddress + 12, shieldEquipVal)
    writeShort(data, equipBaseAddress + 24, helmetEquipVal)
    writeShort(data, equipBaseAddress + 36, armorEquipVal)
    writeShort(data, equipBaseAddress + 48, cloakEquipVal)
    writeShort(data, equipBaseAddress + 60, accessoryEquipVal)
    // Death removes these values if equipped.
    data[0x1195f8] = weaponEquipVal
    data[0x119658] = shieldEquipVal
    data[0x1196b8] = helmetEquipVal
    data[0x1196f4] = armorEquipVal
    data[0x119730] = cloakEquipVal
    data[0x119774] = accessoryEquipVal
    // Death decrements these inventory values if not equiped.
    writeShort(data, 0x119634, weaponInvOffset)
    writeShort(data, 0x119648, weaponInvOffset)
    writeShort(data, 0x119694, shieldInvOffset)
    writeShort(data, 0x1196a8, shieldInvOffset)
    writeShort(data, 0x1196d0, helmetInvOffset)
    writeShort(data, 0x1196e4, helmetInvOffset)
    writeShort(data, 0x11970c, armorInvOffset)
    writeShort(data, 0x119720, armorInvOffset)
    writeShort(data, 0x119750, cloakInvOffset)
    writeShort(data, 0x119764, cloakInvOffset)
    writeShort(data, 0x1197b0, accessoryInvOffset)
    writeShort(data, 0x1197c4, accessoryInvOffset)
    // Replace Axe Lord Armor with a random armor.
    data[0x11a230] = randItem(items.filter(armorFilter)).id + equipIdOffset
    // Replace Lapis Lazuli with a random accessory.
    data[0x11a198] = randItem(items.filter(accessoryFilter)).id + equipIdOffset
    // Update info.
    info[2]['Starting equipment'] = [
      weapon.name,
      shield.name,
      helmet.name,
      armor.name,
      cloak.name,
      accessory.name,
    ]
  }

  function randomizeCandles(itemDescriptions) {
    // There are statues and pots in the hidden room of Final Stage stage that
    // drop equipment and usable items. Note that these are unique in the game
    // in that they are handled by the candle code, but their sprites are
    // permanent tile containers, not candles.
    // Additionally, there are 4 candles (2 in each library) that drop Uncurse.
    const zones = {
      st0: [ZONE.ST0],
      lib: [ZONE.LIB, ZONE.RLIB],
    }
    const specials = {}
    const specialIds = []
    Object.getOwnPropertyNames(zones).forEach(function(name) {
      specials[name] = items.filter(function(item) {
        return !typeFilter([TYPE.HEART, TYPE.GOLD, TYPE.SUBWEAPON])(item)
          && item.tiles && item.tiles.some(function(tile) {
            return candleTileFilter(tile)
              && zones[name].indexOf(tile.zone) !== -1
          })
      })
      const ids = specials[name].map(function(item) {
        return item.id
      })
      Array.prototype.push.apply(specialIds, ids)
    })
    // Randomize these special cases by replacing them with the same item type.
    const itemTypes = shuffled(itemDescriptions).reduce(typeReduce, [])
    Object.getOwnPropertyNames(zones).forEach(function(name) {
      specials[name].forEach(function(item) {
        let replacement
        do replacement = itemTypes[item.type].pop()
        while (replacement.food)
        const tiles = collectTiles([item], candleTileFilter)
        pushTile.apply(replacement, tiles)
      })
    })
    // Randomize the rest of the candles, except for Final Stage, which
    // doesn't have map tiles for all subweapons, so it must be ignored.
    const tileFilter = function(tile) {
      return candleTileFilter(tile) && tile.zone !== ZONE.ST0
    }
    const candleItems = items.filter(function(item) {
      return specialIds.indexOf(item.id) === -1
        && (item.tiles || []).some(tileFilter)
    })
    const candleTileCounts = candleItems.map(function(items) {
      return items.tiles.filter(tileFilter).length
    })
    const candleTiles = shuffled(collectTiles(candleItems, tileFilter))
    candleItems.forEach(function(item, index) {
      item = itemFromId(item.id, typeFilter([item.type]), itemDescriptions)
      let count = candleTileCounts[index]
      while (count--) {
        pushTile(item, candleTiles.pop())
      }
    })
  }

  function randomizeRewardItems(itemDescriptions) {
    const rewardTiles = collectTiles(items, function(tile) {
      return tile.reward
    })
    const usableItems = shuffled(itemDescriptions.filter(usableFilter))
    while (rewardTiles.length) {
      pushTile(usableItems.pop(), rewardTiles.pop())
    }
  }

  function randomizeTankItems(itemDescriptions) {
    // Get subweapon tank tiles.
    const tankTiles = flattened(items.filter(function(item) {
      return item.tiles && item.tiles.some(function(tile) {
        return tile.tank
      })
    }).map(function(item) {
      return item.tiles.filter(function(tile) {
        return tile.tank
      })
    }))
    // Separate tank tiles by zone.
    const tankZones = {}
    tankTiles.forEach(function(tile) {
      tankZones[tile.zone] = tankZones[tile.zone] || []
      tankZones[tile.zone].push(tile)
    })
    // Randomize tank items.
    Object.getOwnPropertyNames(tankZones).forEach(function(zone) {
      const subweapons = shuffled(itemDescriptions.filter(subweaponFilter))
      while (tankZones[zone].length) {
        pushTile(subweapons.pop(), tankZones[zone].pop())
      }
    })
  }

  function randomizeShopItems(itemDescriptions) {
    // Get shop items by type.
    const shopTypes = items.filter(function(item) {
      return item.tiles && item.tiles.some(function(tile) {
        return tile.shop
      })
    }).map(function(item) {
      return {
        type: item.type,
        tiles: item.tiles.filter(function(tile) {
          return tile.shop
        })
      }
    }).reduce(typeReduce, [])
    // Assign random shop addresses.
    const shuffledTypes = shuffled(itemDescriptions.filter(function(item) {
      return !foodFilter(item) && !salableFilter(item)
    }).reduce(typeReduce, []))
    shopTypes.forEach(function(items, type) {
      (items || []).map(function(item) {
        return item.tiles
      }).forEach(function(tiles) {
        pushTile.apply(null, shuffledTypes[type].pop().tiles, tiles)
      })
    })
  }

  function randomizeMapItems(itemDescriptions) {
    // Shuffle items.
    const shuffledItems = shuffled(itemDescriptions)
    // Get all map tiles.
    const tileItems = items.map(function(item) {
      return Object.assign({}, item, {
        tiles: (item.tiles || []).filter(function(tile) {
          return !tile.shop && !tile.tank && !tile.reward
            && typeof(tile.candle) === 'undefined'
        })
      })
    })
    // Shuffle all map tiles.
    const shuffledTiles = shuffled(collectTiles(tileItems))
    // Place tiles with the same type frequency as vanilla.
    // Equipment is unique and placed in non-despawn tiles.
    const equipment = [
      weaponFilter,
      shieldFilter,
      helmetFilter,
      armorFilter,
      cloakFilter,
      nonsalableFilter,
    ]
    equipment.forEach(function(filter) {
      eachTileItem(tileItems, shuffledItems, filter, function(items) {
        const item = items.pop()
        pushTile(item, takePermaTile(shuffledTiles, blacklist(item)))
      })
    })
    // Powerups are in multiple non-despawn tiles.
    eachTileItem(tileItems, shuffledItems, powerupFilter, function(items) {
      const item = randItem(items)
      pushTile(item, takePermaTile(shuffledTiles, blacklist(item)))
    })
    // Distribute jewels with same frequency as vanilla.
    const salableItems = items.filter(salableFilter)
    salableItems.forEach(function(salableItem) {
      eachTileItem(tileItems, shuffledItems, function(item) {
        return item.id === salableItem.id
      }, function(items) {
        const item = items[0]
        pushTile(item, takePermaTile(shuffledTiles, blacklist(item)))
      })
    })
    // Usable items can occupy multiple (possibly despawn) tiles.
    const usable = [ usableFilter, foodFilter ]
    usable.forEach(function(filter) {
      eachTileItem(tileItems, shuffledItems, filter, function(items) {
        const item = randItem(items)
        pushTile(item, takeTile(shuffledTiles, blacklist(item)))
      })
    })
  }

  function checkItemAddresses(data) {
    const addresses = {}
    const tiles = flattened(items.map(function(item) {
      return (item.tiles || []).map(function(tile) {
        return {
          name: item.name,
          tile: Object.assign({}, tile, {
            zone: zoneNames[tile.zone],
            addresses: tile.addresses,
          }),
        }
      })
    }))
    tiles.forEach(function(item) {
      item.tile.addresses.forEach(function(address) {
        address = numToHex(address, 8)
        addresses[address] = addresses[address] || []
        const dup = Object.assign({}, item, {
          tile: Object.assign({}, item.tile),
        })
        const tile = dup.tile
        delete tile.addresses
        addresses[address].push(dup)
      })
    })
    const dups = []
    Object.getOwnPropertyNames(addresses).forEach(function(address) {
      if (addresses[address].length > 1) {
        dups.push({
          address: address,
          items: addresses[address],
        })
      }
    })
    if (dups.length) {
      const console = require('console')
      stderr = new console.Console(process.stderr, process.stderr)
      stderr.error('duped addresses:')
      dups.forEach(function(dup) {
        stderr.dir(dup, {depth: null})
      })
      return false
    }
    return true
  }

  function checkStartingEquipment(data, verbose) {
    const equipment = [
      itemFromName('Alucard Sword'),
      itemFromName('Alucard Shield'),
      itemFromName('Dragon Helm'),
      itemFromName('Alucard Mail'),
      itemFromName('Twilight Cloak'),
      itemFromName('Necklace of J'),
    ]
    const mismatches = []
    for (let i = 0; i < 6; i++) {
      let expected = equipment[i].id
      let actual = data[equipBaseAddress + i * 12]
      if (i > 1) {
        expected += equipIdOffset
      }
      if (actual !== expected) {
        const item = itemFromId(actual, typeFilter([equipment[i].type]))
        mismatches.push(item.name)
      }
    }
    if (mismatches.length) {
      if (verbose) {
        console.error('starting equipment mismatches:')
        mismatches.forEach(function(item) {
          console.error(item)
        })
      }
      return false
    } else if (verbose) {
      console.log('starting equipment is vanilla')
    }
    return true
  }

  function checkItemLocations(data, verbose) {
    const mismatches = []
    items.forEach(function(item) {
      if (item.tiles) {
        item.tiles.forEach(function(tile) {
          tile.addresses.forEach(function(address) {
            let found
            const value = tileValue(item, tile)
            const m = {
              name: item.name,
              zone: zoneNames[tile.zone],
              address: numToHex(address, 8)
            }
            if (tile.byte) {
              found = (data[address] === value)
              m.expected = numToHex(value, 2)
              m.actual = numToHex(data[address], 2)
            } else {
              found = (data[address] === (value & 0xff))
                && (data[address + 1] === (value >>> 8))
              m.expected = numToHex(value, 4)
              const actual = (data[address] << 8) + data[address + 1]
              m.actual = numToHex(actual, 4)
            }
            if (!found) {
              mismatches.push(m)
            }
          })
        })
      }
    })
    if (mismatches.length) {
      if (verbose) {
        console.error('item mismatches:')
        mismatches.forEach(function(item) {
          console.error(item)
        })
      }
      return false
    } else if (verbose) {
      console.log('item locations are vanilla')
    }
    return true
  }

  function randomizeItems(data, options, info) {
    // Check for duped addresses.
    if (!checkItemAddresses(data)) {
      return false
    }
    let returnVal = true
    // Randomize starting equipment.
    if (options.startingEquipment) {
      // Run a sanity check.
      if (options.checkVanilla) {
        returnVal = checkStartingEquipment(data, options.verbose) && returnVal
      } else {
        // Randomize starting equipment.
        randomizeStartingEquipment(data, info)
      }
    }
    // Randomize item locations.
    if (options.itemLocations) {
      // Run a sanity check.
      if (options.checkVanilla) {
        // Check for item locations.
        returnVal = checkItemLocations(data, options.verbose) && returnVal
      } else {
        // Get item descriptions.
        const itemDescriptions = items.map(function(item) {
          item = Object.assign({}, item)
          delete item.tiles
          return item
        })
        // Find candle addresses.
        zones.forEach(function(zone, zoneId) {
          findCandleAddresses(zoneId, data, zone.pos, zone.len)
        })
        // Randomize candles.
        randomizeCandles(itemDescriptions)
        // Randomize tank items.
        randomizeTankItems(itemDescriptions)
        // Randomize reward items.
        randomizeRewardItems(itemDescriptions)
        // Randomize shop items.
        randomizeShopItems(itemDescriptions)
        // Randomize map items.
        randomizeMapItems(itemDescriptions)
        // Write items to ROM.
        itemDescriptions.filter(tilesFilter).forEach(writeTiles(data))
      }
    }
    return returnVal
  }

  if (isNode) {
    module.exports = randomizeItems
  } else {
    window.sotnRandoItems = Object.assign(window.sotnRandoItems || {}, {
      randomizeItems: randomizeItems,
    })
  }
})()
