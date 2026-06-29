
// Data arrays are loaded from data/races.js, data/roles.js, data/skills.js, and data/titles.js.
// script.js only contains application logic, rendering, and localization helpers.

// DOM Elements
const gachaBtn = document.getElementById("gachaBtn");
const raceSelect = document.getElementById("raceSelect");
const raceDescription = document.getElementById("raceDescription");
const rerollSkillsBtn = document.getElementById("rerollSkillsBtn");
const rerollTitlesBtn = document.getElementById("rerollTitlesBtn");
const saveCodeBtn = document.getElementById("saveCodeBtn");
const loadCodeBtn = document.getElementById("loadCodeBtn");
const saveNote = document.getElementById("saveNote");
const battleCodeLabel = document.getElementById("battleCodeLabel");
const battleCodeBtn = document.getElementById("battleCodeBtn");
const resetBattleBtn = document.getElementById("resetBattleBtn");
const battleCodeInput = document.getElementById("battleCodeInput");
const battleCodeNote = document.getElementById("battleCodeNote");
const logCountButtons = Array.from(document.querySelectorAll(".log-count-btn"));
const battleLogBox = document.getElementById("battleLogBox");
const battleLogContainer = document.getElementById("battleLogContainer");
const winrateBox = document.querySelector(".winrate-box");
const winrateBoxTitle = document.getElementById("winrateBoxTitle");
const winrateTable = document.getElementById("winrateTable");
const winrateNote = document.getElementById("winrateNote");
const btnEnglish = document.getElementById("btnEnglish");
const btnIndonesian = document.getElementById("btnIndonesian");
const setupTitle = document.getElementById("setupTitle");
const setupSubtitle = document.getElementById("setupSubtitle");
const labelCharacterName = document.getElementById("labelCharacterName");
const labelGuildName = document.getElementById("labelGuildName");
const labelSaveCode = document.getElementById("labelSaveCode");
const saveCodeInput = document.getElementById("saveCodeInput");
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
let battleLogRenderToken = 0;
let currentBattleState = null;

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
        saveCodeLabel: "Save Code",
        saveCodeInputPlaceholder: "Enter save code",
        saveCodeButton: "Save Character Code",
        loadCodeButton: "Load Character",
        loadCodeLoading: "Loading character<span class=\"dot\">.</span><span class=\"dot\">.</span><span class=\"dot\">.</span>",
        saveCodePlaceholder: "Character code will appear here",
        saveCodeNote: "Tap the button to copy the code.",
        saveCodeCopied: "Character code copied!",
        saveCodeInputEmpty: "Please enter a save code.",
        saveCodeInvalid: "Invalid save code.",
        saveCodeLoaded: "Character loaded.",
        battleCodeLabel: "Opponent Battle Code",
        battleCodeInputPlaceholder: "Enter opponent code",
        battleCodeButton: "Battle",
        battleCodeNote: "Enter opponent code to start battle.",
        battleCodeInputEmpty: "Please enter opponent code.",
        battleCodeInvalid: "Invalid opponent code.",
        battleNoCharacter: "Generate your character first.",
        battleFromGuild: "from guild",
        battleVersusLabel: "VS",
        battleResultPrefix: "Battle Result",
        battleResultRanks: "Your rank {player} vs Opponent rank {opponent}",
        battleResultChance: "chance",
        battleOutcomeWin: "You win",
        battleOutcomeLose: "You lose",
        battleDisabledText: "Battle done",
        battleResetButton: "Reset",
        winrateTitle: "Rank Winrate Chart",
        winrateNoteText: "Estimated winrate based on rank matchup.",
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
        saveCodeButton: "Simpan Kode Karakter",
        loadCodeButton: "Muat Karakter",
        loadCodeLoading: "Memuat karakter<span class=\"dot\">.</span><span class=\"dot\">.</span><span class=\"dot\">.</span>",
        saveCodePlaceholder: "Kode karakter akan muncul di sini",
        saveCodeNote: "Ketuk tombol untuk menyalin kode.",
        saveCodeCopied: "Kode karakter disalin!",
        saveCodeInputEmpty: "Masukkan kode karakter.",
        saveCodeInvalid: "Kode karakter tidak valid.",
        saveCodeLoaded: "Karakter dimuat.",
        battleCodeLabel: "Kode Battle Lawan",
        battleCodeInputPlaceholder: "Masukkan kode lawan",
        battleCodeButton: "Battle",
        battleCodeNote: "Masukkan kode lawan untuk memulai battle.",
        battleFromGuild: "dari guild",
        battleVersusLabel: "VS",
        battleResultPrefix: "Hasil Pertarungan",
        battleResultRanks: "Rank Anda {player} vs Rank Lawan {opponent}",
        battleResultChance: "kesempatan",
        battleOutcomeWin: "Anda menang",
        battleOutcomeLose: "Anda kalah",
        battleDisabledText: "Battle selesai",
        battleResetButton: "Reset",
        winrateTitle: "Tabel Winrate Rank",
        winrateNoteText: "Perkiraan winrate berdasarkan pertandingan rank.",
        enterNameAlert: "Isi nama karakter dulu!",
        enterGuildAlert: "Isi nama guild dulu!",
        placeholderCharacterName: "Masukkan nama karakter",
        placeholderGuildName: "Masukkan nama guild",
        saveCodeLabel: "Kode Karakter",
        saveCodeInputPlaceholder: "Masukkan Kode Karakter",
        bonusLabel: "Bonus",
        bonusStrength: "Kekuatan",
        bonusHealth: "Kesehatan",
        bonusMana: "Mana",
        bonusAgility: "Kelincahan"
    }
};

