
// =======================
// BUTTON
// =======================

const gachaBtn = document.getElementById("gachaBtn");
const raceSelect = document.getElementById("raceSelect");
const raceDescription = document.getElementById("raceDescription");
const rerollSkillsBtn = document.getElementById("rerollSkillsBtn");
const rerollTitlesBtn = document.getElementById("rerollTitlesBtn");
const btnEnglish = document.getElementById("btnEnglish");
const btnIndonesian = document.getElementById("btnIndonesian");
const setupTitle = document.getElementById("setupTitle");
const setupSubtitle = document.getElementById("setupSubtitle");
const labelCharacterName = document.getElementById("labelCharacterName");
const labelGuildName = document.getElementById("labelGuildName");
const labelChooseRace = document.getElementById("labelChooseRace");
const labelName = document.getElementById("labelName");
const labelRace = document.getElementById("labelRace");
const labelDescription = document.getElementById("labelDescription");
const labelRole = document.getElementById("labelRole");
const labelLevel = document.getElementById("labelLevel");
const labelGuild = document.getElementById("labelGuild");
const labelRank = document.getElementById("labelRank");
const labelStrength = document.getElementById("labelStrength");
const labelHealth = document.getElementById("labelHealth");
const labelMana = document.getElementById("labelMana");
const labelAgility = document.getElementById("labelAgility");
const skillsTitle = document.getElementById("skillsTitle");
const titleTitle = document.getElementById("titleTitle");
const gachaLabel = document.getElementById("gachaLabel");
const rerollSkillsLabel = rerollSkillsBtn;
const rerollTitlesLabel = rerollTitlesBtn;

let currentCharacter = null;
let currentLang = "english";

const translations = {
    english: {
        htmlLang: "en",
        setupTitle: "CREATE CHARACTER",
        setupSubtitle: "Create a unique character and begin a new adventure.",
        characterName: "Character Name",
        guildName: "Guild Name",
        chooseRace: "Choose Race",
        selectRaceDescription: "Select a race to view bonus description.",
        gachaLabel: "Gacha Character",
        gachaLoading: "Summoning<span class=\"dot\">.</span><span class=\"dot\">.</span><span class=\"dot\">.</span>",
        statusTitle: "STATUS",
        nameLabel: "Name",
        raceLabel: "Race",
        descriptionLabel: "Description",
        roleLabel: "Role",
        levelLabel: "Lv",
        guildLabel: "Guild",
        rankLabel: "Rank",
        strengthLabel: "Strength",
        healthLabel: "Health",
        manaLabel: "Mana",
        agilityLabel: "Agility",
        skillsTitle: "Skills",
        titleTitle: "Tittle",
        rerollSkills: "Reroll Skills",
        rerollTitle: "Reroll Title",
        enterNameAlert: "Please enter a character name first!",
        enterGuildAlert: "Please enter a guild name first!",
        placeholderCharacterName: "Enter character name",
        placeholderGuildName: "Enter guild name",
        bonusLabel: "Bonus",
        bonusStrength: "Strength",
        bonusHealth: "Health",
        bonusMana: "Mana",
        bonusAgility: "Agility"
    },
    indonesian: {
        htmlLang: "id",
        setupTitle: "BUAT KARAKTER",
        setupSubtitle: "Buat karakter unikmu dan mulai petualangan baru.",
        characterName: "Nama Karakter",
        guildName: "Nama Guild",
        chooseRace: "Pilih Ras",
        selectRaceDescription: "Pilih ras untuk melihat deskripsi bonus.",
        gachaLabel: "Gacha Karakter",
        gachaLoading: "Memanggil<span class=\"dot\">.</span><span class=\"dot\">.</span><span class=\"dot\">.</span>",
        statusTitle: "STATUS",
        nameLabel: "Nama",
        raceLabel: "Ras",
        descriptionLabel: "Deskripsi",
        roleLabel: "Peran",
        levelLabel: "Lv",
        guildLabel: "Guild",
        rankLabel: "Peringkat",
        strengthLabel: "Kekuatan",
        healthLabel: "Kesehatan",
        manaLabel: "Mana",
        agilityLabel: "Kelincahan",
        skillsTitle: "Keterampilan",
        titleTitle: "Julukan",
        rerollSkills: "Ulang Keterampilan",
        rerollTitle: "Ulang Julukan",
        enterNameAlert: "Isi nama karakter dulu!",
        enterGuildAlert: "Isi nama guild dulu!",
        placeholderCharacterName: "Masukkan nama karakter",
        placeholderGuildName: "Masukkan nama guild",
        bonusLabel: "Bonus",
        bonusStrength: "Kekuatan",
        bonusHealth: "Kesehatan",
        bonusMana: "Mana",
        bonusAgility: "Kelincahan"
    }
};

