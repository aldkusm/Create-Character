// data/races.js - bilingual race definitions used by script.js
const races = [
    // Standard races
    {
        name: { english: "Human", indonesian: "Manusia" },
        bonus: { strength: 15, health: 15 },
        description: { english: "Balanced and adaptable", indonesian: "Seimbang dan mudah beradaptasi" }
    },
    {
        name: { english: "Elf", indonesian: "Elf" },
        bonus: { agility: 20, mana: 5 },
        description: { english: "Swift and magical", indonesian: "Cepat dan penuh sihir" }
    },
    {
        name: { english: "Dwarf", indonesian: "Kurcaci" },
        bonus: { health: 20, strength: 5 },
        description: { english: "Sturdy and resilient", indonesian: "Kokoh dan tahan banting" }
    },
    {
        name: { english: "Sankta", indonesian: "Sankta" },
        bonus: { mana: 20, health: 4 },
        description: { english: "Holy and powerful", indonesian: "Suci dan kuat" }
    },
    {
        name: { english: "Demon", indonesian: "Iblis" },
        bonus: { strength: 20, agility: 7 },
        description: { english: "Dark and aggressive", indonesian: "Gelap dan agresif" }
    },
    {
        name: { english: "Angel", indonesian: "Malaikat" },
        bonus: { mana: 25, health: 5 },
        description: { english: "Divine and ethereal", indonesian: "Ilahi dan gaib" }
    },
    {
        name: { english: "Dragonkin", indonesian: "Manusia Naga" },
        bonus: { strength: 22, mana: 8 },
        description: { english: "Ancient and mighty", indonesian: "Kuno dan perkasa" }
    },
    {
        name: { english: "Beastman", indonesian: "Manusia Binatang" },
        bonus: { agility: 22, strength: 5 },
        description: { english: "Wild and ferocious", indonesian: "Liar dan garang" }
    },
    {
        name: { english: "Orc", indonesian: "Orc" },
        bonus: { strength: 20, health: 10 },
        description: { english: "Brutal and fearless", indonesian: "Brutal dan tak kenal takut" }
    },
    {
        name: { english: "Goblin", indonesian: "Goblin" },
        bonus: { agility: 25, mana: 2 },
        description: { english: "Sneaky and mischievous", indonesian: "Licik dan nakal" }
    },
    {
        name: { english: "Vampire", indonesian: "Vampir" },
        bonus: { mana: 15, agility: 10 },
        description: { english: "Elegant and immortal", indonesian: "Anggun dan abadi" }
    },
    {
        name: { english: "Werewolf", indonesian: "Manusia Serigala" },
        bonus: { strength: 22, agility: 8 },
        description: { english: "Savage and unstoppable", indonesian: "Buas dan tak terhentikan" }
    },
    {
        name: { english: "Slime", indonesian: "Slime" },
        bonus: { health: 35 },
        description: { english: "Soft but surprisingly durable", indonesian: "Lembut tapi ternyata tahan lama" }
    },
    {
        name: { english: "Undead", indonesian: "Undead" },
        bonus: { health: 25, mana: 5 },
        description: { english: "Death cannot stop them", indonesian: "Kematian tak dapat menghentikannya" }
    },
    {
        name: { english: "Fairy", indonesian: "Peri" },
        bonus: { mana: 15, agility: 10 },
        description: { english: "Tiny but magical", indonesian: "Kecil tapi penuh sihir" }
    },
    {
        name: { english: "Giant", indonesian: "Raksasa" },
        bonus: { strength: 30, health: 15 },
        description: { english: "Massive and overwhelming", indonesian: "Besar dan mengalahkan lawan" }
    },
    {
        name: { english: "Merfolk", indonesian: "Putri Laut" },
        bonus: { mana: 22, agility: 8 },
        description: { english: "Masters of the sea", indonesian: "Penguasa laut" }
    },

    // Technology & extraterrestrial races
    {
        name: { english: "Android", indonesian: "Android" },
        bonus: { strength: 8, mana: 8, health: 8, agility: 8 },
        description: { english: "Artificial yet efficient", indonesian: "Buatan namun efisien" }
    },
    {
        name: { english: "Cyborg", indonesian: "Cyborg" },
        bonus: { strength: 15, health: 10 },
        description: { english: "Half machine, half flesh", indonesian: "Setengah mesin, setengah daging" }
    },
    {
        name: { english: "Alien", indonesian: "Alien" },
        bonus: { mana: 20 },
        description: { english: "Mysterious beings from beyond", indonesian: "Makhluk misterius dari luar" }
    },
    {
        name: { english: "Catfolk", indonesian: "Manusia Kucing" },
        bonus: { agility: 18 },
        description: { english: "Fast and curious", indonesian: "Cepat dan penasaran" }
    },
    {
        name: { english: "Fox Spirit", indonesian: "Roh Rubah" },
        bonus: { mana: 12, agility: 12 },
        description: { english: "Tricky and enchanting", indonesian: "Licik dan memesona" }
    },
    {
        name: { english: "Phoenix", indonesian: "Phoenix" },
        bonus: { mana: 25, health: 10 },
        description: { english: "Reborn from ashes", indonesian: "Lahir kembali dari abu" }
    },
    {
        name: { english: "Ancient Dragon", indonesian: "Naga Kuno" },
        bonus: { strength: 20, mana: 20 },
        description: { english: "Legendary ruler of the skies", indonesian: "Penguasa legendaris di langit" }
    },

    // Funny / special races
    {
        name: { english: "Indonesian", indonesian: "Indonesia" },
        bonus: { strength: 50, mana: 50, health: 50, agility: 50 },
        description: { english: "Can survive almost anything", indonesian: "Bisa bertahan hampir semuanya" }
    },
    {
        name: { english: "NPC", indonesian: "NPC" },
        bonus: { health: 1 },
        description: { english: "Exists only to give quests", indonesian: "Ada hanya untuk memberi misi" }
    },
    {
        name: { english: "Keyboard Warrior", indonesian: "Pejuang Keyboard" },
        bonus: { mana: 30 },
        description: { english: "Power increases online", indonesian: "Kekuatan meningkat online" }
    },
    {
        name: { english: "Professional Sleeper", indonesian: "Tukang Tidur Profesional" },
        bonus: { health: 25 },
        description: { english: "Sleep is true power", indonesian: "Tidur adalah kekuatan sejati" }
    },
    {
        name: { english: "Gacha Addict", indonesian: "Pecandu Gacha" },
        bonus: { mana: 10, agility: 20 },
        description: { english: "Never stops pulling", indonesian: "Tidak pernah berhenti menarik" }
    },
    {
        name: { english: "Overthinker", indonesian: "Pemikir Berlebihan" },
        bonus: { mana: 25 },
        description: { english: "Analyzes everything", indonesian: "Menganalisis segalanya" }
    },
    {
        name: { english: "Final Boss", indonesian: "Bos Terakhir" },
        bonus: { strength: 25, mana: 25, health: 25, agility: 25 },
        description: { english: "Everyone fears this being", indonesian: "Semua orang takut pada makhluk ini" }
    },
    {
        name: { english: "Unlucky", indonesian: "Tidak Beruntung" },
        bonus: { strength: -50, mana: -50, health: -50, agility: -50 },
        description: { english: "Stats Aren't Everything to Me", indonesian: "Stat tidak segalanya bagiku" }
    }
];