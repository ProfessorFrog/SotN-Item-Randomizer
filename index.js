const TYPE_WEAPON1 = 0
const TYPE_WEAPON2 = 1
const TYPE_SHIELD = 2
const TYPE_HELMET = 3
const TYPE_ARMOR = 4
const TYPE_CLOAK = 5
const TYPE_OTHER = 6

// The base address of Alucard's equipped item list.
const equipBaseAddress = 0x11a0d0

// This is applied to item ids that are found in the map.
const tileIdOffset = 0x80

// This is applied to helmet, armor, cloak, and other ids that are sold in the
// librarian's shop menu or are in an equipment slot.
const equipIdOffset = -0xa9

// This is applied to equipment id to get the inventory slot it occupies.
const invIdOffset = 0x798a

// Equipment list.
// Note that some items are disabled for various reasons.
// For instance, they may be drop-only, or required for progression.
const equipment = [{
  name: 'Shield Rod',
  type: TYPE_WEAPON1,
  id: 4,
  tileAddresses: [ 0x43c3132 ],
}, {
  name: 'Leather Shield',
  type: TYPE_SHIELD,
  id: 5,
  tileAddresses: [ 0x54b22a8 ],
  shopAddress: 0x47a3166,
}, {
  name: 'Knight Shield',
  type: TYPE_SHIELD,
  id: 6,
  tileAddresses: [ 0x43c3138 ],
}, {
  name: 'Iron Shield',
  type: TYPE_SHIELD,
  id: 7,
  shopAddress: 0x47a316e,
}, {
  name: 'AxeLord Shield',
  type: TYPE_SHIELD,
  id: 8,
  disabled: true,
}, {
  name: 'Herald Shield',
  type: TYPE_SHIELD,
  id: 9,
  tileAddresses: [ 0x4c324ae, 0x61a73b2 ],
}, {
  name: 'Dark Shield',
  type: TYPE_SHIELD,
  id: 10,
  disabled: true,
}, {
  name: 'Goddess Shield',
  type: TYPE_SHIELD,
  id: 11,
  tileAddresses: [ 0x5903076 ],
}, {
  name: 'Shaman Shield',
  type: TYPE_SHIELD,
  id: 12,
  tileAddresses: [ 0x5573844 ],
}, {
  name: 'Medusa Shield',
  type: TYPE_SHIELD,
  id: 13,
  disabled: true,
}, {
  name: 'Skull Shield',
  type: TYPE_SHIELD,
  id: 14,
  disabled: true,
}, {
  name: 'Fire Shield',
  type: TYPE_SHIELD,
  id: 15,
  disabled: true,
}, {
  name: 'Alucard Shield',
  type: TYPE_SHIELD,
  id: 16,
  tileAddresses: [ 0x526c0e8 ],
}, {
  name: 'Sword of Dawn',
  type: TYPE_WEAPON2,
  id: 17,
  tileAddresses: [ 0x57e0160 ],
}, {
  name: 'Basilard',
  type: TYPE_WEAPON1,
  id: 18,
  tileAddresses: [ 0x54b22aa ],
}, {
  name: 'Short Sword',
  type: TYPE_WEAPON1,
  id: 19,
  disabled: true,
}, {
  name: 'Combat Knife',
  type: TYPE_WEAPON1,
  id: 20,
  tileAddresses: [ 0x45e9606 ],
}, {
  name: 'Nunchaku',
  type: TYPE_WEAPON2,
  id: 21,
  tileAddresses: [ 0x4c324e8 ],
}, {
  name: 'Were Bane',
  type: TYPE_WEAPON1,
  id: 22,
  disabled: true,
}, {
  name: 'Rapier',
  type: TYPE_WEAPON1,
  id: 23,
  disabled: true,
}, {
  name: 'Red Rust',
  type: TYPE_WEAPON2,
  id: 26,
  disabled: true,
}, {
  name: 'Takemitsu',
  type: TYPE_WEAPON2,
  id: 27,
  tileAddresses: [ 0x47a3912 ],
}, {
  name: 'Shotel',
  type: TYPE_WEAPON1,
  id: 28,
  tileAddresses: [ 0x505016e ],
}, {
  name: 'Tyrfing',
  type: TYPE_WEAPON1,
  id: 83,
  tileAddresses: [ 0x560f5fe ],
}, {
  name: 'Namakura',
  type: TYPE_WEAPON2,
  id: 84,
  disabled: true,
}, {
  name: 'Knuckle Duster',
  type: TYPE_WEAPON1,
  id: 85,
  tileAddresses: [ 0x4c324ce, 0x61a73d2 ],
}, {
  name: 'Gladius',
  type: TYPE_WEAPON1,
  id: 86,
  tileAddresses: [ 0x49d367c ],
}, {
  name: 'Scimitar',
  type: TYPE_WEAPON1,
  id: 87,
  tileAddresses: [ 0x4c324c6, 0x61a73ca ],
}, {
  name: 'Cutlass',
  type: TYPE_WEAPON1,
  id: 88,
  tileAddresses: [ 0x4676f14 ],
}, {
  name: 'Saber',
  type: TYPE_WEAPON1,
  id: 89,
  shopAddress: 0x47a312e,
}, {
  name: 'Falchion',
  type: TYPE_WEAPON1,
  id: 90,
  tileAddresses: [ 0x560f610 ],
}, {
  name: 'Broadsword',
  type: TYPE_WEAPON1,
  id: 91,
  tileAddresses: [ 0x4aa155c ],
}, {
  name: 'Bekatowa',
  type: TYPE_WEAPON1,
  id: 92,
  tileAddresses: [ 0x5573842 ],
}, {
  name: 'Damascus Sword',
  type: TYPE_WEAPON1,
  id: 93,
  shopAddress: 0x47a313e,
}, {
  name: 'Hunter Sword',
  type: TYPE_WEAPON1,
  id: 94,
  disabled: true,
}, {
  name: 'Estoc',
  type: TYPE_WEAPON2,
  id: 95,
  tileAddresses: [ 0x4aa1698 ],
}, {
  name: 'Bastard Sword',
  type: TYPE_WEAPON1,
  id: 96,
  tileAddresses: [ 0x57e0168 ],
}, {
  name: 'Jewel Knuckles',
  type: TYPE_WEAPON1,
  id: 97,
  tileAddresses: [ 0x49d3674 ],
}, {
  name: 'Claymore',
  type: TYPE_WEAPON2,
  id: 98,
  tileAddresses: [ 0x4c324ba, 0x61a73be ],
}, {
  name: 'Talwar',
  type: TYPE_WEAPON1,
  id: 99,
  tileAddresses: [ 0x4e322ce ],
}, {
  name: 'Katana',
  id: 100,
  type: TYPE_WEAPON2,
  tileAddresses: [ 0x590307a ],
}, {
  name: 'Flamberge',
  type: TYPE_WEAPON2,
  id: 101,
  disabled: true,
}, {
  name: 'Iron Fist',
  type: TYPE_WEAPON1,
  id: 102,
  disabled: true,
}, {
  name: 'Zwei Hander',
  type: TYPE_WEAPON2,
  id: 103,
  disabled: true,
}, {
  name: 'Sword of Hador',
  type: TYPE_WEAPON1,
  id: 104,
  tileAddresses: [ 0x50f87ba ],
}, {
  name: 'Luminus',
  type: TYPE_WEAPON1,
  id: 105,
  tileAddresses: [ 0x59bc0d6 ],
}, {
  name: 'Harper',
  type: TYPE_WEAPON1,
  id: 106,
  shopAddress: 0x47a315e,
}, {
  name: 'Obsidian Sword',
  type: TYPE_WEAPON2,
  id: 107,
  disabled: true,
}, {
  name: 'Gram',
  type: TYPE_WEAPON1,
  id: 108,
  tileAddresses: [ 0x575155a ],
}, {
  name: 'Jewel Sword',
  type: TYPE_WEAPON1,
  id: 109,
  tileAddresses: [ 0x4b68616, 0x53f5f92 ],
}, {
  name: 'Mormegil',
  type: TYPE_WEAPON1,
  id: 110,
  tileAddresses: [ 0x44912ea ],
}, {
  name: 'Firebrand',
  type: TYPE_WEAPON1,
  id: 111,
  shopAddress: 0x47a3146,
}, {
  name: 'Thunderbrand',
  type: TYPE_WEAPON1,
  id: 112,
  shopAddress: 0x47a3156,
}, {
  name: 'Icebrand',
  type: TYPE_WEAPON1,
  id: 113,
  tileAddresses: [ 0x44912e6 ],
  shopAddress: 0x47a314e,
}, {
  name: 'Stone Sword',
  type: TYPE_WEAPON1,
  id: 114,
  disabled: true,
}, {
  name: 'Holy Sword',
  type: TYPE_WEAPON1,
  id: 115,
  tileAddresses: [ 0x43c313e ],
}, {
  name: 'Terminus Est',
  type: TYPE_WEAPON1,
  id: 116,
  disabled: true,
}, {
  name: 'Marsil',
  type: TYPE_WEAPON1,
  id: 117,
  disabled: true,
}, {
  name: 'Dark Blade',
  type: TYPE_WEAPON1,
  id: 118,
  tileAddresses: [ 0x526c116 ],
}, {
  name: 'Heaven Sword',
  type: TYPE_WEAPON1,
  id: 119,
  disabled: true,
}, {
  name: 'Fist of Tulkas',
  type: TYPE_WEAPON1,
  id: 120,
  disabled: true,
}, {
  name: 'Gurthang',
  type: TYPE_WEAPON1,
  id: 121,
  disabled: true,
}, {
  name: 'Mourneblade',
  type: TYPE_WEAPON1,
  id: 122,
  disabled: true,
}, {
  name: 'Alucard Sword',
  type: TYPE_WEAPON1,
  id: 123,
  tileAddresses: [ 0x4da5138 ],
}, {
  name: 'Mablung Sword',
  type: TYPE_WEAPON1,
  id: 124,
  disabled: true,
}, {
  name: 'Badelaire',
  type: TYPE_WEAPON1,
  id: 125,
  tileAddresses: [ 0x4ee2f1e ],
}, {
  name: 'Sword Familiar',
  type: TYPE_WEAPON1,
  id: 126,
  disabled: true,
}, {
  name: 'Mace',
  type: TYPE_WEAPON1,
  id: 128,
  shopAddress: 0x47a3136,
}, {
  name: 'Morning Star',
  type: TYPE_WEAPON1,
  id: 129,
  tileAddresses: [ 0x4676efa ],
}, {
  name: 'Holy Rod',
  type: TYPE_WEAPON1,
  id: 130,
  tileAddresses: [ 0x47a390c ],
}, {
  name: 'Star Flail',
  type: TYPE_WEAPON1,
  id: 131,
  tileAddresses: [ 0x557383a ],
}, {
  name: 'Moon Rod',
  type: TYPE_WEAPON1,
  id: 132,
  tileAddresses: [ 0x59bc0e6 ],
}, {
  name: 'Chakram',
  type: TYPE_WEAPON1,
  id: 133,
  disabled: true,
}, {
  name: 'Holbein Dagger',
  type: TYPE_WEAPON1,
  id: 136,
  disabled: true,
}, {
  name: 'Blue Knuckles',
  type: TYPE_WEAPON1,
  id: 137,
  disabled: true,
}, {
  name: 'Osafune Katana',
  type: TYPE_WEAPON2,
  id: 139,
  tileAddresses: [ 0x526c11c ],
}, {
  name: 'Masamune',
  type: TYPE_WEAPON2,
  id: 140,
  disabled: true,
}, {
  name: 'Muramasa',
  type: TYPE_WEAPON2,
  id: 141,
  disabled: true,
}, {
  name: 'Runesword',
  type: TYPE_WEAPON1,
  id: 143,
  disabled: true,
}, {
  name: 'Vorpal Blade',
  type: TYPE_WEAPON1,
  id: 163,
  disabled: true,
}, {
  name: 'Crissaegrim',
  type: TYPE_WEAPON1,
  id: 164,
  disabled: true,
}, {
  name: 'Yusutsuna',
  type: TYPE_WEAPON2,
  id: 165,
  disabled: true,
}, {
  name: 'Alucart Shield',
  type: TYPE_SHIELD,
  id: 167,
  tileAddresses: [ 0x48fad9a ],
}, {
  name: 'Alucart Sword',
  type: TYPE_WEAPON1,
  id: 168,
  tileAddresses: [ 0x48fada6 ],
}, {
  name: 'Cloth Tunic',
  type: TYPE_ARMOR,
  id: 170,
  disabled: true,
}, {
  name: 'Hide cuirass',
  type: TYPE_ARMOR,
  id: 171,
  tileAddresses: [ 0x54b2298 ],
}, {
  name: 'Bronze Cuirass',
  type: TYPE_ARMOR,
  id: 172,
  tileAddresses: [ 0x47a3910 ],
}, {
  name: 'Iron Cuirass',
  type: TYPE_ARMOR,
  id: 173,
  shopAddress: 0x47a3196,
}, {
  name: 'Steel Cuirass',
  type: TYPE_ARMOR,
  id: 174,
  shopAddress: 0x47a319e,
}, {
  name: 'Silver Plate',
  type: TYPE_ARMOR,
  id: 175,
  tileAddresses: [ 0x4676f0c ],
}, {
  name: 'Gold Plate',
  type: TYPE_ARMOR,
  id: 176,
  tileAddresses: [ 0x557383c ],
}, {
  name: 'Platinum Mail',
  type: TYPE_ARMOR,
  id: 177,
  tileAddresses: [ 0x560f60e ],
}, {
  name: 'Diamond Plate',
  type: TYPE_ARMOR,
  id: 178,
  shopAddress: 0x47a31a6,
}, {
  name: 'Fire Mail',
  type: TYPE_ARMOR,
  id: 179,
  tileAddresses: [ 0x560f5fc ],
}, {
  name: 'Lightning Mail',
  type: TYPE_ARMOR,
  id: 180,
  tileAddresses: [ 0x57e018e ],
}, {
  name: 'Ice Mail',
  type: TYPE_ARMOR,
  id: 181,
  tileAddresses: [ 0x5573846 ],
}, {
  name: 'Mirror Cuirass',
  type: TYPE_ARMOR,
  id: 182,
  tileAddresses: [ 0x49d3676 ],
}, {
  name: 'Spike Breaker',
  type: TYPE_ARMOR,
  id: 183,
  disabled: true,
}, {
  name: 'Alucard Mail',
  type: TYPE_ARMOR,
  id: 184,
  tileAddresses: [ 0x50f87c6 ],
}, {
  name: 'Dark Armor',
  type: TYPE_ARMOR,
  id: 185,
  disabled: true,
}, {
  name: 'Healing Mail',
  type: TYPE_ARMOR,
  id: 186,
  tileAddresses: [ 0x5573840 ],
}, {
  name: 'Holy Mail',
  type: TYPE_ARMOR,
  id: 187,
  tileAddresses: [ 0x4b6860e, 0x53f5f8a ],
}, {
  name: 'Walk Armor',
  type: TYPE_ARMOR,
  id: 188,
  tileAddresses: [ 0x44912e8 ],
}, {
  name: 'Brilliant Mail',
  type: TYPE_ARMOR,
  id: 189,
  disabled: true,
}, {
  name: 'Mojo Mail',
  type: TYPE_ARMOR,
  id: 190,
  disabled: true,
}, {
  name: 'Fury Plate',
  type: TYPE_ARMOR,
  id: 191,
  tileAddresses: [ 0x5751554 ],
}, {
  name: 'Dracula Tunic',
  type: TYPE_ARMOR,
  id: 192,
  disabled: true,
}, {
  name: 'God\'s Garb',
  type: TYPE_ARMOR,
  id: 193,
  disabled: true,
}, {
  name: 'Axe Lord Armor',
  type: TYPE_ARMOR,
  id: 194,
  disabled: true,
}, {
  name: 'Sunglasses',
  type: TYPE_HELMET,
  id: 196,
  tileAddresses: [ 0x54b22a4 ],
}, {
  name: 'Ballroom Mask',
  type: TYPE_HELMET,
  id: 197,
  tileAddresses: [ 0x44912f2 ],
}, {
  name: 'Bandanna',
  type: TYPE_HELMET,
  id: 198,
  tileAddresses: [ 0x4c324b6, 0x61a738a ],
}, {
  name: 'Felt Hat',
  type: TYPE_HELMET,
  id: 199,
  disabled: true,
}, {
  name: 'Velvet Hat',
  type: TYPE_HELMET,
  id: 200,
  shopAddress: 0x47a3176,
}, {
  name: 'Goggles',
  type: TYPE_HELMET,
  id: 201,
  tileAddresses: [ 0x4676f0a ],
}, {
  name: 'Leather Hat',
  type: TYPE_HELMET,
  id: 202,
  shopAddress: 0x47a317e,
}, {
  name: 'Holy Glasses',
  type: TYPE_HELMET,
  id: 203,
  disabled: true,
}, {
  name: 'Steel Helm',
  type: TYPE_HELMET,
  id: 204,
  tileAddresses: [ 0x557383e ],
}, {
  name: 'Stone Mask',
  type: TYPE_HELMET,
  id: 205,
  tileAddresses: [ 0x47a390a ],
}, {
  name: 'Circlet',
  type: TYPE_HELMET,
  id: 206,
  shopAddress: 0x47a3186,
}, {
  name: 'Gold Circlet',
  type: TYPE_HELMET,
  id: 207,
  disabled: true,
}, {
  name: 'Ruby Circlet',
  type: TYPE_HELMET,
  id: 208,
  tileAddresses: [ 0x4cfb702 ],
}, {
  name: 'Opal Circlet',
  type: TYPE_HELMET,
  id: 209,
  disabled: true,
}, {
  name: 'Topaz Circlet',
  type: TYPE_HELMET,
  id: 210,
  tileAddresses: [ 0x47a391c ],
}, {
  name: 'Beryl Circlet',
  type: TYPE_HELMET,
  id: 211,
  tileAddresses: [ 0x51ad7a4 ],
}, {
  name: 'Cat-eye Circlet',
  type: TYPE_HELMET,
  id: 212,
  tileAddresses: [ 0x44912e4 ],
}, {
  name: 'Coral Circlet',
  type: TYPE_HELMET,
  id: 213,
  disabled: true,
}, {
  name: 'Dragon Helm',
  type: TYPE_HELMET,
  id: 214,
  tileAddresses: [ 0x59bc0da ],
}, {
  name: 'Silver Crown',
  type: TYPE_HELMET,
  id: 215,
  shopAddress: 0x47a318e,
}, {
  name: 'Wizard Hat',
  type: TYPE_HELMET,
  id: 216,
  disabled: true,
}, {
  name: 'Cloth Cape',
  type: TYPE_CLOAK,
  id: 218,
  tileAddresses: [ 0x54b229c ],
}, {
  name: 'Reverse Cloak',
  type: TYPE_CLOAK,
  id: 219,
  shopAddress: 0x47a31ae,
}, {
  name: 'Elven Cloak',
  type: TYPE_CLOAK,
  id: 220,
  shopAddress: 0x47a31b6,
}, {
  name: 'Crystal Cloak',
  type: TYPE_CLOAK,
  id: 221,
  tileAddresses: [ 0x4c324a4, 0x61a73a8 ],
}, {
  name: 'Royal Cloak',
  type: TYPE_CLOAK,
  id: 222,
  tileAddresses: [ 0x57e0176 ],
}, {
  name: 'Blood Cloak',
  type: TYPE_CLOAK,
  id: 223,
  tileAddresses: [ 0x43c3136 ],
}, {
  name: 'Joseph\'s Cloak',
  type: TYPE_CLOAK,
  id: 224,
  shopAddress: 0x47a31be,
}, {
  name: 'Twilight Cloak',
  type: TYPE_CLOAK,
  id: 225,
  tileAddresses: [ 0x4e322d4 ],
}, {
  name: 'Moonstone',
  type: TYPE_OTHER,
  id: 227,
  tileAddresses: [ 0x4c324c4, 0x61a73c8 ],
}, {
  name: 'Sunstone',
  type: TYPE_OTHER,
  id: 228,
  tileAddresses: [ 0x59bc0e0 ],
}, {
  name: 'Bloodstone',
  type: TYPE_OTHER,
  id: 229,
  tileAddresses: [ 0x44912f4 ],
}, {
  name: 'Staurolite',
  type: TYPE_OTHER,
  id: 230,
  tileAddresses: [ 0x4ee2f20 ],
}, {
  name: 'Ring of Pales',
  type: TYPE_OTHER,
  id: 231,
  shopAddress: 0x47a31ce,
}, {
  name: 'Zircon',
  type: TYPE_OTHER,
  id: 232,
  disabled: true,
}, {
  name: 'Aquamarine',
  type: TYPE_OTHER,
  id: 233,
  disabled: true,
}, {
  name: 'Turquoise',
  type: TYPE_OTHER,
  id: 234,
  disabled: true,
}, {
  name: 'Onyx',
  type: TYPE_OTHER,
  id: 235,
  disabled: true,
}, {
  name: 'Garnet',
  type: TYPE_OTHER,
  id: 236,
  disabled: true,
}, {
  name: 'Opal',
  type: TYPE_OTHER,
  id: 237,
  disabled: true,
}, {
  name: 'Diamond',
  type: TYPE_OTHER,
  id: 238,
  disabled: true,
}, {
  name: 'Lapis Lazuli',
  type: TYPE_OTHER,
  id: 239,
  disabled: true,
}, {
  name: 'Ring of Ares',
  type: TYPE_OTHER,
  id: 240,
  tileAddresses: [ 0x45e9604 ],
}, {
  name: 'Gold Ring',
  type: TYPE_OTHER,
  id: 241,
  disabled: true,
}, {
  name: 'Silver Ring',
  type: TYPE_OTHER,
  id: 242,
  disabled: true,
}, {
  name: 'Ring of Varda',
  type: TYPE_OTHER,
  id: 243,
  disabled: true,
}, {
  name: 'Ring of Arcana',
  type: TYPE_OTHER,
  id: 244,
  tileAddresses: [ 0x5903080 ],
}, {
  name: 'Mystic Pendant',
  type: TYPE_OTHER,
  id: 245,
  tileAddresses: [ 0x4676f00 ],
}, {
  name: 'Heart Broach',
  type: TYPE_OTHER,
  id: 246,
  disabled: true,
}, {
  name: 'Necklace of J',
  type: TYPE_OTHER,
  id: 247,
  tileAddresses: [ 0x4cfb6fa ],
}, {
  name: 'Gauntlet',
  type: TYPE_OTHER,
  id: 248,
  shopAddress: 0x47a31d6,
}, {
  name: 'Ankh of Life',
  type: TYPE_OTHER,
  id: 249,
  tileAddresses: [ 0x4676ef8 ],
}, {
  name: 'Ring of Feanor',
  type: TYPE_OTHER,
  id: 250,
  disabled: true,
}, {
  name: 'Medal',
  type: TYPE_OTHER,
  id: 251,
  shopAddress: 0x47a31c6,
}, {
  name: 'Talisman',
  type: TYPE_OTHER,
  id: 252,
  tileAddresses: [ 0x51ad7aa ],
}, {
  name: 'Duplicator',
  type: TYPE_OTHER,
  id: 253,
  shopAddress: 0x47a31de,
}, {
  name: 'King\'s Stone',
  type: TYPE_OTHER,
  id: 254,
  disabled: true,
}, {
  name: 'Covenant Stone',
  type: TYPE_OTHER,
  id: 255,
  disabled: true,
}, {
  name: 'Nauglamir',
  type: TYPE_OTHER,
  id: 256,
  disabled: true,
}, {
  name: 'Secret Boots',
  type: TYPE_OTHER,
  id: 257,
  tileAddresses: [ 0x4c324de, 0x61a73e2 ],
}, {
  name: 'Alucart Mail',
  type: TYPE_ARMOR,
  id: 258,
  tileAddresses: [ 0x48fada4 ],
}]

