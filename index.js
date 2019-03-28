const oneHandedWeapons = [
  4,  // Shield Rod
  18, // Basilard
  19, // Short Sword
  20, // Combat Knife
  22, // Were Bane
  23, // Rapier
  28, // Shotel
  83, // Tyrfing
  85, // Knuckle Duster
  86, // Gladius
  87, // Scimitar
  88, // Cutlass
  89, // Saber
  90, // Falchion
  91, // Broadsword
  92, // Bekatowa
  93, // Damascus Sword
  94, // Hunter Sword
  96, // Bastard Sword
  97, // Jewel Knuckles
  99, // Talwar
  102, // Iron Fist
  104, // Sword of Hador
  105, // Luminus
  106, // Harper
  108, // Gram
  109, // Jewel Sword
  110, // Mormegil
  111, // Firebrand
  112, // Thunderbrand
  113, // Icebrand
  114, // Stone Sword
  115, // Holy Sword
  116, // Terminus Est
  117, // Marsil
  118, // Dark Blade
  119, // Heaven Sword
  120, // Fist of Tulkas
  121, // Gurthang
  122, // Mourneblade
  123, // Alucard Sword
  124, // Mablung Sword
  125, // Badelaire
  126, // Sword Familiar
  137, // Blue Knuckles
  128, // Mace
  129, // Morning Star
  130, // Holy Rod
  131, // Star Flail
  132, // Moon Rod
  133, // Chakram
  136, // Holbein Dagger
  143, // Runesword
  163, // Vorpal Blade
  164, // Crissaegrim
  168, // Alucart Sword
]

const twoHandedWeapons = [
  17, // Sword of Dawn
  21, // Nunchaku
  26, // Red Rust
  27, // Takemitsu
  84, // Namakura
  95, // Estoc
  98, // Claymore
  100, // Katana
  101, // Flamberge
  103, // Zwei Hander
  107, // Obsidian Sword
  139, // Osafune Katana
  140, // Masamune
  141, // Muramasa
  165, // Yusutsuna
]

const shields = [
  5, // Leather Shield
  6, // Knight Shield
  7, // Iron Shield
  8, // AxeLord Shield
  9, // Herald Shield
  10, // Dark Shield
  11, // Goddess Shield
  12, // Shaman Shield
  13, // Medusa Shield
  14, // Skull Shield
  15, // Fire Shield
  16, // Alucard Shield
  167, // Alucart Shield
]

const helmets = [
  196, // Sunglasses
  197, // Ballroom Mask
  198, // Bandanna
  199, // Felt Hat
  200, // Velvet Hat
  201, // Googles
  202, // Leather Hat
  203, // Holy Glasses
  204, // Steel Helm
  205, // Stone Mask
  206, // Circlet
  207, // Gold Circlet
  208, // Ruby Circlet
  209, // Opal Circlet
  210, // Topaz Circlet
  211, // Beryl Circlet
  212, // Cat-eye Circlet
  213, // Coral Circlet
  214, // Dragon Helm
  215, // Silver Crown
  216, // Wizard Hat
]

const armors = [
  170, // Cloth Tunic
  171, // Hide Cuirass
  172, // Bronze Cuirass
  173, // Iron Cuirass
  174, // Steel Cuirass
  175, // Silver Plate
  176, // Gold Plate
  177, // Platinum Mail
  178, // Diamond Plate
  179, // Fire Mail
  180, // Lightning Mail
  181, // Ice Mail
  182, // Mirror Cuirass
  183, // Spike Breaker
  184, // Alucard Mail
  185, // Dark Armor
  186, // Healing Mail
  187, // Holy Mail
  188, // Walk Armor
  189, // Brilliant Mail
  190, // Mojo Mail
  191, // Fury Plate
  192, // Dracula Tunic
  193, // God's Garb
  194, // Axe Lord Armor
  258, // Alucart Mail
]

const cloaks = [
  218, // Cloth Cape
  219, // Reverse Cloak
  220, // Elven Cloak
  221, // Crystal Cloak
  222, // Royal Cloak
  223, // Blood Cloak
  224, // Joseph's Cloak
  225, // Twilight Cloak
]

const accessories = [
  227, // Moonstone
  228, // Sunstone
  229, // Bloodstone
  230, // Staurolite
  231, // Ring of Pales
  232, // Zircon
  233, // Aquamarine
  234, // Turquoise
  235, // Onyx
  236, // Garnet
  237, // Opal
  238, // Diamond
  239, // Lapis Lazuli
  240, // Ring of Ares
  241, // Gold Ring
  242, // Silver Ring
  243, // Ring of Varda
  244, // Ring of Arcana
  245, // Mystic Pendant
  246, // Heart Broach
  247, // Necklace of J
  248, // Gauntlet
  249, // Ankh of Life
  250, // Ring of Feanor
  251, // Medal
  252, // Talisman
  253, // Duplicator
  254, // King's Stone
  255, // Covenant Stone
  256, // Nauglamir
  257, // Secret Boots
]

const equipmentAddresses = {
  rightHand: 0x801001a8 + 3,
  leftHand: 0x801001b4 + 3,
  helmet: 0x801001c0 + 3,
  armor: 0x801001cc + 3,
  cloak: 0x801001d8 + 3,
  accessory: 0x801001e4 + 3,
}

function randItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function randomizeEquipment(data) {
  data[equipmentAddresses.rightHand] = randItem(oneHandedWeapons)
  data[equipmentAddresses.leftHand] = randItem(shields)
  data[equipmentAddresses.helmet] = randItem(helmets)
  data[equipmentAddresses.armor] = randItem(armors)
  data[equipmentAddresses.cloak] = randItem(cloaks)
  data[equipmentAddresses.accessory] = randItem(accessories)
}
