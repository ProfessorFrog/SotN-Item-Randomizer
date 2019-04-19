(function() {
  let isNode

  try {
    isNode = !!module
  } catch (e) {}

  const TYPE = {
    WEAPON1: 1,
    WEAPON2: 2,
    SHIELD: 3,
    HELMET: 4,
    ARMOR: 5,
    CLOAK: 6,
    ACCESSORY: 7,
    USABLE: 8,
    POWERUP: 9,
    HEART: 10,
    GOLD: 11,
    SUBWEAPON: 12,
  }

  const ZONE = {
    ST0:  0, // Final Stage: Bloodlines
    ARE:  1,  // Colosseum
    CAT:  2,  // Catacombs
    CHI:  3,  // Abandoned Pit the Catacomb
    DAI:  4,  // Royal Chapel
    LIB:  5,  // Long Library
    NO0:  6,  // Marble Gallery
    NO1:  7,  // Outer Wall
    NO2:  8,  // Olrox's Quarters
    NO3:  9,  // Castle Entrance
    NP3:  10, // Castle Entrance (after visiting Alchemy Laboratory)
    NO4:  11, // Underground Caverns
    NZ0:  12, // Alchemy Laboratory
    NZ1:  13, // Clock Tower
    TOP:  14, // Castle Keep
    RARE: 15, // Reverse Colosseum
    RCAT: 16, // Floating Catacombs
    RCHI: 17, // Cave
    RDAI: 18, // Anti-Chapel
    RLIB: 19, // Forbidden Library
    RNO0: 20, // Black Marble Gallery
    RNO1: 21, // Reverse Outer Wall
    RNO2: 22, // Death Wing's Lair
    RNO3: 23, // Reverse Entrance
    RNO4: 24, // Reverse Caverns
    RNZ0: 25, // Necromancy Laboratory
    RNZ1: 26, // Reverse Clock Tower
    RTOP: 27, // Reverse Castle Keep
  }

  // Offsets in the bin of each zone file.
  const offsets = [
    0x0533efc8, // ZONE.ST0
    0x043c2018, // ZONE.ARE
    0x0448f938, // ZONE.CAT
    0x045e8ae8, // ZONE.CHI
    0x04675f08, // ZONE.DAI
    0x047a1ae8, // ZONE.LIB
    0x048f9a38, // ZONE.NO0
    0x049d18b8, // ZONE.NO1
    0x04aa0438, // ZONE.NO2
    0x04b665e8, // ZONE.NO3
    0x053f4708, // ZONE.NP3
    0x04c307e8, // ZONE.NO4
    0x054b0c88, // ZONE.NZ0
    0x055724b8, // ZONE.NZ1
    0x0560e7b8, // ZONE.TOP
    0x057509e8, // ZONE.RARE
    0x04cfa0b8, // ZONE.RCAT
    0x04aa0438, // ZONE.RCHI
    0x04e31458, // ZONE.RDAI
    0x04ee2218, // ZONE.RLIB
    0x04f84a28, // ZONE.RNO0
    0x0504f558, // ZONE.RNO1
    0x050f7948, // ZONE.RNO2
    0x051ac758, // ZONE.RNO3
    0x0526a868, // ZONE.RNO4
    0x05902278, // ZONE.RNZ0
    0x059bb0d8, // ZONE.RNZ1
    0x057df998, // ZONE.RTOP
  ]

  const items = [{
    name: 'Heart',
    type: TYPE.HEART,
    id: 0,
  }, {
    name: 'Big heart',
    type: TYPE.HEART,
    id: 1,
  }, {
    name: '$1',
    type: TYPE.GOLD,
    id: 2,
  }, {
    name: '$25',
    type: TYPE.GOLD,
    id: 3,
  }, {
    name: '$50',
    type: TYPE.GOLD,
    id: 4,
  }, {
    name: '$100',
    type: TYPE.GOLD,
    id: 5,
  }, {
    name: '$250',
    type: TYPE.GOLD,
    id: 6,
  }, {
    name: '$400',
    type: TYPE.GOLD,
    id: 7,
  }, {
    name: '$700',
    type: TYPE.GOLD,
    id: 8,
  }, {
    name: '$1000',
    type: TYPE.GOLD,
    id: 9,
  }, {
    name: '$2000',
    type: TYPE.GOLD,
    id: 10,
  }, {
    name: '$5000',
    type: TYPE.GOLD,
    id: 11,
  }, {
    name: 'Dagger',
    type: TYPE.SUBWEAPON,
    id: 14,
  }, {
    name: 'Axe',
    type: TYPE.SUBWEAPON,
    id: 15,
  }, {
    name: 'Cross',
    type: TYPE.SUBWEAPON,
    id: 16,
  }, {
    name: 'Holy Water',
    type: TYPE.SUBWEAPON,
    id: 17,
  }, {
    name: 'Stopwatch',
    type: TYPE.SUBWEAPON,
    id: 18,
  }, {
    name: 'Bible',
    type: TYPE.SUBWEAPON,
    id: 19,
  }, {
    name: 'Rebound Stone',
    type: TYPE.SUBWEAPON,
    id: 20,
  }, {
    name: 'Vibhuti',
    type: TYPE.SUBWEAPON,
    id: 21,
  }, {
    name: 'Agunea',
    type: TYPE.SUBWEAPON,
    id: 22,
  }, {
    name: 'Heart Vessel',
    type: TYPE.POWERUP,
    id: 12,
    blacklist: [
      0x49d3674, // Jewel Knuckles
      0x49d3676, // Mirror Cuirass
    ],
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa1556 ],
    }, {
      zone: ZONE.NO3,
      addresses: [ 0x04b68604, 0x053f5f80 ],
    }, {
      zone: ZONE.NO3,
      addresses: [ 0x04b68612, 0x053f5f8e ],
    }, {
      zone: ZONE.NZ0,
      addresses: [ 0x054b229a ],
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f616 ],
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f618 ],
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f61c ],
    }, {
      zone: ZONE.NZ1,
      addresses: [ 0x0557384a ],
    }, {
      zone: ZONE.NO1,
      addresses: [ 0x049d3678 ],
    }, {
      zone: ZONE.NO0,
      addresses: [ 0x048fad9c ],
    }, {
      zone: ZONE.NO0,
      addresses: [ 0x048fadaa ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324a0, 0x061a73a4 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324da, 0x061a73de ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x044912f8 ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x044912f0 ],
    }, {
      zone: ZONE.ARE,
      addresses: [ 0x043c3130 ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e016c ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0170 ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0174 ],
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0e4 ],
    }, {
      zone: ZONE.RNO1,
      addresses: [ 0x0505016c ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85aec ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0f6 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c106 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6f4 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6fe ],
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051ad79e ],
    }, {
      zone: ZONE.RNZ0,
      addresses: [ 0x05903072 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322be ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322d6 ],
    }, {
      zone: ZONE.RARE,
      addresses: [ 0x0575155e ],
    }, {
      zone: ZONE.RARE,
      addresses: [ 0x05751562 ],
    }],
  }, {
    name: 'Life Vessel',
    type: TYPE.POWERUP,
    id: 23,
    blacklist: [
      0x49d3674, // Jewel Knuckles
      0x49d3676, // Mirror Cuirass
    ],
    tiles: [{
      zone: ZONE.NO3,
      addresses: [ 0x04b68606, 0x053f5f82 ],
    }, {
      zone: ZONE.NO3,
      addresses: [ 0x04b68610, 0x053f5f8c ],
    }, {
      zone: ZONE.NO3,
      addresses: [ 0x04b68614, 0x053f5f90 ],
    }, {
      zone: ZONE.NZ0,
      addresses: [ 0x054b229e ],
    }, {
      zone: ZONE.DAI,
      addresses: [ 0x04676f10 ],
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f612 ],
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f614 ],
    }, {
      zone: ZONE.NZ1,
      addresses: [ 0x05573848 ],
    }, {
      zone: ZONE.NO1,
      addresses: [ 0x049d367e ],
    }, {
      zone: ZONE.NO0,
      addresses: [ 0x048fad98 ],
    }, {
      zone: ZONE.NO0,
      addresses: [ 0x048fada8 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324a2, 0x061a73a6 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324aa, 0x061a73ae ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324ac, 0x061a73b0 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324d0, 0x061a73d4 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324d8, 0x061a73dc ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x044912f6 ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e016a ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e016e ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0172 ],
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0e2 ],
    }, {
      zone: ZONE.RNO1,
      addresses: [ 0x05050172 ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85aea ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0f4 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c100 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6f2 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb700 ],
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051ad7a8 ],
    }, {
      zone: ZONE.RNZ0,
      addresses: [ 0x05903074 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322d8 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322cc ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87c8 ],
    }, {
      zone: ZONE.RARE,
      addresses: [ 0x05751560 ],
    }],
  }, {
    name: 'Monster Vial 1',
    type: TYPE.USABLE,
    id: 1,
  }, {
    name: 'Monster Vial 2',
    type: TYPE.USABLE,
    id: 2,
  }, {
    name: 'Monster Vial 3',
    type: TYPE.USABLE,
    id: 3,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x04491306 ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x04491308 ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x0449130a ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x0449130c ],
    }],
  }, {
    name: 'Shield Rod',
    type: TYPE.WEAPON1,
    id: 4,
    tiles: [{
      zone: ZONE.ARE,
      addresses: [ 0x043c3132 ],
    }],
  }, {
    name: 'Leather Shield',
    type: TYPE.SHIELD,
    id: 5,
    tiles: [{
      zone: ZONE.NZ0,
      addresses: [ 0x054b22a8 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a3166 ],
      shop: true,
    }],
  }, {
    name: 'Knight Shield',
    type: TYPE.SHIELD,
    id: 6,
    tiles: [{
      zone: ZONE.ARE,
      addresses: [ 0x043c3138 ],
    }],
  }, {
    name: 'Iron Shield',
    type: TYPE.SHIELD,
    id: 7,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a316e ],
      shop: true,
    }],
  }, {
    name: 'AxeLord Shield',
    type: TYPE.SHIELD,
    id: 8,
  }, {
    name: 'Herald Shield',
    type: TYPE.SHIELD,
    id: 9,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324ae, 0x061a73b2 ],
    }],
  }, {
    name: 'Dark Shield',
    type: TYPE.SHIELD,
    id: 10,
  }, {
    name: 'Goddess Shield',
    type: TYPE.SHIELD,
    id: 11,
    tiles: [{
      zone: ZONE.RNZ0,
      addresses: [ 0x05903076 ],
    }],
  }, {
    name: 'Shaman Shield',
    type: TYPE.SHIELD,
    id: 12,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x05573844 ],
    }],
  }, {
    name: 'Medusa Shield',
    type: TYPE.SHIELD,
    id: 13,
  }, {
    name: 'Skull Shield',
    type: TYPE.SHIELD,
    id: 14,
  }, {
    name: 'Fire Shield',
    type: TYPE.SHIELD,
    id: 15,
  }, {
    name: 'Alucard Shield',
    type: TYPE.SHIELD,
    id: 16,
    tiles: [{
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0e8 ],
    }],
  }, {
    name: 'Sword of Dawn',
    type: TYPE.WEAPON2,
    id: 17,
    tiles: [{
      zone: ZONE.RTOP,
      addresses: [ 0x057e0160 ],
    }],
  }, {
    name: 'Basilard',
    type: TYPE.WEAPON1,
    id: 18,
    tiles: [{
      zone: ZONE.NZ0,
      addresses: [ 0x054b22aa ],
    }],
  }, {
    name: 'Short Sword',
    type: TYPE.WEAPON1,
    id: 19,
  }, {
    name: 'Combat Knife',
    type: TYPE.WEAPON1,
    id: 20,
    tiles: [{
      zone: ZONE.CHI,
      addresses: [ 0x045e9606 ],
    }],
  }, {
    name: 'Nunchaku',
    type: TYPE.WEAPON2,
    id: 21,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324e8, 0x061a73ec ],
    }],
  }, {
    name: 'Were Bane',
    type: TYPE.WEAPON1,
    id: 22,
  }, {
    name: 'Rapier',
    type: TYPE.WEAPON1,
    id: 23,
  }, {
    name: 'Karma Coin',
    type: TYPE.USABLE,
    id: 24,
    tiles: [{
      zone: ZONE.CHI,
      addresses: [ 0x045e95fe ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x044912fe ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x04491300 ],
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0d2 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6e8 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6ea ],
    }],
  }, {
    name: 'Magic Missile',
    type: TYPE.USABLE,
    id: 25,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f02 ],
    }, {
      zone: ZONE.NZ1,
      addresses: [ 0x05573834 ],
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0d0 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6e0 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322d2 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30d6 ],
      shop: true,
    }],
  }, {
    name: 'Red Rust',
    type: TYPE.WEAPON2,
    id: 26,
  }, {
    name: 'Takemitsu',
    type: TYPE.WEAPON2,
    id: 27,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3912 ],
    }],
  }, {
    name: 'Shotel',
    type: TYPE.WEAPON1,
    id: 28,
    tiles: [{
      zone: ZONE.RNO1,
      addresses: [ 0x0505016e ],
    }],
  }, {
    name: 'Orange',
    type: TYPE.USABLE,
    id: 29,
    food: true,
  }, {
    name: 'Apple',
    type: TYPE.USABLE,
    id: 30,
    food: true,
  }, {
    name: 'Banana',
    type: TYPE.USABLE,
    id: 31,
    food: true,
  }, {
    name: 'Grapes',
    type: TYPE.USABLE,
    id: 32,
    food: true,
  }, {
    name: 'Strawberry',
    type: TYPE.USABLE,
    id: 33,
    food: true,
  }, {
    name: 'Pineapple',
    type: TYPE.USABLE,
    id: 34,
    food: true,
  }, {
    name: 'Peanuts',
    type: TYPE.USABLE,
    id: 35,
    food: true,
    tiles: [{
      zone: ZONE.CHI,
      addresses: [ 0x045e960e ],
    }, {
      zone: ZONE.CHI,
      addresses: [ 0x045e9610 ],
    }, {
      zone: ZONE.CHI,
      addresses: [ 0x045e9612 ],
    }, {
      zone: ZONE.CHI,
      addresses: [ 0x045e9614 ],
    }],
  }, {
    name: 'Toadstool',
    type: TYPE.USABLE,
    id: 36,
    food: true,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324d4, 0x061a73d8 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324e2, 0x061a73e6 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0ec ],
    }],
  }, {
    name: 'Shiitake',
    type: TYPE.USABLE,
    id: 37,
    food: true,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324b8, 0x061a73bc ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324d6, 0x061a73da ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324e0, 0x061a73e4 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324e6, 0x061a73ea ],
    }, {
      zone: ZONE.CHI,
      addresses: [ 0x045e9608 ],
    }, {
      zone: ZONE.CHI,
      addresses: [ 0x045e960a ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0ea ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0ee ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0fa ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0fc ],
    }, {
      zone: ZONE.RCHI,
      addresses: [ 0x04da5140 ],
    }, {
      zone: ZONE.RCHI,
      addresses: [ 0x04da5142 ],
    }],
  }, {
    name: 'Cheesecake',
    type: TYPE.USABLE,
    id: 38,
    food: true,
  }, {
    name: 'Shortcake',
    type: TYPE.USABLE,
    id: 39,
    food: true,
  }, {
    name: 'Tart',
    type: TYPE.USABLE,
    id: 40,
    food: true,
  }, {
    name: 'Parfait',
    type: TYPE.USABLE,
    id: 41,
    food: true,
  }, {
    name: 'Pudding',
    type: TYPE.USABLE,
    id: 42,
    food: true,
  }, {
    name: 'Ice Cream',
    type: TYPE.USABLE,
    id: 43,
    food: true,
  }, {
    name: 'Frankfurter',
    type: TYPE.USABLE,
    id: 44,
    food: true,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f606 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a3916 ],
    }],
  }, {
    name: 'Hamburger',
    type: TYPE.USABLE,
    id: 45,
    food: true,
  }, {
    name: 'Pizza',
    type: TYPE.USABLE,
    id: 46,
    food: true,
  }, {
    name: 'Cheese',
    type: TYPE.USABLE,
    id: 47,
    food: true,
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa1560 ],
    }],
  }, {
    name: 'Ham and eggs',
    type: TYPE.USABLE,
    id: 48,
    food: true,
  }, {
    name: 'Omelette',
    type: TYPE.USABLE,
    id: 49,
    food: true,
  }, {
    name: 'Morning Set',
    type: TYPE.USABLE,
    id: 50,
    food: true,
  }, {
    name: 'Lunch A',
    type: TYPE.USABLE,
    id: 51,
    food: true,
  }, {
    name: 'Lunch B',
    type: TYPE.USABLE,
    id: 52,
    food: true,
  }, {
    name: 'Curry Rice',
    type: TYPE.USABLE,
    id: 53,
    food: true,
  }, {
    name: 'Gyros plate',
    type: TYPE.USABLE,
    id: 54,
    food: true,
  }, {
    name: 'Spaghetti',
    type: TYPE.USABLE,
    id: 55,
    food: true,
  }, {
    name: 'Grape Juice',
    type: TYPE.USABLE,
    id: 56,
    food: true,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x046c2658 ],
      despawn: true,
      byte: true,
    }],
  }, {
    name: 'Barley Tea',
    type: TYPE.USABLE,
    id: 57,
    food: true,
    tiles: [{
      zone: ZONE.CHI,
      addresses: [ 0x045e960c ],
    }],
  }, {
    name: 'Green Tea',
    type: TYPE.USABLE,
    id: 58,
    food: true,
    tiles: [{
      zone: ZONE.ARE,
      addresses: [ 0x043c313c ],
    }, {
      zone: ZONE.RCHI,
      addresses: [ 0x04da513a ],
    }],
  }, {
    name: 'Natou',
    type: TYPE.USABLE,
    id: 59,
    food: true,
  }, {
    name: 'Ramen',
    type: TYPE.USABLE,
    id: 60,
    food: true,
  }, {
    name: 'Miso Soup',
    type: TYPE.USABLE,
    id: 61,
    food: true,
  }, {
    name: 'Sushi',
    type: TYPE.USABLE,
    id: 62,
    food: true,
  }, {
    name: 'Pork Bun',
    type: TYPE.USABLE,
    id: 63,
    food: true,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x04491302 ],
    }],
  }, {
    name: 'Red Bean Bun',
    type: TYPE.USABLE,
    id: 64,
    food: true,
    tiles: [{
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6ec ],
    }],
  }, {
    name: 'Chinese Bun',
    type: TYPE.USABLE,
    id: 65,
    food: true,
  }, {
    name: 'Dim Sum Set',
    type: TYPE.USABLE,
    id: 66,
    food: true,
    tiles: [{
      zone: ZONE.RNO1,
      addresses: [ 0x0507d08c ],
      despawn: true,
      byte: true,
    }],
  }, {
    name: 'Pot roast',
    type: TYPE.USABLE,
    id: 67,
    food: true,
    tiles: [{
      zone: ZONE.NO3,
      addresses: [ 0x04ba9774, 0x05431554 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.NO1,
      addresses: [ 0x04a197d8 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.NZ1,
      addresses: [ 0x0557379c ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc34c ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051e6e4c ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f604 ],
      despawn: true,
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324ca, 0x061a73ce ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c114 ],
    }],
  }, {
    name: 'Sirloin',
    type: TYPE.USABLE,
    id: 68,
    food: true,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f600 ],
    }],
  }, {
    name: 'Turkey',
    type: TYPE.USABLE,
    id: 69,
    food: true,
    tiles: [{
      zone: ZONE.NO3,
      addresses: [ 0x04baa2b0, 0x05431f60 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f5fa ],
      despawn: true,
    }, {
      zone: ZONE.TOP,
      addresses: [ 0x0560f602 ],
    }, {
      zone: ZONE.CHI,
      addresses: [ 0x045e9602 ],
      despawn: true,
    }],
  }, {
    name: 'Meal Ticket',
    type: TYPE.USABLE,
    id: 70,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324bc, 0x061a73c0 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324be, 0x061a73c2 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324c0, 0x061a73c4 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324c2, 0x061a73c6 ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85af6 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c108 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c10a ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c10c ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c10e ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c110 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a3126 ],
      shop: true,
    }],
  }, {
    name: 'Neutron Bomb',
    type: TYPE.USABLE,
    id: 71,
    tiles: [{
      zone: ZONE.RLIB,
      addresses: [ 0x04ee2f1c ],
    }],
  }, {
    name: 'Power of Sire',
    type: TYPE.USABLE,
    id: 72,
    tiles: [{
      zone: ZONE.CHI,
      addresses: [ 0x045e95fc ],
    }, {
      zone: ZONE.RCHI,
      addresses: [ 0x04da5134 ],
    }],
  }, {
    name: 'Pentagram',
    type: TYPE.USABLE,
    id: 73,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x05573836 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324dc, 0x061a73e0 ],
    }]
  }, {
    name: 'Bat Pentagram',
    type: TYPE.USABLE,
    id: 74,
    tiles: [{
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0f2 ],
    }],
  }, {
    name: 'Shuriken',
    type: TYPE.USABLE,
    id: 75,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f04 ],
    }, {
      zone: ZONE.DAI,
      addresses: [ 0x04e322c0 ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87cc ],
    }, {
      zone: ZONE.NZ1,
      addresses: [ 0x055737a0 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc350 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30fe ],
      shop: true,
    }],
  }, {
    name: 'Cross Shuriken',
    type: TYPE.USABLE,
    id: 76,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x044912fa ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x044912fc ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a3106 ],
      shop: true,
    }],
  }, {
    name: 'Buffalo Star',
    type: TYPE.USABLE,
    id: 77,
    tiles: [{
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6e2 ],
    }, {
      zone: ZONE.RARE,
      addresses: [ 0x05751558 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a310e ],
      shop: true,
    }],
  }, {
    name: 'Flame Star',
    type: TYPE.USABLE,
    id: 78,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3116 ],
      shop: true,
    }],
  }, {
    name: 'TNT',
    type: TYPE.USABLE,
    id: 79,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f06 ],
    }, {
      zone: ZONE.DAI,
      addresses: [ 0x04e322c2 ],
    }, {
      zone: ZONE.NZ1,
      addresses: [ 0x055737a8 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc358 ],
      despawn: true,
      byte: true,
    }],
  }, {
    name: 'Bwaka Knife',
    type: TYPE.USABLE,
    id: 80,
    tiles: [{
      zone: ZONE.RDAI,
      addresses: [ 0x04e322d0 ],
    }, {
      zone: ZONE.NZ1,
      addresses: [ 0x055737a4 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc354 ],
      despawn: true,
      byte: true,
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30de ],
      shop: true,
    }],
  }, {
    name: 'Boomerang',
    type: TYPE.USABLE,
    id: 81,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f08 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322c4 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30e6 ],
      shop: true,
    }],
  }, {
    name: 'Javelin',
    type: TYPE.USABLE,
    id: 82,
    tiles: [{
      zone: ZONE.RDAI,
      addresses: [ 0x04e322c6 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30ee ],
      shop: true,
    }],
  }, {
    name: 'Tyrfing',
    type: TYPE.WEAPON1,
    id: 83,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f5fe ],
    }],
  }, {
    name: 'Namakura',
    type: TYPE.WEAPON2,
    id: 84,
  }, {
    name: 'Knuckle Duster',
    type: TYPE.WEAPON1,
    id: 85,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324ce, 0x061a73d2 ],
    }],
  }, {
    name: 'Gladius',
    type: TYPE.WEAPON1,
    id: 86,
    tiles: [{
      zone: ZONE.NO1,
      addresses: [ 0x049d367c ],
    }],
  }, {
    name: 'Scimitar',
    type: TYPE.WEAPON1,
    id: 87,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324c6, 0x061a73ca ],
    }],
  }, {
    name: 'Cutlass',
    type: TYPE.WEAPON1,
    id: 88,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f14 ],
    }],
  }, {
    name: 'Saber',
    type: TYPE.WEAPON1,
    id: 89,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a312e ],
      shop: true,
    }],
  }, {
    name: 'Falchion',
    type: TYPE.WEAPON1,
    id: 90,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f610 ],
    }],
  }, {
    name: 'Broadsword',
    type: TYPE.WEAPON1,
    id: 91,
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa155c ],
    }],
  }, {
    name: 'Bekatowa',
    type: TYPE.WEAPON1,
    id: 92,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x05573842 ],
    }],
  }, {
    name: 'Damascus Sword',
    type: TYPE.WEAPON1,
    id: 93,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a313e ],
      shop: true,
    }],
  }, {
    name: 'Hunter Sword',
    type: TYPE.WEAPON1,
    id: 94,
  }, {
    name: 'Estoc',
    type: TYPE.WEAPON2,
    id: 95,
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa1698 ],
    }],
  }, {
    name: 'Bastard Sword',
    type: TYPE.WEAPON1,
    id: 96,
    tiles: [{
      zone: ZONE.RTOP,
      addresses: [ 0x057e0168 ],
    }],
  }, {
    name: 'Jewel Knuckles',
    type: TYPE.WEAPON1,
    id: 97,
    tiles: [{
      zone: ZONE.NO1,
      addresses: [ 0x049d3674 ],
    }],
  }, {
    name: 'Claymore',
    type: TYPE.WEAPON2,
    id: 98,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324ba, 0x061a73be ],
    }],
  }, {
    name: 'Talwar',
    type: TYPE.WEAPON1,
    id: 99,
    tiles: [{
      zone: ZONE.RDAI,
      addresses: [ 0x04e322ce ],
    }],
  }, {
    name: 'Katana',
    id: 100,
    type: TYPE.WEAPON2,
    tiles: [{
      zone: ZONE.RNZ0,
      addresses: [ 0x0590307a ],
    }],
  }, {
    name: 'Flamberge',
    type: TYPE.WEAPON2,
    id: 101,
  }, {
    name: 'Iron Fist',
    type: TYPE.WEAPON1,
    id: 102,
  }, {
    name: 'Zwei Hander',
    type: TYPE.WEAPON2,
    id: 103,
  }, {
    name: 'Sword of Hador',
    type: TYPE.WEAPON1,
    id: 104,
    tiles: [{
      zone: ZONE.RNO2,
      addresses: [ 0x050f87ba ],
    }],
  }, {
    name: 'Luminus',
    type: TYPE.WEAPON1,
    id: 105,
    tiles: [{
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0d6 ],
    }],
  }, {
    name: 'Harper',
    type: TYPE.WEAPON1,
    id: 106,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a315e ],
      shop: true,
    }],
  }, {
    name: 'Obsidian Sword',
    type: TYPE.WEAPON2,
    id: 107,
  }, {
    name: 'Gram',
    type: TYPE.WEAPON1,
    id: 108,
    tiles: [{
      zone: ZONE.RARE,
      addresses: [ 0x0575155a ],
    }],
  }, {
    name: 'Jewel Sword',
    type: TYPE.WEAPON1,
    id: 109,
    tiles: [{
      zone: ZONE.NO3,
      addresses: [ 0x04b68616, 0x053f5f92 ],
    }],
  }, {
    name: 'Mormegil',
    type: TYPE.WEAPON1,
    id: 110,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x044912ea ],
    }],
  }, {
    name: 'Firebrand',
    type: TYPE.WEAPON1,
    id: 111,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3146 ],
      shop: true,
    }],
  }, {
    name: 'Thunderbrand',
    type: TYPE.WEAPON1,
    id: 112,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3156 ],
      shop: true,
    }],
  }, {
    name: 'Icebrand',
    type: TYPE.WEAPON1,
    id: 113,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x044912e6 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a314e ],
      shop: true,
    }],
  }, {
    name: 'Stone Sword',
    type: TYPE.WEAPON1,
    id: 114,
  }, {
    name: 'Holy Sword',
    type: TYPE.WEAPON1,
    id: 115,
    tiles: [{
      zone: ZONE.ARE,
      addresses: [ 0x043c313e ],
    }],
  }, {
    name: 'Terminus Est',
    type: TYPE.WEAPON1,
    id: 116,
  }, {
    name: 'Marsil',
    type: TYPE.WEAPON1,
    id: 117,
  }, {
    name: 'Dark Blade',
    type: TYPE.WEAPON1,
    id: 118,
    tiles: [{
      zone: ZONE.RARE,
      addresses: [ 0x0526c116 ],
    }],
  }, {
    name: 'Heaven Sword',
    type: TYPE.WEAPON1,
    id: 119,
  }, {
    name: 'Fist of Tulkas',
    type: TYPE.WEAPON1,
    id: 120,
  }, {
    name: 'Gurthang',
    type: TYPE.WEAPON1,
    id: 121,
  }, {
    name: 'Mourneblade',
    type: TYPE.WEAPON1,
    id: 122,
  }, {
    name: 'Alucard Sword',
    type: TYPE.WEAPON1,
    id: 123,
    tiles: [{
      zone: ZONE.RCHI,
      addresses: [ 0x04da5138 ],
    }],
  }, {
    name: 'Mablung Sword',
    type: TYPE.WEAPON1,
    id: 124,
  }, {
    name: 'Badelaire',
    type: TYPE.WEAPON1,
    id: 125,
    tiles: [{
      zone: ZONE.RLIB,
      addresses: [ 0x04ee2f1e ],
    }],
  }, {
    name: 'Mace',
    type: TYPE.WEAPON1,
    id: 128,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3136 ],
      shop: true,
    }],
  }, {
    name: 'Morning Star',
    type: TYPE.WEAPON1,
    id: 129,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676efa ],
    }],
  }, {
    name: 'Holy Rod',
    type: TYPE.WEAPON1,
    id: 130,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a390c ],
    }],
  }, {
    name: 'Star Flail',
    type: TYPE.WEAPON1,
    id: 131,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x0557383a ],
    }],
  }, {
    name: 'Moon Rod',
    type: TYPE.WEAPON1,
    id: 132,
    tiles: [{
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0e6 ],
    }],
  }, {
    name: 'Chakram',
    type: TYPE.WEAPON1,
    id: 133,
  }, {
    name: 'Fire Boomerang',
    type: TYPE.USABLE,
    id: 134,
    tiles: [{
      zone: ZONE.RNO3,
      addresses: [ 0x051ad7a6 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322b8 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30f6 ],
      shop: true,
    }],
  }, {
    name: 'Iron Ball',
    type: TYPE.USABLE,
    id: 135,
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa169a ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0162 ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85af8 ],
    }],
  }, {
    name: 'Holbein Dagger',
    type: TYPE.WEAPON1,
    id: 136,
  }, {
    name: 'Blue Knuckles',
    type: TYPE.WEAPON1,
    id: 137,
  }, {
    name: 'Dynamite',
    type: TYPE.USABLE,
    id: 138,
  }, {
    name: 'Osafune Katana',
    type: TYPE.WEAPON2,
    id: 139,
    tiles: [{
      zone: ZONE.RNO4,
      addresses: [ 0x0526c11c ],
    }],
  }, {
    name: 'Masamune',
    type: TYPE.WEAPON2,
    id: 140,
  }, {
    name: 'Muramasa',
    type: TYPE.WEAPON2,
    id: 141,
  }, {
    name: 'Heart Refresh',
    type: TYPE.USABLE,
    id: 142,
    tiles: [{
      zone: ZONE.RNO0,
      addresses: [ 0x04f85afa ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87ca ],
    }],
  }, {
    name: 'Runesword',
    type: TYPE.WEAPON1,
    id: 143,
  }, {
    name: 'Antivenom',
    type: TYPE.USABLE,
    id: 144,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a391a ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324a8, 0x061a73ac ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85ae8 ],
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051ad79a ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30be ],
      shop: true,
    }],
  }, {
    name: 'Uncurse',
    type: TYPE.USABLE,
    id: 145,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a30c6 ],
      shop: true,
    }],
  }, {
    name: 'Life Apple',
    type: TYPE.USABLE,
    id: 146,
    tiles: [{
      zone: ZONE.NO3,
      addresses: [ 0x04b68608, 0x053f5f84 ],
    }, {
      zone: ZONE.NO0,
      addresses: [ 0x048fad9e ],
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0de ],
    }, {
      zone: ZONE.RCHI,
      addresses: [ 0x04da5136 ],
    }],
  }, {
    name: 'Hammer',
    type: TYPE.USABLE,
    id: 147,
    tiles: [{
      zone: ZONE.NO0,
      addresses: [ 0x048fada0 ],
    }, {
      zone: ZONE.NO0,
      addresses: [ 0x048fadb0 ],
    }, {
      zone: ZONE.RNO1,
      addresses: [ 0x05050170 ],
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051ad798 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30ce ],
      shop: true,
    }],
  }, {
    name: 'Str. potion',
    type: TYPE.USABLE,
    id: 148,
    tiles: [{
      zone: ZONE.NO0,
      addresses: [ 0x048fadb2 ],
    }, {
      zone: ZONE.DAI,
      addresses: [ 0x04676f0e ],
    }, {
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0d4 ],
    }],
  }, {
    name: 'Luck potion',
    type: TYPE.USABLE,
    id: 149,
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa1566 ],
    }, {
      zone: ZONE.RNO1,
      addresses: [ 0x05050174 ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87c0 ],
    }],
  }, {
    name: 'Smart potion',
    type: TYPE.USABLE,
    id: 150,
    tiles: [{
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0d8 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322ca ],
    }],
  }, {
    name: 'Attack potion',
    type: TYPE.USABLE,
    id: 151,
    tiles: [{
      zone: ZONE.NO0,
      addresses: [ 0x048fadae ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6f8 ],
    }],
  }, {
    name: 'Shield Potion',
    type: TYPE.USABLE,
    id: 152,
    tiles: [{
      zone: ZONE.NO3,
      addresses: [ 0x04b6860c, 0x053f5f88 ],
    }, {
      zone: ZONE.RNO1,
      addresses: [ 0x05050176 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6f6 ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87be ],
    }],
  }, {
    name: 'Resist Fire',
    type: TYPE.USABLE,
    id: 153,
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa1564 ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0182 ],
    }, {
      zone: ZONE.RLIB,
      addresses: [ 0x04ee2f16 ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85af4 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6e6 ],
    }],
  }, {
    name: 'Resist Thunder',
    type: TYPE.USABLE,
    id: 154,
    tiles: [{
      zone: ZONE.NZ0,
      addresses: [ 0x054b22a6 ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0186 ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85af2 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6e4 ],
    }],
  }, {
    name: 'Resist Ice',
    type: TYPE.USABLE,
    id: 155,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324c8, 0x061a73cc ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0184 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x04ee2f18 ],
    }],
  }, {
    name: 'Resist Stone',
    type: TYPE.USABLE,
    id: 156,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f608 ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0188 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x04ee2f1a ],
    }],
  }, {
    name: 'Resist Holy',
    type: TYPE.USABLE,
    id: 157,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f60c ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85af0 ],
    }],
  }, {
    name: 'Resist Dark',
    type: TYPE.USABLE,
    id: 158,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f60a ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85aee ],
    }, {
      zone: ZONE.RNZ0,
      addresses: [ 0x05903082 ],
    }],
  }, {
    name: 'Potion',
    type: TYPE.USABLE,
    id: 159,
    tiles: [{
      zone: ZONE.NZ0,
      addresses: [ 0x054b22ac ],
    }, {
      zone: ZONE.DAI,
      addresses: [ 0x04676f16 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a3918 ],
    }, {
      zone: ZONE.NO0,
      addresses: [ 0x048fada2 ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85ae6 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0f8 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a309e ],
      shop: true,
    }],
  }, {
    name: 'High Potion',
    type: TYPE.USABLE,
    id: 160,
    tiles: [{
      zone: ZONE.RTOP,
      addresses: [ 0x057e018a ],
    }, {
      zone: ZONE.RNO1,
      addresses: [ 0x05050178 ],
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051ad79c ],
    }, {
      zone: ZONE.RNZ0,
      addresses: [ 0x0590307c ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87bc ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30a6 ],
      shop: true,
    }],
  }, {
    name: 'Elixir',
    type: TYPE.USABLE,
    id: 161,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324d2, 0x061a73d6 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c11a ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6ee ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30ae ],
      shop: true,
    }],
  }, {
    name: 'Manna Prism',
    type: TYPE.USABLE,
    id: 162,
    tiles: [{
      zone: ZONE.NO2,
      addresses: [ 0x04aa1562 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c118 ],
    }, {
      zone: ZONE.RNZ0,
      addresses: [ 0x05903078 ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322c8 ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87c2 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a30b6 ],
      shop: true,
    }],
  }, {
    name: 'Library Card',
    type: TYPE.USABLE,
    id: 166,
    tiles: [{
      zone: ZONE.NO0,
      addresses: [ 0x048fadac ],
    }, {
      zone: ZONE.CAT,
      addresses: [ 0x044912ec ],
    }, {
      zone: ZONE.ARE,
      addresses: [ 0x043c313a ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0190 ],
    }, {
      zone: ZONE.RLIB,
      addresses: [ 0x04ee2f14 ],
    }, {
      zone: ZONE.RNO0,
      addresses: [ 0x04f85ae4 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6f0 ],
    }, {
      zone: ZONE.LIB,
      addresses: [ 0x047a311e ],
      shop: true,
    }],
  }, {
    name: 'Vorpal Blade',
    type: TYPE.WEAPON1,
    id: 163,
  }, {
    name: 'Crissaegrim',
    type: TYPE.WEAPON1,
    id: 164,
  }, {
    name: 'Yusutsuna',
    type: TYPE.WEAPON2,
    id: 165,
  }, {
    name: 'Alucart Shield',
    type: TYPE.SHIELD,
    id: 167,
    tiles: [{
      zone: ZONE.NO0,
      addresses: [ 0x048fad9a ],
    }],
  }, {
    name: 'Alucart Sword',
    type: TYPE.WEAPON1,
    id: 168,
    tiles: [{
      zone: ZONE.NO0,
      addresses: [ 0x048fada6 ],
    }],
  }, {
    name: 'Cloth Tunic',
    type: TYPE.ARMOR,
    id: 170,
  }, {
    name: 'Hide cuirass',
    type: TYPE.ARMOR,
    id: 171,
    tiles: [{
      zone: ZONE.NZ0,
      addresses: [ 0x054b2298 ],
    }],
  }, {
    name: 'Bronze Cuirass',
    type: TYPE.ARMOR,
    id: 172,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3910 ],
    }],
  }, {
    name: 'Iron Cuirass',
    type: TYPE.ARMOR,
    id: 173,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3196 ],
      shop: true,
    }],
  }, {
    name: 'Steel Cuirass',
    type: TYPE.ARMOR,
    id: 174,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a319e ],
      shop: true,
    }],
  }, {
    name: 'Silver Plate',
    type: TYPE.ARMOR,
    id: 175,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f0c ],
    }],
  }, {
    name: 'Gold Plate',
    type: TYPE.ARMOR,
    id: 176,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x0557383c ],
    }],
  }, {
    name: 'Platinum Mail',
    type: TYPE.ARMOR,
    id: 177,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f60e ],
    }],
  }, {
    name: 'Diamond Plate',
    type: TYPE.ARMOR,
    id: 178,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31a6 ],
      shop: true,
    }],
  }, {
    name: 'Fire Mail',
    type: TYPE.ARMOR,
    id: 179,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f5fc ],
    }],
  }, {
    name: 'Lightning Mail',
    type: TYPE.ARMOR,
    id: 180,
    tiles: [{
      zone: ZONE.RTOP,
      addresses: [ 0x057e018e ],
    }],
  }, {
    name: 'Ice Mail',
    type: TYPE.ARMOR,
    id: 181,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x05573846 ],
    }],
  }, {
    name: 'Mirror Cuirass',
    type: TYPE.ARMOR,
    id: 182,
    tiles: [{
      zone: ZONE.NO1,
      addresses: [ 0x049d3676 ],
    }],
  }, {
    name: 'Alucard Mail',
    type: TYPE.ARMOR,
    id: 184,
    tiles: [{
      zone: ZONE.RNO2,
      addresses: [ 0x050f87c6 ],
    }],
  }, {
    name: 'Dark Armor',
    type: TYPE.ARMOR,
    id: 185,
  }, {
    name: 'Healing Mail',
    type: TYPE.ARMOR,
    id: 186,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x05573840 ],
    }],
  }, {
    name: 'Holy Mail',
    type: TYPE.ARMOR,
    id: 187,
    tiles: [{
      zone: ZONE.NO3,
      addresses: [ 0x04b6860e, 0x053f5f8a ],
    }],
  }, {
    name: 'Walk Armor',
    type: TYPE.ARMOR,
    id: 188,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x044912e8 ],
    }],
  }, {
    name: 'Brilliant Mail',
    type: TYPE.ARMOR,
    id: 189,
  }, {
    name: 'Mojo Mail',
    type: TYPE.ARMOR,
    id: 190,
  }, {
    name: 'Fury Plate',
    type: TYPE.ARMOR,
    id: 191,
    tiles: [{
      zone: ZONE.RARE,
      addresses: [ 0x05751554 ],
    }],
  }, {
    name: 'Dracula Tunic',
    type: TYPE.ARMOR,
    id: 192,
  }, {
    name: 'God\'s Garb',
    type: TYPE.ARMOR,
    id: 193,
  }, {
    name: 'Axe Lord Armor',
    type: TYPE.ARMOR,
    id: 194,
  }, {
    name: 'Sunglasses',
    type: TYPE.HELMET,
    id: 196,
    tiles: [{
      zone: ZONE.NZ0,
      addresses: [ 0x054b22a4 ],
    }],
  }, {
    name: 'Ballroom Mask',
    type: TYPE.HELMET,
    id: 197,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x044912f2 ],
    }],
  }, {
    name: 'Bandana',
    type: TYPE.HELMET,
    id: 198,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324b6, 0x061a73ba ],
    }],
  }, {
    name: 'Felt Hat',
    type: TYPE.HELMET,
    id: 199,
  }, {
    name: 'Velvet Hat',
    type: TYPE.HELMET,
    id: 200,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3176 ],
      shop: true,
    }],
  }, {
    name: 'Goggles',
    type: TYPE.HELMET,
    id: 201,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f0a ],
    }],
  }, {
    name: 'Leather Hat',
    type: TYPE.HELMET,
    id: 202,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a317e ],
      shop: true,
    }],
  }, {
    name: 'Steel Helm',
    type: TYPE.HELMET,
    id: 204,
    tiles: [{
      zone: ZONE.NZ1,
      addresses: [ 0x0557383e ],
    }],
  }, {
    name: 'Stone Mask',
    type: TYPE.HELMET,
    id: 205,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a390a ],
    }],
  }, {
    name: 'Circlet',
    type: TYPE.HELMET,
    id: 206,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3186 ],
      shop: true,
    }],
  }, {
    name: 'Gold Circlet',
    type: TYPE.HELMET,
    id: 207,
  }, {
    name: 'Ruby Circlet',
    type: TYPE.HELMET,
    id: 208,
    tiles: [{
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb702 ],
    }],
  }, {
    name: 'Opal Circlet',
    type: TYPE.HELMET,
    id: 209,
  }, {
    name: 'Topaz Circlet',
    type: TYPE.HELMET,
    id: 210,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a391c ],
    }],
  }, {
    name: 'Beryl Circlet',
    type: TYPE.HELMET,
    id: 211,
    tiles: [{
      zone: ZONE.RNO3,
      addresses: [ 0x051ad7a4 ],
    }],
  }, {
    name: 'Cat-eye Circlet',
    type: TYPE.HELMET,
    id: 212,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x044912e4 ],
    }],
  }, {
    name: 'Coral Circlet',
    type: TYPE.HELMET,
    id: 213,
  }, {
    name: 'Dragon Helm',
    type: TYPE.HELMET,
    id: 214,
    tiles: [{
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0da ],
    }],
  }, {
    name: 'Silver Crown',
    type: TYPE.HELMET,
    id: 215,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a318e ],
      shop: true,
    }],
  }, {
    name: 'Wizard Hat',
    type: TYPE.HELMET,
    id: 216,
  }, {
    name: 'Cloth Cape',
    type: TYPE.CLOAK,
    id: 218,
    tiles: [{
      zone: ZONE.NZ0,
      addresses: [ 0x054b229c ],
    }],
  }, {
    name: 'Reverse Cloak',
    type: TYPE.CLOAK,
    id: 219,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31ae ],
      shop: true,
    }],
  }, {
    name: 'Elven Cloak',
    type: TYPE.CLOAK,
    id: 220,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31b6 ],
      shop: true,
    }],
  }, {
    name: 'Crystal Cloak',
    type: TYPE.CLOAK,
    id: 221,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324a4, 0x061a73a8 ],
    }],
  }, {
    name: 'Royal Cloak',
    type: TYPE.CLOAK,
    id: 222,
    tiles: [{
      zone: ZONE.RTOP,
      addresses: [ 0x057e0176 ],
    }],
  }, {
    name: 'Blood Cloak',
    type: TYPE.CLOAK,
    id: 223,
    tiles: [{
      zone: ZONE.RARE,
      addresses: [ 0x043c3136 ],
    }],
  }, {
    name: 'Joseph\'s Cloak',
    type: TYPE.CLOAK,
    id: 224,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31be ],
      shop: true,
    }],
  }, {
    name: 'Twilight Cloak',
    type: TYPE.CLOAK,
    id: 225,
    tiles: [{
      zone: ZONE.RDAI,
      addresses: [ 0x04e322d4 ],
    }],
  }, {
    name: 'Moonstone',
    type: TYPE.ACCESSORY,
    id: 227,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324c4, 0x061a73c8 ],
    }],
  }, {
    name: 'Sunstone',
    type: TYPE.ACCESSORY,
    id: 228,
    tiles: [{
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0e0 ],
    }],
  }, {
    name: 'Bloodstone',
    type: TYPE.ACCESSORY,
    id: 229,
    tiles: [{
      zone: ZONE.CAT,
      addresses: [ 0x044912f4 ],
    }],
  }, {
    name: 'Staurolite',
    type: TYPE.ACCESSORY,
    id: 230,
    tiles: [{
      zone: ZONE.RLIB,
      addresses: [ 0x04ee2f20 ],
    }],
  }, {
    name: 'Ring of Pales',
    type: TYPE.ACCESSORY,
    id: 231,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31ce ],
      shop: true,
    }],
  }, {
    name: 'Zircon',
    type: TYPE.ACCESSORY,
    id: 232,
    salable: true,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f12 ],
    }, {
      zone: ZONE.NO1,
      addresses: [ 0x049d3680 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324b2, 0x061a73b6 ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e0164 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c104 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c112 ],
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051ad7a0 ],
    }, {
      zone: ZONE.DAI,
      addresses: [ 0x04e322bc ],
    }, {
      zone: ZONE.RARE,
      addresses: [ 0x05751556 ],
    }],
  }, {
    name: 'Aquamarine',
    type: TYPE.ACCESSORY,
    id: 233,
    salable: true,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676efe ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87c4 ],
    }, {
      zone: ZONE.RARE,
      addresses: [ 0x0575155c ],
    }]
  }, {
    name: 'Turquoise',
    type: TYPE.ACCESSORY,
    id: 234,
    salable: true,
    tiles: [{
      zone: ZONE.TOP,
      addresses: [ 0x0560f5f8 ],
    }, {
      zone: ZONE.RLIB,
      addresses: [ 0x04ee2f10 ],
    }, {
      zone: ZONE.RNZ0,
      addresses: [ 0x0590307e ],
    }],
  }, {
    name: 'Onyx',
    type: TYPE.ACCESSORY,
    id: 235,
    salable: true,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a3914 ],
    }, {
      zone: ZONE.NO4,
      addresses: [ 0x04c324cc, 0x061a73d0 ],
    }, {
      zone: ZONE.NO2,
      addresses: [ 0x04aa155e ],
    }],
  }, {
    name: 'Garnet',
    type: TYPE.ACCESSORY,
    id: 236,
    salable: true,
    tiles: [{
      zone: ZONE.NO1,
      addresses: [ 0x049d367a ],
    }, {
      zone: ZONE.NO2,
      addresses: [ 0x04aa169c ],
    }, {
      zone: ZONE.RTOP,
      addresses: [ 0x057e018c ],
    }, {
      zone: ZONE.RNO1,
      addresses: [ 0x0505017a ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0f0 ],
    }],
  }, {
    name: 'Opal',
    type: TYPE.ACCESSORY,
    id: 237,
    salable: true,
    tiles: [{
      zone: ZONE.RLIB,
      addresses: [ 0x04ee2f12 ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c0fe ],
    }, {
      zone: ZONE.RNO3,
      addresses: [ 0x051ad7a2 ],
    }, {
      zone: ZONE.RNO2,
      addresses: [ 0x050f87b8 ],
    }],
  }, {
    name: 'Diamond',
    type: TYPE.ACCESSORY,
    id: 238,
    salable: true,
    tiles: [{
      zone: ZONE.RNZ1,
      addresses: [ 0x059bc0dc ],
    }, {
      zone: ZONE.RNO4,
      addresses: [ 0x0526c102 ],
    }, {
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6fc ],
    }, {
      zone: ZONE.RDAI,
      addresses: [ 0x04e322ba ],
    }],
  }, {
    name: 'Lapis Lazuli',
    type: TYPE.ACCESSORY,
    id: 239,
  }, {
    name: 'Ring of Ares',
    type: TYPE.ACCESSORY,
    id: 240,
    tiles: [{
      zone: ZONE.CHI,
      addresses: [ 0x045e9604 ],
    }],
  }, {
    name: 'Ring of Varda',
    type: TYPE.ACCESSORY,
    id: 243,
  }, {
    name: 'Ring of Arcana',
    type: TYPE.ACCESSORY,
    id: 244,
    tiles: [{
      zone: ZONE.RNZ0,
      addresses: [ 0x05903080 ],
    }],
  }, {
    name: 'Mystic Pendant',
    type: TYPE.ACCESSORY,
    id: 245,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676f00 ],
    }],
  }, {
    name: 'Heart Broach',
    type: TYPE.ACCESSORY,
    id: 246,
  }, {
    name: 'Necklace of J',
    type: TYPE.ACCESSORY,
    id: 247,
    tiles: [{
      zone: ZONE.RCAT,
      addresses: [ 0x04cfb6fa ],
    }],
  }, {
    name: 'Gauntlet',
    type: TYPE.ACCESSORY,
    id: 248,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31d6 ],
      shop: true,
    }],
  }, {
    name: 'Ankh of Life',
    type: TYPE.ACCESSORY,
    id: 249,
    tiles: [{
      zone: ZONE.DAI,
      addresses: [ 0x04676ef8 ],
    }],
  }, {
    name: 'Ring of Feanor',
    type: TYPE.ACCESSORY,
    id: 250,
  }, {
    name: 'Medal',
    type: TYPE.ACCESSORY,
    id: 251,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31c6 ],
      shop: true,
    }],
  }, {
    name: 'Talisman',
    type: TYPE.ACCESSORY,
    id: 252,
    tiles: [{
      zone: ZONE.RNO3,
      addresses: [ 0x051ad7aa ],
    }],
  }, {
    name: 'Duplicator',
    type: TYPE.ACCESSORY,
    id: 253,
    tiles: [{
      zone: ZONE.LIB,
      addresses: [ 0x047a31de ],
      shop: true,
    }],
  }, {
    name: 'King\'s Stone',
    type: TYPE.ACCESSORY,
    id: 254,
  }, {
    name: 'Covenant Stone',
    type: TYPE.ACCESSORY,
    id: 255,
  }, {
    name: 'Nauglamir',
    type: TYPE.ACCESSORY,
    id: 256,
  }, {
    name: 'Secret Boots',
    type: TYPE.ACCESSORY,
    id: 257,
    tiles: [{
      zone: ZONE.NO4,
      addresses: [ 0x04c324de, 0x061a73e2 ],
    }],
  }, {
    name: 'Alucart Mail',
    type: TYPE.ARMOR,
    id: 258,
    tiles: [{
      zone: ZONE.NO0,
      addresses: [ 0x048fada4 ],
    }],
  }]

  const data = {
    TYPE: TYPE,
    ZONE: ZONE,
    offsets: offsets,
    items: items,
  }

  if (isNode) {
    module.exports = data
  } else {
    window.sotnRandoItems = Object.assign(window.sotnRandoItems || {}, {
      data: data,
    })
  }
})()