// Helper functions untuk translate data dari array of objects
// Helper functions for bilingual item rendering from data/*.js
function getItemName(item, lang = currentLang) {
    if (!item) return "";
    if (item.name && typeof item.name === "object") item = item.name;
    if (lang === "indonesian") return item.indonesian || item.english || "";
    return item.english || item.indonesian || "";
}

function getRoleDisplay(roleObj) {
    return getItemName(roleObj);
}

function getSkillDisplay(skillObj) {
    return getItemName(skillObj);
}

function getTitleDisplay(titleObj) {
    return getItemName(titleObj);
}

function getRaceDisplay(race) {
    if (!race) return "";
    if (race.name && typeof race.name === "object") {
        return currentLang === "indonesian" ? race.name.indonesian || race.name.english : race.name.english;
    }
    return race.name || "";
}

function getRaceDescription(race) {
    if (!race) return "";
    if (typeof race === "string") {
        race = races.find(r => r.name?.english === race);
    }

    if (!race) return "";
    if (race.description && typeof race.description === "object") {
        return currentLang === "indonesian" ? race.description.indonesian || race.description.english : race.description.english;
    }
    return race.description || "";
}


gachaBtn.addEventListener("click", startGachaAnimation);
raceSelect.addEventListener("change", updateRaceDescription);
rerollSkillsBtn?.addEventListener("click", rerollSkills);
rerollTitlesBtn?.addEventListener("click", rerollTitles);
saveCodeBtn?.addEventListener("click", saveCharacterCode);
loadCodeBtn?.addEventListener("click", startLoadAnimation);
btnEnglish?.addEventListener("click", () => setLanguage("english"));
btnIndonesian?.addEventListener("click", () => setLanguage("indonesian"));
battleCodeBtn?.addEventListener("click", startBattle);
resetBattleBtn?.addEventListener("click", resetBattle);
logCountButtons.forEach(button => {
    button.addEventListener("click", () => {
        logCountButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

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

function setLoadBtnDefault() {
    const labelText = translations[currentLang]?.loadCodeButton || "Load Character";
    loadCodeBtn.innerHTML = `
        <span class="btn-icon">&lt;&gt;</span>
        <span class="btn-label" id="loadCodeLabel">${labelText}</span>
        <span class="btn-star star-1">★</span>
        <span class="btn-star star-2">★</span>
        <span class="btn-star star-3">★</span>
    `;
}

function setLoadBtnLoading() {
    const loadingText = translations[currentLang]?.loadCodeLoading || `&lt;&gt; Loading<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`;
    loadCodeBtn.innerHTML = `
        <span class="btn-icon">&lt;&gt;</span>
        <span class="btn-label" id="loadCodeLabel">${loadingText}</span>
        <span class="btn-star star-1">★</span>
        <span class="btn-star star-2">★</span>
        <span class="btn-star star-3">★</span>
    `;
}

function showStatusCard() {
    const setupBox = document.querySelector(".setup-box");
    const card = document.querySelector(".card");
    if (setupBox) {
        setupBox.classList.add("hidden");
    }
    if (card) {
        card.classList.remove("hidden");
    }
}

function populateRaceOptions(selectedRace = raceSelect.value) {
    raceSelect.innerHTML = races
        .map(race => `<option value="${race.name.english}">${getRaceDisplay(race)}</option>`)
        .join("");

    if (selectedRace && Array.from(raceSelect.options).some(opt => opt.value === selectedRace)) {
        raceSelect.value = selectedRace;
    }

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
    const selected = races.find(race => race.name?.english === raceSelect.value);

    if (!selected) {
        raceDescription.textContent = translations[currentLang].selectRaceDescription;
        return;
    }

    raceDescription.innerHTML = `
        ${getRaceDescription(selected)}
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
    if (labelSaveCode) labelSaveCode.textContent = translations[lang].saveCodeLabel;
    if (saveCodeInput) saveCodeInput.placeholder = translations[lang].saveCodeInputPlaceholder;
    if (saveCodeBtn) saveCodeBtn.textContent = translations[lang].saveCodeButton;
    if (battleCodeLabel) battleCodeLabel.textContent = translations[lang].battleCodeLabel;
    if (battleCodeInput) battleCodeInput.placeholder = translations[lang].battleCodeInputPlaceholder;
    if (battleCodeBtn) {
        const battleLabel = battleCodeBtn.querySelector(".btn-label");
        if (battleLabel) battleLabel.textContent = translations[lang].battleCodeButton;
    }
    if (resetBattleBtn) resetBattleBtn.textContent = translations[lang].battleResetButton;
    if (battleCodeNote) battleCodeNote.textContent = translations[lang].battleCodeNote;
    if (winrateBoxTitle) winrateBoxTitle.textContent = translations[lang].winrateTitle;
    if (winrateNote) winrateNote.textContent = translations[lang].winrateNoteText;
    if (loadCodeBtn) {
        const loadLabel = loadCodeBtn.querySelector(".btn-label");
        if (loadLabel) loadLabel.textContent = translations[lang].loadCodeButton;
    }
    if (saveNote) saveNote.textContent = translations[lang].saveCodeNote;
    document.getElementById("charName").placeholder = translations[lang].placeholderCharacterName;
    document.getElementById("guildName").placeholder = translations[lang].placeholderGuildName;
    btnEnglish.classList.toggle("active", lang === "english");
    btnIndonesian.classList.toggle("active", lang === "indonesian");
    setGachaBtnDefault();
    setLoadBtnDefault();
    populateRaceOptions(raceSelect.value);
    updateRaceDescription();
    renderWinrateTable();

    if (currentBattleState && battleLogBox && !battleLogBox.classList.contains("hidden")) {
        const logs = generateBattleLogs(currentBattleState.opponent, currentBattleState.outcome, currentBattleState.logCount, lang);
        void renderBattleLogs(logs);
    }
}

function saveCharacterCode() {
    if (!currentCharacter) return;
    const encoded = encodeCharacterCode(currentCharacter);

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(encoded)
            .then(() => {
                if (saveNote) saveNote.textContent = translations[currentLang].saveCodeCopied;
                setTimeout(() => {
                    if (saveNote) saveNote.textContent = translations[currentLang].saveCodeNote;
                }, 2500);
            })
            .catch(() => {
                if (saveNote) saveNote.textContent = "Copy failed. Use Ctrl+C.";
            });
    } else {
        if (saveNote) saveNote.textContent = "Copy unavailable. Use Ctrl+C.";
    }
}

function loadCharacterCode(code) {
    const saveCode = (typeof code === "string" ? code : saveCodeInput?.value?.trim());
    if (!saveCode) {
        if (saveNote) saveNote.textContent = translations[currentLang].saveCodeInputEmpty || "Please enter a save code.";
        return null;
    }

    const payload = decodeCharacterCode(saveCode);
    if (!payload) {
        if (saveNote) saveNote.textContent = translations[currentLang].saveCodeInvalid || "Invalid save code.";
        return null;
    }

    const loaded = parseCharacterPayload(payload);
    if (!loaded) {
        if (saveNote) saveNote.textContent = translations[currentLang].saveCodeInvalid || "Invalid save code.";
        return null;
    }

    return loaded;
}

function loadOpponentCharacterCode(code) {
    const saveCode = (typeof code === "string" ? code : battleCodeInput?.value?.trim());
    if (!saveCode) {
        if (battleCodeNote) battleCodeNote.textContent = translations[currentLang].battleCodeInputEmpty || "Please enter opponent code.";
        return null;
    }

    const payload = decodeCharacterCode(saveCode);
    if (!payload) {
        if (battleCodeNote) battleCodeNote.textContent = translations[currentLang].battleCodeInvalid || "Invalid opponent code.";
        return null;
    }

    const loaded = parseCharacterPayload(payload);
    if (!loaded) {
        if (battleCodeNote) battleCodeNote.textContent = translations[currentLang].battleCodeInvalid || "Invalid opponent code.";
        return null;
    }

    return loaded;
}

function getBattleOutcome(playerRank, opponentRank) {
    const scoreMap = { SSS: 7, SS: 6, S: 5, A: 4, B: 3, C: 2, D: 1, F: 0 };
    const diff = (scoreMap[playerRank] || 0) - (scoreMap[opponentRank] || 0);
    let winChance;

    if (diff >= 3) winChance = 95;
    else if (diff === 2) winChance = 82;
    else if (diff === 1) winChance = 68;
    else if (diff === 0) winChance = 50;
    else if (diff === -1) winChance = 32;
    else if (diff === -2) winChance = 18;
    else winChance = 5;

    const roll = Math.random() * 100;
    const won = roll < winChance;

    return {
        playerRank,
        opponentRank,
        winChance,
        roll: Math.round(roll),
        result: won ? "win" : "lose"
    };
}

function getLogCount() {
    const active = document.querySelector(".log-count-btn.active");
    return active ? Number(active.dataset.count) : 10;
}

function getSkillDisplayName(skill, lang) {
    if (!skill) return lang === "indonesian" ? "keterampilan" : "skill";
    return lang === "indonesian" ? (skill.indonesian || skill.english || "keterampilan") : (skill.english || skill.indonesian || "skill");
}

function formatBattleLine(template, actorName, titleName, skillName) {
    return template
        .replace(/\(name\)/g, actorName)
        .replace(/\(nama\)/g, actorName)
        .replace(/\(title\)/g, titleName || "")
        .replace(/\(skill\)/g, skillName || "");
}

function generateBattleLogs(opponent, outcome, customCount = getLogCount(), lang = currentLang) {
    const playerName = currentCharacter?.playerName || (lang === "indonesian" ? "Kamu" : "You");
    const opponentName = opponent?.playerName || (lang === "indonesian" ? "Musuh" : "Opponent");
    const playerTitle = (currentCharacter?.characterTitles && currentCharacter.characterTitles[0]?.[lang === "indonesian" ? "indonesian" : "english"]) || "";
    const opponentTitle = (opponent?.characterTitles && opponent.characterTitles[0]?.[lang === "indonesian" ? "indonesian" : "english"]) || "";
    const count = Number(customCount) || getLogCount();
    const logLines = [];

    const attackPool = lang === "indonesian" ? attackLogs.id : attackLogs.en;
    const defensePool = lang === "indonesian" ? defenseLogs.id : defenseLogs.en;
    const dodgePool = lang === "indonesian" ? dodgeLogs.id : dodgeLogs.en;

    const playerSkills = (currentCharacter?.characterSkills || []).filter(Boolean);
    const opponentSkills = (opponent?.characterSkills || []).filter(Boolean);

    const startWithPlayer = Math.random() < 0.5;
    const firstActor = startWithPlayer
        ? { name: playerName, title: playerTitle, skills: playerSkills, isPlayer: true }
        : { name: opponentName, title: opponentTitle, skills: opponentSkills, isPlayer: false };
    const secondActor = startWithPlayer
        ? { name: opponentName, title: opponentTitle, skills: opponentSkills, isPlayer: false }
        : { name: playerName, title: playerTitle, skills: playerSkills, isPlayer: true };

    for (let i = 0; i < count - 1; i++) {
        const actor = i % 2 === 0 ? firstActor : secondActor;
        const rand = Math.floor(Math.random() * 3);
        let type = "attack";
        let pool = attackPool;
        if (rand === 1) {
            type = "defense";
            pool = defensePool;
        } else if (rand === 2) {
            type = "dodge";
            pool = dodgePool;
        }
        const template = pool[Math.floor(Math.random() * pool.length)];
        const skill = actor.skills.length > 0
            ? actor.skills[Math.floor(Math.random() * actor.skills.length)]
            : null;
        const line = formatBattleLine(template, actor.name, actor.title, getSkillDisplayName(skill, lang));
        logLines.push({ text: line, type: type, isPlayer: actor.isPlayer });
    }

    const finalActor = ((count - 1) % 2 === 0) ? firstActor : secondActor;
    const finalResultForActor = finalActor.isPlayer
        ? outcome.result
        : (outcome.result === "win" ? "lose" : "win");
    const finalPool = finalResultForActor === "win"
        ? (lang === "indonesian" ? winLogs.id : winLogs.en)
        : (lang === "indonesian" ? loseLogs.id : loseLogs.en);

    const finalTemplate = finalPool[Math.floor(Math.random() * finalPool.length)];
    const finalSkill = finalActor.skills.length > 0
        ? finalActor.skills[Math.floor(Math.random() * finalActor.skills.length)]
        : null;
    const finalLine = formatBattleLine(finalTemplate, finalActor.name, finalActor.title, getSkillDisplayName(finalSkill, lang));
    const finalType = finalResultForActor === "win" ? "win" : "lose";
    logLines.push({ text: finalLine, type: finalType, isPlayer: finalActor.isPlayer });

    return logLines;
}

function formatBattleLogTimestamp(secondsValue) {
    const minutes = Math.floor(secondsValue / 60).toString().padStart(2, "0");
    const remainingSeconds = Math.floor(secondsValue % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}.0`;
}

async function renderBattleLogs(lines) {
    if (!battleLogBox || !battleLogContainer) return;

    const renderId = ++battleLogRenderToken;
    battleLogContainer.innerHTML = "";
    battleLogBox.classList.remove("hidden");

    for (let index = 0; index < lines.length; index++) {
        if (renderId !== battleLogRenderToken) break;

        const logData = lines[index];
        const node = document.createElement("div");
        node.className = "battle-log-line";
        
        // Create icon element with color based on player/opponent
        const iconEl = document.createElement("span");
        iconEl.className = "battle-log-icon";
        iconEl.textContent = "●";
        iconEl.style.color = logData.isPlayer ? "#3b82f6" : "#ef4444";
        
        // Create text element
        const textEl = document.createElement("span");
        textEl.className = "battle-log-text";
        textEl.textContent = logData.text;
        
        // Create type label
        const labelEl = document.createElement("span");
        labelEl.className = "battle-log-type";
        labelEl.textContent = `(${logData.type})`;
        
        node.appendChild(iconEl);
        node.appendChild(textEl);
        node.appendChild(labelEl);
        
        battleLogContainer.insertBefore(node, battleLogContainer.firstChild);
        battleLogContainer.scrollTop = 0;
        node.animate([
            { opacity: 0, transform: "translateY(8px)" },
            { opacity: 1, transform: "translateY(0)" }
        ], {
            duration: 350,
            easing: "ease-out"
        });

        if (index < lines.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    // Update button text based on battle outcome after logs are done
    if (currentBattleState) {
        const resultText = currentBattleState.outcome.result === "win"
            ? translations[currentLang].battleOutcomeWin
            : translations[currentLang].battleOutcomeLose;
        if (document.getElementById("battleCodeBtnLabel")) {
            document.getElementById("battleCodeBtnLabel").textContent = resultText;
        }
    }

    battleLogContainer.scrollIntoView({ behavior: "smooth", block: "center" });
}

function startBattle() {
    if (!currentCharacter) {
        if (battleCodeNote) battleCodeNote.textContent = translations[currentLang].battleNoCharacter || "Generate your character first.";
        return;
    }

    const opponent = loadOpponentCharacterCode(battleCodeInput?.value?.trim());
    if (!opponent) return;
    if (!battleCodeNote) return;

    const playerRank = currentCharacter.overallRank || "F";
    const opponentRank = opponent.overallRank || "F";
    const outcome = getBattleOutcome(playerRank, opponentRank);

    const rankLine = translations[currentLang].battleResultRanks
        .replace("{player}", playerRank)
        .replace("{opponent}", opponentRank);

    const playerName = currentCharacter.playerName || "Unknown";
    const playerGuild = currentCharacter.guildName || "Unknown Guild";
    const opponentName = opponent.playerName || "Unknown";
    const opponentGuild = opponent.guildName || "Unknown Guild";

    const fromGuildText = translations[currentLang].battleFromGuild || "from guild";
    const vsText = translations[currentLang].battleVersusLabel || "VS";

    currentBattleState = {
        opponent,
        outcome,
        logCount: getLogCount()
    };

    const logs = generateBattleLogs(opponent, outcome, currentBattleState.logCount, currentLang);
    void renderBattleLogs(logs);
    battleLogBox?.scrollIntoView({ behavior: "smooth", block: "center" });

    battleCodeNote.innerHTML = "";
    battleCodeNote.appendChild(createRankBadge(playerRank));
    battleCodeNote.appendChild(document.createTextNode(` - ${playerName} ${fromGuildText} ${playerGuild}   ${vsText}   `));
    battleCodeNote.appendChild(createRankBadge(opponentRank));
    battleCodeNote.appendChild(document.createTextNode(` - ${opponentName} ${fromGuildText} ${opponentGuild}`));

    if (battleCodeBtn) {
        battleCodeBtn.classList.remove("win-anim", "lose-anim");
        battleCodeBtn.classList.add(outcome.result === "win" ? "win-anim" : "lose-anim");
        battleCodeBtn.disabled = true;
    }
}

function createRankBadge(rank) {
    const badge = document.createElement("span");
    badge.className = `rank rank-${rank.toLowerCase()}`;
    badge.textContent = rank;
    return badge;
}


function resetBattle() {
    if (battleCodeBtn) {
        battleCodeBtn.disabled = false;
        battleCodeBtn.classList.remove("win-anim", "lose-anim");
        const battleCodeBtnLabel = document.getElementById("battleCodeBtnLabel");
        if (battleCodeBtnLabel) {
            battleCodeBtnLabel.textContent = translations[currentLang].battleCodeButton;
        }
    }
    if (battleCodeNote) {
        battleCodeNote.textContent = translations[currentLang].battleCodeNote;
    }
    if (battleLogBox) {
        battleLogBox.classList.add("hidden");
    }
    if (battleLogContainer) {
        battleLogContainer.innerHTML = "";
    }
    currentBattleState = null;
    if (winrateBox) {
        winrateBox.classList.remove("hidden");
    }
}

function startLoadAnimation(event) {
    event.preventDefault();
    if (loadCodeBtn.disabled) return;

    const code = saveCodeInput?.value?.trim();
    if (!code) {
        if (saveNote) saveNote.textContent = translations[currentLang].saveCodeInputEmpty || "Please enter a save code.";
        return;
    }

    const existingPlayerName = document.getElementById("charName").value.trim();
    const existingGuildName = document.getElementById("guildName").value.trim();

    loadCodeBtn.disabled = true;
    loadCodeBtn.classList.add("loading");
    setLoadBtnLoading();

    setTimeout(() => {
        const loaded = loadCharacterCode(code);
        loadCodeBtn.classList.remove("loading");
        loadCodeBtn.disabled = false;
        setLoadBtnDefault();

        if (loaded) {
            currentCharacter = loaded;
            const nameInput = document.getElementById("charName");
            const guildInput = document.getElementById("guildName");

            if (nameInput) {
                nameInput.value = loaded.playerName || "";
            }
            if (guildInput) {
                guildInput.value = loaded.guildName || "";
            }

            renderCharacter(currentCharacter);
            showStatusCard();
            if (saveNote) saveNote.textContent = translations[currentLang].saveCodeLoaded || "Character loaded.";
        } else {
            if (saveNote) saveNote.textContent = translations[currentLang].saveCodeInvalid || "Invalid save code.";
        }
    }, 2000);
}

function parseCharacterPayload(payload) {
    if (!payload || !payload.race) return null;

    const raceData = races.find(r => r.name?.english === payload.race) || races.find(r => r.name?.indonesian === payload.race);
    const roleData = roles.find(r => r.english === payload.role || r.indonesian === payload.role) || roles[0];
    const skillsData = (payload.skills || []).map(item => {
        const name = typeof item === "string" ? item : item.english || item.indonesian || "";
        const baseSkill = skills.find(s => s.english === name || s.indonesian === name);
        const rank = typeof item === "object" ? item.rank || "" : "";
        if (baseSkill) return { ...baseSkill, rank: rank || baseSkill.rank || "F" };
        return { english: name, indonesian: name, rank: rank || "F" };
    }).filter(Boolean);

    const titlesData = (payload.titles || []).map(item => {
        const name = typeof item === "string" ? item : item.english || item.indonesian || "";
        const baseTitle = titles.find(t => t.english === name || t.indonesian === name);
        const rank = typeof item === "object" ? item.rank || "" : "";
        if (baseTitle) return { ...baseTitle, rank: rank || baseTitle.rank || "F" };
        return { english: name, indonesian: name, rank: rank || "F" };
    }).filter(Boolean);

    const savedRank = payload.overallRank || payload.rarity || payload.rank || "F";
    return {
        playerName: payload.playerName || "Unknown",
        guildName: payload.guildName || "Unknown",
        race: raceData || { name: { english: payload.race, indonesian: payload.race }, bonus: {}, description: { english: payload.description || "", indonesian: payload.description || "" } },
        raceDescription: payload.description || getRaceDescription(raceData),
        role: roleData,
        strength: payload.strength || 0,
        health: payload.health || 0,
        mana: payload.mana || 0,
        agility: payload.agility || 0,
        level: payload.level || 1,
        rarity: payload.rarity || payload.overallRank || payload.rank || "F",
        characterSkills: skillsData,
        characterTitles: titlesData,
        overallRank: savedRank
    };
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



function generateCharacter() {
    const playerName = document.getElementById("charName").value.trim();
    const guildName = document.getElementById("guildName").value.trim();
    const raceValue = document.getElementById("raceSelect").value;

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
    const raceData = races.find(r => r.name?.english === raceValue) || { bonus: {} };
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

    const avgLevel = Math.round((strength + health + mana + agility) / 4);
    const character = {
        playerName,
        guildName,
        race: raceData,
        raceDescription: getRaceDescription(raceData),
        role,
        strength,
        health,
        mana,
        agility,
        level: avgLevel,
        rarity: overallRank,
        characterSkills,
        characterTitles,
        overallRank
    };

    currentCharacter = character;
    renderCharacter(character);
    showStatusCard();

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

function randomStat() {
    return Math.floor(Math.random() * 100) + 1;
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateSkills() {
    const amount = Math.floor(Math.random() * 7) + 1;
    let selected = [];
    while (selected.length < amount) {
        const candidate = randomItem(skills);
        if (!selected.some(s => s.english === candidate.english)) {
            selected.push({
                ...candidate,
                rank: weightedRank()
            });
        }
    }
    return selected;
}


function generateTitles() {
    const amount = Math.floor(Math.random() * 4) + 1;
    const selected = [];
    while (selected.length < amount) {
        const candidate = randomItem(titles);
        if (!selected.some(t => t.english === candidate.english)) {
            selected.push({
                ...candidate,
                rank: weightedRank()
            });
        }
    }
    return selected;
}

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

function renderCharacter(character) {

    document.getElementById("displayName").textContent = character.playerName;
    document.getElementById("displayGuild").textContent = character.guildName;
    document.getElementById("displayRace").textContent = getRaceDisplay(character.race);
    document.getElementById("displayRaceDesc").textContent = character.raceDescription || "-";
    document.getElementById("displayRole").textContent = getRoleDisplay(character.role);

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
                        <img src="${getSkillIcon(skill.english)}" alt="Skill icon" />
                    </div>
                    <div class="item-label">
                        ${getSkillDisplay(skill)}
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
                        <img src="${getTitleIcon(title.english)}" alt="Title icon" />
                    </div>
                    <div class="item-label">
                        ${getTitleDisplay(title)}
                        <div class="rank-bars ${rankColorClass(title.rank)}">${generateRankBars(title.rank)}</div>
                    </div>
                </div>
                <span class="rank rank-${title.rank.toLowerCase()}">${title.rank}</span>
            </li>
        `;
    });
}

function buildWinrateMatrix() {
    const ranks = ["SSS", "SS", "S", "A", "B", "C", "D", "F"];
    const matrix = {};

    const scoreMap = {
        "SSS": 7,
        "SS": 6,
        "S": 5,
        "A": 4,
        "B": 3,
        "C": 2,
        "D": 1,
        "F": 0,
    };

    ranks.forEach(player => {
        matrix[player] = {};
        ranks.forEach(opponent => {
            const diff = scoreMap[player] - scoreMap[opponent];
            let winrate;

            if (diff >= 3) winrate = 95;
            else if (diff === 2) winrate = 82;
            else if (diff === 1) winrate = 68;
            else if (diff === 0) winrate = 50;
            else if (diff === -1) winrate = 32;
            else if (diff === -2) winrate = 18;
            else winrate = 5;

            matrix[player][opponent] = winrate;
        });
    });

    return { ranks, matrix };
}

function renderWinrateTable() {
    if (!winrateTable) return;

    const { ranks, matrix } = buildWinrateMatrix();
    const headerCells = [`<th>${translations[currentLang].winrateTitle}</th>`].concat(ranks.map(rank => `<th>${rank}</th>`)).join("");

    const rows = ranks.map(player => {
        const cells = ranks.map(opponent => `<td>${matrix[player][opponent]}%</td>`).join("");
        return `<tr><th>${player}</th>${cells}</tr>`;
    }).join("");

    winrateTable.innerHTML = `
        <thead><tr>${headerCells}</tr></thead>
        <tbody>${rows}</tbody>
    `;
}

function getSkillIcon(name) {
    const value = typeof name === "string" ? name : name?.english || name?.name?.english || "";
    const lower = value.toLowerCase();

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
    const value = typeof name === "string" ? name : name?.english || name?.name?.english || "";
    const lower = value.toLowerCase();

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