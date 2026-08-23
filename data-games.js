/* =====================================================================
   NUMERA — data-games.js
   =====================================================================
   SATU SUMBER DATA untuk SEMUA halaman game Numera:
     - arena.html            (menampilkan 3 game Numera terbaru +
                               preview singkat game eksternal)
     - game-numera.html      (daftar LENGKAP semua game buatan Numera)
     - game-eksternal.html   (daftar LENGKAP game & kuis eksternal +
                               filter platform)

   Guru HANYA perlu mengedit array di file INI. Perubahan otomatis
   muncul di ketiga halaman sekaligus — tidak perlu ubah HTML apa pun.

   ------------------------------------------------------------
   1) NUMERA_GAMES — game HTML buatan Numera sendiri
   ------------------------------------------------------------
   nama       : nama game yang tampil ke siswa
   materi     : nama materi/bab terkait, tampil sebagai label kecil
                di kartu
   deskripsi  : deskripsi singkat 1 kalimat
   tags       : kata kunci materi untuk pencarian. Gunakan array
                huruf kecil. Satu game boleh memiliki beberapa tag.
                Tags digunakan HANYA untuk pencarian dan TIDAK
                ditampilkan pada kartu. Aman dikosongkan ([]) atau
                dihapus untuk game lama — sistem pencarian tetap
                berjalan tanpa error.
   link       : nama file HTML game (kalau satu folder dengan halaman
                arena) atau URL lengkap kalau di-hosting terpisah.
                Boleh dibiarkan "TEMPEL LINK GAME DI SINI" kalau belum
                ada — tombol tetap aman diklik.
   tanggal    : format "YYYY-MM-DD". TIDAK PERLU dipikirkan urutannya
                di dalam array — SISTEM OTOMATIS mengurutkan dari
                tanggal terbaru dan menampilkan 3 TERATAS di section
                "Game Buatan Numera" pada arena.html. Cukup tambah
                game baru dengan tanggal terbaru, sisanya otomatis.
   thumbnail  : (opsional) URL/path gambar thumbnail asli. Kosongkan
                ("") kalau belum ada gambar — otomatis dibuatkan
                thumbnail warna+emoji dari "warna" & "emoji" di bawah.
   warna      : (opsional) kode warna hex untuk thumbnail fallback,
                mis. "#2563EB"
   emoji      : (opsional) emoji untuk thumbnail fallback, mis. "🎯"
   badge      : (opsional) contoh "Baru". Kosongkan ("") kalau tidak
                perlu.

   ------------------------------------------------------------
   2) GAMES — game & kuis dari platform EKSTERNAL
   ------------------------------------------------------------
   nama       : nama game/kuis yang tampil ke siswa
   materi     : nama materi/bab terkait
   platform   : HARUS salah satu dari "Blooket", "Kahoot", "ZEP",
                "Quizizz" — selain itu otomatis masuk "Lainnya"
   deskripsi  : deskripsi singkat 1 kalimat
   tags       : kata kunci materi untuk pencarian. Gunakan array
                huruf kecil. Satu game boleh memiliki beberapa tag.
                Tags digunakan HANYA untuk pencarian dan TIDAK
                ditampilkan pada kartu. Aman dikosongkan ([]) atau
                dihapus untuk game lama — sistem pencarian tetap
                berjalan tanpa error.
   link       : URL lengkap game/kuis tsb (link untuk dimainkan siswa),
                mis. "https://play.blooket.com/play/xxxxxxx"
   ------------------------------------------------------------
   ===================================================================== */

