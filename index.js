const TYPE_WEAPON1 = 1
const TYPE_WEAPON2 = 2
const TYPE_SHIELD = 3
const TYPE_HELMET = 4
const TYPE_ARMOR = 5
const TYPE_CLOAK = 6
const TYPE_ACCESSORY = 7
const TYPE_USABLE = 8
const TYPE_POWERUP = 9

const ZONE_ARE = 0   // Colosseum
const ZONE_CAT = 1   // Catacombs
const ZONE_CHI = 2   // Abandoned Pit the Catacomb
const ZONE_DAI = 3   // Royal Chapel
const ZONE_LIB = 4   // Long Library
const ZONE_NO0 = 5   // Marble Gallery
const ZONE_NO1 = 6   // Outer Wall
const ZONE_NO2 = 7   // Olrox's Quarters
const ZONE_NO3 = 8   // Castle Entrance
const ZONE_NO4 = 9   // Underground Caverns
const ZONE_NZ0 = 12  // Alchemy Laboratory
const ZONE_NZ1 = 13  // Clock Tower
const ZONE_TOP = 14  // Castle Keep
const ZONE_RARE = 15 // Reverse Colosseum
const ZONE_RCAT = 16 // Floating Catacombs
const ZONE_RCHI = 17 // Cave
const ZONE_RDAI = 18 // Anti-Chapel
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

// This is applied to item ids that are found in zone data.
const tileIdOffset = 0x80

// This is applied to helmet, armor, cloak, and other ids that are sold in the
// librarian's shop menu or are in an equipment slot.
const equipIdOffset = -0xa9

// This is applied to equipment ids to get the inventory slot it occupies.
const equipmentInvIdOffset = 0x798a

