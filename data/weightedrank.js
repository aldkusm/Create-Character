// Rank weight calculation with percentage distribution
function weightedRank() {

    const roll = Math.random() * 100;

    if (roll < 35) return "F";      // 35%
    if (roll < 60) return "D";      // 25%
    if (roll < 75) return "C";      // 15%
    if (roll < 85) return "B";      // 10%
    if (roll < 92) return "A";      // 7%
    if (roll < 97) return "S";      // 5%
    if (roll < 99) return "SS";     // 2%

    return "SSS";                   // 1%
}