const NUMERA_GAMES = [
    {
        nama: "⚙ Mesin Matematika",
        materi: "Operasi Komposisi Fungsi",
        deskripsi: "Masukkan angka agar mesin berjalan.",
        tags: ["fungsi", "operasi fungsi", "komposisi fungsi", "penjumlahan", "pengurangan"],
        link: "game_mesin_jumlah_kurang_komposisi.html",
        tanggal: "2026-08-20",
        thumbnail: "",
        warna: "#2563EB",
        emoji: "⚙",
        badge: ""
    },
   {
        nama: "💪🏻 Tarik ke Posisi yang Benar",
        materi: "Grafik SPLDV",
        deskripsi: "Seret titik ke posisi tepat pada grafik.",
        tags: ["fungsi", "grafik", "spldv", "titik", "kurva"],
        link: "game_tarik_ke_posisi_yang_benar_spldv.html",
        tanggal: "2026-08-24",
        thumbnail: "",
        warna: "#008080",
        emoji: "💪🏻",
        badge: ""
    },
    {
        nama: "🧩 Susun Langkah",
        materi: "Fungsi Invers",
        deskripsi: "Urutkan langkahnya, pecahkan masalahnya.",
        tags: ["fungsi", "fungsi invers", "invers"],
        link: "game_susunlangkah_fungsiinvers.html",
        tanggal: "2026-08-21",
        thumbnail: "",
        warna: "#7C3AED",
        emoji: "🧩",
        badge: ""
    },
       {
        nama: "🧩 Susun Langkah",
        materi: "Substitusi SPLDV",
        deskripsi: "Urutkan tahapannya.",
        tags: ["spldv", "substitusi", "sistem persamaan linear dua variabel", "metode substitusi"],
        link: "game_susunlangkah_SPLDV_substitusi.html",
        tanggal: "2026-08-23",
        thumbnail: "",
        warna: "##EC4899",
        emoji: "🧩",
        badge: "Baru"
    },
    {
        nama: "🔐 Escape Room",
        materi: "Polinomial",
        deskripsi: "Pecahkan soal matematika dan buka jalan keluar.",
        tags: ["suku banyak", "polinomial", "teorema sisa", "pembagian polinomial", "akar polinomial", "faktor polinomial"],
        link: "game_escape_room_polinomial.html",
        tanggal: "2026-08-22",
        thumbnail: "",
        warna: "#60A5FA",
        emoji: "🔐",
        badge: ""
    },
   {
        nama: "🎡 Putar Dulu",
        materi: "Titik Pusat & Jari-Jari",
        deskripsi: "Putar roda, hadapi soal persamaan lingkaran.",
        tags: ["persamaan lingkaran", "titik pusat", "jari jari", "jari-jari", "bentuk umum", "pusat lingkaran"],
        link: "game_putar_dulu_titik_jarijari_lingkaran.html",
        tanggal: "2026-08-24",
        thumbnail: "",
        warna: "#F5F5DC",
        emoji: "🎡",
        badge: ""
    },
   {
        nama: "🕵️‍♀️ Detektif Matematika",
        materi: "Soal Cerita SPLDV",
        deskripsi: "Kumpulkan petunjuk, hubungkan angka-angkanya, dan temukan kesimpulan yang benar.",
        tags: ["sistem persamaan linear dua variabel", "spldv", "penerapan spldv", "kasus", "SPLDV"],
        link: "game_detektif_penerapanspldv.html",
        tanggal: "2026-08-23",
        thumbnail: "",
        warna: "#F97316",
        emoji: "🕵️‍♀️",
        badge: ""
    },
   {
        nama: "🎯 Tembak Target",
        materi: "Titik Terhadap Lingkaran",
        deskripsi: "Bidik target sesuai jawaban persamaan lingkaran yang benar.",
        tags: ["lingkaran", "kedudukan titik", "persamaan lingkaran"],
        link: "game_tembak_target_kedudukan_titik.html",
        tanggal: "2026-08-22",
        thumbnail: "",
        warna: "#0F172A",
        emoji: "🎯",
        badge: ""
    }
];

const GAMES = [
    // ---------- GAME & KUIS EKSTERNAL ----------
    {
        nama: "Akar & Faktor Polinomial",
        materi: "Polinomial",
        platform: "Blooket",
        deskripsi: "Uji pemahamanmu tentang akar dan faktor polinomial melalui kuis seru.",
        tags: ["polinomial", "akar polinomial", "faktor polinomial"],
        link: "TEMPEL LINK GAME DI SINI"
    },
    {
        nama: "Operasi Polinomial",
        materi: "Polinomial",
        platform: "Kahoot",
        deskripsi: "Kuis cepat seputar penjumlahan, pengurangan, dan perkalian polinomial.",
        tags: ["polinomial", "operasi polinomial", "penjumlahan polinomial", "pengurangan polinomial", "perkalian polinomial"],
        link: "TEMPEL LINK GAME DI SINI"
    },
    {
        nama: "Sifat-sifat Polinomial",
        materi: "Polinomial",
        platform: "ZEP",
        deskripsi: "Jelajahi dunia ZEP sambil menjawab soal-soal polinomial.",
        tags: ["polinomial", "sifat polinomial"],
        link: "TEMPEL LINK GAME DI SINI"
    },
    {
        nama: "Persamaan Lingkaran",
        materi: "Persamaan Lingkaran",
        platform: "Kahoot",
        deskripsi: "Kuis interaktif seputar persamaan lingkaran.",
        tags: ["lingkaran", "persamaan lingkaran"],
        link: "TEMPEL LINK GAME DI SINI"
    },
    {
        nama: "Pusat dan Jari-jari",
        materi: "Persamaan Lingkaran",
        platform: "ZEP",
        deskripsi: "Jelajahi konsep pusat dan jari-jari melalui permainan interaktif.",
        tags: ["lingkaran", "pusat lingkaran", "jari-jari", "persamaan lingkaran"],
        link: "TEMPEL LINK GAME DI SINI"
    },
    {
        nama: "Operasi Aljabar",
        materi: "Aljabar",
        platform: "Quizizz",
        deskripsi: "Latihan cepat operasi aljabar.",
        tags: ["aljabar", "operasi aljabar"],
        link: "TEMPEL LINK GAME DI SINI"
    },
    {
        nama: "Balapan Matematika",
        materi: "Campuran",
        platform: "Quizizz",
        deskripsi: "Kuis seru yang mencakup berbagai materi matematika.",
        tags: ["campuran", "matematika umum"],
        link: "TEMPEL LINK GAME DI SINI"
    }
];