const items = [{
  name: 'Monster Vial 1',
  type: TYPE_USABLE,
  id: 1,
}, {
  name: 'Monster Vial 2',
  type: TYPE_USABLE,
  id: 2,
}, {
  name: 'Monster Vial 3',
  type: TYPE_USABLE,
  id: 3,
  tiles: [{
    zone: ZONE_CAT,
    addresses: [ 0x4491306 ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x4491308 ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x449130a ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x449130c ],
  }],
}, {
  name: 'Shield Rod',
  type: TYPE_WEAPON1,
  id: 4,
  tiles: [{
    zone: ZONE_ARE,
    addresses: [ 0x43c3132 ],
  }],
}, {
  name: 'Leather Shield',
  type: TYPE_SHIELD,
  id: 5,
  tiles: [{
    zone: ZONE_NZ0,
    addresses: [ 0x54b22a8 ],
  }],
  shopAddress: 0x47a3166,
}, {
  name: 'Knight Shield',
  type: TYPE_SHIELD,
  id: 6,
  tiles: [{
    zone: ZONE_ARE,
    addresses: [ 0x43c3138 ],
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
    addresses: [ 0x4c324ae, 0x61a73b2 ],
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
    addresses: [ 0x5903076 ],
  }],
}, {
  name: 'Shaman Shield',
  type: TYPE_SHIELD,
  id: 12,
  tiles: [{
    zone: ZONE_NZ1,
    addresses: [ 0x5573844 ],
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
    addresses: [ 0x526c0e8 ],
  }],
}, {
  name: 'Sword of Dawn',
  type: TYPE_WEAPON2,
  id: 17,
  tiles: [{
    zone: ZONE_RTOP,
    addresses: [ 0x57e0160 ],
  }],
}, {
  name: 'Basilard',
  type: TYPE_WEAPON1,
  id: 18,
  tiles: [{
    zone: ZONE_NZ0,
    addresses: [ 0x54b22aa ],
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
    addresses: [ 0x45e9606 ],
  }],
}, {
  name: 'Nunchaku',
  type: TYPE_WEAPON2,
  id: 21,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324e8, 0x61a73ec ],
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
  name: 'Karma Coin',
  type: TYPE_USABLE,
  id: 24,
  tiles: [{
    zone: ZONE_CHI,
    addresses: [ 0x45e95fe ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x44912fe ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x4491300 ],
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0d2 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6e8 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6ea ],
  }],
}, {
  name: 'Magic Missile',
  type: TYPE_USABLE,
  id: 25,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676f02 ],
  }, {
    zone: ZONE_NZ1,
    addresses: [ 0x5573834 ],
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0d0 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6e0 ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322d2 ],
  }],
  shopAddress: 0x47a30d6,
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
    addresses: [ 0x47a3912 ],
  }],
}, {
  name: 'Shotel',
  type: TYPE_WEAPON1,
  id: 28,
  tiles: [{
    zone: ZONE_RNO1,
    addresses: [ 0x505016e ],
  }],
}, {
  name: 'Orange',
  type: TYPE_USABLE,
  id: 29,
  food: true,
}, {
  name: 'Apple',
  type: TYPE_USABLE,
  id: 30,
  food: true,
}, {
  name: 'Banana',
  type: TYPE_USABLE,
  id: 31,
  food: true,
}, {
  name: 'Grapes',
  type: TYPE_USABLE,
  id: 32,
  food: true,
}, {
  name: 'Strawberry',
  type: TYPE_USABLE,
  id: 33,
  food: true,
}, {
  name: 'Pineapple',
  type: TYPE_USABLE,
  id: 34,
  food: true,
}, {
  name: 'Peanuts',
  type: TYPE_USABLE,
  id: 35,
  food: true,
  tiles: [{
    zone: ZONE_CHI,
    addresses: [ 0x45e960e ],
  }, {
    zone: ZONE_CHI,
    addresses: [ 0x45e9610 ],
  }, {
    zone: ZONE_CHI,
    addresses: [ 0x45e9612 ],
  }, {
    zone: ZONE_CHI,
    addresses: [ 0x45e9614 ],
  }],
}, {
  name: 'Toadstool',
  type: TYPE_USABLE,
  id: 36,
  food: true,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324d4, 0x61a73d8 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324e2, 0x61a73e6 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0ec ],
  }],
}, {
  name: 'Shiitake',
  type: TYPE_USABLE,
  id: 37,
  food: true,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324b8, 0x61a73bc ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324d6, 0x61a73da ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324e0, 0x61a73e4 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324e6, 0x61a73ea ],
  }, {
    zone: ZONE_CHI,
    addresses: [ 0x45e9608 ],
  }, {
    zone: ZONE_CHI,
    addresses: [ 0x45e960a ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0ea ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0ee ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0fa ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0fc ],
  }, {
    zone: ZONE_RCHI,
    addresses: [ 0x4da5140 ],
  }, {
    zone: ZONE_RCHI,
    addresses: [ 0x4da5142 ],
  }],
}, {
  name: 'Cheesecake',
  type: TYPE_USABLE,
  id: 38,
  food: true,
}, {
  name: 'Shortcake',
  type: TYPE_USABLE,
  id: 39,
  food: true,
}, {
  name: 'Tart',
  type: TYPE_USABLE,
  id: 40,
  food: true,
}, {
  name: 'Parfait',
  type: TYPE_USABLE,
  id: 41,
  food: true,
}, {
  name: 'Pudding',
  type: TYPE_USABLE,
  id: 42,
  food: true,
}, {
  name: 'Ice Cream',
  type: TYPE_USABLE,
  id: 43,
  food: true,
}, {
  name: 'Frankfurter',
  type: TYPE_USABLE,
  id: 44,
  food: true,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f606 ],
  }, {
    zone: ZONE_LIB,
    addresses: [ 0x47a3916 ],
  }],
}, {
  name: 'Hamburger',
  type: TYPE_USABLE,
  id: 45,
  food: true,
}, {
  name: 'Pizza',
  type: TYPE_USABLE,
  id: 46,
  food: true,
}, {
  name: 'Cheese',
  type: TYPE_USABLE,
  id: 47,
  food: true,
  tiles: [{
    zone: ZONE_NO2,
    addresses: [ 0x4aa1560 ],
  }],
}, {
  name: 'Ham and eggs',
  type: TYPE_USABLE,
  id: 48,
  food: true,
}, {
  name: 'Omelette',
  type: TYPE_USABLE,
  id: 49,
  food: true,
}, {
  name: 'Morning Set',
  type: TYPE_USABLE,
  id: 50,
  food: true,
}, {
  name: 'Lunch A',
  type: TYPE_USABLE,
  id: 51,
  food: true,
}, {
  name: 'Lunch B',
  type: TYPE_USABLE,
  id: 52,
  food: true,
}, {
  name: 'Curry Rice',
  type: TYPE_USABLE,
  id: 53,
  food: true,
}, {
  name: 'Gyros plate',
  type: TYPE_USABLE,
  id: 54,
  food: true,
}, {
  name: 'Spaghetti',
  type: TYPE_USABLE,
  id: 55,
  food: true,
}, {
  name: 'Grape Juice',
  type: TYPE_USABLE,
  id: 56,
  food: true,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x46c2658 ],
    despawn: true,
    byte: true,
  }],
}, {
  name: 'Barley Tea',
  type: TYPE_USABLE,
  id: 57,
  food: true,
  tiles: [{
    zone: ZONE_CHI,
    addresses: [ 0x45e960c ],
  }],
}, {
  name: 'Green Tea',
  type: TYPE_USABLE,
  id: 58,
  food: true,
  tiles: [{
    zone: ZONE_ARE,
    addresses: [ 0x43c313c ],
  }, {
    zone: ZONE_RCHI,
    addresses: [ 0x4da513a ],
  }],
}, {
  name: 'Natou',
  type: TYPE_USABLE,
  id: 59,
  food: true,
}, {
  name: 'Ramen',
  type: TYPE_USABLE,
  id: 60,
  food: true,
}, {
  name: 'Miso Soup',
  type: TYPE_USABLE,
  id: 61,
  food: true,
}, {
  name: 'Sushi',
  type: TYPE_USABLE,
  id: 62,
  food: true,
}, {
  name: 'Pork Bun',
  type: TYPE_USABLE,
  id: 63,
  food: true,
}, {
  name: 'Red Bean Bun',
  type: TYPE_USABLE,
  id: 64,
  food: true,
  tiles: [{
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6ec ],
  }],
}, {
  name: 'Chinese Bun',
  type: TYPE_USABLE,
  id: 65,
  food: true,
}, {
  name: 'Dim Sum Set',
  type: TYPE_USABLE,
  id: 66,
  food: true,
  tiles: [{
    zone: ZONE_RNO1,
    addresses: [ 0x507d08c ],
    despawn: true,
    byte: true,
  }],
}, {
  name: 'Pot roast',
  type: TYPE_USABLE,
  id: 67,
  food: true,
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4ba9774, 0x5431554 ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_NO1,
    addresses: [ 0x4a197d8 ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_NZ1,
    addresses: [ 0x557379c ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc34c ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51e6e4c ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f604 ],
    despawn: true,
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324ca, 0x61a73ce ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c114 ],
  }],
}, {
  name: 'Sirloin',
  type: TYPE_USABLE,
  id: 68,
  food: true,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f600 ],
  }],
}, {
  name: 'Turkey',
  type: TYPE_USABLE,
  id: 69,
  food: true,
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4baa2b0, 0x5431f60 ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f5fa ],
    despawn: true,
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f602 ],
  }, {
    zone: ZONE_CHI,
    addresses: [ 0x45e9602 ],
    despawn: true,
  }],
}, {
  name: 'Meal Ticket',
  type: TYPE_USABLE,
  id: 70,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324bc, 0x61a73c0 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324be, 0x61a73c2 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324c0, 0x61a73c4 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324c2, 0x61a73c6 ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85af6 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c108 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c10a ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c10c ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c10e ],
    zone: ZONE_RNO4,
    addresses: [ 0x526c110 ],
  }],
  shopAddress: 0x47a3126,
}, {
  name: 'Neutron Bomb',
  type: TYPE_USABLE,
  id: 71,
  tiles: [{
    zone: ZONE_RLIB,
    addresses: [ 0x4ee2f1c ],
  }],
}, {
  name: 'Power of Sire',
  type: TYPE_USABLE,
  id: 72,
  tiles: [{
    zone: ZONE_CHI,
    addresses: [ 0x45e95fc ],
  }, {
    zone: ZONE_RCHI,
    addresses: [ 0x4da5134 ],
  }],
}, {
  name: 'Pentagram',
  type: TYPE_USABLE,
  id: 73,
  tiles: [{
    zone: ZONE_NZ1,
    addresses: [ 0x5573836 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324dc, 0x61a73e0 ],
  }]
}, {
  name: 'Bat Pentagram',
  type: TYPE_USABLE,
  id: 74,
  tiles: [{
    zone: ZONE_RNO4,
    addresses: [ 0x526c0f2 ],
  }],
}, {
  name: 'Shuriken',
  type: TYPE_USABLE,
  id: 75,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676f04 ],
  }, {
    zone: ZONE_DAI,
    addresses: [ 0x4e322c0 ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87cc ],
  }, {
    zone: ZONE_NZ1,
    addresses: [ 0x55737a0 ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc350 ],
    despawn: true,
    byte: true,
  }],
  shopAddress: 0x47a30fe,
}, {
  name: 'Cross Shuriken',
  type: TYPE_USABLE,
  id: 76,
  tiles: [{
    zone: ZONE_CAT,
    addresses: [ 0x44912fa ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x44912fc ],
  }],
  shopAddress: 0x47a3106,
}, {
  name: 'Buffalo Star',
  type: TYPE_USABLE,
  id: 77,
  tiles: [{
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6e2 ],
  }, {
    zone: ZONE_RARE,
    addresses: [ 0x5751558 ],
  }],
  shopAddress: 0x47a310e,
}, {
  name: 'Flame Star',
  type: TYPE_USABLE,
  id: 78,
  shopAddress: 0x47a3116,
}, {
  name: 'TNT',
  type: TYPE_USABLE,
  id: 79,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676f06 ],
  }, {
    zone: ZONE_DAI,
    addresses: [ 0x4e322c2 ],
  }, {
    zone: ZONE_NZ1,
    addresses: [ 0x55737a8 ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc358 ],
    despawn: true,
    byte: true,
  }],
}, {
  name: 'Bwaka Knife',
  type: TYPE_USABLE,
  id: 80,
  tiles: [{
    zone: ZONE_RDAI,
    addresses: [ 0x4e322d0 ],
  }, {
    zone: ZONE_NZ1,
    addresses: [ 0x55737a4 ],
    despawn: true,
    byte: true,
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc354 ],
    despawn: true,
    byte: true,
  }],
  shopAddress: 0x47a30de,
}, {
  name: 'Boomerang',
  type: TYPE_USABLE,
  id: 81,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676f08 ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322c4 ],
  }],
  shopAddress: 0x47a30e6,
}, {
  name: 'Javelin',
  type: TYPE_USABLE,
  id: 82,
  tiles: [{
    zone: ZONE_RDAI,
    addresses: [ 0x4e322c6 ],
  }],
  shopAddress: 0x47a30ee,
}, {
  name: 'Tyrfing',
  type: TYPE_WEAPON1,
  id: 83,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f5fe ],
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
    addresses: [ 0x4c324ce, 0x61a73d2 ],
  }],
}, {
  name: 'Gladius',
  type: TYPE_WEAPON1,
  id: 86,
  tiles: [{
    zone: ZONE_NO1,
    addresses: [ 0x49d367c ],
  }],
}, {
  name: 'Scimitar',
  type: TYPE_WEAPON1,
  id: 87,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324c6, 0x61a73ca ],
  }],
}, {
  name: 'Cutlass',
  type: TYPE_WEAPON1,
  id: 88,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676f14 ],
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
    addresses: [ 0x560f610 ],
  }],
}, {
  name: 'Broadsword',
  type: TYPE_WEAPON1,
  id: 91,
  tiles: [{
    zone: ZONE_NO2,
    addresses: [ 0x4aa155c ],
  }],
}, {
  name: 'Bekatowa',
  type: TYPE_WEAPON1,
  id: 92,
  tiles: [{
    zone: ZONE_NZ1,
    addresses: [ 0x5573842 ],
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
    addresses: [ 0x4aa1698 ],
  }],
}, {
  name: 'Bastard Sword',
  type: TYPE_WEAPON1,
  id: 96,
  tiles: [{
    zone: ZONE_RTOP,
    addresses: [ 0x57e0168 ],
  }],
}, {
  name: 'Jewel Knuckles',
  type: TYPE_WEAPON1,
  id: 97,
  tiles: [{
    zone: ZONE_NO1,
    addresses: [ 0x49d3674 ],
  }],
}, {
  name: 'Claymore',
  type: TYPE_WEAPON2,
  id: 98,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324ba, 0x61a73be ],
  }],
}, {
  name: 'Talwar',
  type: TYPE_WEAPON1,
  id: 99,
  tiles: [{
    zone: ZONE_RDAI,
    addresses: [ 0x4e322ce ],
  }],
}, {
  name: 'Katana',
  id: 100,
  type: TYPE_WEAPON2,
  tiles: [{
    zone: ZONE_RNZ0,
    addresses: [ 0x590307a ],
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
    addresses: [ 0x50f87ba ],
  }],
}, {
  name: 'Luminus',
  type: TYPE_WEAPON1,
  id: 105,
  tiles: [{
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0d6 ],
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
    addresses: [ 0x575155a ],
  }],
}, {
  name: 'Jewel Sword',
  type: TYPE_WEAPON1,
  id: 109,
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4b68616, 0x53f5f92 ],
  }],
}, {
  name: 'Mormegil',
  type: TYPE_WEAPON1,
  id: 110,
  tiles: [{
    zone: ZONE_CAT,
    addresses: [ 0x44912ea ],
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
    addresses: [ 0x44912e6 ],
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
    addresses: [ 0x43c313e ],
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
    addresses: [ 0x526c116 ],
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
    addresses: [ 0x4da5138 ],
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
    addresses: [ 0x4ee2f1e ],
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
    addresses: [ 0x4676efa ],
  }],
}, {
  name: 'Holy Rod',
  type: TYPE_WEAPON1,
  id: 130,
  tiles: [{
    zone: ZONE_LIB,
    addresses: [ 0x47a390c ],
  }],
}, {
  name: 'Star Flail',
  type: TYPE_WEAPON1,
  id: 131,
  tiles: [{
    zone: ZONE_NZ1,
    addresses: [ 0x557383a ],
  }],
}, {
  name: 'Moon Rod',
  type: TYPE_WEAPON1,
  id: 132,
  tiles: [{
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0e6 ],
  }],
}, {
  name: 'Chakram',
  type: TYPE_WEAPON1,
  id: 133,
}, {
  name: 'Fire Boomerang',
  type: TYPE_USABLE,
  id: 134,
  tiles: [{
    zone: ZONE_RNO3,
    addresses: [ 0x51ad7a6 ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322b8 ],
  }],
  shopAddress: 0x47a30f6,
}, {
  name: 'Iron Ball',
  type: TYPE_USABLE,
  id: 135,
  tiles: [{
    zone: ZONE_NO2,
    addresses: [ 0x4aa169a ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0162 ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85af8 ],
  }],
}, {
  name: 'Holbein Dagger',
  type: TYPE_WEAPON1,
  id: 136,
}, {
  name: 'Blue Knuckles',
  type: TYPE_WEAPON1,
  id: 137,
}, {
  name: 'Dynamite',
  type: TYPE_USABLE,
  id: 138,
}, {
  name: 'Osafune Katana',
  type: TYPE_WEAPON2,
  id: 139,
  tiles: [{
    zone: ZONE_RNO4,
    addresses: [ 0x526c11c ],
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
  name: 'Heart Refresh',
  type: TYPE_USABLE,
  id: 142,
  tiles: [{
    zone: ZONE_RNO0,
    addresses: [ 0x4f85afa ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87ca ],
  }],
}, {
  name: 'Runesword',
  type: TYPE_WEAPON1,
  id: 143,
}, {
  name: 'Antivenom',
  type: TYPE_USABLE,
  id: 144,
  tiles: [{
    zone: ZONE_LIB,
    addresses: [ 0x47a391a ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324a8, 0x61a73ac ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85ae8 ],
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51ad79a ],
  }],
  shopAddress: 0x47a30be,
}, {
  name: 'Uncurse',
  type: TYPE_USABLE,
  id: 145,
  shopAddress: 0x47a30c6,
}, {
  name: 'Life Apple',
  type: TYPE_USABLE,
  id: 146,
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4b68608, 0x53f5f84 ],
  }, {
    zone: ZONE_NO0,
    addresses: [ 0x48fad9e ],
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0de ],
  }, {
    zone: ZONE_RCHI,
    addresses: [ 0x4da5136 ],
  }],
}, {
  name: 'Hammer',
  type: TYPE_USABLE,
  id: 147,
  tiles: [{
    zone: ZONE_NO0,
    addresses: [ 0x48fada0 ],
  }, {
    zone: ZONE_NO0,
    addresses: [ 0x48fadb0 ],
  }, {
    zone: ZONE_RNO1,
    addresses: [ 0x5050170 ],
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51ad798 ],
  }],
  shopAddress: 0x47a30ce,
}, {
  name: 'Str. potion',
  type: TYPE_USABLE,
  id: 148,
  tiles: [{
    zone: ZONE_NO0,
    addresses: [ 0x48fadb2 ],
  }, {
    zone: ZONE_DAI,
    addresses: [ 0x4676f0e ],
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0d4 ],
  }],
}, {
  name: 'Luck potion',
  type: TYPE_USABLE,
  id: 149,
  tiles: [{
    zone: ZONE_NO2,
    addresses: [ 0x4aa1566 ],
  }, {
    zone: ZONE_RNO1,
    addresses: [ 0x5050174 ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87c0 ],
  }],
}, {
  name: 'Smart potion',
  type: TYPE_USABLE,
  id: 150,
  tiles: [{
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0d8 ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322ca ],
  }],
}, {
  name: 'Attack potion',
  type: TYPE_USABLE,
  id: 151,
  tiles: [{
    zone: ZONE_NO0,
    addresses: [ 0x48fadae ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6f8 ],
  }],
}, {
  name: 'Shield Potion',
  type: TYPE_USABLE,
  id: 152,
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4b6860c, 0x53f5f88 ],
  }, {
    zone: ZONE_RNO1,
    addresses: [ 0x5050176 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6f6 ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87be ],
  }],
}, {
  name: 'Resist Fire',
  type: TYPE_USABLE,
  id: 153,
  tiles: [{
    zone: ZONE_NO2,
    addresses: [ 0x4aa1564 ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0182 ],
  }, {
    zone: ZONE_RLIB,
    addresses: [ 0x4ee2f16 ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85af4 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6e6 ],
  }],
}, {
  name: 'Resist Thunder',
  type: TYPE_USABLE,
  id: 154,
  tiles: [{
    zone: ZONE_NZ0,
    addresses: [ 0x54b22a6 ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0186 ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85af2 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6e4 ],
  }],
}, {
  name: 'Resist Ice',
  type: TYPE_USABLE,
  id: 155,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324c8, 0x61a73cc ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0184 ],
  }, {
    zone: ZONE_LIB,
    addresses: [ 0x4ee2f18 ],
  }],
}, {
  name: 'Resist Stone',
  type: TYPE_USABLE,
  id: 156,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f608 ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0188 ],
  }, {
    zone: ZONE_LIB,
    addresses: [ 0x4ee2f1a ],
  }],
}, {
  name: 'Resist Holy',
  type: TYPE_USABLE,
  id: 157,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f60c ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85af0 ],
  }],
}, {
  name: 'Resist Dark',
  type: TYPE_USABLE,
  id: 158,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f60a ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85aee ],
  }, {
    zone: ZONE_RNZ0,
    addresses: [ 0x5903082 ],
  }],
}, {
  name: 'Potion',
  type: TYPE_USABLE,
  id: 159,
  tiles: [{
    zone: ZONE_NZ0,
    addresses: [ 0x54b22ac ],
  }, {
    zone: ZONE_DAI,
    addresses: [ 0x4676f16 ],
  }, {
    zone: ZONE_LIB,
    addresses: [ 0x47a3918 ],
  }, {
    zone: ZONE_NO0,
    addresses: [ 0x48fada2 ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85ae6 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0f8 ],
  }],
  shopAddress: 0x47a309e,
}, {
  name: 'High Potion',
  type: TYPE_USABLE,
  id: 160,
  tiles: [{
    zone: ZONE_RTOP,
    addresses: [ 0x57e018a ],
  }, {
    zone: ZONE_RNO1,
    addresses: [ 0x5050178 ],
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51ad79c ],
  }, {
    zone: ZONE_RNZ0,
    addresses: [ 0x590307c ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87bc ],
  }],
  shopAddress: 0x47a30a6,
}, {
  name: 'Elixir',
  type: TYPE_USABLE,
  id: 161,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324d2, 0x61a73d6 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c11a ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6ee ],
  }],
  shopAddress: 0x47a30ae,
}, {
  name: 'Manna Prism',
  type: TYPE_USABLE,
  id: 162,
  tiles: [{
    zone: ZONE_NO2,
    addresses: [ 0x4aa1562 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c118 ],
  }, {
    zone: ZONE_RNZ0,
    addresses: [ 0x5903078 ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322c8 ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87c2 ],
  }],
  shopAddress: 0x47a30b6,
}, {
  name: 'Library Card',
  type: TYPE_USABLE,
  id: 166,
  tiles: [{
    zone: ZONE_NO0,
    addresses: [ 0x48fadac ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x44912ec ],
  }, {
    zone: ZONE_ARE,
    addresses: [ 0x43c313a ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0190 ],
  }, {
    zone: ZONE_RLIB,
    addresses: [ 0x4ee2f14 ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85ae4 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6f0 ],
  }],
  shopAddress: 0x47a311e,
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
    addresses: [ 0x48fad9a ],
  }],
}, {
  name: 'Alucart Sword',
  type: TYPE_WEAPON1,
  id: 168,
  tiles: [{
    zone: ZONE_NO0,
    addresses: [ 0x48fada6 ],
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
    addresses: [ 0x54b2298 ],
  }],
}, {
  name: 'Bronze Cuirass',
  type: TYPE_ARMOR,
  id: 172,
  tiles: [{
    zone: ZONE_LIB,
    addresses: [ 0x47a3910 ],
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
    addresses: [ 0x4676f0c ],
  }],
}, {
  name: 'Gold Plate',
  type: TYPE_ARMOR,
  id: 176,
  tiles: [{
    zone: ZONE_NZ1,
    addresses: [ 0x557383c ],
  }],
}, {
  name: 'Platinum Mail',
  type: TYPE_ARMOR,
  id: 177,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f60e ],
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
    addresses: [ 0x560f5fc ],
  }],
}, {
  name: 'Lightning Mail',
  type: TYPE_ARMOR,
  id: 180,
  tiles: [{
    zone: ZONE_RTOP,
    addresses: [ 0x57e018e ],
  }],
}, {
  name: 'Ice Mail',
  type: TYPE_ARMOR,
  id: 181,
  tiles: [{
    zone: ZONE_NZ1,
    addresses: [ 0x5573846 ],
  }],
}, {
  name: 'Mirror Cuirass',
  type: TYPE_ARMOR,
  id: 182,
  tiles: [{
    zone: ZONE_NO1,
    addresses: [ 0x49d3676 ],
  }],
}, {
  name: 'Alucard Mail',
  type: TYPE_ARMOR,
  id: 184,
  tiles: [{
    zone: ZONE_RNO2,
    addresses: [ 0x50f87c6 ],
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
    addresses: [ 0x5573840 ],
  }],
}, {
  name: 'Holy Mail',
  type: TYPE_ARMOR,
  id: 187,
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4b6860e, 0x53f5f8a ],
  }],
}, {
  name: 'Walk Armor',
  type: TYPE_ARMOR,
  id: 188,
  tiles: [{
    zone: ZONE_CAT,
    addresses: [ 0x44912e8 ],
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
    addresses: [ 0x5751554 ],
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
    addresses: [ 0x54b22a4 ],
  }],
}, {
  name: 'Ballroom Mask',
  type: TYPE_HELMET,
  id: 197,
  tiles: [{
    zone: ZONE_CAT,
    addresses: [ 0x44912f2 ],
  }],
}, {
  name: 'Bandana',
  type: TYPE_HELMET,
  id: 198,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324b6, 0x61a73ba ],
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
    addresses: [ 0x4676f0a ],
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
    addresses: [ 0x557383e ],
  }],
}, {
  name: 'Stone Mask',
  type: TYPE_HELMET,
  id: 205,
  tiles: [{
    zone: ZONE_LIB,
    addresses: [ 0x47a390a ],
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
    addresses: [ 0x4cfb702 ],
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
    addresses: [ 0x47a391c ],
  }],
}, {
  name: 'Beryl Circlet',
  type: TYPE_HELMET,
  id: 211,
  tiles: [{
    zone: ZONE_RNO3,
    addresses: [ 0x51ad7a4 ],
  }],
}, {
  name: 'Cat-eye Circlet',
  type: TYPE_HELMET,
  id: 212,
  tiles: [{
    zone: ZONE_CAT,
    addresses: [ 0x44912e4 ],
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
    addresses: [ 0x59bc0da ],
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
    addresses: [ 0x54b229c ],
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
    addresses: [ 0x4c324a4, 0x61a73a8 ],
  }],
}, {
  name: 'Royal Cloak',
  type: TYPE_CLOAK,
  id: 222,
  tiles: [{
    zone: ZONE_RTOP,
    addresses: [ 0x57e0176 ],
  }],
}, {
  name: 'Blood Cloak',
  type: TYPE_CLOAK,
  id: 223,
  tiles: [{
    zone: ZONE_RARE,
    addresses: [ 0x43c3136 ],
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
    addresses: [ 0x4e322d4 ],
  }],
}, {
  name: 'Moonstone',
  type: TYPE_ACCESSORY,
  id: 227,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324c4, 0x61a73c8 ],
  }],
}, {
  name: 'Sunstone',
  type: TYPE_ACCESSORY,
  id: 228,
  tiles: [{
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0e0 ],
  }],
}, {
  name: 'Bloodstone',
  type: TYPE_ACCESSORY,
  id: 229,
  tiles: [{
    zone: ZONE_CAT,
    addresses: [ 0x44912f4 ],
  }],
}, {
  name: 'Staurolite',
  type: TYPE_ACCESSORY,
  id: 230,
  tiles: [{
    zone: ZONE_RLIB,
    addresses: [ 0x4ee2f20 ],
  }],
}, {
  name: 'Ring of Pales',
  type: TYPE_ACCESSORY,
  id: 231,
  shopAddress: 0x47a31ce,
}, {
  name: 'Zircon',
  type: TYPE_ACCESSORY,
  id: 232,
  salable: true,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676f12 ],
  }, {
    zone: ZONE_NO1,
    addresses: [ 0x49d3680 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324b2, 0x61a73b6 ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0164 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c104 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c112 ],
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51ad7a0 ],
  }, {
    zone: ZONE_DAI,
    addresses: [ 0x4e322bc ],
  }, {
    zone: ZONE_RARE,
    addresses: [ 0x5751556 ],
  }],
}, {
  name: 'Aquamarine',
  type: TYPE_ACCESSORY,
  id: 233,
  salable: true,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676efe ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87c4 ],
  }, {
    zone: ZONE_RARE,
    addresses: [ 0x575155c ],
  }]
}, {
  name: 'Turquoise',
  type: TYPE_ACCESSORY,
  id: 234,
  salable: true,
  tiles: [{
    zone: ZONE_TOP,
    addresses: [ 0x560f5f8 ],
  }, {
    zone: ZONE_RLIB,
    addresses: [ 0x4ee2f10 ],
  }, {
    zone: ZONE_RNZ0,
    addresses: [ 0x590307e ],
  }],
}, {
  name: 'Onyx',
  type: TYPE_ACCESSORY,
  id: 235,
  salable: true,
  tiles: [{
    zone: ZONE_LIB,
    addresses: [ 0x47a3914 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324cc, 0x61a73d0 ],
  }, {
    zone: ZONE_NO2,
    addresses: [ 0x4aa155e ],
  }],
}, {
  name: 'Garnet',
  type: TYPE_ACCESSORY,
  id: 236,
  salable: true,
  tiles: [{
    zone: ZONE_NO1,
    addresses: [ 0x49d367a ],
  }, {
    zone: ZONE_NO2,
    addresses: [ 0x4aa169c ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e018c ],
  }, {
    zone: ZONE_RNO1,
    addresses: [ 0x505017a ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0f0 ],
  }],
}, {
  name: 'Opal',
  type: TYPE_ACCESSORY,
  id: 237,
  salable: true,
  tiles: [{
    zone: ZONE_RLIB,
    addresses: [ 0x4ee2f12 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0fe ],
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51ad7a2 ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87b8 ],
  }],
}, {
  name: 'Diamond',
  type: TYPE_ACCESSORY,
  id: 238,
  salable: true,
  tiles: [{
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0dc ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c102 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6fc ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322ba ],
  }],
}, {
  name: 'Lapis Lazuli',
  type: TYPE_ACCESSORY,
  id: 239,
}, {
  name: 'Ring of Ares',
  type: TYPE_ACCESSORY,
  id: 240,
  tiles: [{
    zone: ZONE_CHI,
    addresses: [ 0x45e9604 ],
  }],
}, {
  name: 'Ring of Varda',
  type: TYPE_ACCESSORY,
  id: 243,
}, {
  name: 'Ring of Arcana',
  type: TYPE_ACCESSORY,
  id: 244,
  tiles: [{
    zone: ZONE_RNZ0,
    addresses: [ 0x5903080 ],
  }],
}, {
  name: 'Mystic Pendant',
  type: TYPE_ACCESSORY,
  id: 245,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676f00 ],
  }],
}, {
  name: 'Heart Broach',
  type: TYPE_ACCESSORY,
  id: 246,
}, {
  name: 'Necklace of J',
  type: TYPE_ACCESSORY,
  id: 247,
  tiles: [{
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6fa ],
  }],
}, {
  name: 'Gauntlet',
  type: TYPE_ACCESSORY,
  id: 248,
  shopAddress: 0x47a31d6,
}, {
  name: 'Ankh of Life',
  type: TYPE_ACCESSORY,
  id: 249,
  tiles: [{
    zone: ZONE_DAI,
    addresses: [ 0x4676ef8 ],
  }],
}, {
  name: 'Ring of Feanor',
  type: TYPE_ACCESSORY,
  id: 250,
}, {
  name: 'Medal',
  type: TYPE_ACCESSORY,
  id: 251,
  shopAddress: 0x47a31c6,
}, {
  name: 'Talisman',
  type: TYPE_ACCESSORY,
  id: 252,
  tiles: [{
    zone: ZONE_RNO3,
    addresses: [ 0x51ad7aa ],
  }],
}, {
  name: 'Duplicator',
  type: TYPE_ACCESSORY,
  id: 253,
  shopAddress: 0x47a31de,
}, {
  name: 'King\'s Stone',
  type: TYPE_ACCESSORY,
  id: 254,
}, {
  name: 'Covenant Stone',
  type: TYPE_ACCESSORY,
  id: 255,
}, {
  name: 'Nauglamir',
  type: TYPE_ACCESSORY,
  id: 256,
}, {
  name: 'Secret Boots',
  type: TYPE_ACCESSORY,
  id: 257,
  tiles: [{
    zone: ZONE_NO4,
    addresses: [ 0x4c324de, 0x61a73e2 ],
  }],
}, {
  name: 'Alucart Mail',
  type: TYPE_ARMOR,
  id: 258,
  tiles: [{
    zone: ZONE_NO0,
    addresses: [ 0x48fada4 ],
  }],
}, {
  name: 'Heart Vessel',
  type: TYPE_POWERUP,
  id: 12,
  addressBlacklist: [
    0x49d3674, // Jewel Knuckles
    0x49d3676, // Mirror Cuirass
  ],
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4b68604, 0x53f5f80 ],
  }, {
    zone: ZONE_NO3,
    addresses: [ 0x4b68612, 0x53f5f8e ],
  }, {
    zone: ZONE_NZ0,
    addresses: [ 0x54b229a ],
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f616 ],
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f618 ],
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f61c ],
  }, {
    zone: ZONE_NZ1,
    addresses: [ 0x557384a ],
  }, {
    zone: ZONE_NO1,
    addresses: [ 0x49d3678 ],
  }, {
    zone: ZONE_NO0,
    addresses: [ 0x48fad9c ],
  }, {
    zone: ZONE_NO0,
    addresses: [ 0x48fadaa ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324a0, 0x61a73a4 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324da, 0x61a73de ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x44912f8 ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x44912f0 ],
  }, {
    zone: ZONE_ARE,
    addresses: [ 0x43c3130 ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e016c ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0170 ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0174 ],
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0e4 ],
  }, {
    zone: ZONE_RNO1,
    addresses: [ 0x505016c ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85aec ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0f6 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c106 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6f4 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6fe ],
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51ad79e ],
  }, {
    zone: ZONE_RNZ0,
    addresses: [ 0x5903072 ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322be ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322d6 ],
  }, {
    zone: ZONE_RARE,
    addresses: [ 0x575155e ],
  }, {
    zone: ZONE_RARE,
    addresses: [ 0x5751562 ],
  }],
}, {
  name: 'Life Vessel',
  type: TYPE_POWERUP,
  id: 23,
  addressBlacklist: [
    0x49d3674, // Jewel Knuckles
    0x49d3676, // Mirror Cuirass
  ],
  tiles: [{
    zone: ZONE_NO3,
    addresses: [ 0x4b68606, 0x53f5f82 ],
  }, {
    zone: ZONE_NO3,
    addresses: [ 0x4b68610, 0x53f5f8c ],
  }, {
    zone: ZONE_NO3,
    addresses: [ 0x4b68614, 0x53f5f90 ],
  }, {
    zone: ZONE_NZ0,
    addresses: [ 0x54b229e ],
  }, {
    zone: ZONE_DAI,
    addresses: [ 0x4676f10 ],
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f612 ],
  }, {
    zone: ZONE_TOP,
    addresses: [ 0x560f614 ],
  }, {
    zone: ZONE_NZ1,
    addresses: [ 0x5573848 ],
  }, {
    zone: ZONE_NO1,
    addresses: [ 0x49d367e ],
  }, {
    zone: ZONE_NO0,
    addresses: [ 0x48fad98 ],
  }, {
    zone: ZONE_NO0,
    addresses: [ 0x48fada8 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324a2, 0x61a73a6 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324aa, 0x61a73ae ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324ac, 0x61a73b0 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324d0, 0x61a73d4 ],
  }, {
    zone: ZONE_NO4,
    addresses: [ 0x4c324d8, 0x61a73dc ],
  }, {
    zone: ZONE_CAT,
    addresses: [ 0x44912f6 ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e016a ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e016e ],
  }, {
    zone: ZONE_RTOP,
    addresses: [ 0x57e0172 ],
  }, {
    zone: ZONE_RNZ1,
    addresses: [ 0x59bc0e2 ],
  }, {
    zone: ZONE_RNO1,
    addresses: [ 0x5050172 ],
  }, {
    zone: ZONE_RNO0,
    addresses: [ 0x4f85aea ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c0f4 ],
  }, {
    zone: ZONE_RNO4,
    addresses: [ 0x526c100 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb6f2 ],
  }, {
    zone: ZONE_RCAT,
    addresses: [ 0x4cfb700 ],
  }, {
    zone: ZONE_RNO3,
    addresses: [ 0x51ad7a8 ],
  }, {
    zone: ZONE_RNZ0,
    addresses: [ 0x5903074 ],
  }, {
    zone: ZONE_RDAI,
    addresses: [ 0x4e322d8 ],
  }, {
    zone: ZONE_RNO2,
    addresses: [ 0x50f87c8 ],
  }, {
    zone: ZONE_RARE,
    addresses: [ 0X5751560 ],
  }],
}]