const itemTranslations = {
    indonesian: {
        roles: {
            Warrior: "Prajurit",
            Mage: "Penyihir",
            Assassin: "Pembunuh Bayaran",
            Healer: "Penyembuh",
            Tank: "Perisai",
            Archer: "Pemanah",
            Necromancer: "Nekromancer",
            Paladin: "Paladin",
            Berserker: "Berserker",
            Spearman: "Prajurit Tombak",
            Knight: "Ksatria",
            Samurai: "Samurai",
            Ninja: "Ninja",
            Gunslinger: "Penembak",
            "Battle Priest": "Pendeta Perang",
            "Dark Knight": "Ksatria Gelap",
            Spellblade: "Pedang Sihir",
            Summoner: "Pemanggil",
            "Beast Tamer": "Pengendali Binatang",
            "Dragon Slayer": "Pembunuh Naga",
            Trader: "Pedagang",
            Merchant: "Pedagang Besar",
            Blacksmith: "Pandai Besi",
            Alchemist: "Alkemis",
            Chef: "Koki",
            "Inn Keeper": "Pemilik Penginapan",
            "Dungeon Broker": "Broker Penjara",
            "Treasure Appraiser": "Penilai Harta Karun",
            "Potion Seller": "Penjual Ramuan",
            "Artifact Dealer": "Pedagang Artefak",
            President: "Presiden",
            "Vice President": "Wakil Presiden",
            "Minister of Defense": "Menteri Pertahanan",
            "Minister of Finance": "Menteri Keuangan",
            Governor: "Gubernur",
            Mayor: "Walikota",
            "Royal Advisor": "Penasihat Kerajaan",
            "Tax Collector": "Pengumpul Pajak",
            "National Strategist": "Ahli Strategi Nasional",
            "Dungeon Affairs Minister": "Menteri Urusan Penjara",
            King: "Raja",
            Queen: "Ratu",
            Prince: "Pangeran",
            Princess: "Putri",
            Emperor: "Kaisar",
            Empress: "Permaisuri",
            "Crown Prince": "Pangeran Mahkota",
            "Royal Guard Commander": "Komandan Pengawal Kerajaan",
            Spy: "Mata-mata",
            "Double Agent": "Agen Ganda",
            "Secret Agent": "Agen Rahasia",
            "Intelligence Officer": "Perwira Intelijen",
            "Dungeon Investigator": "Penyelidik Penjara",
            "Shadow Operative": "Operatif Bayangan",
            Teacher: "Guru",
            Doctor: "Dokter",
            Engineer: "Insinyur",
            Programmer: "Programmer",
            Farmer: "Petani",
            "Police Officer": "Polisi",
            Soldier: "Tentara",
            Journalist: "Jurnalis",
            Lawyer: "Pengacara",
            "Civil Servant": "Pegawai Negeri",
            "Indonesian Citizen": "Warga Indonesia",
            "Neighborhood Chief": "Ketua RT",
            "Village Chief": "Kepala Desa",
            "Parking Attendant": "Juru Parkir",
            "Instant Noodle Connoisseur": "Pecinta Mie Instan",
            "Motorcycle Gang Leader": "Pemimpin Geng Motor",
            "Local Hero": "Pahlawan Lokal",
            "Professional Queue Cutter": "Ahli Memotong Antrean",
            Boyfriend: "Pacar Laki-Laki",
            Girlfriend: "Pacar Wanita",
            "Professional Sleeper": "Tukang Tidur Profesional",
            "Full-Time Gambler": "Penjudi Sejati",
            "Professional Procrastinator": "Ahli Menunda",
            Unemployed: "Pengangguran",
            "Dungeon Tourist": "Turis Penjara",
            "Treasure Accident Finder": "Pencari Harta Alami",
            "Goblin Negotiator": "Negosiator Goblin",
            "Monster Influencer": "Influencer Monster",
            "Dungeon YouTuber": "YouTuber Penjara",
            "Meme Lord": "Raja Meme",
            "Keyboard Warrior": "Pejuang Keyboard",
            "Professional NPC": "NPC Profesional",
            "Background Character": "Karakter Tidak Penting",
            "Main Character": "Tokoh Utama",
            "Side Character": "Tokoh Sampingan",
            "Comic Relief": "Penghibur Komik",
            "Plot Armor User": "Pengguna Plot Armor",
            "World Destroyer": "Penghancur Dunia",
            "Professional Villain": "Penjahat Profesional",
            "Demon King's Intern": "Raja Iblis Magang",
            "Hero Association Janitor": "Pahlawan Penjaga Kebersihan",
            "Legendary Fisherman": "Nelayan Legendaris",
            "Chicken Whisperer": "Jago Bahasa Ayam",
            "Goblin Rights Activist": "Aktivis Hak Goblin",
            "Certified Door Kicker": "Pendorong Pintu Bersertifikat",
            "Dungeon Tax Evasion Expert": "Pakar Pengelakan Pajak Penjara",
            "Professional Loot Goblin": "Profesional Goblin",
            "Walking Disaster": "Bencana Berjalan",
            "Harbinger of Chaos": "Pembawa Kekacauan",
            "Ancient Coffee Addict": "Pecandu Kopi Kuno",
            "Supreme Couch Guardian": "Penjaga Sofa Tertinggi",
            "Master of Bad Decisions": "Ahli Keputusan Buruk"
        },
        skills: {
            "Sword Mastery": "Ahli Pedang",
            "Dual Wield": "Pengguna Senjata Ganda",
            "Shield Bash": "Hantaman Perisai",
            "Axe Mastery": "Ahli Kapak",
            "Spear Mastery": "Ahli Tombak",
            "Bow Mastery": "Ahli Busur",
            "Gun Mastery": "Ahli Senjata",
            "Martial Arts": "Seni Bela Diri",
            "Critical Strike": "Serangan Kritis",
            Berserk: "Berserk",
            "Counter Attack": "Serangan Balik",
            Parry: "Parry",
            "Battle Instinct": "Insting Pertempuran",
            "Combo Master": "Master Kombinasi",
            "Weapon Throw": "Lempar Senjata",
            "Last Stand": "Si Paling Terakhir",
            Stealth: "Lah Kok Ilang",
            "Shadow Step": "Langkah Bayangan",
            "Instant Dash": "Laju Kilat",
            Teleportation: "Teleportasi",
            "Wall Climbing": "Memanjat Dinding",
            "Silent Movement": "Gerak Senyap",
            "Evasion Mastery": "Ahli Penghindaran",
            Regeneration: "Regenerasi",
            "Fast Learner": "Cepat Belajar",
            Leadership: "Kepemimpinan",
            "Danger Sense": "Indra Bahaya",
            "Mana Control": "Kontrol Mana",
            "Divine Blessing": "Berkah Ilahi",
            "Pain Resistance": "Tahan Sakit",
            "Mental Fortitude": "Ketangguhan Mental",
            "Aura Enhancement": "Peningkatan Aura",
            "Fire Magic": "Sihir Api",
            "Water Magic": "Sihir Air",
            "Wind Magic": "Sihir Angin",
            "Earth Magic": "Sihir Bumi",
            "Lightning Magic": "Sihir Petir",
            "Ice Magic": "Sihir Es",
            "Light Magic": "Sihir Cahaya",
            "Dark Magic": "Sihir Gelap",
            "Space Magic": "Sihir Ruang",
            "Time Magic": "Sihir Waktu",
            "Gravity Magic": "Sihir Gravitasi",
            "Blood Magic": "Sihir Darah",
            "Summoning Magic": "Sihir Pemanggilan",
            "Healing Magic": "Sihir Penyembuhan",
            "Barrier Magic": "Sihir Penghalang",
            "Mana Burst": "Ledakan Mana",
            "Curse Manipulation": "Manipulasi Kutukan",
            "Soul Manipulation": "Manipulasi Jiwa",
            Necromancy: "Nekromansi",
            "Spirit Communication": "Komunikasi Roh",
            "Monster Taming": "Menjinakkan Monster",
            "Treasure Detection": "Deteksi Harta Karun",
            "Trap Detection": "Deteksi Perangkap",
            "Trap Disarm": "Melumpuhkan Perangkap",
            "Dungeon Mapping": "Pemetaan Penjara",
            "Secret Passage Detection": "Deteksi Jalan Rahasia",
            "Loot Enhancement": "Peningkatan Loot",
            "Rare Drop Boost": "Peningkatan Drop Langka",
            "Boss Slayer": "Pembunuh Bos",
            "Dragon Slayer": "Pembunuh Naga",
            "Undead Purification": "Penyucian Undead",
            Tracking: "Pelacakan",
            "Beast Hunting": "Berburu Binatang",
            "Item Appraisal": "Penilaian Barang",
            "Artifact Creation": "Pembuatan Artefak",
            Alchemy: "Alkimia",
            Blacksmithing: "Pandai Besi",
            "Potion Brewing": "Pembuatan Ramuan",
            Enchanting: "Penyihiran",
            Cooking: "Memasak",
            Engineering: "Teknik",
            "Merchant's Eye": "Mata Pedagang",
            Bargaining: "Tawar-menawar",
            "Supply Chain Management": "Manajemen Rantai Pasokan",
            "Tax Evasion": "Pengelakan Pajak",
            Negotiation: "Negosiasi",
            "Market Prediction": "Prediksi Pasar",
            "Investment Genius": "Jenius Investasi",
            "Business Expansion": "Perluasan Bisnis",
            "Public Speaking": "Berbicara di Depan Umum",
            "Political Manipulation": "Manipulasi Politik",
            Diplomacy: "Diplomasi",
            "Nation Management": "Manajemen Negara",
            "Emergency Response": "Tanggap Darurat",
            "Law Enforcement": "Penegakan Hukum",
            "Plot Armor": "Plot Armor",
            "Main Character Aura": "Aura Tokoh Utama",
            "Lucky Accident": "Kecelakaan Beruntung",
            "Dramatic Entrance": "Masuk Dramatis",
            "Perfect Timing": "Waktu Sempurna",
            "Destiny's Chosen": "Pilihan Takdir",
            "Reality Manipulation": "Manipulasi Realitas",
            "Probability Manipulation": "Manipulasi Probabilitas",
            "World Reset": "Reset Dunia",
            "Dimensional Travel": "Perjalanan Dimensi",
            "Fate Alteration": "Perubahan Takdir",
            "Existence Erasure": "Penghapusan Eksistensi",
            Immortality: "Keabadian",
            Resurrection: "Kebangkitan",
            "Infinite Mana": "Mana Tak Terbatas",
            "Chaos Incarnation": "Inkarnasi Kekacauan",
            Omniscience: "Dapat Mengetahui",
            "Absolute Luck": "Keberuntungan Mutlak",
            "Goblin Negotiation": "Negosiasi Goblin",
            "Chicken Communication": "Komunikasi Ayam",
            "Coffee Addiction": "Kecanduan Kopi",
            "Supreme Laziness": "Kemalasan Tertinggi",
            "Emotional Damage": "Kerusakan Emosional",
            "Uno Reverse": "Uno Reverse",
            "Talk No Jutsu": "Talk No Jutsu",
            "Power of Friendship": "Kekuatan Persahabatan",
            "Deus Ex Machina": "Deus Ex Machina",
            "Instant Noodle Mastery": "Ahli Mie Instan",
            "Professional Sleeping": "Tidur Profesional",
            Procrastination: "Penundaan",
            "Meme Creation": "Pencipta Meme",
            "Bad Decision Making": "Pengambilan Keputusan Buruk",
            "Unlimited Excuses": "Alasan Tak Terbatas",
            "Awkward Silence": "Keheningan Canggung",
            Overthinking: "Berpikir Terlalu Banyak",
            "Keyboard Warrior": "Pejuang Keyboard"
        },
        titles: {
            "Beginner Adventurer": "Petualang Pemula",
            "Novice Explorer": "Penjelajah Pemula",
            "Wandering Merchant": "Pedagang Pengembara",
            "Monster Hunter": "Pemburu Monster",
            "Dungeon Explorer": "Penjelajah Penjara",
            "Treasure Seeker": "Pencari Harta Karun",
            "Guild Recruit": "Rekrutan Guild",
            "Rookie Adventurer": "Petualang Pemula",
            "Village Protector": "Pelindung Desa",
            "Traveling Hero": "Pahlawan Pengembara",
            "The Merciless": "Yang Tanpa Ampun",
            "Dragon Slayer": "Pembunuh Naga",
            "King's Guardian": "Pelindung Raja",
            "Shadow Reaper": "Pemotong Bayangan",
            "The Executioner": "Algojo",
            "Champion of War": "Juara Perang",
            "Blade Saint": "Santos Pedang",
            "Conqueror of Dungeons": "Penakluk Penjara",
            "The Last Defender": "Pembela Terakhir",
            "Hero of a Thousand Battles": "Pahlawan Seribu Pertempuran",
            "Archmage of Eternity": "Arkemaet Abadi",
            "Master of Elements": "Penguasa Elemen",
            "Bearer of Divine Light": "Pembawa Cahaya Ilahi",
            "The Cursed One": "Yang Terkena Kutukan",
            "The Forbidden Mage": "Penyihir Terlarang",
            "Keeper of Ancient Secrets": "Penjaga Rahasia Kuno",
            "Chosen by Mana": "Pilihan Mana",
            "The Time Weaver": "Penjerat Waktu",
            "Lord of Darkness": "Tuan Kegelapan",
            "The Reality Bender": "Pembengkok Realitas",
            "The Chosen One": "Yang Terpilih",
            "Hero of Light": "Pahlawan Cahaya",
            "Crown Prince": "Pangeran Mahkota",
            "King of Kings": "Raja Segala Raja",
            "Emperor of Humanity": "Kaisar Kemanusiaan",
            "The Forgotten King": "Raja yang Terlupakan",
            "The Eternal Monarch": "Monarki Abadi",
            "Ruler of the Seven Kingdoms": "Penguasa Tujuh Kerajaan",
            "President of the Republic": "Presiden Republik",
            "Minister of Dungeon Affairs": "Menteri Urusan Penjara",
            "Supreme Tax Collector": "Pengumpul Pajak Tertinggi",
            "Guardian of the Nation": "Penjaga Bangsa",
            "National Hero": "Pahlawan Nasional",
            "The People's Champion": "Juara Rakyat",
            "Professional Sleeper": "Tidur Profesional",
            "Master of Procrastination": "Master Penundaan",
            "Certified Couch Guardian": "Penjaga Sofa Bersertifikat",
            "Lord of Instant Noodles": "Tuan Mie Instan",
            "The Unemployed Legend": "Legenda Pengangguran",
            "Professional NPC": "NPC Profesional",
            "The Main Character": "Tokoh Utama",
            "Background Character No. 37": "Karakter Latar No. 37",
            "Goblin Negotiator": "Negosiator Goblin",
            "Dungeon Tourist": "Turis Penjara",
            "The One Who Forgot the Quest": "Yang Lupa Misi",
            "Master of Bad Decisions": "Ahli Keputusan Buruk",
            "CEO of Laziness": "CEO Kemalasan",
            "King of Overthinking": "Raja Berpikir Terlalu Banyak",
            "The Legendary Queue Cutter": "Pemotong Antrean Legendaris",
            "Harbinger of Doom": "Pembawa Malapetaka",
            "Bringer of Chaos": "Pembawa Kekacauan",
            "Destroyer of Worlds": "Penghancur Dunia",
            "The Unkillable": "Yang Tak Terbunuh",
            "The Immortal One": "Yang Abadi",
            "Walker Between Dimensions": "Penjelajah Dimensi",
            "The Fate Breaker": "Pemecah Takdir",
            "God's Favorite Child": "Anak Kesayangan Tuhan",
            "The Plot Armor Incarnate": "Inkarnasi Plot Armor",
            "Supreme Being": "Makhluk Tertinggi",
            "The End of All Things": "Akhir Segala Sesuatu",
            "Lord of RNG": "Tuan RNG",
            "The Chosen by Gacha": "Yang Terpilih oleh Gacha",
            "The Error in Reality": "Kesalahan dalam Realitas",
            "The Final Boss": "Bos Terakhir",
            "The One Above All": "Yang Di Atas Segalanya"
        }
    }
};

