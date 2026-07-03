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
      'foot-games':      'Contact Us',
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
      'cv-a-text': 'With our current resource constraints, we utilize existing assets in game development. However, what sets us apart is how we integrate all in-game systems and mechanics with sophisticated programming logic and the latest technology. We stitch these assets together into a cohesive, high-quality work.',

      /* ================= LEGAL: SHARED ================= */
      'legal-updated-label': 'Last updated:',
      'legal-updated-date':  'July 3, 2026',
      'legal-toc-title':     'Table of Contents',

      /* ================= TERMS AND CONDITION ================= */
      'terms-hero-title': 'Terms and Conditions',

      'terms-toc-01': '1. Introduction',
      'terms-toc-02': '2. Definitions',
      'terms-toc-03': '3. Use of the Site',
      'terms-toc-04': '4. Intellectual Property Rights',
      'terms-toc-05': '5. Product &amp; Game Purchases',
      'terms-toc-06': '6. User Content',
      'terms-toc-07': '7. Third-Party Links',
      'terms-toc-08': '8. Limitation of Liability',
      'terms-toc-09': '9. Indemnification',
      'terms-toc-10': '10. Termination of Access',
      'terms-toc-11': '11. Changes to These Terms',
      'terms-toc-12': '12. Governing Law &amp; Dispute Resolution',
      'terms-toc-13': '13. Contact',

      'terms-note': 'This document is a general Terms and Conditions framework prepared based on the structure of the Nusa Interactive Studio website, taking into account the Studio\u2019s status as an indie project that is not yet a registered legal entity. This document <strong>is not a substitute for professional legal advice</strong>. Before official publication, it is strongly recommended to have it reviewed by a legal consultant to ensure compliance with the regulations applicable in your jurisdiction, particularly regarding limitation of liability and indemnification clauses.',

      'terms-h-01': 'Introduction',
      'terms-p-01-a': 'Welcome to <strong>nusainteractivestudio.com</strong> ("Site"), operated by Nusa Interactive Studio ("we", "Studio"). By accessing or using this Site, you ("User") agree to be bound by the following Terms and Conditions. If you do not agree to any part of these terms, please refrain from continuing to use the Site.',
      'terms-p-01-b': '<strong>Nusa Interactive Studio</strong> is the name of an independent (indie) creative project/brand run by an individual and/or a team of developers, and is <strong>currently not registered as a formal legal entity</strong> (such as a PT or CV) in Indonesia. All activities, communications, and products released under this name are carried out as part of this independent project. Should the institutional status change to a formal legal entity in the future, these Terms and Conditions will be updated to reflect that change.',

      'terms-h-02': 'Definitions',
      'terms-li-02-situs':    '<strong>Site</strong> refers to nusainteractivestudio.com, including all pages and subdomains within it.',
      'terms-li-02-konten':   '<strong>Content</strong> includes text, images, videos, logos, and other materials published on the Site.',
      'terms-li-02-produk':   '<strong>Product</strong> refers to the games and digital assets developed by Nusa Interactive Studio, including but not limited to DEMIT and Perjanjian Gaib.',
      'terms-li-02-pengguna': '<strong>User</strong> means any individual who accesses or interacts with the Site.',

      'terms-h-03': 'Use of the Site',
      'terms-p-03-intro': 'You agree to use the Site only for lawful purposes and in accordance with these Terms and Conditions. You are prohibited from:',
      'terms-li-03-a': 'Using the Site in a way that damages, disables, or unreasonably burdens our infrastructure.',
      'terms-li-03-b': 'Attempting to access areas of the Site that are not open to the public.',
      'terms-li-03-c': 'Using bots, scrapers, or other automated tools without our written permission.',
      'terms-li-03-d': 'Uploading or distributing content that is unlawful, contains hate speech, or infringes the rights of others.',

      'terms-h-04': 'Intellectual Property Rights',
      'terms-p-04-a': 'All Content on the Site \u2014 including but not limited to logos, product names (DEMIT, Perjanjian Gaib), layout, writing, and the overall visual composition \u2014 belongs to Nusa Interactive Studio or its licensors, and is protected under applicable copyright and intellectual property laws. Copying, distributing, modifying, or reusing Content without our written permission is prohibited, except for reasonable personal and non-commercial purposes (such as sharing a link to the Site).',
      'terms-p-04-b': 'Some of our visual assets, illustrations, design elements, and in-game assets are created using or incorporate licensed third-party materials, including but not limited to:',
      'terms-li-04-canva': '<strong>Canva</strong> \u2014 graphic elements and design templates used in accordance with the <a class="inline-link" href="https://www.canva.com/policies/content-license-agreement/" target="_blank" rel="noopener">Canva Content License Agreement</a>.',
      'terms-li-04-fab':   '<strong>Fab (Epic Games / Unreal Engine Marketplace)</strong> \u2014 3D assets, models, textures, and/or plugins used in accordance with the Fab End User License Agreement (EULA) applicable to each asset.',
      'terms-p-04-c': 'Copyright in the original third-party materials remains with their respective creators or licensors, and our use of them is carried out in accordance with the license terms applicable on each platform. Nusa Interactive Studio does not claim exclusive ownership over such raw third-party assets, but holds copyright over the resulting work, compilation, creative combination, story, characters, and the overall game product built from those assets.',
      'terms-note-04': 'If you come across a potential license infringement related to third-party assets on the Site or in our Products, please contact us through the channels listed in the Contact section.',

      'terms-h-05': 'Product &amp; Game Purchases',
      'terms-p-05': 'Purchases of games and digital products through our Store page are subject to the terms of the relevant distribution platform (such as Steam, itch.io, or other platforms we use). Nusa Interactive Studio does not process payments directly on this Site; transactions are directed to third-party platforms that have their own refund and payment policies.',

      'terms-h-06': 'User Content',
      'terms-p-06': 'If you submit content to us (for example through a contact form, our Discord community, or our social media), you warrant that such content does not infringe the rights of any third party and grant us a non-exclusive license to use it for promotional purposes or community development related to the Studio.',

      'terms-h-07': 'Third-Party Links',
      'terms-p-07': 'Our Site may contain links to third-party platforms such as Instagram, Discord, or digital stores. We are not responsible for the content, privacy policies, or practices of those third-party sites. Access to such links is entirely at your own risk.',

      'terms-h-08': 'Limitation of Liability',
      'terms-p-08-a': 'The Site, Content, and Products are provided <strong>"as is" and "as available"</strong>, without warranties of any kind, whether express or implied, including but not limited to warranties of fitness for a particular purpose, absence of bugs, or accuracy of information.',
      'terms-p-08-b': 'To the extent permitted by applicable law, Nusa Interactive Studio \u2014 including the individual(s)/team managing it \u2014 <strong>shall not be liable</strong> for any direct, indirect, incidental, special, consequential, or other damages whatsoever (including but not limited to data loss, loss of profit, device damage, or business interruption) arising from or related to the use or inability to use the Site or our Products, even if we have been advised of the possibility of such damages.',
      'terms-p-08-c': 'Because Nusa Interactive Studio operates as an independent project without formal business capital, if any indemnification obligation remains legally applicable despite the above limitation, our total liability to you shall be limited to the amount you paid us for the relevant Product within the last 12 (twelve) months, or IDR 0 (zero) if the Product or service was accessed free of charge.',

      'terms-h-09': 'Indemnification',
      'terms-p-09-intro': 'You agree to defend, indemnify, and hold harmless Nusa Interactive Studio and the individual(s)/team managing it from any claims, demands, losses, liabilities, and costs (including reasonable legal fees) arising from:',
      'terms-li-09-a': 'Your breach of these Terms and Conditions;',
      'terms-li-09-b': 'Your misuse of the Site or our Products;',
      'terms-li-09-c': 'Your infringement of any third-party rights, including intellectual property rights; or',
      'terms-li-09-d': 'Content you submit or publish through the Site or our community channels (such as Discord).',

      'terms-h-10': 'Termination of Access',
      'terms-p-10': 'We reserve the right to restrict, suspend, or terminate your access to the Site at any time, without prior notice, if we find any indication that you have violated these Terms and Conditions.',

      'terms-h-11': 'Changes to These Terms',
      'terms-p-11': 'We may update these Terms and Conditions from time to time, including if the Studio\u2019s institutional status changes to a formal legal entity. Changes take effect once published on this page, with the update date shown at the top of the page. We recommend reviewing this page periodically.',

      'terms-h-12': 'Governing Law &amp; Dispute Resolution',
      'terms-p-12-a': 'These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to conflict of law principles.',
      'terms-p-12-b': 'Should any dispute arise in connection with these Terms and Conditions, both parties agree to first attempt to resolve it through amicable deliberation (musyawarah). If no resolution is reached within a reasonable time, the dispute may be settled through mechanisms available under applicable Indonesian law.',

      'terms-h-13': 'Contact',
      'terms-p-13-intro': 'If you have any questions about these Terms and Conditions, please contact us through:',

      /* ================= PRIVACY POLICY ================= */
      'privacy-hero-title': 'Privacy Policy',

      'privacy-toc-01': '1. Introduction',
      'privacy-toc-02': '2. The Nature of This Site',
      'privacy-toc-03': '3. Language Preference (Local Storage)',
      'privacy-toc-04': '4. Hosting Provider Data',
      'privacy-toc-05': '5. Links to Third-Party Platforms',
      'privacy-toc-06': '6. Security',
      'privacy-toc-07': '7. Children\u2019s Privacy',
      'privacy-toc-08': '8. Future Changes',
      'privacy-toc-09': '9. Limitation of Liability',
      'privacy-toc-10': '10. Changes to This Policy',
      'privacy-toc-11': '11. Contact',

      'privacy-note': 'This document is a general Privacy Policy framework prepared based on the structure of the Nusa Interactive Studio website, taking into account that this Site is static (it has no forms, user accounts, or payment processing), and the Studio\u2019s status as an indie project that is not yet a registered legal entity. This document <strong>is not a substitute for professional legal advice</strong>. Before official publication, it is recommended to have it reviewed by a legal consultant to ensure compliance with applicable data protection regulations (such as Indonesia\u2019s Personal Data Protection Law/UU PDP).',

      'privacy-h-01': 'Introduction',
      'privacy-p-01-a': 'Nusa Interactive Studio ("we", "Studio") values the privacy of every visitor to <strong>nusainteractivestudio.com</strong> ("Site"). This Privacy Policy explains how this Site operates in relation to visitor data, given that our Site is a static site that serves as an informational medium rather than a platform that actively collects user data.',
      'privacy-p-01-b': '<strong>Nusa Interactive Studio</strong> is the name of an independent (indie) creative project/brand run by an individual and/or a team of developers, and is currently not registered as a formal legal entity (such as a PT or CV) in Indonesia.',

      'privacy-h-02': 'The Nature of This Site',
      'privacy-p-02': 'This Site is a static website that serves as an informational medium about the Studio, our game projects, and related news. This Site <strong>does not have any account registration system, data collection forms, shopping cart, or payment processing</strong> of any kind. We do not actively request or store visitors\u2019 personal data through this Site.',

      'privacy-h-03': 'Language Preference (Local Storage)',
      'privacy-p-03': 'This Site uses the browser\u2019s built-in <strong>local storage</strong> feature (not a tracking cookie) to remember your language choice (Indonesian/English) for future visits. This data is <strong>stored entirely on your own device</strong> and is not transmitted to or accessible by us.',

      'privacy-h-04': 'Hosting Provider Data',
      'privacy-p-04': 'This Site is hosted using GitHub Pages. As part of the standard operation of the hosting service, the hosting provider may automatically log technical data such as IP addresses, browser type, and access times for their own security and infrastructure performance purposes. This logging is carried out by GitHub (Microsoft), not directly by us, and is subject to the <a class="inline-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement</a>.',

      'privacy-h-05': 'Links to Third-Party Platforms',
      'privacy-p-05': 'Our Site may contain links to third-party platforms, such as Instagram, Discord, and GameJolt (where our games can be downloaded for free). If you click on these links and interact with those platforms (for example, creating an account, leaving a comment, or downloading a game), the respective platform\u2019s own privacy policy applies, not this one. We recommend reviewing the privacy policy of each platform.',

      'privacy-h-06': 'Security',
      'privacy-p-06': 'Because this Site does not store visitors\u2019 personal data on our servers, the risk of a data breach on our end is minimal. The overall security of the Site also depends on the GitHub Pages infrastructure we use as our hosting provider.',

      'privacy-h-07': 'Children\u2019s Privacy',
      'privacy-p-07': 'Some of our games contain psychological horror themes intended for adult or teen audiences in accordance with the applicable age rating. This Site is not intended for children under the age of 13.',

      'privacy-h-08': 'Future Changes',
      'privacy-p-08': 'Should this Site add features that actively collect personal data in the future (such as a contact form, newsletter, account system, or visitor analytics tools like Google Analytics), this Privacy Policy will be updated to explain in detail what data is collected and how it is used.',

      'privacy-h-09': 'Limitation of Liability',
      'privacy-p-09': 'As an indie project that is not yet a registered legal entity, and as a static site without active personal data processing, Nusa Interactive Studio is not liable for losses arising from third-party platforms linked from this Site, or from security incidents on third-party hosting infrastructure beyond our control.',

      'privacy-h-10': 'Changes to This Policy',
      'privacy-p-10': 'We may update this Privacy Policy from time to time to reflect changes to the Site or legal requirements. The latest update date will always be shown at the top of this page.',

      'privacy-h-11': 'Contact',
      'privacy-p-11-intro': 'If you have any questions regarding this Privacy Policy, please contact us through:'
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
      'foot-games':      'Kontak Kami',
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

      /* ================= LEGAL: SHARED ================= */
      'legal-updated-label': 'Terakhir diperbarui:',
      'legal-updated-date':  '3 Juli 2026',
      'legal-toc-title':     'Daftar Isi',

      /* ================= SYARAT DAN KETENTUAN ================= */
      'terms-hero-title': 'Syarat dan Ketentuan',

      'terms-toc-01': '1. Pendahuluan',
      'terms-toc-02': '2. Definisi',
      'terms-toc-03': '3. Penggunaan Situs',
      'terms-toc-04': '4. Hak Kekayaan Intelektual',
      'terms-toc-05': '5. Pembelian Produk &amp; Game',
      'terms-toc-06': '6. Konten Pengguna',
      'terms-toc-07': '7. Tautan Pihak Ketiga',
      'terms-toc-08': '8. Batasan Tanggung Jawab',
      'terms-toc-09': '9. Ganti Rugi',
      'terms-toc-10': '10. Penghentian Akses',
      'terms-toc-11': '11. Perubahan Ketentuan',
      'terms-toc-12': '12. Hukum yang Berlaku &amp; Penyelesaian Sengketa',
      'terms-toc-13': '13. Kontak',

      'terms-note': 'Dokumen ini adalah kerangka umum Syarat dan Ketentuan yang disusun berdasarkan struktur situs Nusa Interactive Studio, dengan mempertimbangkan status Studio sebagai proyek indie yang belum berbadan hukum resmi. Dokumen ini <strong>bukan pengganti nasihat hukum profesional</strong>. Sebelum dipublikasikan secara resmi, sangat disarankan untuk ditinjau oleh konsultan hukum agar sesuai dengan regulasi yang berlaku di yurisdiksi Anda, terutama terkait batasan tanggung jawab dan klausul ganti rugi.',

      'terms-h-01': 'Pendahuluan',
      'terms-p-01-a': 'Selamat datang di <strong>nusainteractivestudio.com</strong> ("Situs"), yang dikelola oleh Nusa Interactive Studio ("kami", "Studio"). Dengan mengakses atau menggunakan Situs ini, Anda ("Pengguna") menyetujui untuk terikat dengan Syarat dan Ketentuan berikut. Jika Anda tidak menyetujui salah satu ketentuan di sini, mohon untuk tidak melanjutkan penggunaan Situs.',
      'terms-p-01-b': '<strong>Nusa Interactive Studio</strong> adalah nama proyek/brand kreatif independen (indie) yang dikelola oleh perorangan dan/atau tim developer, dan <strong>saat ini belum berbentuk badan hukum resmi</strong> (seperti PT atau CV) di Indonesia. Seluruh aktivitas, komunikasi, dan produk yang dihasilkan di bawah nama ini dijalankan atas nama proyek independen tersebut. Apabila di kemudian hari status kelembagaan berubah menjadi badan hukum resmi, Syarat dan Ketentuan ini akan diperbarui untuk mencerminkan perubahan tersebut.',

      'terms-h-02': 'Definisi',
      'terms-li-02-situs':    '<strong>Situs</strong> merujuk pada nusainteractivestudio.com beserta seluruh halaman dan subdomain di dalamnya.',
      'terms-li-02-konten':   '<strong>Konten</strong> mencakup teks, gambar, video, logo, dan materi lain yang dipublikasikan di Situs.',
      'terms-li-02-produk':   '<strong>Produk</strong> merujuk pada game dan aset digital yang dikembangkan oleh Nusa Interactive Studio, termasuk namun tidak terbatas pada DEMIT dan Perjanjian Gaib.',
      'terms-li-02-pengguna': '<strong>Pengguna</strong> adalah setiap individu yang mengakses atau berinteraksi dengan Situs.',

      'terms-h-03': 'Penggunaan Situs',
      'terms-p-03-intro': 'Anda setuju untuk menggunakan Situs hanya untuk tujuan yang sah dan sesuai dengan Syarat dan Ketentuan ini. Anda dilarang untuk:',
      'terms-li-03-a': 'Menggunakan Situs dengan cara yang dapat merusak, menonaktifkan, atau membebani infrastruktur kami secara berlebihan.',
      'terms-li-03-b': 'Mencoba mengakses area Situs yang tidak diizinkan untuk publik.',
      'terms-li-03-c': 'Menggunakan bot, scraper, atau alat otomatis lain tanpa izin tertulis dari kami.',
      'terms-li-03-d': 'Mengunggah atau menyebarkan konten yang melanggar hukum, mengandung ujaran kebencian, atau melanggar hak pihak lain.',

      'terms-h-04': 'Hak Kekayaan Intelektual',
      'terms-p-04-a': 'Seluruh Konten yang ada di Situs \u2014 termasuk namun tidak terbatas pada logo, nama produk (DEMIT, Perjanjian Gaib), tata letak, tulisan, dan hasil komposisi visual secara keseluruhan \u2014 adalah milik Nusa Interactive Studio atau pemberi lisensinya, dan dilindungi oleh hukum hak cipta serta kekayaan intelektual yang berlaku. Dilarang menyalin, mendistribusikan, memodifikasi, atau menggunakan kembali Konten tanpa izin tertulis dari kami, kecuali untuk keperluan pribadi dan non-komersial yang wajar (misalnya membagikan tautan Situs).',
      'terms-p-04-b': 'Sebagian aset visual, ilustrasi, elemen desain, dan aset dalam game kami dibuat menggunakan atau menggabungkan materi berlisensi dari pihak ketiga, termasuk namun tidak terbatas pada:',
      'terms-li-04-canva': '<strong>Canva</strong> \u2014 elemen grafis dan template desain yang digunakan sesuai dengan <a class="inline-link" href="https://www.canva.com/policies/content-license-agreement/" target="_blank" rel="noopener">Canva Content License Agreement</a>.',
      'terms-li-04-fab':   '<strong>Fab (Epic Games / Unreal Engine Marketplace)</strong> \u2014 aset 3D, model, tekstur, dan/atau plugin yang digunakan sesuai dengan ketentuan lisensi Fab End User License Agreement (EULA) yang berlaku pada masing-masing aset.',
      'terms-p-04-c': 'Hak cipta atas materi-materi asli dari pihak ketiga tersebut tetap dipegang oleh pembuat atau pemberi lisensi aslinya, dan penggunaannya oleh Nusa Interactive Studio dilakukan sesuai dengan lisensi yang berlaku pada masing-masing platform. Nusa Interactive Studio tidak mengklaim kepemilikan eksklusif atas aset mentah pihak ketiga tersebut, namun memegang hak cipta atas hasil karya, kompilasi, kombinasi kreatif, cerita, karakter, dan keseluruhan produk game yang dibangun dari aset-aset tersebut.',
      'terms-note-04': 'Apabila Anda menemukan potensi pelanggaran lisensi terkait aset pihak ketiga di Situs atau Produk kami, silakan hubungi kami melalui kanal yang tercantum di bagian Kontak.',

      'terms-h-05': 'Pembelian Produk &amp; Game',
      'terms-p-05': 'Pembelian game dan produk digital melalui halaman Store kami tunduk pada ketentuan platform distribusi terkait (misalnya Steam, itch.io, atau platform lain yang kami gunakan). Nusa Interactive Studio tidak memproses pembayaran secara langsung di Situs ini; transaksi diarahkan ke platform pihak ketiga yang memiliki kebijakan refund dan pembayarannya sendiri.',

      'terms-h-06': 'Konten Pengguna',
      'terms-p-06': 'Apabila Anda mengirimkan konten kepada kami (misalnya melalui formulir kontak, komunitas Discord, atau media sosial kami), Anda menjamin bahwa konten tersebut tidak melanggar hak pihak ketiga dan memberikan kami izin non-eksklusif untuk menggunakannya sepanjang berkaitan dengan aktivitas promosi atau pengembangan komunitas Studio.',

      'terms-h-07': 'Tautan Pihak Ketiga',
      'terms-p-07': 'Situs kami dapat memuat tautan ke platform pihak ketiga seperti Instagram, Discord, atau toko digital. Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik dari situs pihak ketiga tersebut. Akses terhadap tautan tersebut sepenuhnya menjadi risiko Anda sendiri.',

      'terms-h-08': 'Batasan Tanggung Jawab',
      'terms-p-08-a': 'Situs, Konten, dan Produk disediakan <strong>"sebagaimana adanya" ("as is") dan "sebagaimana tersedia" ("as available")</strong>, tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan kelayakan untuk tujuan tertentu, ketiadaan gangguan (bug), atau ketepatan informasi.',
      'terms-p-08-b': 'Sepanjang diizinkan oleh hukum yang berlaku, Nusa Interactive Studio \u2014 termasuk perorangan/tim yang mengelolanya \u2014 <strong>tidak bertanggung jawab</strong> atas segala bentuk kerugian langsung, tidak langsung, insidental, khusus, konsekuensial, atau kerugian lain apa pun (termasuk namun tidak terbatas pada kehilangan data, kehilangan keuntungan, kerusakan perangkat, atau gangguan bisnis) yang timbul dari atau berkaitan dengan penggunaan atau ketidakmampuan menggunakan Situs maupun Produk kami, sekalipun kami telah diberitahu mengenai kemungkinan terjadinya kerugian tersebut.',
      'terms-p-08-c': 'Karena Nusa Interactive Studio dijalankan sebagai proyek independen tanpa modal usaha formal, apabila terdapat kewajiban ganti rugi yang secara hukum tetap berlaku terlepas dari batasan di atas, maka total tanggung jawab kami kepada Anda dibatasi maksimal sejumlah nilai yang Anda bayarkan kepada kami untuk Produk terkait dalam 12 (dua belas) bulan terakhir, atau sejumlah Rp0 (nol rupiah) apabila Produk atau layanan tersebut diakses secara gratis.',

      'terms-h-09': 'Ganti Rugi',
      'terms-p-09-intro': 'Anda setuju untuk membela, mengganti rugi, dan membebaskan Nusa Interactive Studio beserta perorangan/tim yang mengelolanya dari segala klaim, tuntutan, kerugian, kewajiban, dan biaya (termasuk biaya hukum yang wajar) yang timbul akibat:',
      'terms-li-09-a': 'Pelanggaran Anda terhadap Syarat dan Ketentuan ini;',
      'terms-li-09-b': 'Penyalahgunaan Situs atau Produk kami oleh Anda;',
      'terms-li-09-c': 'Pelanggaran Anda terhadap hak pihak ketiga, termasuk hak kekayaan intelektual; atau',
      'terms-li-09-d': 'Konten yang Anda kirimkan atau publikasikan melalui Situs atau kanal komunitas kami (misalnya Discord).',

      'terms-h-10': 'Penghentian Akses',
      'terms-p-10': 'Kami berhak untuk membatasi, menangguhkan, atau menghentikan akses Anda ke Situs kapan saja, tanpa pemberitahuan sebelumnya, apabila kami menemukan indikasi pelanggaran terhadap Syarat dan Ketentuan ini.',

      'terms-h-11': 'Perubahan Ketentuan',
      'terms-p-11': 'Kami dapat memperbarui Syarat dan Ketentuan ini dari waktu ke waktu, termasuk apabila status kelembagaan Studio berubah menjadi badan hukum resmi. Perubahan akan berlaku sejak dipublikasikan di halaman ini, dengan tanggal pembaruan tercantum di bagian atas halaman. Kami menyarankan Anda meninjau halaman ini secara berkala.',

      'terms-h-12': 'Hukum yang Berlaku &amp; Penyelesaian Sengketa',
      'terms-p-12-a': 'Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum yang berlaku di Republik Indonesia, tanpa memperhatikan pertentangan aturan hukum.',
      'terms-p-12-b': 'Apabila timbul perselisihan terkait Syarat dan Ketentuan ini, kedua belah pihak sepakat untuk terlebih dahulu menyelesaikannya secara musyawarah untuk mufakat. Apabila penyelesaian secara musyawarah tidak tercapai dalam waktu yang wajar, sengketa dapat diselesaikan melalui mekanisme yang sesuai dengan hukum yang berlaku di Indonesia.',

      'terms-h-13': 'Kontak',
      'terms-p-13-intro': 'Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami melalui:',

      /* ================= KEBIJAKAN PRIVASI ================= */
      'privacy-hero-title': 'Kebijakan Privasi',

      'privacy-toc-01': '1. Pendahuluan',
      'privacy-toc-02': '2. Sifat Situs Ini',
      'privacy-toc-03': '3. Preferensi Bahasa (Local Storage)',
      'privacy-toc-04': '4. Data dari Penyedia Hosting',
      'privacy-toc-05': '5. Tautan ke Platform Pihak Ketiga',
      'privacy-toc-06': '6. Keamanan',
      'privacy-toc-07': '7. Privasi Anak',
      'privacy-toc-08': '8. Perubahan di Masa Depan',
      'privacy-toc-09': '9. Batasan Tanggung Jawab',
      'privacy-toc-10': '10. Perubahan Kebijakan',
      'privacy-toc-11': '11. Kontak',

      'privacy-note': 'Dokumen ini adalah kerangka umum Kebijakan Privasi yang disusun berdasarkan struktur situs Nusa Interactive Studio, dengan mempertimbangkan bahwa Situs ini bersifat statis (tidak memiliki sistem formulir, akun pengguna, atau pemrosesan pembayaran), serta status Studio sebagai proyek indie yang belum berbadan hukum resmi. Dokumen ini <strong>bukan pengganti nasihat hukum profesional</strong>. Sebelum dipublikasikan secara resmi, disarankan untuk ditinjau oleh konsultan hukum agar sesuai dengan regulasi perlindungan data yang berlaku (misalnya UU PDP di Indonesia).',

      'privacy-h-01': 'Pendahuluan',
      'privacy-p-01-a': 'Nusa Interactive Studio ("kami", "Studio") menghargai privasi setiap pengunjung situs <strong>nusainteractivestudio.com</strong> ("Situs"). Kebijakan Privasi ini menjelaskan bagaimana Situs ini beroperasi terkait data pengunjung, mengingat Situs kami adalah situs statis yang berfungsi sebagai media informasi, bukan platform yang mengumpulkan data pengguna secara aktif.',
      'privacy-p-01-b': '<strong>Nusa Interactive Studio</strong> adalah nama proyek/brand kreatif independen (indie) yang dikelola oleh perorangan dan/atau tim developer, dan saat ini belum berbentuk badan hukum resmi (seperti PT atau CV) di Indonesia.',

      'privacy-h-02': 'Sifat Situs Ini',
      'privacy-p-02': 'Situs ini merupakan situs statis (static website) yang berfungsi sebagai media informasi mengenai Studio, proyek game, dan berita terkait. Situs ini <strong>tidak memiliki sistem pendaftaran akun, formulir pengumpulan data, keranjang belanja, atau pemrosesan pembayaran</strong> apa pun. Kami tidak secara aktif meminta atau menyimpan data pribadi pengunjung melalui Situs ini.',

      'privacy-h-03': 'Preferensi Bahasa (Local Storage)',
      'privacy-p-03': 'Situs ini menggunakan fitur <strong>local storage</strong> bawaan browser (bukan cookie pelacakan) untuk mengingat pilihan bahasa Anda (Indonesia/Inggris) pada kunjungan berikutnya. Data ini <strong>tersimpan sepenuhnya di perangkat Anda sendiri</strong> dan tidak dikirimkan atau dapat diakses oleh kami.',

      'privacy-h-04': 'Data dari Penyedia Hosting',
      'privacy-p-04': 'Situs ini di-hosting menggunakan GitHub Pages. Sebagai bagian dari operasional standar layanan hosting, penyedia hosting dapat secara otomatis mencatat data teknis seperti alamat IP, jenis browser, dan waktu akses untuk keperluan keamanan dan performa infrastruktur mereka. Pencatatan ini dilakukan oleh pihak GitHub (Microsoft), bukan oleh kami secara langsung, dan tunduk pada <a class="inline-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">Kebijakan Privasi GitHub</a>.',

      'privacy-h-05': 'Tautan ke Platform Pihak Ketiga',
      'privacy-p-05': 'Situs kami dapat memuat tautan ke platform pihak ketiga, seperti Instagram, Discord, dan GameJolt (tempat game kami dapat diunduh secara gratis). Apabila Anda mengklik tautan tersebut dan berinteraksi dengan platform itu (misalnya membuat akun, memberi komentar, atau mengunduh game), maka kebijakan privasi milik platform tersebut yang berlaku, bukan kebijakan ini. Kami menyarankan Anda membaca kebijakan privasi masing-masing platform tersebut.',

      'privacy-h-06': 'Keamanan',
      'privacy-p-06': 'Karena Situs ini tidak menyimpan data pribadi pengunjung di server kami, risiko kebocoran data dari sisi kami sangat minim. Keamanan Situs secara umum juga bergantung pada infrastruktur GitHub Pages yang kami gunakan sebagai penyedia hosting.',

      'privacy-h-07': 'Privasi Anak',
      'privacy-p-07': 'Beberapa game kami mengandung tema horor psikologis yang ditujukan untuk audiens dewasa atau remaja sesuai rating usia yang berlaku. Situs ini tidak ditujukan untuk anak-anak di bawah usia 13 tahun.',

      'privacy-h-08': 'Perubahan di Masa Depan',
      'privacy-p-08': 'Apabila di kemudian hari Situs ini menambahkan fitur yang mengumpulkan data pribadi secara aktif (misalnya formulir kontak, newsletter, sistem akun, atau alat analitik pengunjung seperti Google Analytics), Kebijakan Privasi ini akan diperbarui untuk menjelaskan secara rinci data apa yang dikumpulkan dan bagaimana data tersebut digunakan.',

      'privacy-h-09': 'Batasan Tanggung Jawab',
      'privacy-p-09': 'Sebagai proyek indie yang belum berbadan hukum resmi, dan sebagai situs statis tanpa pemrosesan data pribadi secara aktif, Nusa Interactive Studio tidak bertanggung jawab atas kerugian yang timbul dari platform pihak ketiga yang ditautkan dari Situs ini, atau dari insiden keamanan pada infrastruktur hosting pihak ketiga yang berada di luar kendali kami.',

      'privacy-h-10': 'Perubahan Kebijakan',
      'privacy-p-10': 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan pada Situs atau persyaratan hukum. Tanggal pembaruan terbaru akan selalu tercantum di bagian atas halaman ini.',

      'privacy-h-11': 'Kontak',
      'privacy-p-11-intro': 'Jika Anda memiliki pertanyaan terkait Kebijakan Privasi ini, silakan hubungi kami melalui:'
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
          // innerHTML (not textContent) so entries containing <strong>/<a> render correctly
          el.innerHTML = T[lang][key];
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