function typeFilter(types) {
  return function(item) {
    return types.indexOf(item.type) !== -1
  }
}

const powerupFilter = typeFilter([TYPE_POWERUP])
const weaponFilter = typeFilter([TYPE_WEAPON1, TYPE_WEAPON2])
const shieldFilter = typeFilter([TYPE_SHIELD])
const helmetFilter = typeFilter([TYPE_HELMET])
const armorFilter = typeFilter([TYPE_ARMOR])
const cloakFilter = typeFilter([TYPE_CLOAK])
const accessoryFilter = typeFilter([TYPE_ACCESSORY])
const equipmentFilter = typeFilter([
  TYPE_WEAPON1,
  TYPE_WEAPON2,
  TYPE_SHIELD,
  TYPE_HELMET,
  TYPE_ARMOR,
  TYPE_CLOAK,
  TYPE_ACCESSORY,
])

function usableFilter(item) {
  return typeFilter([TYPE_USABLE])(item) && !item.food
}

function foodFilter(item) {
  return item.food
}

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

function blacklisted(tile, blacklist) {
  if (blacklist) {
    for (let i = 0; i < blacklist.length; i++) {
      if (tile.addresses.indexOf(blacklist[i]) !== -1) {
        return true
      }
    }
  }
}

function takeNext(list, filter) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (filter(item)) {
      list.splice(i, 1)
      return item
    }
  }
}

