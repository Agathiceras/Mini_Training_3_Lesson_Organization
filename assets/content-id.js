/* Mini_Training_3_Lesson_Organization - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Organisasi Pelajaran & Kedisiplinan — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Menjalankan Pelajaran yang <span class=\"h-pill\">Terorganisir</span>",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang mengajukan refund karena kelas yang tidak terorganisir atau masalah kedisiplinan di kelas. Di sini kami akan menunjukkan apa yang bisa kamu lakukan sebagai tutor dan cara menangani situasi seperti ini.",
    heroWork:"Selesaikan 5 modul singkat. Setiap cek modul butuh nilai 70%+ untuk membuka modul berikutnya. Total sekitar 25–30 menit.",
    startBtn:"🚀 Mulai Pelatihan",
    pathLabel:'Jalur belajarmu',
    devTitle:'Dev: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai cek modul',
    finishBtn:'▶ Selesaikan mini-training',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Cek modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Cek modul — soal {i} dari {n}',
    scoreSoFar:'Skor sementara: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum berhasil',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resDone:"Kamu sudah menyelesaikan mini-training ini.",
    resNeed:'Kamu butuh 70% untuk membuka modul berikutnya. Tinjau lagi bagian di atas, lalu coba cek ini sekali lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resFinish:'Lanjut',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Mini-Training Selesai',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu sudah menyelesaikan mini-training ini.</strong>",
    doneP2:"Semuanya sudah selesai di sini! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka mini-training ini untuk menuntaskan tugasnya.",
    doneP3:"👉 <strong>Jika ada cek atau penilaian yang tercantum tepat di bawah pelatihan ini di LMS, pastikan kamu menyelesaikannya dan mencapai nilai kelulusan</strong> — jika tidak, tugasnya bisa tetap tercatat belum selesai.",
    doneP4:'Semoga sukses! ❤️',
    doneP5:'',
    devUnlockAlert:'Mode dev: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode dev AKTIF — semua modul terbuka',
    devOff:'🔒 Mode dev NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE DEV',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:',
    cvSee:'Yang kamu lihat:',
    cvDo:'Yang kamu lakukan:',
    dtExample:'Contoh dari kelas sungguhan',
    dtNext:'Berikutnya:',
    dtDone:"✅ Itu dia keempat area. Selanjutnya, klasifikasikan apa yang kamu lihat.",
    tlVideoTitle:'{label} — contoh dari kelas sungguhan',
    tlVideoMeta:'Tonton seperti apa fase ini dalam pelajaran sungguhan'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'🧩', color:'var(--coral)',
 title:'Mengapa Kamu di Sini',
 desc:'Mengapa organisasi pelajaran dan kedisiplinan adalah alasan yang paling cepat bisa kamu perbaiki — dan aturan yang berlaku jika permintaan refund sudah masuk.',
 obj:'Memahami mengapa organisasi pelajaran dan kedisiplinan adalah alasan yang paling langsung berkaitan dengan caramu mengelola kelas, dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'🧩 Dua ekstrem, satu akar masalah', html:`
   <div class="card"><p>Dua kelas yang tampak sangat berbeda bisa sama-sama ditandai dengan alasan ini: kelas yang terasa kacau, dan kelas yang menjadi sunyi. Keduanya tentang hal yang sama — apakah setiap anak merasa pelajaran itu tempat yang aman dan terstruktur untuk ikut serta.</p></div>
   ${co('co-idea','🎯',`<p><strong>Ini satu-satunya alasan di daftar ini yang paling langsung berkaitan dengan perilaku tutor — dan karena itu, alasan yang paling cepat bisa kamu perbaiki.</strong> Tidak seperti level atau kebutuhan khusus, ini adalah keterampilan yang bisa kamu ubah mulai pelajaran berikutnya, tanpa perlu izin dari siapa pun.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah tentang menangkap tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena sebuah keluarga <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya — baca dulu, lalu gunakan sisa pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaannya sendiri dibuat oleh Client Service, bukan oleh kamu</strong> — bagian itu bukan wewenangmu. Yang masih menjadi bagianmu adalah semua yang terjadi di kelas mulai sekarang, dan itu bukan hal kecil.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Jangan membicarakan permintaan refund itu sama sekali</strong> — tidak kepada anak, tidak kepada keluarga — kecuali Client Service secara jelas memintamu menyampaikan sesuatu yang spesifik. Tugasmu sekarang adalah pelajarannya, bukan percakapan itu.</p>`)}
  `},
  {t:'🎯 Pelajaran berikutnya adalah kesempatan untuk mempertahankannya', html:`
   <div class="card"><p>Mungkin kamu tidak punya kesempatan untuk mengubah hal lain. Perlakukan pelajaran berikutnya dengan anak ini sebagai momen penentu.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Beri dia giliran yang sungguhan.</strong> Bukan pertanyaan basa-basi — tapi momen nyata saat dia diperhatikan dan berhasil.`},
     {ic:'🏆', html:`<strong>Ciptakan keberhasilan yang cepat dan terlihat.</strong> Dia harus meninggalkan kelas dengan perasaan mampu, bukan tertinggal.`},
     {ic:'👀', html:`<strong>Perhatian yang spesifik</strong> — buat dia merasa diperhatikan karena sesuatu yang konkret, bukan sekadar dipuji secara umum.`},
     {ic:'🤐', html:`<strong>Jangan menyinggung permintaan refund</strong> — bahkan jika anak itu yang membahasnya, alihkan dengan hangat dan lanjutkan mengajar.`}
   ])}
  `},
  {t:'📮 Laporkan dengan cepat, dan ingat satu kalimat yang aman', html:`
   <div class="card"><p>Kamu bisa tahu bahwa ada permintaan refund dari komentar Client Service di profil anak di BO — tidak ada sistem otomatis yang memberitahumu. Begitu kamu tahu, apa yang kamu lihat di pelajaranmu adalah informasi yang tidak bisa didapatkan Client Service dengan cara lain.</p></div>
   ${numlist([
     'Tinggalkan komentar di BO pada hari yang sama berisi persis apa yang kamu lihat — tanggal dan detail, bukan kesan',
     'Sertakan kata-kata keluarga itu sendiri, apa adanya, jika kamu punya',
     'Libatkan Team Leader-mu pada hari yang sama',
     'Jangan pernah mengonfirmasi bahwa refund sudah disetujui, atau membahas nominal apa pun'
   ])}
   ${co('co-ok','✅',`<p><strong>Kalimat yang selalu aman untuk diucapkan:</strong> <em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em> Di situlah bagianmu dalam percakapan berakhir — Client Service yang akan melanjutkannya.</p>`)}
  `},
  {t:'🌱 Pertahankan setelahnya', html:`
   <div class="card"><p>Entah permintaannya dibatalkan, anak itu tetap di grupmu, atau pindah ke tutor atau format lain, tetap berikan perhatian ekstra selama beberapa pelajaran berikutnya. Upaya mempertahankan yang hanya bertahan satu pelajaran lalu diam-diam kembali seperti biasa sering kali tidak berhasil sama sekali.</p></div>
  `}
 ]
},
{id:'discipline', numLabel:'Modul 1', emoji:'⚖️', color:'var(--coral)',
 title:'Kedisiplinan dan Fleksibilitas',
 desc:'Dua ekstrem yang dihadapi tutor di kelas online, cara menangani masing-masing sesuai usia, dan cara menyesuaikan tugas tanpa kehilangan tujuan pembelajaran.',
 obj:'Mengenali dua pola ekstrem — terlalu ribut, atau kelas yang sunyi — dan menerapkan teknik yang sesuai usia untuk masing-masing, serta tahu kapan sebaiknya menyesuaikan tugas daripada berebut kendali.',
 sections:[
  {t:'📢 Ekstrem pertama: terlalu ribut', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1760/860"><img src="Pictures_T3/image1.png" alt="Seorang anak menutup telinga di ruangan yang bising" style="width:109.09%;left:-4.545%;top:-12.56%"></div>
   <div class="card"><p>Siswa saling bicara tentang hal yang tidak berhubungan, menggunakan bahasa yang tidak pantas, tidak menghormati teman sekelas. Jika dibiarkan, diam-diam kelas belajar bahwa apa pun boleh dilakukan.</p></div>
   <div class="card"><h4>Anak yang lebih kecil (6–8)</h4><ul>
     <li>Jadikan aturan sebagai permainan: “volume suara” sebagai tombol putar yang bisa kamu tunjuk, bukan omelan</li>
     <li>Alihkan dengan tugas, bukan perintah: “tunjukkan layarmu dan yuk kita buat bareng” lebih ampuh daripada “berhenti ngobrol”</li>
     <li>Puji perilaku yang ingin kamu lihat, langsung dan spesifik, tepat saat itu terjadi</li>
   </ul></div>
   <div class="card"><h4>Siswa yang lebih besar (12+)</h4><ul>
     <li>Sebutkan secara langsung dan singkat, empat mata jika memungkinkan: “yuk, chat-nya tetap sesuai topik supaya semua bisa mengikuti”</li>
     <li>Beri mereka peran yang menyalurkan energinya — memimpin satu langkah, membantu teman</li>
     <li>Sampaikan harapanmu sekali, dengan tenang, dan tindak lanjuti secara konsisten alih-alih mengulang-ulang peringatan</li>
   </ul></div>
  `},
  {t:'🤫 Ekstrem kedua: kelas yang sunyi', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1744/860"><img src="Pictures_T3/image2.png" alt="Seorang anak pemalu bersembunyi di balik lengannya" style="width:110.09%;left:-5.046%;top:-12.56%"></div>
   <div class="card"><p>Siswa yang tidak mau bicara dan tidak mau menyalakan kamera. Ini umum terjadi pada praremaja dan remaja — sering kali karena malu atau kurang percaya diri, meskipun bisa juga tanda tidak tertarik, jadi tetap perhatikan.</p></div>
   ${stepFlow([
     {ic:'1️⃣', label:'Minta dengan ramah untuk menyalakan kamera'},
     {ic:'2️⃣', label:'Jika tidak berhasil, coba cara lain untuk membantunya merasa aman'},
     {ic:'3️⃣', label:'Kenali dia — minatnya adalah pintu masukmu'},
     {ic:'4️⃣', label:'Masih belum berhasil? Coba partisipasi secara pribadi, selalu dengan kalimat yang menunjukkan bahwa ini ruang yang aman'}
   ])}
   ${co('co-idea','💡',`<p><strong>Ide konkret:</strong> biarkan dia tetap mematikan kamera tapi memasang latar belakang bergambar sesuatu yang dia sukai — atau, di kursus desain/seni, ajak dia menggambar sesuatu yang mewakili dirinya (bukan dirinya secara harfiah) sebagai latar belakang. Ajak seluruh grup melakukan hal yang sama, supaya terasa sebagai kegiatan bersama, bukan menyorot satu orang.</p>`)}
   <div class="card"><h4>Contoh kalimat sesuai usia</h4>
   <p><strong>Lebih kecil (6–8):</strong> <em>“Kamu nggak harus menunjukkan wajahmu kalau nggak mau — tapi aku pengin banget lihat latar belakang yang kamu pilih! Bisa ceritakan tentang itu?”</em></p>
   <p><strong>Lebih besar (12+):</strong> <em>“Nggak usah buru-buru soal kamera — kapan pun kamu siap saja. Sementara itu, kalau lebih gampang, kamu bisa ketik di chat aja.”</em></p></div>
  `},
  {t:'🎨 Saat distraksi berarti tugasnya sendiri yang perlu disesuaikan', html:`
   <div class="card"><p>Terkadang “ketidakdisiplinan” sebenarnya adalah siswa yang tidak terhubung karena latihannya sendiri tidak cocok untuknya — dia tidak mau mengerjakan yang diminta, atau terus melamun.</p></div>
   ${co('co-ok','✅',`<p><strong>Sesuaikan, tanpa kehilangan tujuan pembelajaran.</strong> Jika tujuan hari ini adalah belajar membuat animasi, dan siswa tidak mau mengikuti cerita di rencana pelajaran, biarkan dia menganimasikan karakter, benda, atau hewan apa pun yang membuatnya semangat. Contoh: tujuannya adalah mempelajari teknik animasi pixel art — siswa boleh menganimasikan benda apa pun yang dia pilih, selama dia tetap melatih tekniknya.</p>`)}
  `},
  {t:'👪 Komunikasi dengan keluarga dan aturan kelas', html:`
   ${co('co-idea','📮',`<p><strong>Laporkan kasus ketidakdisiplinan, diam yang terus-menerus, atau distraksi yang berat</strong> untuk membantu membangun gambaran yang lebih lengkap tentang siswa — dan karena orang tua, begitu tahu, sering kali bisa membantu memperbaiki perilakunya di rumah.</p>`)}
   ${co('co-star','📜',`<p><strong>Tetapkan aturan kelas sejak pelajaran pertama</strong>, dan pastikan siswa memahami dan menyetujuinya — bukan hanya disebutkan sekali lalu dianggap sudah dipahami.</p>`)}
   <img class="mt-pic" src="Pictures_T3/rules.png" alt="Contoh slide: Aturan perilaku di kelas">
  `}
 ],
 ix:{
  title:'Kedisiplinan dan Fleksibilitas — cek modul',
  instr:'70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:'Seorang siswa yang lebih kecil (6–8) terus bicara saat pelajaran tentang hal yang tidak berhubungan. Apa langkah pertama yang lebih baik?', opts:['Perintah tegas untuk berhenti bicara, diulang sampai dia mendengarkan','Menunggu saja — biasanya akan berhenti sendiri','Mengalihkannya ke tugas, dan memuji perilaku yang kamu inginkan begitu perilaku itu muncul'], correct:2, fb:'Dengan anak yang lebih kecil, mengalihkan ke aktivitas — dan menangkap perilaku baik tepat saat terjadi — lebih efektif daripada sekadar perintah.'},
   {type:'choice', prompt:'Seorang siswa menolak mengikuti latihan bercerita hari ini tapi dengan senang hati mau menganimasikan hal lain. Apa yang sebaiknya kamu lakukan?', opts:['Membiarkannya menganimasikan hal yang membuatnya semangat, selama dia tetap melatih keterampilan yang sedang diajarkan','Bersikeras dengan latihan persis seperti yang tertulis, supaya grup tetap seragam','Melewatkan aktivitas itu untuk siswa tersebut dan lanjut'], correct:0, fb:'Fleksibilitas dalam konten, tanpa kehilangan tujuan pembelajaran, membuat siswa tetap terlibat dan tetap belajar.'},
   {type:'choice', prompt:'Kapan aturan kelas sebaiknya ditetapkan?', opts:['Hanya saat ada masalah, supaya terasa relevan','Sejak pelajaran pertama — dan dipastikan dipahami serta disetujui','Sebulan sekali, sebagai pengingat untuk seluruh grup'], correct:1, fb:'Aturan yang ditetapkan dan dikonfirmasi sejak pelajaran pertama mencegah sebagian besar hal yang dibahas di modul ini.'},
   {type:'choice', prompt:'Mengapa kasus diam yang terus-menerus atau distraksi perlu dilaporkan kepada keluarga?', opts:['Karena tutor tidak boleh menangani perilaku siswa sendiri','Hanya jika mulai memengaruhi nilai siswa','Ini membangun gambaran yang lebih lengkap tentang siswa, dan orang tua sering kali bisa membantu di rumah'], correct:2, fb:'Melapor bukan soal mencari siapa yang salah — ini memberi orang tua gambaran yang juga bisa mereka tindak lanjuti.'}
  ]
 }
},
{id:'selfreg', numLabel:'Modul 2', emoji:'🧘', color:'var(--coral)',
 title:'Regulasi Diri dan Ko-Regulasi',
 desc:'Bagaimana reaksi emosionalmu sendiri, sebagai orang dewasa di kelas, membentuk perilaku setiap siswa di dalamnya — dan latihan untuk momen-momen sulit yang paling umum.',
 obj:'Memahami regulasi diri dan ko-regulasi, menerapkannya pada reaksimu sendiri saat menghadapi ketidakdisiplinan, agresi, distraksi, dan diam, serta berlatih apa yang perlu dikatakan di empat momen sulit yang paling umum.',
 sections:[
  {t:'🧘 Arti istilah-istilah ini dalam praktik', html:`
   <div class="card"><p><strong>Regulasi diri</strong> adalah mengelola kondisi emosimu sendiri — menyadari bahwa kamu sedang kesal atau terguncang, lalu memilih responsmu alih-alih bereaksi secara impulsif.</p>
   <p><strong>Ko-regulasi</strong> adalah apa yang terjadi selanjutnya: anak-anak, terutama yang lebih kecil, “meminjam” kondisi emosinya dari orang dewasa yang tenang (atau tidak tenang) di ruangan itu. Reaksimu tidak hanya menanggapi perilaku mereka — reaksimu secara aktif membentuknya.</p></div>
   ${co('co-idea','💡',`<p>Ini berlaku langsung untuk setiap situasi di Modul 1: ketidakdisiplinan, siswa yang agresif, siswa yang terdistraksi, siswa yang diam. Regulasi dirimu adalah langkah pertama di setiap situasi itu, sebelum teknik apa pun.</p>`)}
  `},
  {t:'🎭 Menerapkannya di setiap situasi', html:`
   ${iconGrid([
     {ic:'📢', html:`<strong>Ketidakdisiplinan.</strong> Tanggapi dengan tenang dan lugas, bukan ketus atau kesal — tutor yang jengkel membuat kelas yang ribut semakin ribut; tutor yang tenang meredakannya.`},
     {ic:'😠', html:`<strong>Siswa yang agresif.</strong> Pelankan suara dan tempo bicaramu, jangan mengikuti intensitasnya. Tenangkan dirimu dulu, baru tangani perilakunya.`},
     {ic:'📱', html:`<strong>Siswa yang terdistraksi.</strong> Alihkan dengan rasa ingin tahu, bukan frustrasi — “apa yang lagi menarik perhatianmu sekarang?” terasa sangat berbeda dibandingkan helaan napas kesal.`},
     {ic:'🤐', html:`<strong>Siswa yang diam.</strong> Kesabaran terasa sebagai rasa aman. Ketidaksabaran yang terlihat terasa sebagai tekanan, dan tekanan membuat anak yang pendiam semakin diam.`}
   ])}
  `},
  {t:'🧯 Yang berlaku di setiap momen sulit', html:`
   ${iconGrid([
     {ic:'📜', html:`<strong>Kembali ke aturan kelas.</strong> Aturan yang kalian sepakati di pelajaran pertama adalah peganganmu — rujuk aturan itu, bukan kekesalanmu sendiri.`},
     {ic:'🧊', html:`<strong>Tetap tenang, dan terdengar tenang.</strong> Ambil jeda sejenak sebelum merespons, supaya kamu terdengar tenang meskipun belum merasa tenang. Anak-anak menangkap nada bicara lebih cepat daripada kata-kata.`},
     {ic:'🛡️', html:`<strong>Lindungi anggota grup lainnya.</strong> Jika seorang siswa menggunakan bahasa kasar atau menyerang teman sekelasnya, kamu bisa membisukannya sebentar. Setiap anak lainnya berhak mendapatkan pelajaran yang aman.`},
     {ic:'🤝', html:`<strong>Tegas soal rasa hormat.</strong> Tenang bukan berarti lembek: menghormati orang lain tidak bisa ditawar, dan grup perlu melihatmu menjaga batas itu.`},
     {ic:'👪', html:`<strong>Minta bantuan orang tua jika perlu</strong> — bahkan saat pelajaran berlangsung, jika situasinya tidak bisa diredakan dan orang tuanya ada di dekat anak.`},
     {ic:'🌱', html:`<strong>Anggap kesalahan sebagai hal yang wajar.</strong> Saat ada yang salah dalam sebuah tugas, perlakukan sebagai kesempatan untuk belajar, di depan semua orang.`},
     {ic:'📝', html:`<strong>Laporkan.</strong> Beri tahu keluarga tentang kejadiannya dan tinggalkan komentar di BO, supaya ada catatannya dan tidak ada yang terkejut.`}
   ])}
  `}
 ],
 ix:{
  title:'Latihan: apa yang akan kamu katakan?',
  instr:'Sekarang, yuk berlatih menghadapi beberapa momen sulit yang paling umum di kelas online. Untuk setiap kasus, pilih apa yang akan kamu katakan sebagai tutor. Setiap jawaban disertai alasannya. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20yells%20at%20the%20teacher.png" alt="Seorang siswa berteriak" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😠 Seorang siswa berteriak kepadamu.</strong> Kamu meminta Diego (11) membagikan layarnya, dan dia berteriak: <em>“Ini bodoh banget! Aku nggak mau ngerjain latihanmu yang membosankan!”</em> Anggota grup lainnya terdiam dan memperhatikan. Apa yang kamu katakan?`,
    opts:['“Jangan berani-berani bicara seperti itu kepadaku! Sekali lagi, kamu keluar dari kelas ini.”','“Aku bisa dengar kamu lagi kesal banget, Diego, dan aku ingin membantu. Ingat aturan kita: di kelas ini kita berbicara dengan saling menghormati. Tarik napas dulu — lalu ceritakan apa yang nggak berjalan baik buatmu.”','“Ya sudah, kamu nggak usah mengerjakannya. Kita lanjut saja dengan yang lain.”'],
    correct:1,
    fb:'<strong>Mengapa ini berhasil:</strong> jawaban yang tenang melakukan tiga hal sekaligus — menyebutkan emosinya (sehingga Diego merasa didengar), kembali ke aturan kelas alih-alih kemarahanmu sendiri, dan membuka jalan kembali ke tugas. Membalas berteriak justru mencontohkan perilaku yang ingin kamu hentikan dan mengubah kelas menjadi panggung; mengalah mengajarkan seluruh grup bahwa berteriak bisa membebaskanmu dari tugas. Di kelas online kamu tidak bisa mendekati siswa, jadi nada bicaramu adalah satu-satunya alatmu. Jika berlanjut, bisukan dia sebentar, hubungi orang tuanya jika perlu, lalu laporkan kepada keluarga dan tinggalkan komentar di BO.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20bullies%20other%20students.png" alt="Seorang siswa mengejek siswa lain" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😈 Seorang siswa merundung teman sekelasnya.</strong> Saat Ana membagikan proyeknya, Tomás menyalakan mikrofon dan berkata <em>“Itu hal paling jelek yang pernah aku lihat”</em> — lalu menambahkan hinaan. Ana terdiam. Apa yang kamu katakan?`,
    opts:['“Tomás, kamu itu tukang rundung dan seharusnya kamu malu di depan semua orang.”','“Ayolah, itu cuma bercanda — yuk lanjut, Ana.”','“Tomás, itu nggak boleh. Di kelas ini, hasil kerja semua orang dihargai. Aku bisukan mikrofonmu sebentar supaya Ana bisa menyelesaikan presentasinya — nanti kita bicara setelah kelas. Ana, silakan lanjut, aku suka banget warna-warna yang kamu pilih.”'],
    correct:2,
    fb:'<strong>Mengapa ini berhasil:</strong> tugas pertamamu adalah melindungi siswa yang menjadi sasaran. Membisukan Tomás langsung menghentikan hal yang menyakitkan tanpa perdebatan di depan umum, aturannya disampaikan dengan jelas (menghormati orang lain tidak bisa ditawar), dan kamu mengembalikan momen itu kepada Ana. “Itu cuma bercanda” memberi tahu seluruh grup bahwa perundungan ditoleransi; mempermalukan Tomás di depan semua orang justru memperburuk keadaan dan mempermalukan seorang anak, yang jarang mengubah perilaku. Setelah kelas: bicara dengannya secara pribadi, beri tahu keluarganya, dan tinggalkan komentar di BO. Jika terjadi lagi saat pelajaran, minta bantuan orang tuanya.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20cries%20because%20something%20isn%27t%20going%20well.png" alt="Seorang siswa menangis" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😢 Seorang siswa menangis karena ada yang tidak berjalan lancar.</strong> Lucía (8) menjalankan game-nya dan mendapat error untuk ketiga kalinya. Dia mulai menangis: <em>“Aku nggak bisa, aku payah.”</em> Apa yang kamu katakan?`,
    opts:['“Nggak apa-apa banget, Lucía — error itu cara programmer belajar. Bahkan developer profesional pun dapat error setiap hari. Yuk kita lihat bareng-bareng dan cari tahu apa yang ingin disampaikan komputernya.”','“Jangan nangis, ini bukan masalah besar. Lihat, yang lain bisa — kamu juga pasti bisa.”','“Tenang, biar aku saja yang perbaiki supaya kita bisa lanjut.”'],
    correct:0,
    fb:'<strong>Mengapa ini berhasil:</strong> jawaban ini menganggap kesalahan sebagai hal yang wajar dan membingkainya sebagai bagian dari belajar — dan memang begitulah kenyataannya dalam pemrograman. Lucía juga tetap memegang kendali untuk memperbaikinya, dengan kamu di sampingnya, sehingga dia menutup momen itu dengan perasaan mampu. “Jangan nangis” mengabaikan perasaannya, dan membandingkannya dengan teman sekelas membuatnya lebih buruk. Memperbaikinya untuknya memang menghentikan tangisannya, tapi justru menguatkan keyakinannya bahwa dia tidak bisa. Di kelas online, membagikan layarnya dan menyelesaikannya bersama membuat dukunganmu terlihat dan terasa personal.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20refuses%20to%20work.png" alt="Seorang siswa menolak mengerjakan tugas" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😒 Seorang siswa menolak mengerjakan tugas.</strong> Semua sedang membuat animasi pelajaran hari ini. Sofía (12) menyalakan kameranya tapi tidak melakukan apa-apa dan bilang <em>“Aku lagi nggak mood.”</em> Apa yang kamu katakan?`,
    opts:['“Kalau kamu nggak mengerjakan latihannya, aku harus memberi tahu orang tuamu.”','“Aku lihat kamu belum mulai — apa yang bikin susah? Gimana kalau kamu menganimasikan karakter yang benar-benar kamu suka? Tujuannya cuma untuk melatih teknik gerakannya.”','“Ya sudah — hari ini kamu lihat saja yang lain bekerja.”'],
    correct:1,
    fb:'<strong>Mengapa ini berhasil:</strong> rasa ingin tahu alih-alih ancaman membantu menemukan apa yang sebenarnya ada di balik penolakannya (bosan, kesulitan, lelah), dan menawarkan pilihan tetap menjaga tujuan pembelajaran sambil memberinya rasa memiliki atas tugasnya. Mengancam akan menghubungi orang tua menjadikanmu musuh dan mengubah penolakannya menjadi adu kuasa; membiarkannya menonton mengajarkan bahwa menolak itu berhasil. Jika penolakannya berulang di beberapa pelajaran, bicarakan dengan keluarga dan tinggalkan komentar di BO — itu pola yang perlu dilaporkan, bukan hukuman.'}
  ]
 }
},
{id:'tech', numLabel:'Modul 3', emoji:'🔧', color:'var(--coral)',
 title:'Masalah Teknis dan Keseimbangan Kelas',
 desc:'Mengapa kekacauan sering kali adalah masalah teknis yang terselubung, apa yang bisa mencegah sebagian besar masalahnya, dan cara menjaga seluruh grup tetap belajar sementara kamu memperbaiki masalah satu siswa.',
 obj:'Mencegah sebagian besar masalah teknis sebelum terjadi, mengikuti protokol yang jelas saat masalah muncul, dan menjaga anggota grup lainnya tetap terlibat sambil menyelesaikan masalah satu siswa.',
 sections:[
  {t:'⚖️ Mengapa ini dibahas di sini', html:`
   <div class="card"><p>Masalah teknis sering membuat kelas menjadi tidak terorganisir dan, akibatnya, siswa menjadi bosan.</p>
   <p>Masalah teknis itu wajar dan bisa terjadi pada tutor maupun siswa. Berikut yang bisa kamu lakukan agar masalahnya tidak semakin parah:</p></div>
   ${co('co-idea','💡',`<p><strong>Aturan emasnya.</strong> Jika kamu tidak bisa memperbaikinya sendiri dalam <strong>10 menit</strong>, berhentilah mencoba diam-diam. <strong>Komunikasikan → dokumentasikan → eskalasikan.</strong> Orang tua yang tahu apa yang terjadi akan percaya padamu. Orang tua yang tidak tahu akan membatalkan.</p>`)}
  `},
  {t:'✅ Masalah teknis yang dialami siswa', html:`
   <div class="card"><p>Sering kali, masalah teknis yang dialami siswa di kelas terjadi karena mereka menggunakan browser selain Google Chrome atau perangkat yang tidak sesuai untuk kursusnya, misalnya mencoba mengikuti kelas lewat tablet, ponsel, atau iPad. Karena itu, penting bagimu untuk mengetahui persyaratan minimumnya supaya bisa membantu mereka.</p></div>
   ${doavoid(
    ["Google Chrome versi terbaru — satu-satunya browser yang sepenuhnya kompatibel",
     "RAM minimal 4 GB (8 GB untuk Blender atau Unity)",
     "Koneksi yang stabil, minimal 10 Mbps — koneksi kabel lebih baik daripada Wi-Fi jika memungkinkan",
     "Ruang penyimpanan kosong minimal 5 GB — Unity dan Blender membutuhkan jauh lebih banyak"],
    ["Safari — ada bug yang sudah diketahui dengan platform Kodland sejak pembaruan terakhir: tombol yang tidak merespons, layar yang tidak termuat, error saat masuk",
     "Tablet / iPad untuk kursus seperti Roblox Studio atau Unity — kursus ini membutuhkan komputer sungguhan",
     "Menganggap masalah di Mac sebagai hilangnya minat sebelum memeriksa apakah penyebabnya hanya Safari"]
   )}
   ${co('co-idea','🍎',`<p>Perhatikan khusus kombinasi Mac + Safari. Jika siswa pengguna Mac tidak bisa menekan tombol atau layarnya tidak termuat, solusinya hampir selalu: buka kelasnya di Google Chrome. Arahkan keluarga ke google.com/chrome.</p>`)}
   <div class="card"><h4>Apa yang sebenarnya dibutuhkan setiap kursus</h4><div class="tbl-wrap"><table>
   <tr><th>Kursus</th><th>Persyaratan</th><th>Tingkat</th></tr>
   <tr><td>Funtech, Scratch, Python 1 / Pro, Web, Menggambar</td><td>Cukup Chrome, tidak perlu menginstal apa pun — berfungsi di hampir semua perangkat</td><td>Mudah</td></tr>
   <tr><td>Kreativitas Digital, Desain Grafis, Ilustrasi</td><td>Chrome + alat berbasis browser (Canva, Krita) — cek persyaratan ukuran layar/tablet</td><td>Perlu dicek</td></tr>
   <tr><td>Roblox Studio</td><td>Hanya Windows atau Mac (tidak bisa tablet, tidak bisa Linux), RAM 4 GB, Roblox Studio sudah terinstal sebelum pelajaran 1</td><td>Perlu dicek</td></tr>
   <tr><td>Minecraft</td><td>Windows, Mac, atau Linux, disarankan Java Edition, RAM 4 GB, akun Minecraft sendiri</td><td>Perlu dicek</td></tr>
   <tr><td>Pemodelan 3D</td><td>RAM minimal 8 GB, wajib mouse dengan roda gulir, disarankan GPU khusus</td><td>Berat</td></tr>
   <tr><td>Unity</td><td>Wajib RAM 8 GB, ruang kosong 10 GB, hanya Windows atau Mac — tidak bisa Chromebook</td><td>Berat</td></tr>
   </table></div></div>
  `},
  {t:'🧑‍💻 Masalah teknis pada tutor', html:`
   <div class="card"><p>Perhatian yang sama berlaku untuk perangkatmu sendiri — masalah teknis pada tutor bisa menghambat pelajaran sama seperti masalah teknis pada siswa.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Tes 30 menit sebelumnya.</strong> Cek koneksi internet, kamera, dan mikrofonmu sebelum setiap pelajaran. Jika kamu menemukan masalah, beri tahu Team Leader-mu.`},
    {ic:'📷', html:`<strong>Cari alternatif.</strong> Jika mematikan kamera membuat koneksimu lebih baik, lakukan itu.`},
    {ic:'🎙️', html:`<strong>Siapkan mikrofon cadangan.</strong> Jika headset-mu tidak berfungsi, coba opsi lain, misalnya audio bawaan komputermu, dan selalu aktifkan peredam suara latar di Classroom.`},
    {ic:'📶', html:`<strong>Cek driver-mu, dan apakah ada VPN yang aktif</strong> — VPN cenderung memperlambat koneksimu.`},
    {ic:'🧊', html:`<strong>Menggunakan alat yang berat seperti Blender?</strong> Kursusnya menyertakan panduan di beberapa pelajaran pertama tentang cara mengaturnya agar performanya lebih baik.`},
    {ic:'💻', html:`<strong>Kosongkan RAM sebelum kelas.</strong> Google Chrome memberikan pengalaman terbaik dengan Classroom, tapi juga cenderung memakai banyak RAM — tutup tab dan program yang sedang tidak kamu perlukan.`},
    {ic:'👂', html:`<strong>Pastikan secara langsung.</strong> Sebelum pelajaran dimulai, tanyakan kepada siswamu apakah mereka bisa melihat dan mendengarmu dengan baik — dengan begitu kamu bisa menangkap masalah teknis sejak awal.`}
   ])}
  `},
  {t:'🚨 Tanggapi — protokolnya', html:`
   ${co('co-danger','🚨',`<p><strong>Masalah pertama dalam sebuah pelajaran:</strong> coba perbaiki dalam 10 menit pertama. Jika masih belum berhasil, beri tahu Team Leader-mu di hari yang sama — mereka akan memutuskan opsi pengganti. Kirim pesan ke orang tua dalam 30 menit, dengan hangat, sampaikan bahwa kamu sudah melaporkannya ke timmu.</p>
   <p><strong>Pelajaran kedua berturut-turut yang bermasalah:</strong> buat tiket Client Service di hari yang sama. Kirim pesan ke orang tua bahwa kamu sudah mengeskalasikannya dan akan ada yang menindaklanjuti soal pelajaran pengganti.</p>
   <p><strong>Setelah masalahnya selesai:</strong> beri tahu orang tua, dan tuntaskan komunikasinya — meskipun masalahnya tampak kecil.</p>`)}
  `},
  {t:'⚖️ Menjaga seluruh grup tetap belajar', html:`
   <div class="card"><p>Kegagalannya bukan hanya pada masalah teknisnya — tapi tutor yang terlalu fokus pada masalah satu siswa sampai anggota grup lainnya kehilangan lima atau sepuluh menit pelajaran.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Tetapkan batas waktu.</strong> Beri siswa yang bermasalah satu percobaan perbaikan cepat (ganti browser, mulai ulang), lalu lanjutkan pelajaran grup dan tindak lanjuti siswa itu setelahnya atau di antara aktivitas.`},
     {ic:'👥', html:`<strong>Beri grup sesuatu untuk dikerjakan</strong> begitu kamu mulai menangani masalahnya — jangan biarkan mereka hanya menatap layar yang diam.`},
     {ic:'🫂', html:`<strong>Tetap tenang, dan terdengar tenang.</strong> Reaksimu adalah pelajarannya, bahkan sebelum masalahnya teratasi. Kalimat tenang seperti “ini kadang terjadi, yuk kita cari jalan keluarnya” menjaga suasana kelas tetap stabil.`}
   ])}
  `}
 ],
 ix:{
  title:'Masalah Teknis — cek modul',
  instr:'70% untuk membuka checklist akhir.',
  items:[
   {type:'choice', prompt:'Di Mac milik seorang siswa, tidak ada tombol yang merespons. Apa langkah pertamamu?', opts:['Memintanya membuka kelas di Google Chrome','Menganggap dia sudah tidak tertarik dan lanjut','Menunggu platformnya pulih sendiri'], correct:0, fb:'Safari adalah penyebab paling umum tombol yang tidak merespons di Mac — beralih ke Chrome adalah solusi cepatnya.'},
   {type:'sort', prompt:'Masalah jenis apa ini?', card:'Layar seorang siswa terus membeku dan tombol-tombolnya tidak merespons.', zones:[
     {label:'⚖️ Masalah kedisiplinan', fb:'Belum tepat — layar yang membeku dan tombol yang tidak merespons adalah gejala teknis yang khas, paling sering karena Safari di Mac.'},
     {label:'🔧 Masalah teknis', fb:'Benar — ini menunjukkan masalah browser atau perangkat, bukan hilangnya minat. Paling sering karena Safari di Mac.'}
   ], correctZone:1},
   {type:'choice', prompt:'Masalah teknis terjadi untuk pertama kalinya dalam sebuah pelajaran. Kapan paling lambat kamu harus mengirim pesan ke orang tua?', opts:['Hanya jika terjadi lagi','Paling lambat akhir minggu','Dalam 30 menit, setelah mencoba memperbaikinya selama 10 menit'], correct:2, fb:'Pesan yang cepat dan hangat adalah hal yang menjaga kepercayaan keluarga.'},
   {type:'choice', prompt:'Saat kamu menangani koneksi satu siswa, apa yang sebaiknya dilakukan anggota grup lainnya?', opts:['Menunggu dengan tenang sampai kamu selesai','Mengerjakan sesuatu yang sudah kamu berikan, supaya pelajaran tidak terhenti','Menontonmu menangani masalah itu, kalau-kalau hal yang sama terjadi pada mereka'], correct:1, fb:'Menjaga anggota grup lainnya tetap bekerja adalah hal yang melindungi seluruh pelajaran, bukan hanya masalah satu siswa.'},
   {type:'sort', prompt:'Masalah jenis apa ini?', card:'Seorang siswa terus menyalakan mikrofon untuk membicarakan hal yang tidak berhubungan saat penjelasan.', zones:[
     {label:'⚖️ Masalah kedisiplinan', fb:'Benar — ini pola pengelolaan kelas yang perlu dialihkan, bukan gejala teknis.'},
     {label:'🔧 Masalah teknis', fb:'Belum tepat — ini pola kedisiplinan, bukan masalah perangkat atau koneksi.'}
   ], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Checklist Akhir', emoji:'✅', color:'var(--coral)',
 title:'Checklist Akhir',
 desc:'Tidak ada kuis di sini — hanya hal-hal penting dari mini-training ini, sebelum kamu menutupnya.',
 obj:'Tinjau checklist di bawah ini. Modul ini tidak dinilai — baca, lalu selesaikan mini-training-nya.',
 sections:[
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   ${numlist([
     'Saya meninggalkan komentar di BO di hari yang sama saat saya mengetahui permintaan itu, dan melibatkan Team Leader saya',
     'Pelajaran berikutnya dengan siswa ini adalah upaya nyata untuk mempertahankannya — giliran yang sungguhan, keberhasilan yang terlihat, perhatian yang spesifik, tanpa menyinggung permintaan refund',
     'Saya tidak pernah mengonfirmasi persetujuan atau membahas nominal — saya menggunakan satu kalimat yang aman dan menyerahkan sisanya kepada Client Service'
   ])}
  `},  {t:'⚖️ Menjaga kedisiplinan di setiap pelajaran', html:`
   ${numlist([
     'Saya menetapkan aturan kelas di pelajaran pertama, memastikan siswa memahami dan menyetujuinya — dan merujuk kembali ke aturan itu, bukan ke kekesalan saya sendiri',
     'Dengan siswa yang lebih kecil (6–8), saya menjadikan aturan sebagai permainan, mengalihkan dengan tugas alih-alih perintah, dan memuji perilaku yang saya inginkan begitu perilaku itu muncul',
     'Dengan siswa yang lebih besar (12+), saya menyebutkan perilakunya secara singkat — empat mata jika memungkinkan — memberi mereka peran yang menyalurkan energinya, dan menindaklanjuti secara konsisten alih-alih mengulang-ulang peringatan',
     'Di kelas yang sunyi, saya meminta dengan ramah untuk menyalakan kamera terlebih dahulu, lalu menawarkan cara aman lainnya untuk ikut serta — latar belakang yang mereka sukai, chat, partisipasi pribadi — tanpa tekanan',
     'Saat seorang siswa tidak terhubung dengan tugasnya, saya menyesuaikan tugas itu tanpa kehilangan tujuan pembelajaran',
     'Saya menenangkan diri sendiri dulu: saya mengambil jeda, menjaga suara tetap tenang dan tempo tetap stabil, dan tidak pernah mengikuti intensitas siswa',
     'Saya tegas soal rasa hormat: jika seorang siswa menggunakan bahasa kasar atau menyerang teman sekelasnya, saya membisukannya sebentar untuk melindungi grup, dan kami berbicara setelah kelas',
     'Saat ada yang salah dalam sebuah tugas, saya menganggap kesalahan itu wajar dan memperlakukannya sebagai kesempatan untuk belajar',
     'Jika situasinya tidak bisa diredakan, saya meminta bantuan orang tua — bahkan saat pelajaran berlangsung — lalu setelahnya saya melaporkannya kepada keluarga dan meninggalkan komentar di BO',
     'Saya mengetes perangkat saya 30 menit sebelum kelas, dan saya menjaga grup tetap bekerja sementara saya memperbaiki masalah teknis satu siswa'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah keseluruhan mini-training ini.</strong> Jika sudah siap, lanjutkan — lalu selesaikan DST di LMS untuk menuntaskan tugasnya.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
