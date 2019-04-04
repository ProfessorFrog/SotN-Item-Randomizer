const TYPE_WEAPON1 = 0
const TYPE_WEAPON2 = 1
const TYPE_SHIELD = 2
const TYPE_HELMET = 3
const TYPE_ARMOR = 4
const TYPE_CLOAK = 5
const TYPE_OTHER = 6

const ZONE_ARE = 0 // Colosseum
const ZONE_CAT = 1 // Catacombs
const ZONE_CHI = 2 // Abandoned Mine
const ZONE_DAI = 3 // Royal Chapel
const ZONE_LIB = 4 // Long Library
const ZONE_NO0 = 5 // Marble Gallery
const ZONE_NO1 = 6 // Outer Wall
const ZONE_NO2 = 7 // Olrox's Quarters
const ZONE_NO3 = 8 // Castle Entrance
const ZONE_NO4 = 9 // Underground Caverns
const ZONE_NP3 = 10// Castle Entrance (After entering Alchemy Laboratory)
const ZONE_NP4 = 11 // Underground Caverns (After Scylla fight)
const ZONE_NZ0 = 12 // Alchemy Laboratory
const ZONE_NZ1 = 13 // Clock Tower
const ZONE_TOP = 14 // Castle Keep
const ZONE_RARE = 15 // Reverse Colosseum
const ZONE_RCAT = 16 // Floating Catacombs
const ZONE_RCHI = 17 // Reverse Mine
const ZONE_RDAI = 18 // Anti Chapel
const ZONE_RLIB = 19 // Forbidden Library
const ZONE_RNO0 = 20 // Black Marble Gallery
const ZONE_RNO1 = 21 // Reverse Outer Wall
const ZONE_RNO2 = 22 // Death Wing's Lair
const ZONE_RNO3 = 23 // Reverse Entrance
const ZONE_RNO4 = 24 // Reverse Caverns
const ZONE_RNZ0 = 25 // Necromancy Laboratory
const ZONE_RNZ1 = 26 // Reverse Clock Tower
const ZONE_RTOP = 27 // Reverse Castle Keep

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
const equipment = [{
  name: 'Shield Rod',
  type: TYPE_WEAPON1,
  id: 4,
  tiles: [{
    zone: ZONE_ARE,
    address: 0x43c3132,
  }],
}, {
  name: 'Leather Shield',
  type: TYPE_SHIELD,
  id: 5,
  tiles: [{
    zone: ZONE_NZ0,
    address: 0x54b22a8,
  }],
  shopAddress: 0x47a3166,
}, {
  name: 'Knight Shield',
  type: TYPE_SHIELD,
  id: 6,
  tiles: [{
    zone: ZONE_ARE,
    address: 0x43c3138,
  }],
}, {
  name: 'Iron Shield',
  type: TYPE_SHIELD,
  id: 7,
  shopAddress: 0x47a316e,
}, {
  name: 'AxeLord Shield',
  type: TYPE_SHIELD,
  id: 8,
}, {
  name: 'Herald Shield',
  type: TYPE_SHIELD,
  id: 9,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324ae,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73b2,
  }],
}, {
  name: 'Dark Shield',
  type: TYPE_SHIELD,
  id: 10,
}, {
  name: 'Goddess Shield',
  type: TYPE_SHIELD,
  id: 11,
  tiles: [{
    zone: ZONE_RNZ0,
    address: 0x5903076,
  }],
}, {
  name: 'Shaman Shield',
  type: TYPE_SHIELD,
  id: 12,
  tiles: [{
    zone: ZONE_NZ1,
    address: 0x5573844,
  }],
}, {
  name: 'Medusa Shield',
  type: TYPE_SHIELD,
  id: 13,
}, {
  name: 'Skull Shield',
  type: TYPE_SHIELD,
  id: 14,
}, {
  name: 'Fire Shield',
  type: TYPE_SHIELD,
  id: 15,
}, {
  name: 'Alucard Shield',
  type: TYPE_SHIELD,
  id: 16,
  tiles: [{
    zone: ZONE_RNO4,
    address: 0x526c0e8,
  }],
}, {
  name: 'Sword of Dawn',
  type: TYPE_WEAPON2,
  id: 17,
  tiles: [{
    zone: ZONE_RTOP,
    address: 0x57e0160,
  }],
}, {
  name: 'Basilard',
  type: TYPE_WEAPON1,
  id: 18,
  tiles: [{
    zone: ZONE_NZ0,
    address: 0x54b22aa,
  }],
}, {
  name: 'Short Sword',
  type: TYPE_WEAPON1,
  id: 19,
}, {
  name: 'Combat Knife',
  type: TYPE_WEAPON1,
  id: 20,
  tiles: [{
    zone: ZONE_CHI,
    address: 0x45e9606,
  }],
}, {
  name: 'Nunchaku',
  type: TYPE_WEAPON2,
  id: 21,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324e8,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73ec,
  }],
}, {
  name: 'Were Bane',
  type: TYPE_WEAPON1,
  id: 22,
}, {
  name: 'Rapier',
  type: TYPE_WEAPON1,
  id: 23,
}, {
  name: 'Red Rust',
  type: TYPE_WEAPON2,
  id: 26,
}, {
  name: 'Takemitsu',
  type: TYPE_WEAPON2,
  id: 27,
  tiles: [{
    zone: ZONE_LIB,
    address: 0x47a3912,
  }],
}, {
  name: 'Shotel',
  type: TYPE_WEAPON1,
  id: 28,
  tiles: [{
    zone: ZONE_RNO1,
    address: 0x505016e,
  }],
}, {
  name: 'Tyrfing',
  type: TYPE_WEAPON1,
  id: 83,
  tiles: [{
    zone: ZONE_TOP,
    address: 0x560f5fe,
  }],
}, {
  name: 'Namakura',
  type: TYPE_WEAPON2,
  id: 84,
}, {
  name: 'Knuckle Duster',
  type: TYPE_WEAPON1,
  id: 85,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324ce,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73d2,
  }],
}, {
  name: 'Gladius',
  type: TYPE_WEAPON1,
  id: 86,
  tiles: [{
    zone: ZONE_NO1,
    address: 0x49d367c,
  }],
}, {
  name: 'Scimitar',
  type: TYPE_WEAPON1,
  id: 87,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324c6,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73ca,
  }],
}, {
  name: 'Cutlass',
  type: TYPE_WEAPON1,
  id: 88,
  tiles: [{
    zone: ZONE_DAI,
    address: 0x4676f14,
  }],
}, {
  name: 'Saber',
  type: TYPE_WEAPON1,
  id: 89,
  shopAddress: 0x47a312e,
}, {
  name: 'Falchion',
  type: TYPE_WEAPON1,
  id: 90,
  tiles: [{
    zone: ZONE_TOP,
    address: 0x560f610,
  }],
}, {
  name: 'Broadsword',
  type: TYPE_WEAPON1,
  id: 91,
  tiles: [{
    zone: ZONE_NO2,
    address: 0x4aa155c,
  }],
}, {
  name: 'Bekatowa',
  type: TYPE_WEAPON1,
  id: 92,
  tiles: [{
    zone: ZONE_NZ1,
    address: 0x5573842,
  }],
}, {
  name: 'Damascus Sword',
  type: TYPE_WEAPON1,
  id: 93,
  shopAddress: 0x47a313e,
}, {
  name: 'Hunter Sword',
  type: TYPE_WEAPON1,
  id: 94,
}, {
  name: 'Estoc',
  type: TYPE_WEAPON2,
  id: 95,
  tiles: [{
    zone: ZONE_NO2,
    address: 0x4aa1698,
  }],
}, {
  name: 'Bastard Sword',
  type: TYPE_WEAPON1,
  id: 96,
  tiles: [{
    zone: ZONE_RTOP,
    address: 0x57e0168,
  }],
}, {
  name: 'Jewel Knuckles',
  type: TYPE_WEAPON1,
  id: 97,
  tiles: [{
    zone: ZONE_NO1,
    address: 0x49d3674,
  }],
}, {
  name: 'Claymore',
  type: TYPE_WEAPON2,
  id: 98,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324ba,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73be,
  }],
}, {
  name: 'Talwar',
  type: TYPE_WEAPON1,
  id: 99,
  tiles: [{
    zone: ZONE_RDAI,
    address: 0x4e322ce,
  }],
}, {
  name: 'Katana',
  id: 100,
  type: TYPE_WEAPON2,
  tiles: [{
    zone: ZONE_RNZ0,
    address: 0x590307a,
  }],
}, {
  name: 'Flamberge',
  type: TYPE_WEAPON2,
  id: 101,
}, {
  name: 'Iron Fist',
  type: TYPE_WEAPON1,
  id: 102,
}, {
  name: 'Zwei Hander',
  type: TYPE_WEAPON2,
  id: 103,
}, {
  name: 'Sword of Hador',
  type: TYPE_WEAPON1,
  id: 104,
  tiles: [{
    zone: ZONE_RNO2,
    address: 0x50f87ba,
  }],
}, {
  name: 'Luminus',
  type: TYPE_WEAPON1,
  id: 105,
  tiles: [{
    zone: ZONE_RNZ1,
    address: 0x59bc0d6,
  }],
}, {
  name: 'Harper',
  type: TYPE_WEAPON1,
  id: 106,
  shopAddress: 0x47a315e,
}, {
  name: 'Obsidian Sword',
  type: TYPE_WEAPON2,
  id: 107,
}, {
  name: 'Gram',
  type: TYPE_WEAPON1,
  id: 108,
  tiles: [{
    zone: ZONE_RARE,
    address: 0x575155a,
  }],
}, {
  name: 'Jewel Sword',
  type: TYPE_WEAPON1,
  id: 109,
  tiles: [{
    zone: ZONE_NO3,
    address: 0x4b68616,
  }, {
    zone: ZONE_NP3,
    address: 0x53f5f92,
  }],
}, {
  name: 'Mormegil',
  type: TYPE_WEAPON1,
  id: 110,
  tiles: [{
    zone: ZONE_CAT,
    address: 0x44912ea,
  }],
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
  tiles: [{
    zone: ZONE_CAT,
    address: 0x44912e6,
  }],
  shopAddress: 0x47a314e,
}, {
  name: 'Stone Sword',
  type: TYPE_WEAPON1,
  id: 114,
}, {
  name: 'Holy Sword',
  type: TYPE_WEAPON1,
  id: 115,
  tiles: [{
    zone: ZONE_ARE,
    address: 0x43c313e,
  }],
}, {
  name: 'Terminus Est',
  type: TYPE_WEAPON1,
  id: 116,
}, {
  name: 'Marsil',
  type: TYPE_WEAPON1,
  id: 117,
}, {
  name: 'Dark Blade',
  type: TYPE_WEAPON1,
  id: 118,
  tiles: [{
    zone: ZONE_RARE,
    address: 0x526c116,
  }],
}, {
  name: 'Heaven Sword',
  type: TYPE_WEAPON1,
  id: 119,
}, {
  name: 'Fist of Tulkas',
  type: TYPE_WEAPON1,
  id: 120,
}, {
  name: 'Gurthang',
  type: TYPE_WEAPON1,
  id: 121,
}, {
  name: 'Mourneblade',
  type: TYPE_WEAPON1,
  id: 122,
}, {
  name: 'Alucard Sword',
  type: TYPE_WEAPON1,
  id: 123,
  tiles: [{
    zone: ZONE_RCHI,
    address: 0x4da5138,
  }],
}, {
  name: 'Mablung Sword',
  type: TYPE_WEAPON1,
  id: 124,
}, {
  name: 'Badelaire',
  type: TYPE_WEAPON1,
  id: 125,
  tiles: [{
    zone: ZONE_RLIB,
    address: 0x4ee2f1e,
  }],
}, {
  name: 'Mace',
  type: TYPE_WEAPON1,
  id: 128,
  shopAddress: 0x47a3136,
}, {
  name: 'Morning Star',
  type: TYPE_WEAPON1,
  id: 129,
  tiles: [{
    zone: ZONE_DAI,
    address: 0x4676efa,
  }],
}, {
  name: 'Holy Rod',
  type: TYPE_WEAPON1,
  id: 130,
  tiles: [{
    zone: ZONE_LIB,
    address: 0x47a390c,
  }],
}, {
  name: 'Star Flail',
  type: TYPE_WEAPON1,
  id: 131,
  tiles: [{
    zone: ZONE_NZ1,
    address: 0x557383a,
  }],
}, {
  name: 'Moon Rod',
  type: TYPE_WEAPON1,
  id: 132,
  tiles: [{
    zone: ZONE_RNZ1,
    address: 0x59bc0e6,
  }],
}, {
  name: 'Chakram',
  type: TYPE_WEAPON1,
  id: 133,
}, {
  name: 'Holbein Dagger',
  type: TYPE_WEAPON1,
  id: 136,
}, {
  name: 'Blue Knuckles',
  type: TYPE_WEAPON1,
  id: 137,
}, {
  name: 'Osafune Katana',
  type: TYPE_WEAPON2,
  id: 139,
  tiles: [{
    zone: ZONE_RNO4,
    address: 0x526c11c,
  }],
}, {
  name: 'Masamune',
  type: TYPE_WEAPON2,
  id: 140,
}, {
  name: 'Muramasa',
  type: TYPE_WEAPON2,
  id: 141,
}, {
  name: 'Runesword',
  type: TYPE_WEAPON1,
  id: 143,
}, {
  name: 'Vorpal Blade',
  type: TYPE_WEAPON1,
  id: 163,
}, {
  name: 'Crissaegrim',
  type: TYPE_WEAPON1,
  id: 164,
}, {
  name: 'Yusutsuna',
  type: TYPE_WEAPON2,
  id: 165,
}, {
  name: 'Alucart Shield',
  type: TYPE_SHIELD,
  id: 167,
  tiles: [{
    zone: ZONE_NO0,
    address: 0x48fad9a,
  }],
}, {
  name: 'Alucart Sword',
  type: TYPE_WEAPON1,
  id: 168,
  tiles: [{
    zone: ZONE_NO0,
    address: 0x48fada6,
  }],
}, {
  name: 'Cloth Tunic',
  type: TYPE_ARMOR,
  id: 170,
}, {
  name: 'Hide cuirass',
  type: TYPE_ARMOR,
  id: 171,
  tiles: [{
    zone: ZONE_NZ0,
    address: 0x54b2298,
  }],
}, {
  name: 'Bronze Cuirass',
  type: TYPE_ARMOR,
  id: 172,
  tiles: [{
    zone: ZONE_LIB,
    address: 0x47a3910,
  }],
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
  tiles: [{
    zone: ZONE_DAI,
    address: 0x4676f0c,
  }],
}, {
  name: 'Gold Plate',
  type: TYPE_ARMOR,
  id: 176,
  tiles: [{
    zone: ZONE_NZ1,
    address: 0x557383c,
  }],
}, {
  name: 'Platinum Mail',
  type: TYPE_ARMOR,
  id: 177,
  tiles: [{
    zone: ZONE_TOP,
    address: 0x560f60e,
  }],
}, {
  name: 'Diamond Plate',
  type: TYPE_ARMOR,
  id: 178,
  shopAddress: 0x47a31a6,
}, {
  name: 'Fire Mail',
  type: TYPE_ARMOR,
  id: 179,
  tiles: [{
    zone: ZONE_TOP,
    address: 0x560f5fc,
  }],
}, {
  name: 'Lightning Mail',
  type: TYPE_ARMOR,
  id: 180,
  tiles: [{
    zone: ZONE_RTOP,
    address: 0x57e018e,
  }],
}, {
  name: 'Ice Mail',
  type: TYPE_ARMOR,
  id: 181,
  tiles: [{
    zone: ZONE_NZ1,
    address: 0x5573846,
  }],
}, {
  name: 'Mirror Cuirass',
  type: TYPE_ARMOR,
  id: 182,
  tiles: [{
    zone: ZONE_NO1,
    address: 0x49d3676,
  }],
}, {
  name: 'Alucard Mail',
  type: TYPE_ARMOR,
  id: 184,
  tiles: [{
    zone: ZONE_RNO2,
    address: 0x50f87c6,
  }],
}, {
  name: 'Dark Armor',
  type: TYPE_ARMOR,
  id: 185,
}, {
  name: 'Healing Mail',
  type: TYPE_ARMOR,
  id: 186,
  tiles: [{
    zone: ZONE_NZ1,
    address: 0x5573840,
  }],
}, {
  name: 'Holy Mail',
  type: TYPE_ARMOR,
  id: 187,
  tiles: [{
    zone: ZONE_NO3,
    address: 0x4b6860e,
  }, {
    zone: ZONE_NP3,
    address: 0x53f5f8a,
  }],
}, {
  name: 'Walk Armor',
  type: TYPE_ARMOR,
  id: 188,
  tiles: [{
    zone: ZONE_CAT,
    address: 0x44912e8,
  }],
}, {
  name: 'Brilliant Mail',
  type: TYPE_ARMOR,
  id: 189,
}, {
  name: 'Mojo Mail',
  type: TYPE_ARMOR,
  id: 190,
}, {
  name: 'Fury Plate',
  type: TYPE_ARMOR,
  id: 191,
  tiles: [{
    zone: ZONE_RARE,
    address: 0x5751554,
  }],
}, {
  name: 'Dracula Tunic',
  type: TYPE_ARMOR,
  id: 192,
}, {
  name: 'God\'s Garb',
  type: TYPE_ARMOR,
  id: 193,
}, {
  name: 'Axe Lord Armor',
  type: TYPE_ARMOR,
  id: 194,
}, {
  name: 'Sunglasses',
  type: TYPE_HELMET,
  id: 196,
  tiles: [{
    zone: ZONE_NZ0,
    address: 0x54b22a4,
  }],
}, {
  name: 'Ballroom Mask',
  type: TYPE_HELMET,
  id: 197,
  tiles: [{
    zone: ZONE_CAT,
    address: 0x44912f2,
  }],
}, {
  name: 'Bandana',
  type: TYPE_HELMET,
  id: 198,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324b6,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73ba,
  }],
}, {
  name: 'Felt Hat',
  type: TYPE_HELMET,
  id: 199,
}, {
  name: 'Velvet Hat',
  type: TYPE_HELMET,
  id: 200,
  shopAddress: 0x47a3176,
}, {
  name: 'Goggles',
  type: TYPE_HELMET,
  id: 201,
  tiles: [{
    zone: ZONE_DAI,
    address: 0x4676f0a,
  }],
}, {
  name: 'Leather Hat',
  type: TYPE_HELMET,
  id: 202,
  shopAddress: 0x47a317e,
}, {
  name: 'Steel Helm',
  type: TYPE_HELMET,
  id: 204,
  tiles: [{
    zone: ZONE_NZ1,
    address: 0x557383e,
  }],
}, {
  name: 'Stone Mask',
  type: TYPE_HELMET,
  id: 205,
  tiles: [{
    zone: ZONE_LIB,
    address: 0x47a390a,
  }],
}, {
  name: 'Circlet',
  type: TYPE_HELMET,
  id: 206,
  shopAddress: 0x47a3186,
}, {
  name: 'Gold Circlet',
  type: TYPE_HELMET,
  id: 207,
}, {
  name: 'Ruby Circlet',
  type: TYPE_HELMET,
  id: 208,
  tiles: [{
    zone: ZONE_RCAT,
    address: 0x4cfb702,
  }],
}, {
  name: 'Opal Circlet',
  type: TYPE_HELMET,
  id: 209,
}, {
  name: 'Topaz Circlet',
  type: TYPE_HELMET,
  id: 210,
  tiles: [{
    zone: ZONE_LIB,
    address: 0x47a391c,
  }],
}, {
  name: 'Beryl Circlet',
  type: TYPE_HELMET,
  id: 211,
  tiles: [{
    zone: ZONE_RNO3,
    address: 0x51ad7a4,
  }],
}, {
  name: 'Cat-eye Circlet',
  type: TYPE_HELMET,
  id: 212,
  tiles: [{
    zone: ZONE_CAT,
    address: 0x44912e4,
  }],
}, {
  name: 'Coral Circlet',
  type: TYPE_HELMET,
  id: 213,
}, {
  name: 'Dragon Helm',
  type: TYPE_HELMET,
  id: 214,
  tiles: [{
    zone: ZONE_RNZ1,
    address: 0x59bc0da,
  }],
}, {
  name: 'Silver Crown',
  type: TYPE_HELMET,
  id: 215,
  shopAddress: 0x47a318e,
}, {
  name: 'Wizard Hat',
  type: TYPE_HELMET,
  id: 216,
}, {
  name: 'Cloth Cape',
  type: TYPE_CLOAK,
  id: 218,
  tiles: [{
    zone: ZONE_NZ0,
    address: 0x54b229c,
  }],
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
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324a4,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73a8,
  }],
}, {
  name: 'Royal Cloak',
  type: TYPE_CLOAK,
  id: 222,
  tiles: [{
    zone: ZONE_RTOP,
    address: 0x57e0176,
  }],
}, {
  name: 'Blood Cloak',
  type: TYPE_CLOAK,
  id: 223,
  tiles: [{
    zone: ZONE_RARE,
    address: 0x43c3136,
  }],
}, {
  name: 'Joseph\'s Cloak',
  type: TYPE_CLOAK,
  id: 224,
  shopAddress: 0x47a31be,
}, {
  name: 'Twilight Cloak',
  type: TYPE_CLOAK,
  id: 225,
  tiles: [{
    zone: ZONE_RDAI,
    address: 0x4e322d4,
  }],
}, {
  name: 'Moonstone',
  type: TYPE_OTHER,
  id: 227,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324c4,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73c8,
  }],
}, {
  name: 'Sunstone',
  type: TYPE_OTHER,
  id: 228,
  tiles: [{
    zone: ZONE_RNZ1,
    address: 0x59bc0e0,
  }],
}, {
  name: 'Bloodstone',
  type: TYPE_OTHER,
  id: 229,
  tiles: [{
    zone: ZONE_CAT,
    address: 0x44912f4,
  }],
}, {
  name: 'Staurolite',
  type: TYPE_OTHER,
  id: 230,
  tiles: [{
    zone: ZONE_RLIB,
    address: 0x4ee2f20,
  }],
}, {
  name: 'Ring of Pales',
  type: TYPE_OTHER,
  id: 231,
  shopAddress: 0x47a31ce,
}, {
  name: 'Zircon',
  type: TYPE_OTHER,
  id: 232,
  disableLocations: true,
}, {
  name: 'Aquamarine',
  type: TYPE_OTHER,
  id: 233,
  disableLocations: true,
}, {
  name: 'Turquoise',
  type: TYPE_OTHER,
  id: 234,
  disableLocations: true,
}, {
  name: 'Onyx',
  type: TYPE_OTHER,
  id: 235,
  disableLocations: true,
}, {
  name: 'Garnet',
  type: TYPE_OTHER,
  id: 236,
  disableLocations: true,
}, {
  name: 'Opal',
  type: TYPE_OTHER,
  id: 237,
  disableLocations: true,
}, {
  name: 'Diamond',
  type: TYPE_OTHER,
  id: 238,
  disableLocations: true,
}, {
  name: 'Lapis Lazuli',
  type: TYPE_OTHER,
  id: 239,
  disableLocations: true,
}, {
  name: 'Ring of Ares',
  type: TYPE_OTHER,
  id: 240,
  tiles: [{
    zone: ZONE_CHI,
    address: 0x45e9604,
  }],
}, {
  name: 'Ring of Varda',
  type: TYPE_OTHER,
  id: 243,
}, {
  name: 'Ring of Arcana',
  type: TYPE_OTHER,
  id: 244,
  tiles: [{
    zone: ZONE_RNZ0,
    address: 0x5903080,
  }],
}, {
  name: 'Mystic Pendant',
  type: TYPE_OTHER,
  id: 245,
  tiles: [{
    zone: ZONE_DAI,
    address: 0x4676f00,
  }],
}, {
  name: 'Heart Broach',
  type: TYPE_OTHER,
  id: 246,
}, {
  name: 'Necklace of J',
  type: TYPE_OTHER,
  id: 247,
  tiles: [{
    zone: ZONE_RCAT,
    address: 0x4cfb6fa,
  }],
}, {
  name: 'Gauntlet',
  type: TYPE_OTHER,
  id: 248,
  shopAddress: 0x47a31d6,
}, {
  name: 'Ankh of Life',
  type: TYPE_OTHER,
  id: 249,
  tiles: [{
    zone: ZONE_DAI,
    address: 0x4676ef8,
  }],
}, {
  name: 'Ring of Feanor',
  type: TYPE_OTHER,
  id: 250,
}, {
  name: 'Medal',
  type: TYPE_OTHER,
  id: 251,
  shopAddress: 0x47a31c6,
}, {
  name: 'Talisman',
  type: TYPE_OTHER,
  id: 252,
  tiles: [{
    zone: ZONE_RNO3,
    address: 0x51ad7aa,
  }],
}, {
  name: 'Duplicator',
  type: TYPE_OTHER,
  id: 253,
  shopAddress: 0x47a31de,
}, {
  name: 'King\'s Stone',
  type: TYPE_OTHER,
  id: 254,
}, {
  name: 'Covenant Stone',
  type: TYPE_OTHER,
  id: 255,
}, {
  name: 'Nauglamir',
  type: TYPE_OTHER,
  id: 256,
}, {
  name: 'Secret Boots',
  type: TYPE_OTHER,
  id: 257,
  tiles: [{
    zone: ZONE_NO4,
    address: 0x4c324de,
  }, {
    zone: ZONE_NP4,
    address: 0x61a73e2,
  }],
}, {
  name: 'Alucart Mail',
  type: TYPE_ARMOR,
  id: 258,
  tiles: [{
    zone: ZONE_NO0,
    address: 0x48fada4,
  }],
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

function tilesFilter(item) {
  return 'tiles' in item
}

function shopFilter(item) {
  return 'shopAddress' in item
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

function writeTiles(data) {
  return function(item) {
    item.tiles.forEach(function(tile) {
      writeShort(data, tile.address, item.id + tileIdOffset)
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
  // Randomize starting equipment.
  if (options.startingEquipment) {
    // Select random starting equipment.
    const sword = randItem(equipment.filter(typeFilter([TYPE_WEAPON1])))
    const shield = randItem(equipment.filter(shieldFilter))
    const helmet = randItem(equipment.filter(helmetFilter))
    const armor = randItem(equipment.filter(armorFilter))
    const cloak = randItem(equipment.filter(cloakFilter))
    const other = randItem(equipment.filter(otherFilter))
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
  if (options.equipmentLocations) {
    // Filter out items that are disabled from randomization.
    const enabledEquipment = equipment.filter(function(item) {
      return !item.disableLocations
    }).map(function(item) {
      return Object.assign({}, item)
    })
    // Get shop equipment by type.
    const shopTypes = enabledEquipment.filter(shopFilter).map(function(item) {
      return {
        type: item.type,
        shopAddress: item.shopAddress,
      }
    }).reduce(typeReduce, [])
    // Shuffle equipment by type.
    const shuffledTypes = shuffled(enabledEquipment).map(function(item) {
      return {
        name: item.name,
        type: item.type,
        id: item.id,
      }
    }).reduce(typeReduce, [])
    // Assign shop addresses.
    shopTypes.forEach(function(items) {
      if (Array.isArray(items)) {
        items.forEach(function(to) {
          const from = shuffledTypes[to.type].pop()
          to.name = from.name
          to.id = from.id
        })
      }
    })
    // Shuffle in shop equimpent to equipment list.
    const shuffledEquipment = shuffled(flattened(shuffledTypes, shopTypes))
    // Assign tiles.
    enabledEquipment.filter(tilesFilter).map(function(item) {
      return item.tiles
    }).forEach(function(tiles, index) {
      shuffledEquipment[index].tiles = tiles
    })
    // Write shop equipment to ROM.
    shuffledEquipment.filter(shopFilter).forEach(writeShopAddress(data))
    // Write tiles equipment to ROM.
    shuffledEquipment.filter(tilesFilter).forEach(writeTiles(data))
  }
}

try {
  module.exports = randomizeEquipment
} catch (e) {}