function takeTile(tiles, blacklist) {
  return takeNext(tiles, function(tile) {
    return (!blacklisted(tile, blacklist))
  })
}

function takePermaTile(tiles, blacklist) {
  return takeNext(tiles, function(tile) {
    return (!tile.despawn && !blacklisted(tile, blacklist))
  })
}

function pushTile(item, tile) {
  if (!('tiles' in item)) {
    item.tiles = []
  }
  item.tiles.push(tile)
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

function tileId(item) {
  if (item.type === TYPE_POWERUP) {
    return item.id
  }
  return item.id + tileIdOffset
}

function writeTiles(data) {
  return function(item) {
    item.tiles.forEach(function(tile) {
      tile.addresses.forEach(function(address) {
        if (tile.byte) {
          data[address] = item.id
        } else {
          writeShort(data, address, tileId(item))
        }
      })
    })
  }
}

function getShopValue(item) {
  // Apply offset for some item types.
  let offset = 0
  switch (item.type) {
  case TYPE_HELMET:
  case TYPE_ARMOR:
  case TYPE_CLOAK:
  case TYPE_ACCESSORY:
    offset = equipIdOffset
    break
  }
  return item.id + offset
}

function writeShopAddress(data) {
  return function(item) {
    // Patch rom.
    writeShort(data, item.shopAddress, getShopValue(item))
  }
}

function randomizeItems(data, options) {
  // Run a sanity check.
  if (options.checkVanilla) {
    const mismatches = []
    items.forEach(function(item) {
      if (item.tiles) {
        item.tiles.forEach(function(tile) {
          tile.addresses.forEach(function(address) {
            let found
            if (tile.byte) {
              found = (data[address] === item.id)
            } else {
              const id = tileId(item)
              found = (data[address] === (id & 0xff))
                && (data[address + 1] === (id >>> 8))
            }
            if (!found) {
              mismatches.push({
                name: item.name,
                id: item.id,
                zone: tile.zone,
                tileAddress: '0x' + address.toString(16),
              })
            }
          })
        })
      }
      if (item.shopAddress) {
        if (data[item.shopAddress] !== getShopValue(item)) {
          mismatches.push({
            name: item.name,
            id: item.id,
            shopAddress: '0x' + tile.shopAddress.toString(16),
          })
        }
      }
    })
    if (mismatches.length) {
      if (options.verbose) {
        console.error('item mismatches:')
        mismatches.forEach(function(item) {
          console.error(item)
        })
      }
    }
    if (options.verbose) {
      console.log('item data is vanilla')
    }
    return
  }
  // Randomize starting equipment.
  if (options.startingEquipment) {
    // Select random starting equipment.
    const sword = randItem(items.filter(typeFilter([TYPE_WEAPON1])))
    const shield = randItem(items.filter(shieldFilter))
    const helmet = randItem(items.filter(helmetFilter))
    const armor = randItem(items.filter(armorFilter))
    const cloak = randItem(items.filter(cloakFilter))
    const accessory = randItem(items.filter(accessoryFilter))
    // Their values when equipped.
    const swordEquipVal = sword.id
    const shieldEquipVal = shield.id
    const helmetEquipVal = helmet.id + equipIdOffset
    const armorEquipVal = armor.id + equipIdOffset
    const cloakEquipVal = cloak.id + equipIdOffset
    const accessoryEquipVal = accessory.id + equipIdOffset
    // Their inventory locations.
    const swordInvOffset = sword.id + equipmentInvIdOffset
    const shieldInvOffset = shield.id + equipmentInvIdOffset
    const helmetInvOffset = helmet.id + equipmentInvIdOffset
    const armorInvOffset = armor.id + equipmentInvIdOffset
    const cloakInvOffset = cloak.id + equipmentInvIdOffset
    const accessoryInvOffset = accessory.id + equipmentInvIdOffset
    // Equip the items.
    writeShort(data, equipBaseAddress +  0, swordEquipVal)
    writeShort(data, equipBaseAddress + 12, shieldEquipVal)
    writeShort(data, equipBaseAddress + 24, helmetEquipVal)
    writeShort(data, equipBaseAddress + 36, armorEquipVal)
    writeShort(data, equipBaseAddress + 48, cloakEquipVal)
    writeShort(data, equipBaseAddress + 60, accessoryEquipVal)
    // Death removes these values if equipped.
    data[0x1195f8] = swordEquipVal
    data[0x119658] = shieldEquipVal
    data[0x1196b8] = helmetEquipVal
    data[0x1196f4] = armorEquipVal
    data[0x119730] = cloakEquipVal
    data[0x119774] = accessoryEquipVal
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
    writeShort(data, 0x1197b0, accessoryInvOffset)
    writeShort(data, 0x1197c4, accessoryInvOffset)
  }
  // Randomize item locations.
  if (options.itemLocations) {
    // Clone item list.
    const enabledItems = items.map(function(item) {
      const clone = Object.assign({}, item)
      if ('tiles' in clone) {
        clone.tiles = clone.tiles.slice()
      }
      return clone
    })
    // Shuffle equipment by type.
    const shuffledTypes = shuffled(enabledItems).map(function(item) {
      return {
        name: item.name,
        type: item.type,
        id: item.id,
        food: item.food,
      }
    }).reduce(typeReduce, [])
    // Get shop items by type.
    const shopTypes = enabledItems.filter(shopFilter).map(function(item) {
      return {
        type: item.type,
        shopAddress: item.shopAddress,
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
            if (from.food) {
              continue
            }
            // Selling salable items could result in infinite gold.
            if (from.salable) {
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
    // Tally up tile types.
    const tileItems = items.filter(tilesFilter)
    const tileTypes = []
    tileItems.forEach(function(item) {
      for (let i = 0; i < item.tiles.length; i++) {
        tileTypes.push({
          type: item.type,
          food: item.food,
        })
      }
    })
    const typeCount = {
      equipment: tileTypes.filter(equipmentFilter).length,
      powerup: tileTypes.filter(powerupFilter).length,
      usable: tileTypes.filter(usableFilter).length,
      food: tileTypes.filter(foodFilter).length,
    }
    // Get all tiles.
    const shuffledTiles = shuffled(flattened(tileItems.map(function(item) {
      return item.tiles
    })))
    // Delete tile information from shuffled item list.
    shuffledItems.forEach(function(item) {
      delete item.tiles
    })
    // Place tiles with the same type frequency as vanilla.
    const equipment = shuffledItems.filter(equipmentFilter)
    const powerup = shuffledItems.filter(powerupFilter)
    const usable = shuffledItems.filter(usableFilter)
    const food = shuffledItems.filter(foodFilter)
    // Equipment gets at most one non-despawn tile.
    while (typeCount.equipment--) {
      const item = equipment.pop()
      pushTile(item, takePermaTile(shuffledTiles, item.addressBlacklist))
    }
    // Powerups distribution can be random, but only in non-despawn tiles.
    while (typeCount.powerup--) {
      const item = randItem(powerup)
      pushTile(item, takePermaTile(shuffledTiles, item.addressBlacklist))
    }
    // Usable items can occupy multiple tiles.
    while (typeCount.usable--) {
      const item = randItem(usable)
      pushTile(item, takeTile(shuffledTiles, item.addressBlacklist))
    }
    // Food items can occupy multiple tiles.
    while (typeCount.food--) {
      const item = randItem(food)
      pushTile(item, takeTile(shuffledTiles, item.addressBlacklist))
    }
    // Write shop items to ROM.
    shuffledItems.filter(shopFilter).forEach(writeShopAddress(data))
    // Write tiles items to ROM.
    shuffledItems.filter(tilesFilter).forEach(writeTiles(data))
  }
}

try {
  module.exports = randomizeItems
} catch (e) {}
