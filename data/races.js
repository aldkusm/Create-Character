// =======================
// RACES DATA
// =======================
const races = [

    {
        name: "Human",
        bonus: { strength: 15, health: 15 },
        description: "Balanced and adaptable"
    },

    {
        name: "Elf",
        bonus: { agility: 20, mana: 5 },
        description: "Swift and magical"
    },

    {
        name: "Dwarf",
        bonus: { health: 20, strength: 5 },
        description: "Sturdy and resilient"
    },

    {
        name: "Sankta",
        bonus: { mana: 20, health: 4 },
        description: "Holy and powerful"
    },

    {
        name: "Demon",
        bonus: { strength: 20, agility: 7 },
        description: "Dark and aggressive"
    },

    {
        name: "Angel",
        bonus: { mana: 25, health: 5 },
        description: "Divine and ethereal"
    },

    {
        name: "Dragonkin",
        bonus: { strength: 22, mana: 8 },
        description: "Ancient and mighty"
    },

    {
        name: "Beastman",
        bonus: { agility: 22, strength: 5 },
        description: "Wild and ferocious"
    },

    {
        name: "Orc",
        bonus: { strength: 20, health: 10 },
        description: "Brutal and fearless"
    },

    {
        name: "Goblin",
        bonus: { agility: 25, mana: 2 },
        description: "Sneaky and mischievous"
    },

    {
        name: "Vampire",
        bonus: { mana: 15, agility: 10 },
        description: "Elegant and immortal"
    },

    {
        name: "Werewolf",
        bonus: { strength: 22, agility: 8 },
        description: "Savage and unstoppable"
    },

    {
        name: "Slime",
        bonus: { health: 35 },
        description: "Soft but surprisingly durable"
    },

    {
        name: "Undead",
        bonus: { health: 25, mana: 5 },
        description: "Death cannot stop them"
    },

    {
        name: "Fairy",
        bonus: { mana: 15, agility: 10 },
        description: "Tiny but magical"
    },

    {
        name: "Giant",
        bonus: { strength: 30, health: 15 },
        description: "Massive and overwhelming"
    },

    {
        name: "Merfolk",
        bonus: { mana: 22, agility: 8 },
        description: "Masters of the sea"
    },

    {
        name: "Android",
        bonus: { strength: 8, mana: 8, health: 8, agility: 8 },
        description: "Artificial yet efficient"
    },

    {
        name: "Cyborg",
        bonus: { strength: 15, health: 10 },
        description: "Half machine, half flesh"
    },

    {
        name: "Alien",
        bonus: { mana: 20 },
        description: "Mysterious beings from beyond"
    },

    {
        name: "Catfolk",
        bonus: { agility: 18 },
        description: "Fast and curious"
    },

    {
        name: "Fox Spirit",
        bonus: { mana: 12, agility: 12 },
        description: "Tricky and enchanting"
    },

    {
        name: "Phoenix",
        bonus: { mana: 25, health: 10 },
        description: "Reborn from ashes"
    },

    {
        name: "Ancient Dragon",
        bonus: { strength: 20, mana: 20 },
        description: "Legendary ruler of the skies"
    },

    // Funny races

    {
        name: "Indonesian",
        bonus: { strength: 50, mana: 50, health: 50, agility: 50 },
        description: "Can survive almost anything"
    },

    {
        name: "NPC",
        bonus: { health: 1 },
        description: "Exists only to give quests"
    },

    {
        name: "Keyboard Warrior",
        bonus: { mana: 30 },
        description: "Power increases online"
    },

    {
        name: "Professional Sleeper",
        bonus: { health: 25 },
        description: "Sleep is true power"
    },

    {
        name: "Gacha Addict",
        bonus: { mana: 10, agility: 20 },
        description: "Never stops pulling"
    },

    {
        name: "Overthinker",
        bonus: { mana: 25 },
        description: "Analyzes everything"
    },

    {
        name: "Final Boss",
        bonus: { strength: 25, mana: 25, health: 25, agility: 25 },
        description: "Everyone fears this being"    
    },

    {
        name: "Unlucky",
        bonus: { strength: -50, mana: -50, health: -50, agility: -50 },
        description: "Stats Aren't Everything to Me"
    },

];