const saveLegacyKey = [17, 43, 71, 97, 23, 59];
const saveVersionPrefix = "GCH2";
const rankMap = { F: 0, D: 1, C: 2, B: 3, A: 4, S: 5, SS: 6, SSS: 7 };
const rankMapReverse = ["F", "D", "C", "B", "A", "S", "SS", "SSS"];

function encodeCharacterCode(character) {
    if (!character) return "";

    const raceIndex = Math.max(0, races.findIndex(r => r.name?.english === character.race?.name?.english || r.name?.english === character.race?.name || r.name?.english === character.race));
    const roleIndex = Math.max(0, roles.findIndex(r => r.english === character.role?.english || r.english === character.role));
    const skillsData = (character.characterSkills || []).slice(0, 7).map(skill => ({
        index: Math.max(0, skills.findIndex(s => s.english === skill.english || s.indonesian === skill.indonesian)),
        rank: rankMap[skill.rank] || 0
    }));
    const titlesData = (character.characterTitles || []).slice(0, 4).map(title => ({
        index: Math.max(0, titles.findIndex(t => t.english === title.english || t.indonesian === title.indonesian)),
        rank: rankMap[title.rank] || 0
    }));

    const bytes = [
        2,
        raceIndex,
        roleIndex,
        character.strength || 0,
        character.health || 0,
        character.mana || 0,
        character.agility || 0,
        skillsData.length
    ];

    skillsData.forEach(item => {
        bytes.push(item.index, item.rank);
    });

    bytes.push(titlesData.length);
    titlesData.forEach(item => {
        bytes.push(item.index, item.rank);
    });

    const encoder = new TextEncoder();
    const nameBytes = encoder.encode(character.playerName || "");
    const guildBytes = encoder.encode(character.guildName || "");
    bytes.push(Math.min(nameBytes.length, 255));
    for (const b of nameBytes.slice(0, 255)) bytes.push(b);
    bytes.push(Math.min(guildBytes.length, 255));
    for (const b of guildBytes.slice(0, 255)) bytes.push(b);

    return saveVersionPrefix + base64Encode(new Uint8Array(bytes));
}

function decodeCharacterCode(code) {
    if (typeof code !== "string") return null;
    if (code.startsWith(saveVersionPrefix)) {
        return decodeCompactPayload(code.slice(saveVersionPrefix.length));
    }
    if (code.startsWith("GCH1-")) {
        return decodeLegacyPayload(code.slice(5));
    }
    return null;
}

function decodeCompactPayload(payload) {
    try {
        const bytes = base64Decode(payload);
        if (bytes.length < 8 || bytes[0] !== 2) return null;

        let pos = 1;
        const raceIndex = bytes[pos++];
        const roleIndex = bytes[pos++];
        const strength = bytes[pos++];
        const health = bytes[pos++];
        const mana = bytes[pos++];
        const agility = bytes[pos++];
        const skillCount = Math.min(bytes[pos++] || 0, 7);

        const skillsData = [];
        for (let i = 0; i < skillCount; i++) {
            const index = bytes[pos++] || 0;
            const rank = rankMapReverse[bytes[pos++] || 0] || "F";
            const baseSkill = skills[index] || { english: "Unknown", indonesian: "Unknown" };
            skillsData.push({ ...baseSkill, rank });
        }

        const titleCount = Math.min(bytes[pos++] || 0, 4);
        const titlesData = [];
        for (let i = 0; i < titleCount; i++) {
            const index = bytes[pos++] || 0;
            const rank = rankMapReverse[bytes[pos++] || 0] || "F";
            const baseTitle = titles[index] || { english: "Unknown", indonesian: "Unknown" };
            titlesData.push({ ...baseTitle, rank });
        }

        let playerName = "";
        let guildName = "";

        if (pos < bytes.length) {
            const nameLength = bytes[pos++] || 0;
            if (nameLength > 0 && pos + nameLength <= bytes.length) {
                playerName = new TextDecoder().decode(bytes.slice(pos, pos + nameLength));
                pos += nameLength;
            }
        }

        if (pos < bytes.length) {
            const guildLength = bytes[pos++] || 0;
            if (guildLength > 0 && pos + guildLength <= bytes.length) {
                guildName = new TextDecoder().decode(bytes.slice(pos, pos + guildLength));
                pos += guildLength;
            }
        }

        return {
            race: races[raceIndex]?.name?.english || "Unknown",
            description: races[raceIndex]?.description?.english || "",
            role: roles[roleIndex]?.english || "Unknown",
            strength,
            health,
            mana,
            agility,
            level: Math.round((strength + health + mana + agility) / 4),
            skills: skillsData,
            titles: titlesData,
            playerName,
            guildName,
            overallRank: calculateOverallRankFromData(strength, health, mana, agility, skillsData, titlesData)
        };
    } catch (error) {
        return null;
    }
}

function decodeLegacyPayload(payload) {
    const bytes = base64Decode(payload);
    const xored = bytes.map((byte, index) => byte ^ saveLegacyKey[index % saveLegacyKey.length]);
    const decoder = new TextDecoder();
    try {
        return JSON.parse(decoder.decode(xored));
    } catch (error) {
        return null;
    }
}

function calculateOverallRankFromData(strength, health, mana, agility, skills, titles) {
    const scoreMapLocal = { F: 5, D: 10, C: 20, B: 35, A: 50, S: 75, SS: 100, SSS: 150 };
    const statScore = strength + health + mana + agility;
    let skillScore = 0;
    skills.forEach(skill => { skillScore += scoreMapLocal[skill.rank] || 0; });
    let titleScore = 0;
    titles.forEach(title => { titleScore += scoreMapLocal[title.rank] || 0; });
    const total = (statScore * 0.50) + (skillScore * 0.35) + (titleScore * 0.15);
    if (total >= 300) return "SSS";
    if (total >= 250) return "SS";
    if (total >= 200) return "S";
    if (total >= 160) return "A";
    if (total >= 120) return "B";
    if (total >= 80) return "C";
    if (total >= 40) return "D";
    return "F";
}

function base64Encode(byteArray) {
    let binary = "";
    byteArray.forEach(byte => {
        binary += String.fromCharCode(byte);
    });
    return btoa(binary);
}

function base64Decode(str) {
    const binary = atob(str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
