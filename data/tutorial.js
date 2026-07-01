const tutorialContent = {
    en: {
        title: "📖 Tutorial",
        text: `
            <p>Welcome, Adventurer!</p>

            <ol>
                <li><b>Create Character</b><br>
                Enter your <b>Character Name</b>, <b>Guild Name</b>, then choose a <b>Race</b>.</li>

                <li><b>Gacha Character</b><br>
                Press <b>Gacha Character</b> to generate a random character with unique Stats, Skills, and Title.</li>

                <li><b>Save Character</b><br>
                Copy your <b>Save Code</b> to save your character.</li>

                <li><b>Load Character</b><br>
                Paste a Save Code to load your character anytime.</li>

                <li><b>Reroll</b><br>
                Use <b>Reroll Skill</b> or <b>Reroll Title</b> if you want a different result.</li>

                <li><b>Battle</b><br>
                Battle other characters using their Save Code and view the Battle Log.</li>

                <li><b>Language</b><br>
                Switch between 🇺🇸 English and 🇮🇩 Indonesian anytime.</li>
            </ol>

            <p><b>Good luck, and have fun!</b> 🍀</p>
        `,
        button: "Start Adventure",
        checkbox: "Don't show again"
    },

    id: {
        title: "📖 Tutorial",
        text: `
            <p>Selamat datang, Adventurer!</p>

            <ol>
                <li><b>Buat Karakter</b><br>
                Isi <b>Character Name</b>, <b>Guild Name</b>, lalu pilih <b>Race</b>.</li>

                <li><b>Gacha Character</b><br>
                Tekan <b>Gacha Character</b> untuk mendapatkan karakter beserta Stats, Skill, dan Title secara acak.</li>

                <li><b>Simpan Karakter</b><br>
                Salin <b>Save Code</b> agar karaktermu tidak hilang.</li>

                <li><b>Load Character</b><br>
                Masukkan Save Code untuk membuka kembali karaktermu.</li>

                <li><b>Reroll</b><br>
                Gunakan <b>Reroll Skill</b> atau <b>Reroll Title</b> jika ingin hasil yang berbeda.</li>

                <li><b>Battle</b><br>
                Lawan karakter lain menggunakan Save Code dan lihat Battle Log.</li>

                <li><b>Bahasa</b><br>
                Ganti bahasa kapan saja melalui tombol 🇺🇸 / 🇮🇩.</li>
            </ol>

            <p><b>Semoga beruntung mendapatkan karakter terbaik!</b> 🍀</p>
        `,
        button: "Mulai Bermain",
        checkbox: "Jangan tampilkan lagi"
    }
};

function showTutorial(lang = "en") {

    const data = tutorialContent[lang];
    const popup = document.getElementById("tutorialPopup");

    document.getElementById("tutorialTitle").innerHTML = data.title;
    document.getElementById("tutorialBody").innerHTML = data.text;
    document.getElementById("tutorialButton").textContent = data.button;
    document.getElementById("tutorialCheckboxText").textContent = data.checkbox;

    if (popup) {
        popup.classList.remove("hidden");
        popup.classList.add("show");
    }
}