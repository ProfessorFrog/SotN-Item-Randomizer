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

// Currently unused
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

const equipBaseAddress = 0x11a0d0

function randItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function randomizeEquipment(data) {
  // Random item ids
  const swordId = randItem(oneHandedWeapons)
  const shieldId = randItem(shields)
  const helmetId = randItem(helmets)
  const armorId = randItem(armors)
  const cloakId = randItem(cloaks)
  const accessoryId = randItem(accessories)
  // Their values when equipped
  const swordEquipVal = swordId
  const shieldEquipVal = shieldId
  const helmetEquipVal = 27 + helmetId - helmets[0]
  const armorEquipVal = 1 + armorId - armors[0]
  const cloakEquipVal = 49 + cloakId - cloaks[0]
  const accessoryEquipVal = 58 + accessoryId - accessories[0]
  // Their inventory locations
  const swordInvOffset = swordId + 0x798a
  const shieldInvOffset = shieldId + 0x798a
  const helmetInvOffset = helmetId + 0x798a
  const armorInvOffset = armorId + 0x798a
  const cloakInvOffset = cloakId + 0x798a
  const accessoryInvOffset = accessoryId + 0x798a
  // Equip the items
  data[equipBaseAddress +  0] = swordEquipVal
  data[equipBaseAddress + 12] = shieldEquipVal
  data[equipBaseAddress + 24] = helmetEquipVal
  data[equipBaseAddress + 36] = armorEquipVal
  data[equipBaseAddress + 48] = cloakEquipVal
  data[equipBaseAddress + 60] = accessoryEquipVal
  // Death removes these values if equipped
  data[0x1195f8] = swordEquipVal
  data[0x119658] = shieldEquipVal
  data[0x1196b8] = helmetEquipVal
  data[0x1196f4] = armorEquipVal
  data[0x119730] = cloakEquipVal
  data[0x119774] = accessoryEquipVal
  // Death decrements these inventory values if not equipeed
  data[0x119634 + 0] = swordInvOffset & 0xff
  data[0x119634 + 1] = swordInvOffset >>> 8
  data[0x119648 + 0] = swordInvOffset & 0xff
  data[0x119648 + 1] = swordInvOffset >>> 8
  data[0x119694 + 0] = shieldInvOffset & 0xff
  data[0x119694 + 1] = shieldInvOffset >>> 8
  data[0x1196a8 + 0] = shieldInvOffset & 0xff
  data[0x1196a8 + 1] = shieldInvOffset >>> 8
  data[0x1196d0 + 0] = helmetInvOffset & 0xff
  data[0x1196d0 + 1] = helmetInvOffset >>> 8
  data[0x1196e4 + 0] = helmetInvOffset & 0xff
  data[0x1196e4 + 1] = helmetInvOffset >>> 8
  data[0x11970c + 0] = armorInvOffset & 0xff
  data[0x11970c + 1] = armorInvOffset >>> 8
  data[0x119720 + 0] = armorInvOffset & 0xff
  data[0x119720 + 1] = armorInvOffset >>> 8
  data[0x119750 + 0] = cloakInvOffset & 0xff
  data[0x119750 + 1] = cloakInvOffset >>> 8
  data[0x119764 + 0] = cloakInvOffset & 0xff
  data[0x119764 + 1] = cloakInvOffset >>> 8
  data[0x1197b0 + 0] = accessoryInvOffset & 0xff
  data[0x1197b0 + 1] = accessoryInvOffset >>> 8
  data[0x1197c4 + 0] = accessoryInvOffset & 0xff
  data[0x1197c4 + 1] = accessoryInvOffset >>> 8
}
