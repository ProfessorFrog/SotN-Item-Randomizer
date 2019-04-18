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
  const items = data.items

  // List of zone strings for logging.
  const zones = [
    'ARE',
    'CAT',
    'CHI',
    'DAI',
    'LIB',
    'NO0',
    'NO1',
    'NO2',
    'NO3',
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
    }).pop()
  }

  function itemFromId(id) {
    return items.filter(function(item) {
      return item.id === id
    }).pop()
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
    return !!item.tiles
  }

  function shopFilter(item) {
    return item.tiles && item.tiles.some(function(tile) {
      return 'shop' in tile
    })
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

  function pushTile(item, tile) {
    if (!('tiles' in item)) {
      item.tiles = []
    }
    item.tiles.push(tile)
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

  function toHex(num, width) {
    const zeros = Array(width).fill('0').join('')
    const hex = (zeros + num.toString(16)).slice(-width)
    return '0x' + hex
  }

  function randomizeItems(data, options, info) {
    // Check for duped addresses.
    const dups = []
    const addresses = {}
    const tiles = flattened(items.map(function(item) {
      return (item.tiles || []).map(function(tile) {
        return {
          name: item.name,
          tile: Object.assign({}, tile, {
            zone: zones[tile.zone],
            addresses: tile.addresses,
          }),
        }
      })
    }))
    tiles.forEach(function(item) {
      item.tile.addresses.forEach(function(address) {
        address = toHex(address, 8)
        addresses[address] = addresses[address] || []
        const dup = Object.assign({}, item, {
          tile: Object.assign({}, item.tile),
        })
        const tile = dup.tile
        delete tile.addresses
        addresses[address].push(dup)
      })
    })
    let error
    let stderr
    Object.getOwnPropertyNames(addresses).forEach(function(address) {
      if (addresses[address].length > 1) {
        error = true
        if (!stderr) {
          const console = require('console')
          stderr = new console.Console(process.stderr, process.stderr)
        }
        stderr.dir({
          address: address,
          items: addresses[address],
        }, {depth: null})
      }
    })
    if (error) {
      return false
    }
    let returnVal = true
    // Randomize starting equipment.
    if (options.startingEquipment) {
      // Run a sanity check.
      if (options.checkVanilla) {
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
            mismatches.push(itemFromId(actual).name)
          }
        }
        if (mismatches.length) {
          if (options.verbose) {
            console.error('starting equipment mismatches:')
            mismatches.forEach(function(item) {
              console.error(item)
            })
          }
          returnVal = false
        } else if (options.verbose) {
          console.log('starting equipment is vanilla')
        }
      } else {
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
    }
    // Randomize item locations.
    if (options.itemLocations) {
      // Run a sanity check.
      if (options.checkVanilla) {
        // Check for item locations.
        const mismatches = []
        items.forEach(function(item) {
          if (item.tiles) {
            item.tiles.forEach(function(tile) {
              tile.addresses.forEach(function(address) {
                let found
                const value = tileValue(item, tile)
                const m = {
                  name: item.name,
                  zone: zones[tile.zone],
                  address: toHex(address, 8)
                }
                if (tile.byte) {
                  found = (data[address] === value)
                  m.expected = toHex(value, 2)
                  m.actual = toHex(data[address], 2)
                } else {
                  found = (data[address] === (value & 0xff))
                    && (data[address + 1] === (value >>> 8))
                  m.expected = toHex(value, 4)
                  const actual = (data[address] << 8) + data[address + 1]
                  m.actual = toHex(actual, 4)
                }
                if (!found) {
                  mismatches.push(m)
                }
              })
            })
          }
        })
        if (mismatches.length) {
          if (options.verbose) {
            console.error('item mismatches:')
            mismatches.forEach(function(item) {
              console.error(item)
            })
          }
        } else if (options.verbose) {
          console.log('item locations are vanilla')
        }
      } else {
        // Shuffle equipment by type.
        const shuffledTypes = shuffled(items).map(function(item) {
          item = Object.assign({}, item)
          delete item.tiles
          return item
        }).reduce(typeReduce, [])
        // Get shop items by type.
        const shopTypes = items.filter(shopFilter).map(function(item) {
          return {
            type: item.type,
            tiles: item.tiles.filter(function(tile) {
              return tile.shop
            })
          }
        }).reduce(typeReduce, [])
        // Assign random shop addresses.
        shopTypes.forEach(function(items) {
          if (Array.isArray(items)) {
            items.forEach(function(to) {
              let from
              for (let i = 0; i < shuffledTypes[to.type].length; i++) {
                from = shuffledTypes[to.type][i]
                // You can't buy food from the shop.
                if (foodFilter(from)) {
                  continue
                }
                // Selling salable items could result in infinite gold.
                if (salableFilter(from)) {
                  continue
                }
                shuffledTypes[to.type].splice(i, 1)
                break
              }
              to.name = from.name
              to.id = from.id
            })
          }
        })
        // Shuffle shop items back into item list.
        const shuffledItems = shuffled(flattened(shuffledTypes, shopTypes))
        // Shuffle all tiles.
        const shuffledTiles = shuffled(flattened(items.map(function(item) {
          return item.tiles || []
        })))
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
          eachTileItem(items, shuffledItems, filter, function(items) {
            const item = items.pop()
            pushTile(item, takePermaTile(shuffledTiles, blacklist(item)))
          })
        })
        // Powerups are in multiple non-despawn tiles.
        eachTileItem(items, shuffledItems, powerupFilter, function(items) {
          const item = randItem(items)
          pushTile(item, takePermaTile(shuffledTiles, blacklist(item)))
        })
        // Distribute jewels with same frequency as vanilla.
        const salableItems = items.filter(salableFilter)
        salableItems.forEach(function(salableItem) {
          eachTileItem(items, shuffledItems, function(item) {
            return item.id === salableItem.id
          }, function(items) {
            const item = items[0]
            pushTile(item, takePermaTile(shuffledTiles, blacklist(item)))
          })
        })
        // Usable items can occupy multiple (possibly despawn) tiles.
        const usable = [
          usableFilter,
          foodFilter,
        ]
        usable.forEach(function(filter) {
          eachTileItem(items, shuffledItems, filter, function(items) {
            const item = randItem(items)
            pushTile(item, takeTile(shuffledTiles, blacklist(item)))
          })
        })
        // Write items to ROM.
        shuffledItems.filter(tilesFilter).forEach(writeTiles(data))
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