function translateRole(roleName) {
    if (currentLang === "indonesian") {
        return itemTranslations.indonesian.roles[roleName] || roleName;
    }
    return roleName;
}

function translateSkillName(skillName) {
    if (currentLang === "indonesian") {
        return itemTranslations.indonesian.skills[skillName] || skillName;
    }
    return skillName;
}

function translateTitleName(titleName) {
    if (currentLang === "indonesian") {
        return itemTranslations.indonesian.titles[titleName] || titleName;
    }
    return titleName;
}

const raceDescriptionTranslations = {
    indonesian: {
        Human: "Seimbang dan mudah beradaptasi",
        Elf: "Cepat dan penuh sihir",
        Dwarf: "Kokoh dan tahan banting",
        Sankta: "Suci dan kuat",
        Demon: "Gelap dan agresif",
        Angel: "Ilahi dan gaib",
        Dragonkin: "Kuno dan perkasa",
        Beastman: "Liar dan garang",
        Orc: "Brutal dan tak kenal takut",
        Goblin: "Licik dan nakal",
        Vampire: "Anggun dan abadi",
        Werewolf: "Buas dan tak terhentikan",
        Slime: "Lembut tapi ternyata tahan lama",
        Undead: "Kematian tak dapat menghentikannya",
        Fairy: "Kecil tapi penuh sihir",
        Giant: "Besar dan mengalahkan lawan",
        Merfolk: "Penguasa laut",
        Android: "Buatan namun efisien",
        Cyborg: "Setengah mesin, setengah daging",
        Alien: "Makhluk misterius dari luar",
        Catfolk: "Cepat dan penasaran",
        "Fox Spirit": "Licik dan memesona",
        Phoenix: "Lahir kembali dari abu",
        "Ancient Dragon": "Penguasa legendaris di langit",
        Indonesian: "Bisa bertahan hampir semuanya",
        NPC: "Ada hanya untuk memberi misi",
        "Keyboard Warrior": "Kekuatan meningkat online",
        "Professional Sleeper": "Tidur adalah kekuatan sejati",
        "Gacha Addict": "Tidak pernah berhenti menarik",
        "Overthinker": "Menganalisis segalanya",
        "Final Boss": "Semua orang takut pada makhluk ini",
        Unlucky: "Stat tidak segalanya bagiku"
    }
};

