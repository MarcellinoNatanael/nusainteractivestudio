/**
 * NUSA INTERACTIVE STUDIO — global.js
 * Navbar scroll + hamburger | Language toggle EN/ID
 */
(function () {
  'use strict';

  /* ---- Translations map ---- */
  var T = {
    en: {
      'nav-home':        'Home',
      'nav-about':       'About Us',
      'nav-projects':    'Projects',
      'nav-news':        'News',
      'nav-careers':     'Careers',
      'nav-store':       'Store',
      'hero-tagline':    'We are an indie game studio that focuses on developing horror games by bringing strong local culture and inherent folklore to target a wider market of horror players.',
      'btn-explore':     'Explore More',
      'sec-projects':    'Our Projects',
      'sec-news':        'News',
      'sec-gallery':     'Gallery',
      'sec-careers':     'Careers',
      'we-looking':      'There are no job openings at this time',
      'tab-all':         'All Division',
      'th-jobtitle':     'Job Title',
      'th-type':         'Type',
      'th-location':     'Location',
      'th-division':     'Division',
      'th-joinus':       'Join Us',
      'btn-apply':       'Apply Job',
      'foot-social':     'Social Media',
      'foot-content':    'Website Content',
      'foot-legal':      'Legal & Policy',
      'foot-games':      'Our Games',
      'foot-terms':      'Terms and Condition',
      'foot-privacy':    'Privacy Policy',
      'foot-contact':    'Contact',
      /* About */
      'about-p1':        'Nusa Interactive Studio is an independent game development studio focusing on the horror and psychological horror genres, based on local Indonesian culture. Founded by Marcellino Natanael, the studio began its journey as a home project driven by a passion to elevate Indonesian narratives and urban legends to the global gaming industry.',
      'about-p2':        'We believe that the best horror atmospheres are born from cultural affinity and strong psychological tension. By integrating historical values, traditional architecture, and local mythology into robust gameplay mechanics, Nusa Interactive Studio is committed to delivering immersive, competitive, and internationally recognized gaming experiences without losing our cultural roots.',
      'sec-vm':          'Vision & Mission',
      'sec-corevals':    'Core Values',
      'sec-division':    'Division',
      /* Projects */
      'sec-completed':   'Completed Projects',
      'sec-upcoming':    'Upcoming Project',
      'badge-soon':      'Coming Soon',
      'upcoming-desc':   'Gombel is a horror game that tells the story of a mythological legend known locally as Wewe Gombel or Kalong Wewe. This figure is associated with the disappearance of children playing outside after dusk. The game is still in development, so its not yet available on any platforms. Stay tuned for further news and information about this game.',
      /* News */
      'sec-recent':      'Recent News',
      /* Store */
      'sec-our-games':   'Our Games',
      'lbl-release':     'Release:',
      'btn-details':     'Details',
      'btn-buy-steam':   'Play For Free',
      'store-note':      'Download the game through the gamejolt platform.',
      /*vision and Mission*/
      'vm-vision-title': 'Vision',
      'vm-vision-text':  'To be a pioneering indie game studio committed to highlighting the richness of local culture through technological innovation with modern visualization.',
      'vm-mission-title':'Mission',
      'vm-mission-p1': 'Creating a work that can be enjoyed, not just played.',
      'vm-mission-p2': 'Exploring and Embracing Local Culture to introduce it to the world.',
      'vm-mission-p3': 'Encouraging Technological Innovation in Game Development.',
      'vm-mission-p4': 'Realizing a Visual Aesthetic with Strong Character.',
      /* Core Value */
      'cv-n-title': 'Narrative',
      'cv-n-text': 'For us, story is the heart of every game we create. We dont just create a plot, but also build a world and atmosphere that can make players feel fear, curiosity, or even emotion from the beginning of the game until the end of the story we present.',
      'cv-u-title': 'Uncharted (Untouched)',
      'cv-u-text': 'Indonesia holds so many folktales, history, culture, and mythology that not all of them are known or yet to be adapted into games. We want to explore these stories, not just the popular ones, but present them with a unique perspective and a unique character for horror game fans.',
      'cv-s-title': 'Solid (Performance)',
      'cv-s-text': 'No matter how good a story is, it will all fall apart if the game lags or is full of bugs. We adhere to strict technical standards to ensure each of our games runs stably and comfortably even at the minimum specifications.',
      'cv-a-title': 'Advance',
      'cv-a-text': 'With our current resource constraints, we utilize existing assets in game development. However, what sets us apart is how we integrate all in-game systems and mechanics with sophisticated programming logic and the latest technology. We stitch these assets together into a cohesive, high-quality work.'
    },
    id: {
      'nav-home':        'Beranda',
      'nav-about':       'Tentang Kami',
      'nav-projects':    'Proyek',
      'nav-news':        'Berita',
      'nav-careers':     'Karir',
      'nav-store':       'Toko',
      'hero-tagline':    'Kami adalah studio game indie yang berfokus pada pengembangan game horor dengan membawa budaya lokal yang kuat dan cerita rakyat untuk menjangkau pasar pemain horor yang lebih luas.',
      'btn-explore':     'Jelajahi',
      'sec-projects':    'Proyek Kami',
      'sec-news':        'Berita',
      'sec-gallery':     'Galeri',
      'sec-careers':     'Karir',
      'we-looking':      'Belum ada lowongan pekerjaan saat ini',
      'tab-all':         'Semua Divisi',
      'th-jobtitle':     'Posisi',
      'th-type':         'Tipe',
      'th-location':     'Lokasi',
      'th-division':     'Divisi',
      'th-joinus':       'Bergabung',
      'btn-apply':       'Lamar',
      'foot-social':     'Media Sosial',
      'foot-content':    'Konten Website',
      'foot-legal':      'Hukum & Kebijakan',
      'foot-games':      'Game Kami',
      'foot-terms':      'Syarat dan Ketentuan',
      'foot-privacy':    'Kebijakan Privasi',
      'foot-contact':    'Kontak',
      /* About */
      'about-p1':        'Nusa Interactive Studio adalah studio pengembang game independen yang berfokus pada genre horor dan horor psikologis, berdasarkan budaya lokal Indonesia. Didirikan oleh Marcellino Natanael, studio ini memulai perjalanannya sebagai proyek rumahan yang didorong oleh hasrat untuk mengangkat narasi dan legenda urban Indonesia ke industri game global.',
      'about-p2':        'Kami percaya bahwa atmosfer horor terbaik lahir dari kedekatan budaya dan ketegangan psikologis yang kuat. Dengan mengintegrasikan nilai-nilai sejarah, arsitektur tradisional, dan mitologi lokal ke dalam mekanisme permainan yang kuat, Nusa Interactive Studio berkomitmen untuk menghadirkan pengalaman bermain game yang imersif, kompetitif, dan diakui secara internasional tanpa kehilangan akar budaya kami.',
      'sec-vm':          'Visi & Misi',
      'sec-corevals':    'Nilai Inti',
      'sec-division':    'Divisi',
      /* Projects */
      'sec-completed':   'Proyek Selesai',
      'sec-upcoming':    'Proyek Mendatang',
      'badge-soon':      'Segera Hadir',
      'upcoming-desc':   'Gombel adalah gim horor yang menceritakan kisah legenda mitologi yang dikenal secara lokal sebagai Wewe Gombel atau Kalong Wewe. Sosok ini dikaitkan dengan hilangnya anak-anak yang bermain di luar setelah magrib. game ini masih dalam tahap pengembangan, sehingga belum tersedia di platform mana pun. Nantikan berita dan informasi lebih lanjut tentang game ini.',
      /* News */
      'sec-recent':      'Berita Terbaru',
      /* Store */
      'sec-our-games':   'Game Kami',
      'lbl-release':     'Rilis:',
      'btn-details':     'Detail',
      'btn-buy-steam':   'Mainkan Gratis',
      'store-note':      'Unduh game melalui platform gamejolt',
      /* Vision and Mission*/
      'vm-vision-title': 'Visi',
      'vm-vision-text':  'Menjadi pionir sebagai studio game indie yang berkomitmen mengangkat kekayaan budaya lokal melalui inovasi teknologi dengan visualisasi modern',
      'vm-mission-title':'Misi',
      'vm-mission-p1':   'Menciptakan sebuah karya yang dapat di nikmati, dan bukan sekedar dimainkan.',
      'vm-mission-p2':   'Mengeksplorasi dan Mengangkat Budaya Lokal untuk diperkenalkan ke seluruh dunia',
      'vm-mission-p3':   'Mendorong Inovasi Teknologi dalam Pengembangan Game.',
      'vm-mission-p4':   'Mewujudkan Estetika Visual yang Berkarakter Kuat',
      /* Core Values */
      'cv-n-title': 'Narrative (Cerita)',
      'cv-n-text':  'Bagi kami, cerita adalah jantung dari setiap game yang kami buat. Kami tidak sekadar menyusun alur, tapi membangun dunia dan atmosfer yang bisa membuat pemain merasakan ketakutan, penasaran, atau bahkan merasakan emosional sejak awal permainan hingga akhir dari cerita yang kami sajikan.',
      'cv-u-title': 'Uncharted (Belum Terjamah)',
      'cv-u-text':  'Indonesia menyimpan begitu banyak cerita rakyat, sejarah, budaya, dan mitologi yang belum semuanya di ketahui atau diangkat kedalam game. Kami ingin menggali cerita-cerita itu bukan sekadar cerita yang sudah populer, tetapi menghadirkannya dengan sudut pandang yang unik dan ciri khas bagi penggemar game horror.',
      'cv-s-title': 'Solid (Performa)',
      'cv-s-text':  'Sebagus apapun sebuah cerita, semuanya akan berantakan jika game-nya lag atau penuh bug. Kami memegang prinsip standar teknis yang ketat agar setiap game kami berjalan stabil dan nyaman dimainkan pada spesifikasi minimum sekalipun.',
      'cv-a-title': 'Advance (Eksekusi Tingkat Lanjut)',
      'cv-a-text':  'Dalam keterbatasan sumber daya yang dimiliki saat ini sehingga kami menggunakan aset yang sudah ada dalam mengembangkan game, namun yang membedakan kami adalah bagaimana kami melakukan proses pengintegrasian dengan semua sistem dan mekanik dalam game dengan logika pemrograman yang matang dan sentuhan teknologi terkini, aset-aset itu kami jahit ulang menjadi sebuah karya yang terasa utuh dan berkualitas tinggi.',
    }
  };

  var currentLang = localStorage.getItem('nis_lang') || 'en';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('nis_lang', lang);

    // Update all [data-t] elements
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var key = el.getAttribute('data-t');
      if (T[lang] && T[lang][key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = T[lang][key];
        } else {
          el.textContent = T[lang][key];
        }
      }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* ---- Navbar ---- */
  document.addEventListener('DOMContentLoaded', function () {
    var navbar     = document.querySelector('.nis-navbar');
    var hamburger  = document.getElementById('navHamburger');
    var menu       = document.getElementById('navMenu');

    // Scroll dim
    if (navbar) {
      window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
      }, { passive: true });
    }

    // Hamburger
    if (hamburger && menu) {
      hamburger.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        hamburger.classList.toggle('open', open);
      });
      menu.querySelectorAll('.nav-link').forEach(function (l) {
        l.addEventListener('click', function () {
          menu.classList.remove('open');
          hamburger.classList.remove('open');
        });
      });
    }

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.lang);
      });
    });

    // Apply on load
    applyLang(currentLang);
  });

})();