/* =====================================================================
   JANGAN UBAH KODE DI BAWAH INI
   (fungsi bantu & render — dipakai bersama oleh ketiga halaman)
   ===================================================================== */

const PLATFORM_CONFIG = {
    Blooket: { label: "Blooket", color: "#7C3AED", icon: "B" },
    Kahoot:  { label: "Kahoot!", color: "#5B21B6", icon: "K!" },
    ZEP:     { label: "ZEP",     color: "#2563EB", icon: "Z" },
    Quizizz: { label: "Quizizz", color: "#EA580C", icon: "Q" }
};
const PLATFORM_DEFAULT = {
    label: "Lainnya",
    color: "#16A34A",
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="8" width="19" height="10" rx="5"/><line x1="7" y1="13" x2="7" y2="13.01"/><line x1="7" y1="10.5" x2="7" y2="15.5"/><line x1="5.5" y1="13" x2="8.5" y2="13"/></svg>'
};

function platformConfig(platform){
    return PLATFORM_CONFIG[platform] || PLATFORM_DEFAULT;
}

function platformBadgeHTML(platform, size){
    const cfg = platformConfig(platform);
    const inner = cfg.icon ? cfg.icon : cfg.iconSvg;
    return `<div class="${size}" style="background:${cfg.color};">${inner}</div>`;
}

// Validasi link sederhana: jika guru belum mengganti placeholder
// (atau field link kosong), tombol tetap aman diklik — cukup
// diarahkan ke "#" tanpa membuka tab baru, tidak ada error apa pun.
const LINK_PLACEHOLDER_PATTERNS = ['tempel link'];
function isLinkFilled(link){
    if(!link) return false;
    const clean = link.trim().toLowerCase();
    if(clean === '' || clean === '#') return false;
    return !LINK_PLACEHOLDER_PATTERNS.some(p => clean.includes(p));
}
function safeLinkAttrs(link){
    const filled = isLinkFilled(link);
    return {
        href: filled ? link : '#',
        targetRel: filled ? 'target="_blank" rel="noopener"' : ''
    };
}

/* ---------------- GAME BUATAN NUMERA (kartu + urutan otomatis) ---------------- */
const ICON_PLAY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 4 20 12 6 20 6 4"/></svg>';

function numeraThumbHTML(game){
    if(game.thumbnail && game.thumbnail.trim() !== ''){
        return `<img src="${game.thumbnail}" alt="${game.nama}" class="numera-thumb-img" loading="lazy">`;
    }
    const warna = game.warna || '#2563EB';
    return `<div class="numera-thumb-fallback" style="background:linear-gradient(155deg, ${warna}, ${warna}CC);">
                <span class="numera-thumb-emoji">${game.emoji || '🎮'}</span>
            </div>`;
}

// Urutkan dari tanggal terbaru -> terlama. Tidak bergantung pada posisi
// objek di dalam array NUMERA_GAMES, jadi guru bisa menambah game baru
// di mana saja — urutan tetap otomatis benar.
function numeraTerurut(){
    return [...NUMERA_GAMES].sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
}

function buatKartuNumera(game){
    const { href, targetRel } = safeLinkAttrs(game.link);
    const el = document.createElement('a');
    el.className = 'numera-row';
    el.href = href;
    if(targetRel){ el.target = '_blank'; el.rel = 'noopener'; }
    el.innerHTML = `
        <div class="numera-top">
            <div class="numera-thumb">
                ${numeraThumbHTML(game)}
                ${game.badge ? `<span class="numera-thumb-badge">${game.badge}</span>` : ''}
            </div>
            <div class="numera-info">
                <div class="numera-meta">
                    <span class="numera-tag-original">Numera Original</span>
                    <span class="dot"></span>
                    <span class="numera-meta-materi">${game.materi || ''}</span>
                </div>
                <div class="numera-title">${game.nama}</div>
                <p class="numera-desc">${game.deskripsi || ''}</p>
            </div>
        </div>
        <div class="numera-actions">
            <span class="numera-play-btn">${ICON_PLAY} Mainkan</span>
        </div>
    `;
    return el;
}

/* ---------------- GAME & KUIS EKSTERNAL (baris + filter) ---------------- */
function buatBarisGame(item){
    const cfg = platformConfig(item.platform);
    const { href, targetRel } = safeLinkAttrs(item.link);
    const row = document.createElement('div');
    row.className = 'game-row';
    row.innerHTML = `
        ${platformBadgeHTML(item.platform, 'game-badge')}
        <div class="game-info">
            <div class="game-name">${item.nama}</div>
            <div class="game-meta">${cfg.label}<span class="dot"></span>${item.materi}</div>
        </div>
        <a class="btn-outline" href="${href}" ${targetRel}>Mainkan</a>
    `;
    return row;
}