function getRaceDescription(raceName) {
    if (currentLang === "indonesian" && raceDescriptionTranslations.indonesian[raceName]) {
        return raceDescriptionTranslations.indonesian[raceName];
    }
    const race = races.find(r => r.name === raceName);
    return race?.description || "";
}

gachaBtn.addEventListener("click", startGachaAnimation);
raceSelect.addEventListener("change", updateRaceDescription);
rerollSkillsBtn?.addEventListener("click", rerollSkills);
rerollTitlesBtn?.addEventListener("click", rerollTitles);
btnEnglish?.addEventListener("click", () => setLanguage("english"));
btnIndonesian?.addEventListener("click", () => setLanguage("indonesian"));

populateRaceOptions();
setGachaBtnDefault();
setLanguage(currentLang);

function setGachaBtnDefault() {
    const labelText = translations[currentLang]?.gachaLabel || "Gacha Character";
    gachaBtn.innerHTML = `
        <span class="btn-icon">🎲</span>
        <span class="btn-label" id="gachaLabel">${labelText}</span>
        <span class="btn-star star-1">★</span>
        <span class="btn-star star-2">★</span>
        <span class="btn-star star-3">★</span>
        <span class="btn-star star-4">★</span>
    `;
}

function setGachaBtnLoading() {
    const loadingText = translations[currentLang]?.gachaLoading || `🎲 Summoning<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`;
    gachaBtn.innerHTML = `
        <span class="btn-icon">🎲</span>
        <span class="btn-label" id="gachaLabel">${loadingText}</span>
        <span class="btn-star star-1">★</span>
        <span class="btn-star star-2">★</span>
        <span class="btn-star star-3">★</span>
        <span class="btn-star star-4">★</span>
    `;
}

