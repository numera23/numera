/* =====================================================================
   NUMERA — data-games.js
   =====================================================================
   SATU SUMBER DATA untuk SEMUA halaman game Numera:
     - arena.html            (menampilkan 3 game Numera terbaru +
                               preview singkat Aktivitas Kelas)
     - game-numera.html      (daftar LENGKAP semua game buatan Numera)
     - game-eksternal.html   (daftar LENGKAP Aktivitas Kelas — kegiatan
                               yang dimainkan bersama guru & siswa
                               langsung di kelas, bukan game digital)

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
   2) GAMES — AKTIVITAS KELAS
   ------------------------------------------------------------
   Aktivitas kelas yang dimainkan bersama secara langsung (guru +
   siswa di kelas), BUKAN game/kuis digital yang dimainkan sendiri
   melalui HP.

   Struktur SENGAJA dibuat sesederhana mungkin — cukup 4 field:

   nama       : nama aktivitas yang tampil ke siswa (boleh diawali
                emoji), mis. "🏃 Four Corners"
   materi     : gunakan "Berbagai Materi" (aktivitas kelas biasanya
                bisa dipakai untuk banyak materi berbeda — bukan
                nama materi/bab spesifik)
   deskripsi  : deskripsi singkat 1 kalimat
   link       : gunakan null kalau aktivitas ini tidak mempunyai
                halaman siswa langsung (paling umum, karena
                dijalankan guru di kelas). Kalau memang ada halaman
                siswa, isi dengan nama file HTML atau URL lengkapnya.
                JANGAN isi dengan "#" atau string "null".

   Untuk menambah aktivitas baru, copy salah satu objek di bawah ini
   lalu ubah nama, materi, deskripsi, dan link — aktivitas otomatis
   muncul di arena.html dan game-eksternal.html, tanpa perlu
   mengedit HTML apa pun.
   ------------------------------------------------------------
   ===================================================================== */

const NUMERA_GAMES = [
    {
        nama: "⚙ Mesin Matematika",
        materi: "Komposisi Fungsi",
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
        nama: "🤝🏼 Pasangkan & Buktikan",
        materi: "Metode Grafik SPLDV",
        deskripsi: "Pasangkan persamaan dengan grafiknya, lalu buktikan kalau kamu jawabnya gak ngasal.",
        tags: ["spldv", "grafik", "sistem persamaan linear dua variabel", "metode grafik"],
        link: "game_pasangkan_buktikan_grafik_spldv.html",
        tanggal: "2026-08-24",
        thumbnail: "",
        warna: "#FBCEB1",
        emoji: "🤝🏼",
        badge: "Baru"
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
        deskripsi: "Urutkan langkah pemecahan masalah.",
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
        deskripsi: "Urutkan langkah pemecahan masalah.",
        tags: ["spldv", "substitusi", "sistem persamaan linear dua variabel", "metode substitusi"],
        link: "game_susunlangkah_SPLDV_substitusi.html",
        tanggal: "2026-08-23",
        thumbnail: "",
        warna: "#EC4899",
        emoji: "🧩",
        badge: ""
    },
    {
        nama: "🔐 Escape Room",
        materi: "Polinomial",
        deskripsi: "Pecahkan soal matematika & dapatkan kodenya.",
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
        deskripsi: "Putar roda keberuntungan. Semoga kamu tidak sial.",
        tags: ["persamaan lingkaran", "titik pusat", "jari jari", "jari-jari", "bentuk umum", "pusat lingkaran"],
        link: "game_putar_dulu_titik_jarijari_lingkaran.html",
        tanggal: "2026-08-24",
        thumbnail: "",
        warna: "#F5F5DC",
        emoji: "🎡",
        badge: ""
    },
   {
        nama: "🏆 Siapa yang Mau Jadi Juara",
        materi: "Fungsi Trigonometri",
        deskripsi: "Kuis Who Wants to be a Millionaire ala Numera.",
        tags: ["sin", "cos", "tan", "periode", "amplitudo", "fungsi trigonometri", "kuis"],
        link: "game_siapa_mau_juara_fungtrig.html",
        tanggal: "2026-08-25",
        thumbnail: "",
        warna: "#000080",
        emoji: "🏆",
        badge: "Baru"
    },
   {
        nama: "₪ Labirin Gelap",
        materi: "Teorema Faktor",
        deskripsi: "Jelajahi, pecahkan tantangan, temukan jalan keluar!",
        tags: ["polinomial", "teorema faktor", "suku banyak"],
        link: "game_labirin_teorema_faktor.html",
        tanggal: "2026-08-24",
        thumbnail: "",
        warna: "#CE46AE",
        emoji: "₪",
        badge: ""
    },
   {
        nama: "🎣 Pancing Jawabannya!",
        materi: "Operasi Komposisi",
        deskripsi: "Pancing ikan yang bawa jawaban benar.",
        tags: ["komposisi fungsi", "penjumlahan", "pengurangan", "substitusi", "fungsi invers"],
        link: "game_tangkap_jawabannya.html",
        tanggal: "2026-08-30",
        thumbnail: "",
        warna: "#143D56",
        emoji: "🎣",
        badge: "Baru"
    },
   {
        nama: "🕵️‍♀️ Detektif Misteri",
        materi: "Soal Cerita SPLDV",
        deskripsi: "Kumpulkan petunjuk & temukan kesimpulan yang benar.",
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
        deskripsi: "Bidik target sesuai jawaban benar.",
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

    // ==================================================
    // AKTIVITAS KELAS
    // Tambahkan aktivitas kelas baru di bagian ini.
    // ==================================================

    {
        nama: "🏃 Four Corners",
        materi: "Berbagai Materi",
        deskripsi: "Pilih jawaban, bergerak ke sudut, dan bertahan sampai akhir.",
        link: null
    },

    {
        nama: "🏊 Swim or Sink",
        materi: "Berbagai Materi",
        deskripsi: "Jawab soal, selamatkan anggota kelompok, atau tenggelamkan lawan.",
        link: null
    }

];

/* =====================================================================
   JANGAN UBAH KODE DI BAWAH INI
   (fungsi bantu & render — dipakai bersama oleh ketiga halaman)
   ===================================================================== */

// Ikon generik untuk semua Aktivitas Kelas (satu kategori, jadi
// cukup satu ikon konsisten — tidak perlu ikon berbeda per item).
const AKTIVITAS_KELAS_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M2.5 20v-1.2A4.3 4.3 0 0 1 6.8 14.5h4.4A4.3 4.3 0 0 1 15.5 18.8V20"/><circle cx="16.7" cy="8.3" r="2.2"/><path d="M15.6 14.6a4 4 0 0 1 3.4 3.9V20"/></svg>';

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

/* ---------------- AKTIVITAS KELAS (baris) ---------------- */
function buatBarisGame(item){
    const filled = isLinkFilled(item.link);
    const { href, targetRel } = safeLinkAttrs(item.link);
    const row = document.createElement('div');
    row.className = 'game-row';
    row.innerHTML = `
        <div class="game-badge" style="background:var(--primary);">${AKTIVITAS_KELAS_ICON}</div>
        <div class="game-info">
            <div class="game-name">${item.nama}</div>
            <div class="game-meta">Aktivitas Kelas<span class="dot"></span>${item.materi || ''}</div>
        </div>
        ${filled ? `<a class="btn-outline" href="${href}" ${targetRel}>Mainkan</a>` : ''}
    `;
    return row;
}