function typeFilter(types) {
  return function(item) {
    return types.indexOf(item.type) !== -1
  }
}

const weaponFilter = typeFilter([TYPE_WEAPON1, TYPE_WEAPON2])
const shieldFilter = typeFilter([TYPE_SHIELD])
const helmetFilter = typeFilter([TYPE_HELMET])
const armorFilter = typeFilter([TYPE_ARMOR])
const cloakFilter = typeFilter([TYPE_CLOAK])
const otherFilter = typeFilter([TYPE_OTHER])

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

function eachType(types, func) {
  types.forEach(function(items) {
    if (Array.isArray(items)) {
      items.forEach(func)
    }
  })
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

function writeTileAddresses(data) {
  return function(item) {
    item.tileAddresses.forEach(function(address) {
      writeShort(data, address, item.id + tileIdOffset)
    })
  }
}

function writeShopAddress(data) {
  return function(item) {
    // Apply offset for some equipment types.
    let offset = 0
    switch (item.type) {
    case TYPE_HELMET:
    case TYPE_ARMOR:
    case TYPE_CLOAK:
    case TYPE_OTHER:
      offset = equipIdOffset
      break
    }
    // Patch rom.
    writeShort(data, item.shopAddress, item.id + offset)
  }
}

function randomizeEquipment(data, options) {
  // Filter out items that are disabled from randomization.
  const enabledEquipment = equipment.filter(function(item) {
    return !item.disabled
  })
  // Separate equip types into their own lists.
  const weapon1s = enabledEquipment.filter(typeFilter([TYPE_WEAPON1]))
  const weapon2s = enabledEquipment.filter(typeFilter([TYPE_WEAPON2]))
  const weapons = enabledEquipment.filter(weaponFilter)
  const shields = enabledEquipment.filter(shieldFilter)
  const helmets = enabledEquipment.filter(helmetFilter)
  const armors = enabledEquipment.filter(armorFilter)
  const cloaks = enabledEquipment.filter(cloakFilter)
  const others = enabledEquipment.filter(otherFilter)
  // Randomize starting equipment.
  if (options.randomizeStartingEquipment) {
    // Select random starting equipment.
    const sword = randItem(weapon1s)
    const shield = randItem(shields)
    const helmet = randItem(helmets)
    const armor = randItem(armors)
    const cloak = randItem(cloaks)
    const other = randItem(others)
    // Their values when equipped.
    const swordEquipVal = sword.id
    const shieldEquipVal = shield.id
    const helmetEquipVal = helmet.id + equipIdOffset
    const armorEquipVal = armor.id + equipIdOffset
    const cloakEquipVal = cloak.id + equipIdOffset
    const otherEquipVal = other.id + equipIdOffset
    // Their inventory locations.
    const swordInvOffset = sword.id + invIdOffset
    const shieldInvOffset = shield.id + invIdOffset
    const helmetInvOffset = helmet.id + invIdOffset
    const armorInvOffset = armor.id + invIdOffset
    const cloakInvOffset = cloak.id + invIdOffset
    const otherInvOffset = other.id + invIdOffset
    // Equip the items.
    writeShort(data, equipBaseAddress +  0, swordEquipVal)
    writeShort(data, equipBaseAddress + 12, shieldEquipVal)
    writeShort(data, equipBaseAddress + 24, helmetEquipVal)
    writeShort(data, equipBaseAddress + 36, armorEquipVal)
    writeShort(data, equipBaseAddress + 48, cloakEquipVal)
    writeShort(data, equipBaseAddress + 60, otherEquipVal)
    // Death removes these values if equipped.
    data[0x1195f8] = swordEquipVal
    data[0x119658] = shieldEquipVal
    data[0x1196b8] = helmetEquipVal
    data[0x1196f4] = armorEquipVal
    data[0x119730] = cloakEquipVal
    data[0x119774] = otherEquipVal
    // Death decrements these inventory values if not equiped.
    writeShort(data, 0x119634, swordInvOffset)
    writeShort(data, 0x119648, swordInvOffset)
    writeShort(data, 0x119694, shieldInvOffset)
    writeShort(data, 0x1196a8, shieldInvOffset)
    writeShort(data, 0x1196d0, helmetInvOffset)
    writeShort(data, 0x1196e4, helmetInvOffset)
    writeShort(data, 0x11970c, armorInvOffset)
    writeShort(data, 0x119720, armorInvOffset)
    writeShort(data, 0x119750, cloakInvOffset)
    writeShort(data, 0x119764, cloakInvOffset)
    writeShort(data, 0x1197b0, otherInvOffset)
    writeShort(data, 0x1197c4, otherInvOffset)
  }
  // Randomize equipment locations.
  if (options.randomizeEquipmentLocations) {
    // Get shop only equipment.
    const shopOnly = enabledEquipment.filter(function(item) {
      return ('shopAddress' in item) && !('tileAddresses' in item)
    }).reduce(typeReduce, [])
    // Get tile only equipment.
    const tileOnly = enabledEquipment.filter(function(item) {
      return !('shopAddress' in item) && ('tileAddresses' in item)
    }).reduce(typeReduce, [])
    // Get shop and tile equipment.
    const shopAndTile = enabledEquipment.filter(function(item) {
      return ('shopAddress' in item) && ('tileAddresses' in item)
    }).reduce(typeReduce, [])
    // Shuffle equipment addresses.
    const shuffledEquipment = shuffled(enabledEquipment)
    const shuffledTileAddresses = shuffledEquipment.filter(function(item) {
      return 'tileAddresses' in item
    }).map(function(item) {
      return {
        type: item.type,
        tileAddresses: item.tileAddresses,
      }
    }).reduce(typeReduce, [])
    const shuffledShopAddresses = shuffledEquipment.filter(function(item) {
      return 'shopAddress' in item
    }).map(function(item) {
      return {
        type: item.type,
        shopAddress: item.shopAddress,
      }
    }).reduce(typeReduce, [])
    // Assign shuffled equipment ids.
    eachType(shopOnly, function(item) {
      item.shopAddress = shuffledShopAddresses[item.type].pop().shopAddress
    })
    eachType(tileOnly, function(item) {
      item.tileAddresses = shuffledTileAddresses[item.type].pop().tileAddresses
    })
    eachType(shopAndTile, function(item) {
      item.shopAddress = shuffledShopAddresses[item.type].pop().shopAddress
      item.tileAddresses = shuffledTileAddresses[item.type].pop().tileAddresses
    })
    // Write shop equipment to ROM.
    flattened(shopOnly, shopAndTile).forEach(writeShopAddress(data))
    // Write tiles equipment to ROM.
    flattened(tileOnly, shopAndTile).forEach(writeTileAddresses(data))
  }
}