function populateRaceOptions() {
    raceSelect.innerHTML = races
        .map(race => `<option value="${race.name}">${race.name}</option>`)
        .join("");
    updateRaceDescription();
}

function formatBonus(bonus) {
    const parts = [];
    const t = translations[currentLang];

    if (bonus.strength) parts.push(`+${bonus.strength} ${t.bonusStrength}`);
    if (bonus.health) parts.push(`+${bonus.health} ${t.bonusHealth}`);
    if (bonus.mana) parts.push(`+${bonus.mana} ${t.bonusMana}`);
    if (bonus.agility) parts.push(`+${bonus.agility} ${t.bonusAgility}`);

    return parts.length ? parts.join(", ") : (currentLang === "indonesian" ? "Tidak ada bonus" : "No bonus");
}

function updateRaceDescription() {
    const selected = races.find(race => race.name === raceSelect.value);

    if (!selected) {
        raceDescription.textContent = translations[currentLang].selectRaceDescription;
        return;
    }

    raceDescription.innerHTML = `
        ${getRaceDescription(selected.name)}
        <span class="race-bonus">${translations[currentLang].bonusLabel}: ${formatBonus(selected.bonus)}</span>
    `;
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = translations[lang].htmlLang;

    setupTitle.textContent = translations[lang].setupTitle;
    setupSubtitle.textContent = translations[lang].setupSubtitle;
    labelCharacterName.textContent = translations[lang].characterName;
    labelGuildName.textContent = translations[lang].guildName;
    labelChooseRace.textContent = translations[lang].chooseRace;
    labelName.textContent = translations[lang].nameLabel;
    labelRace.textContent = translations[lang].raceLabel;
    labelDescription.textContent = translations[lang].descriptionLabel;
    labelRole.textContent = translations[lang].roleLabel;
    labelLevel.textContent = translations[lang].levelLabel;
    labelGuild.textContent = translations[lang].guildLabel;
    labelRank.textContent = translations[lang].rankLabel;
    labelStrength.textContent = translations[lang].strengthLabel;
    labelHealth.textContent = translations[lang].healthLabel;
    labelMana.textContent = translations[lang].manaLabel;
    labelAgility.textContent = translations[lang].agilityLabel;
    skillsTitle.textContent = translations[lang].skillsTitle;
    titleTitle.textContent = translations[lang].titleTitle;
    rerollSkillsLabel.textContent = translations[lang].rerollSkills;
    rerollTitlesLabel.textContent = translations[lang].rerollTitle;
    document.getElementById("charName").placeholder = translations[lang].placeholderCharacterName;
    document.getElementById("guildName").placeholder = translations[lang].placeholderGuildName;
    btnEnglish.classList.toggle("active", lang === "english");
    btnIndonesian.classList.toggle("active", lang === "indonesian");
    setGachaBtnDefault();
    updateRaceDescription();
}

function startGachaAnimation(event) {
    event.preventDefault();

    const playerName = document.getElementById("charName").value.trim();
    const guildName = document.getElementById("guildName").value.trim();

    if (playerName === "") {
        alert(translations[currentLang].enterNameAlert);
        return;
    }

    if (guildName === "") {
        alert(translations[currentLang].enterGuildAlert);
        return;
    }

    if (gachaBtn.disabled) return;

    gachaBtn.disabled = true;
    gachaBtn.classList.add("loading");
    setGachaBtnLoading();

    setTimeout(() => {
        gachaBtn.classList.remove("loading");
        gachaBtn.disabled = false;
        setGachaBtnDefault();
        generateCharacter();
    }, 3000);
}

// =======================
// DOWNLOAD PNG
// =======================


// =======================
// MAIN
// =======================

function generateCharacter() {
    const playerName = document.getElementById("charName").value.trim();
    const guildName = document.getElementById("guildName").value.trim();
    const race = document.getElementById("raceSelect").value;

    if (playerName === "") {
        alert(translations[currentLang].enterNameAlert);
        return;
    }

    if (guildName === "") {
        alert(translations[currentLang].enterGuildAlert);
        return;
    }

    document.querySelector(".setup-box").classList.add("hidden");
    document.querySelector(".card").classList.remove("hidden");
    const raceData = races.find(r => r.name === race) || { bonus: {} };
    const bonus = raceData.bonus || {};

    const role = randomItem(roles);
    const strength = randomStat() + (bonus.strength || 0);
    const health = randomStat() + (bonus.health || 0);
    const mana = randomStat() + (bonus.mana || 0);
    const agility = randomStat() + (bonus.agility || 0);
    const characterSkills = generateSkills();
    const characterTitles = generateTitles();
    const overallRank = calculateOverallRank(
        strength,
        health,
        mana,
        agility,
        characterSkills,
        characterTitles
    );

    const character = {
        playerName,
        guildName,
        race,
        raceDescription: getRaceDescription(race),
        role,
        strength,
        health,
        mana,
        agility,
        characterSkills,
        characterTitles,
        overallRank
    };

    currentCharacter = character;
    renderCharacter(character);

    if (["S", "SS", "SSS"].includes(overallRank)) {
        triggerRankEffect(overallRank);
    }
}

function rerollSkills() {
    if (!currentCharacter) return;

    currentCharacter.characterSkills = generateSkills();
    currentCharacter.overallRank = calculateOverallRank(
        currentCharacter.strength,
        currentCharacter.health,
        currentCharacter.mana,
        currentCharacter.agility,
        currentCharacter.characterSkills,
        currentCharacter.characterTitles
    );

    renderCharacter(currentCharacter);

    if (["S", "SS", "SSS"].includes(currentCharacter.overallRank)) {
        triggerRankEffect(currentCharacter.overallRank);
    } else {
        stopParticleEmitter();
    }
}

function rerollTitles() {
    if (!currentCharacter) return;

    currentCharacter.characterTitles = generateTitles();
    currentCharacter.overallRank = calculateOverallRank(
        currentCharacter.strength,
        currentCharacter.health,
        currentCharacter.mana,
        currentCharacter.agility,
        currentCharacter.characterSkills,
        currentCharacter.characterTitles
    );

    renderCharacter(currentCharacter);

    if (["S", "SS", "SSS"].includes(currentCharacter.overallRank)) {
        triggerRankEffect(currentCharacter.overallRank);
    } else {
        stopParticleEmitter();
    }
}

// =======================
// RANDOM
// =======================

function randomStat() {
    return Math.floor(Math.random() * 100) + 1;
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// =======================
// SKILL
// =======================

// =======================
// SKILL
// =======================

function generateSkills() {

    const amount = Math.floor(Math.random() * 7) + 1;

    let selected = [];

    while (selected.length < amount) {

        const candidate = randomItem(skills);

        // ensure uniqueness by skill name and store the name string
        if (!selected.some(s => s.name === candidate)) {
            selected.push({
                name: candidate,
                rank: weightedRank()
            });
        }
    }

    return selected;
}


// =======================
// TITLE
// =======================

function generateTitles() {
    const amount = Math.floor(Math.random() * 4) + 1;
    const selected = [];

    while (selected.length < amount) {
        const candidate = randomItem(titles);
        if (!selected.some(t => t.name === candidate)) {
            selected.push({
                name: candidate,
                rank: weightedRank()
            });
        }
    }

    return selected;
}

// =======================
// SCORE
// =======================

const scoreMap = {
    F: 5,
    D: 10,
    C: 20,
    B: 35,
    A: 50,
    S: 75,
    SS: 100,
    SSS: 150
};

function calculateStatWidth(value) {
    const effective = Math.min(value, 130);
    return Math.round((effective / 130) * 100);
}

function calculateOverallRank(
    str,
    hp,
    mana,
    agi,
    skills,
    titles
) {
    const statScore = str + hp + mana + agi;

    let skillScore = 0;
    skills.forEach(skill => {
        skillScore += scoreMap[skill.rank];
    });

    let titleScore = 0;
    titles.forEach(title => {
        titleScore += scoreMap[title.rank];
    });

    const total =
        (statScore * 0.50) +
        (skillScore * 0.35) +
        (titleScore * 0.15);

    // Penentuan Overall Rank
    if (total >= 300) return "SSS";
    if (total >= 250) return "SS";
    if (total >= 200) return "S";
    if (total >= 160) return "A";
    if (total >= 120) return "B";
    if (total >= 80) return "C";
    if (total >= 40) return "D";

    return "F";
}


// =======================
// RANK EFFECTS
// =======================

let particleEmitterId = null;

function triggerRankEffect(rank) {
    const card = document.querySelector(".card");
    
    stopParticleEmitter();

    if (rank === "S") {
        card.classList.add("effect-s");
        createParticles("s");
        setTimeout(() => card.classList.remove("effect-s"), 1000);
        startParticleEmitter(rank);
    } else if (rank === "SS") {
        card.classList.add("effect-ss");
        createParticles("ss");
        setTimeout(() => card.classList.remove("effect-ss"), 1500);
        startParticleEmitter(rank);
    } else if (rank === "SSS") {
        card.classList.add("effect-sss");
        createParticles("sss");
        setTimeout(() => card.classList.remove("effect-sss"), 2000);
        startParticleEmitter(rank);
    }
}

function startParticleEmitter(rank) {
    stopParticleEmitter();

    const type = rank.toLowerCase();
    const interval = rank === "S" ? 500 : rank === "SS" ? 300 : 200;
    const count = rank === "S" ? 1 : rank === "SS" ? 2 : 3;

    particleEmitterId = setInterval(() => {
        spawnFallingParticles(type, count);
    }, interval);
}

function stopParticleEmitter() {
    if (particleEmitterId) {
        clearInterval(particleEmitterId);
        particleEmitterId = null;
    }
}

function spawnFallingParticles(type, count) {
    const container = document.querySelector(".card");
    const symbol = type === "sss" ? "★" : type === "ss" ? "✦" : "✨";

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle particle-" + type;
        particle.textContent = symbol;

        const x = Math.random() * 100;
        const delay = Math.random() * 300;

        particle.style.left = x + "%";
        particle.style.top = "-30px";
        particle.style.animationDelay = delay + "ms";

        container.appendChild(particle);
        setTimeout(() => particle.remove(), 3800);
    }
}

function createParticles(type) {
    const container = document.querySelector(".card");
    const particleCount = type === "sss" ? 30 : type === "ss" ? 20 : 12;
    const symbol = type === "sss" ? "★" : type === "ss" ? "✦" : "✨";
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle particle-" + type;
        particle.textContent = symbol;
        
        const x = Math.random() * 100;
        const delay = Math.random() * 300;
        
        particle.style.left = x + "%";
        particle.style.top = "-20px";
        particle.style.animationDelay = delay + "ms";
        
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 3800);
    }
}

// =======================
// RENDER
// =======================

function renderCharacter(character) {

    document.getElementById("displayName").textContent =
        character.playerName;

    document.getElementById("displayGuild").textContent =
        character.guildName;

    document.getElementById("displayRace").textContent = character.race;
    document.getElementById("displayRaceDesc").textContent = character.raceDescription || "-";
    document.getElementById("displayRole").textContent = translateRole(character.role);

    document.getElementById("strength").textContent = character.strength;
    document.getElementById("strengthBar").style.width = `${calculateStatWidth(character.strength)}%`;

    document.getElementById("health").textContent = character.health;
    document.getElementById("healthBar").style.width = `${calculateStatWidth(character.health)}%`;

    document.getElementById("mana").textContent = character.mana;
    document.getElementById("manaBar").style.width = `${calculateStatWidth(character.mana)}%`;

    document.getElementById("agility").textContent = character.agility;
    document.getElementById("agilityBar").style.width = `${calculateStatWidth(character.agility)}%`;

    // Level is the rounded average of the four main stats
    const avgLevel = Math.round((character.strength + character.health + character.mana + character.agility) / 4);
    document.getElementById("displayLevel").textContent = avgLevel;

    const rankElement =
        document.getElementById("displayRank");

    rankElement.textContent =
        character.overallRank;

    rankElement.className =
        "rank rank-" +
        character.overallRank.toLowerCase();

    // Apply card styling based on rank
    const cardElement = document.querySelector(".card");
    cardElement.className = "card";
    
    cardElement.classList.add("card-" + character.overallRank.toLowerCase());

    // Skills

    const skillList =
        document.getElementById("skillList");

    skillList.innerHTML = "";

    character.characterSkills.forEach(skill => {
        skillList.innerHTML += `
            <li class="ranked-line">
                <div class="item-left">
                    <div class="item-icon">
                        <img src="${getSkillIcon(skill.name)}" alt="Skill icon" />
                    </div>
                    <div class="item-label">
                        ${translateSkillName(skill.name)}
                        <div class="rank-bars ${rankColorClass(skill.rank)}">${generateRankBars(skill.rank)}</div>
                    </div>
                </div>
                <span class="rank rank-${skill.rank.toLowerCase()}">${skill.rank}</span>
            </li>
        `;
    });

    // Title

    const titleList =
        document.getElementById("titleList");

    titleList.innerHTML = "";

    character.characterTitles.forEach(title => {
        titleList.innerHTML += `
            <li class="ranked-line">
                <div class="item-left">
                    <div class="item-icon">
                        <img src="${getTitleIcon(title.name)}" alt="Title icon" />
                    </div>
                    <div class="item-label">
                        ${translateTitleName(title.name)}
                        <div class="rank-bars ${rankColorClass(title.rank)}">${generateRankBars(title.rank)}</div>
                    </div>
                </div>
                <span class="rank rank-${title.rank.toLowerCase()}">${title.rank}</span>
            </li>
        `;
    });
}

function getSkillIcon(name) {
    const lower = name.toLowerCase();

    if (/magic|mana|summoning|healing|barrier|curse|soul|spirit|time|space|gravity/.test(lower)) return "assets/Icon/Skill_Magic.png";
    if (/sword|dual wield|shield|axe|spear|bow|gun|weapon|martial|critical|berserk|parry|counter|battle|combo|last stand/.test(lower)) return "assets/Icon/Skill_Combat.png";
    if (/stealth|shadow|dash|teleport|wall climbing|silent|evasion|mobility|movement/.test(lower)) return "assets/Icon/Skill_Mobility.png";
    if (/passive|support|regeneration|leadership|danger|divine|pain|mental|aura|fast learner|mana control/.test(lower)) return "assets/Icon/Skill_Passive.png";
    if (/dungeon|monster|treasure|trap|mapping|secret|tracking|beast|hunting|boss|dragon|loot/.test(lower)) return "assets/Icon/Skill_Dungeon.png";
    if (/alchemy|blacksmith|potion|enchanting|cooking|engineering|crafting|artifact|item appraisal/.test(lower)) return "assets/Icon/Skill_Crafting.png";
    if (/merchant|bargain|tax|investment|market|economy|business|supply|merchant's eye/.test(lower)) return "assets/Icon/Skill_Economy.png";
    if (/politic|diplomacy|government|nation|law|public speaking|emergency|guardian|management/.test(lower)) return "assets/Icon/Skill_Government.png";
    if (/funny|goblin|chicken|coffee|lazy|meme|procrastination|keyboard|talk no jutsu|power of friendship/.test(lower)) return "assets/Icon/Skill_Funny.png";
    if (/reality|probability|world reset|dimensional|fate|existence|immortality|resurrection|infinite|chaos|omniscience|absolute luck|plot armor/.test(lower)) return "assets/Icon/Skill_Overpower.png";
    return "assets/Icon/Skill_Character.png";
}

function getTitleIcon(name) {
    const lower = name.toLowerCase();

    if (/mage|magic|archmage|divine|dark|time|reality|chosen by mana|lord of darkness|reality bender|forbidden mage|cursed/.test(lower)) return "assets/Icon/Title_Magic.png";
    if (/king|prince|emperor|ruler|monarch|chosen one|hero of light|royal/.test(lower)) return "assets/Icon/Title_Royal.png";
    if (/president|minister|tax|guardian of the nation|national hero|people's champion|government/.test(lower)) return "assets/Icon/Title_Government.png";
    if (/professional|couch|instant noodles|unemployed|background|goblin negotiator|tourist|queue cutter|bad decisions|sleep|procrastination|meme/.test(lower)) return "assets/Icon/Title_Funny.png";
    if (/harbinger|bringer|destroyer|unkillable|immortal|walker|fate breaker|god|supreme being|plot armor|end of all things|error in reality|final boss|one above all/.test(lower)) return "assets/Icon/Title_Overpower.png";
    if (/merciless|dragon slayer|guardian|executioner|champion|blade saint|conqueror|defender|hero of a thousand battles|war|battle/.test(lower)) return "assets/Icon/Title_Combat.png";
    return "assets/Icon/Title_Basic.png";
}

function generateRankBars(rank) {
    const map = {
        F: 1,
        D: 2,
        C: 3,
        B: 4,
        A: 5,
        S: 6,
        SS: 7,
        SSS: 8,
    };
    const count = map[rank] || 1;
    return Array.from({ length: 8 }, (_, index) => {
        return `<span class="rank-bar ${index < count ? 'active' : ''}"></span>`;
    }).join("");
}

function rankToCount(rank) {
    const map = { F:1, D:2, C:3, B:4, A:5, S:6, SS:7, SSS:8 };
    return map[rank] || 1;
}

function rankColorClass(rank) {
    const count = rankToCount(rank);
    if (count === 1) return 'rank-color-1';
    if (count === 2) return 'rank-color-2';
    if (count === 3) return 'rank-color-3';
    if (count === 4) return 'rank-color-4';
    if (count === 5) return 'rank-color-5';
    return 'rank-color-6plus';
}