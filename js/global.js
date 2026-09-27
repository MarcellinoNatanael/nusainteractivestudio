/**
 * NOWL VISION GAMES — global.js
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
      'hero-tagline':    'Nowl Vision Games is a home-based indie game studio focused on developing horror games that draw upon local culture, myths, folklore, and urban legends.',
      'btn-explore':     'Explore More',
      'sec-projects':    'Our Projects',
      'proj-sub':        'From a critically-loved release to the next nightmare in the works every project carries a piece of Indonesian folklore.',
      'badge-released':  'Released',
      'btn-view-project':'View Project',
      'proj-demit-desc': 'Survival horror rooted in Javanese mythology.',
      'proj-pg-desc':    'Psychological horror from Indonesian folklore.',
      'proj-gombel-desc':'First-person survival horror, currently in development.',
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
      'about-p1':        'Nowl Vision Games is an independent game development studio focused on the horror and psychological horror genres, drawing inspiration from Indonesian culture, myths, folklore, and urban legends. Founded by Marcellino Natanael, the studio began as a home-grown project driven by the desire to bring Indonesian narratives and urban legends to the global gaming industry.',
      'about-p2':        'We believe that the most compelling horror atmospheres arise from cultural resonance and intense psychological tension. By integrating historical elements, traditional architecture, and local mythology into robust gameplay mechanics, Nowl Vision Games is committed to delivering immersive, competitive, and internationally acclaimed gaming experiences without compromising our cultural identity.',
      'founder-title':   'Founder & CEO',
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
      'vm-vision-text':  'To become a game studio committed to highlighting and preserving the culture, myths, folklore, and urban legends of the Indonesian archipelago, and introducing them to the world through interactive media.',
      'vm-mission-title':'Mission',
      'vm-mission-p1': 'Creating works that can be enjoyed, not merely played.',
      'vm-mission-p2': 'Exploring and highlighting local culture to introduce it to the world.',
      'vm-mission-p3': 'Driving technological innovation in game development.',
      'vm-mission-p4': 'Realizing a visual aesthetic with a strong, distinctive character.',
      /* Core Value */
      'cv-n-title': 'Novelty',
      'cv-n-text': 'We are committed to always creating fresh ideas, concepts, and themes in every game we work on. This approach ensures each of our works delivers a new experience that stays competitive in the global industry.',
      'cv-u-title': 'Unity',
      'cv-u-text': 'We uphold strong teamwork and solid collaboration. We believe internal synergy and closeness with our community are the main foundation for creating products that stay relevant to players.',
      'cv-s-title': 'Stewardship',
      'cv-s-text': 'We take full responsibility for preserving and presenting the richness of Indonesian folklore and local mythology. We integrate this cultural heritage professionally without compromising modern technical quality.',
      'cv-a-title': 'Authenticity',
      'cv-a-text': 'We uphold originality and genuine identity as the main foundation of every creative decision. We stay true to our cultural roots to produce horror works that are honest, unique, and distinctive in the international market.',

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

      'terms-note': 'This document is a general Terms and Conditions framework prepared based on the structure of the Nowl Vision Games website, taking into account the Studio\u2019s status as an indie project that is not yet a registered legal entity. This document <strong>is not a substitute for professional legal advice</strong>. Before official publication, it is strongly recommended to have it reviewed by a legal consultant to ensure compliance with the regulations applicable in your jurisdiction, particularly regarding limitation of liability and indemnification clauses.',

      'terms-h-01': 'Introduction',
      'terms-p-01-a': 'Welcome to <strong>nusainteractivestudio.com</strong> ("Site"), operated by Nowl Vision Games ("we", "Studio"). By accessing or using this Site, you ("User") agree to be bound by the following Terms and Conditions. If you do not agree to any part of these terms, please refrain from continuing to use the Site.',
      'terms-p-01-b': '<strong>Nowl Vision Games</strong> is the name of an independent (indie) creative project/brand run by an individual and/or a team of developers, and is <strong>currently not registered as a formal legal entity</strong> (such as a PT or CV) in Indonesia. All activities, communications, and products released under this name are carried out as part of this independent project. Should the institutional status change to a formal legal entity in the future, these Terms and Conditions will be updated to reflect that change.',

      'terms-h-02': 'Definitions',
      'terms-li-02-situs':    '<strong>Site</strong> refers to nusainteractivestudio.com, including all pages and subdomains within it.',
      'terms-li-02-konten':   '<strong>Content</strong> includes text, images, videos, logos, and other materials published on the Site.',
      'terms-li-02-produk':   '<strong>Product</strong> refers to the games and digital assets developed by Nowl Vision Games, including but not limited to DEMIT and Perjanjian Gaib.',
      'terms-li-02-pengguna': '<strong>User</strong> means any individual who accesses or interacts with the Site.',

      'terms-h-03': 'Use of the Site',
      'terms-p-03-intro': 'You agree to use the Site only for lawful purposes and in accordance with these Terms and Conditions. You are prohibited from:',
      'terms-li-03-a': 'Using the Site in a way that damages, disables, or unreasonably burdens our infrastructure.',
      'terms-li-03-b': 'Attempting to access areas of the Site that are not open to the public.',
      'terms-li-03-c': 'Using bots, scrapers, or other automated tools without our written permission.',
      'terms-li-03-d': 'Uploading or distributing content that is unlawful, contains hate speech, or infringes the rights of others.',

      'terms-h-04': 'Intellectual Property Rights',
      'terms-p-04-a': 'All Content on the Site including but not limited to logos, product names (DEMIT, Perjanjian Gaib), layout, writing, and the overall visual composition belongs to Nowl Vision Games or its licensors, and is protected under applicable copyright and intellectual property laws. Copying, distributing, modifying, or reusing Content without our written permission is prohibited, except for reasonable personal and non-commercial purposes (such as sharing a link to the Site).',
      'terms-p-04-b': 'Some of our visual assets, illustrations, design elements, and in-game assets are created using or incorporate licensed third-party materials, including but not limited to:',
      'terms-li-04-canva': '<strong>Canva</strong> graphic elements and design templates used in accordance with the <a class="inline-link" href="https://www.canva.com/policies/content-license-agreement/" target="_blank" rel="noopener">Canva Content License Agreement</a>.',
      'terms-li-04-fab':   '<strong>Fab (Epic Games / Unreal Engine Marketplace)</strong> 3D assets, models, textures, and/or plugins used in accordance with the Fab End User License Agreement (EULA) applicable to each asset.',
      'terms-p-04-c': 'Copyright in the original third-party materials remains with their respective creators or licensors, and our use of them is carried out in accordance with the license terms applicable on each platform. Nowl Vision Games does not claim exclusive ownership over such raw third-party assets, but holds copyright over the resulting work, compilation, creative combination, story, characters, and the overall game product built from those assets.',
      'terms-note-04': 'If you come across a potential license infringement related to third-party assets on the Site or in our Products, please contact us through the channels listed in the Contact section.',

      'terms-h-05': 'Product &amp; Game Purchases',
      'terms-p-05': 'Purchases of games and digital products through our Store page are subject to the terms of the relevant distribution platform (such as Steam, itch.io, or other platforms we use). Nowl Vision Games does not process payments directly on this Site; transactions are directed to third-party platforms that have their own refund and payment policies.',

      'terms-h-06': 'User Content',
      'terms-p-06': 'If you submit content to us (for example through a contact form, our Discord community, or our social media), you warrant that such content does not infringe the rights of any third party and grant us a non-exclusive license to use it for promotional purposes or community development related to the Studio.',

      'terms-h-07': 'Third-Party Links',
      'terms-p-07': 'Our Site may contain links to third-party platforms such as Instagram, Discord, or digital stores. We are not responsible for the content, privacy policies, or practices of those third-party sites. Access to such links is entirely at your own risk.',

      'terms-h-08': 'Limitation of Liability',
      'terms-p-08-a': 'The Site, Content, and Products are provided <strong>"as is" and "as available"</strong>, without warranties of any kind, whether express or implied, including but not limited to warranties of fitness for a particular purpose, absence of bugs, or accuracy of information.',
      'terms-p-08-b': 'To the extent permitted by applicable law, Nowl Vision Games \u2014 including the individual(s)/team managing it \u2014 <strong>shall not be liable</strong> for any direct, indirect, incidental, special, consequential, or other damages whatsoever (including but not limited to data loss, loss of profit, device damage, or business interruption) arising from or related to the use or inability to use the Site or our Products, even if we have been advised of the possibility of such damages.',
      'terms-p-08-c': 'Because Nowl Vision Games operates as an independent project without formal business capital, if any indemnification obligation remains legally applicable despite the above limitation, our total liability to you shall be limited to the amount you paid us for the relevant Product within the last 12 (twelve) months, or IDR 0 (zero) if the Product or service was accessed free of charge.',

      'terms-h-09': 'Indemnification',
      'terms-p-09-intro': 'You agree to defend, indemnify, and hold harmless Nowl Vision Games and the individual(s)/team managing it from any claims, demands, losses, liabilities, and costs (including reasonable legal fees) arising from:',
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

      'privacy-note': 'This document is a general Privacy Policy framework prepared based on the structure of the Nowl Vision Games website, taking into account that this Site is static (it has no forms, user accounts, or payment processing), and the Studio\u2019s status as an indie project that is not yet a registered legal entity. This document <strong>is not a substitute for professional legal advice</strong>. Before official publication, it is recommended to have it reviewed by a legal consultant to ensure compliance with applicable data protection regulations (such as Indonesia\u2019s Personal Data Protection Law/UU PDP).',

      'privacy-h-01': 'Introduction',
      'privacy-p-01-a': 'Nowl Vision Games ("we", "Studio") values the privacy of every visitor to <strong>nusainteractivestudio.com</strong> ("Site"). This Privacy Policy explains how this Site operates in relation to visitor data, given that our Site is a static site that serves as an informational medium rather than a platform that actively collects user data.',
      'privacy-p-01-b': '<strong>Nowl Vision Games</strong> is the name of an independent (indie) creative project/brand run by an individual and/or a team of developers, and is currently not registered as a formal legal entity (such as a PT or CV) in Indonesia.',

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
      'privacy-p-09': 'As an indie project that is not yet a registered legal entity, and as a static site without active personal data processing, Nowl Vision Games is not liable for losses arising from third-party platforms linked from this Site, or from security incidents on third-party hosting infrastructure beyond our control.',

      'privacy-h-10': 'Changes to This Policy',
      'privacy-p-10': 'We may update this Privacy Policy from time to time to reflect changes to the Site or legal requirements. The latest update date will always be shown at the top of this page.',

      'privacy-h-11': 'Contact',
      'privacy-p-11-intro': 'If you have any questions regarding this Privacy Policy, please contact us through:',

      /* ================= BLOG 2: THE CHILD KIDNAPPER SOUND DESIGN ================= */
      'blog2-copy-link':   'Copy Link',
      'blog2-title':       'How can sound increase tension and fear more effectively than jump scares? Listen to the explanation!',
      'blog2-lead':        'Imagine you\u2019re alone in your room. The lights are dim, your headphones are on, and suddenly you hear a voice whispering, \u201cJaka... Jaka...\u201d from somewhere. You immediately look around. Nobody\u2019s there. A few seconds later, you hear footsteps coming from outside the room. But nothing unusual is happening on the screen.',
      'blog2-date':        'Updated December 24, 2025',
      'blog2-read-time':   '6 min read',
      'blog2-toc-title':   'Table of Contents',

      'blog2-p-intro': 'This is where horror sound design starts to do its job. Sometimes, a sound that does not even show you a monster can make you more nervous than suddenly seeing one right in front of you. In psychological horror, sound is not just something added to the visuals. It can make us imagine things that we cannot actually see. This idea can also be seen in <em>The Child Kidnapper</em>. Jaka is initially playing a game in his room when he hears a mysterious whisper. Then the lights suddenly go out, and Wewe Gombel appears from the computer screen.',

      'blog2-h-1': 'Why Can Sound Be Scarier Than a Jumpscare?',
      'blog2-p1-1': 'Jumpscares are definitely effective. A scary face suddenly appears on the screen, followed by a loud sound, and the first reaction is usually something like, \u201cOH, COME ON!\u201d This happens because of something called the <em>startle reflex</em>. It is simply the body\u2019s automatic reaction when something suddenly surprises us. In horror movies and games, a sudden loud sound is often used to make that reaction even stronger.',
      'blog2-p1-2': 'The problem is that a jumpscare usually gives us a quick scare. Once the monster appears, we immediately know where the threat is. \u201cOh... so that\u2019s what was there.\u201d Sound design can work in a different way. A sound can give us only part of the information. We hear something, but we do not know where it came from or what caused it. So our brain starts trying to figure it out. And honestly, our imagination can sometimes come up with something much scarier than the actual monster.',

      'blog2-h-2': 'Silence Isn\u2019t Empty. It\u2019s a Weapon.',
      'blog2-p2-1': 'One of the most important parts of horror sound design is silence. When a scene that was full of sound suddenly becomes quiet, we naturally start paying more attention. A small sound like dripping water, leaves moving, someone\u2019s breathing, or a creaking floor can suddenly feel much louder.',
      'blog2-p2-2': 'In horror, background sounds, music, sound effects, and even silence can help create tension. Think about Jaka and Adit walking through the forest. They are already nervous, and then footsteps start getting closer. Jaka even hides behind some bushes because he thinks something is coming. Visually, we do not even need to see Wewe Gombel yet. Just give the player the sound of footsteps.',
      'blog2-quote-1': 'Thump... thump... thump...<br>Getting closer.<br>Thump... thump... thump...<br>Then...<br>Nothing.',
      'blog2-p2-3': 'That moment of \u201cnothing\u201d is where the brain starts doing the work. \u201cWhere did the footsteps go?\u201d \u201cIs something still there?\u201d \u201cIs it behind me?\u201d Suddenly, the player is creating their own horror in their head.',

      'blog2-h-3': 'The Scariest Things Are Sometimes the Things We Can\u2019t See',
      'blog2-p3-1': 'Psychological horror often takes advantage of something very simple: people become uncomfortable when they cannot understand or predict what is happening. That is why sounds like whispers, breathing, footsteps, something moving nearby, a branch breaking, or a noise coming from far away can be so effective. We hear something, but we do not get to see its source.',
      'blog2-p3-2': 'In <em>The Child Kidnapper</em>, this happens from the very beginning. Jaka hears a mysterious voice calling his name. Then the lights go out. He looks around, but there is nobody there. Imagine the sound design going something like this: PC sounds &rarr; quiet room ambience &rarr; electrical noise &rarr; silence &rarr; a very soft whisper &rarr; silence again &rarr; the lights suddenly go out.',
      'blog2-p3-3': 'No jumpscare needed yet. The player is already thinking, \u201cWhere did that voice come from?\u201d And as long as that question has no answer, the fear can stay.',

      'blog2-h-4': 'Loud Doesn\u2019t Always Mean Scary',
      'blog2-p4-1': 'A common mistake in horror is thinking that louder sounds automatically make something scarier. But if everything is loud from beginning to end, our ears will eventually get used to it.',
      'blog2-p4-2': 'Good sound design needs contrast. A quiet sound can make a loud sound feel much stronger. Silence can make a tiny noise feel important. Even calm music can make a sudden change feel much more intense. So horror sound design is not simply about making scary noises. It is about choosing the right sound, the right volume, and the right moment. Sometimes, making a sound quieter can actually make the scene scarier.',

      'blog2-h-5': 'From Whispers to Screams: The Sound of <em>The Child Kidnapper</em>',
      'blog2-p5-1': 'If we apply these ideas to <em>The Child Kidnapper</em>, each location can have its own sound. In Jaka\u2019s room, we could hear the computer, a fan, keyboard sounds, and the quiet atmosphere of the room. When the mysterious whisper appears, those background sounds can slowly become quieter, making the whisper stand out.',
      'blog2-p5-2': 'When the story moves into the forest, the sounds change. Wind, leaves, insects, footsteps, and distant noises become part of the experience. Even Wewe Gombel does not always need to make a clear or recognizable sound. A strange sound coming from somewhere in the distance can be enough to make the player feel that something is nearby.',
      'blog2-p5-3': 'The same idea appears near the end, when Jaka, Adit, and Desi try to escape. They hear footsteps and frightening sounds behind them before eventually leaving Desi behind. Wewe Gombel then appears behind Desi, and the scene cuts to black.',
      'blog2-p5-4': 'The monster is gone from the screen. There is no visual. There is only Desi\u2019s scream: \u201cHELP!!!\u201d Then... silence.',
      'blog2-p5-5': 'Sometimes, what we cannot see can be much more disturbing than what is right in front of us.',

      'blog2-h-6': 'So, Which One Is Scarier?',
      'blog2-p6-1': 'Jumpscares and sound design are not really enemies. In fact, they work well together. A jumpscare can use sound to make the surprise stronger, while sound design can build the atmosphere and tension before the jumpscare even happens.',
      'blog2-p6-2': 'The difference is simple. A jumpscare makes us suddenly startle, while horror sound design can make us feel nervous while waiting for something to happen. We hear something, but we do not know what it is or where it came from. That uncertainty keeps our minds working and makes us imagine all kinds of possibilities.',
      'blog2-p6-3': 'This is also what happens in <em>The Child Kidnapper</em>. Wewe Gombel does not always need to appear immediately. Her presence can first be suggested through whispers, footsteps, and the sounds of the environment. Sound is not just something that supports the visuals. It can become part of the horror itself.',
      'blog2-quote-2': 'Because sometimes, a small sound coming from the darkness can be much scarier than a monster standing right in front of you.',

      'blog2-h-7': 'Dare to Listen?',
      'blog2-p7-1': 'Want to find out how scary an unseen sound can really be? Put on your headphones, turn off the lights, and imagine that you\u2019re alone in the middle of a dark forest. Now listen carefully.',
      'blog2-p7-2': 'You hear footsteps behind you... Getting closer... Closer... But whatever you do... Don\u2019t turn around.',
      'blog2-p7-3': 'Experience the sound. Feel the fear. Download <em>The Child Kidnapper</em> now on Game Jolt and experience the horror for yourself.',

      'blog2-sources-label': 'References &amp; Sources',
      'blog2-tag-1': 'Sound Design',
      'blog2-tag-2': 'Psychological Horror',
      'blog2-author-desc': 'An indie home studio focused on bringing local culture, myths, folklore, and urban legends into psychological horror games.',

      /* ================= BLOG 1: DEVLOG (SOUND DESIGN) ================= */
      'blog1-copy-link':   'Copy Link',
      'blog1-title':       'It Can Be Scary Without a Ghost? Discover the Sound Techniques Behind The Child Kidnapper',
      'blog1-lead':        'Imagine you\u2019re alone in your room. The lights are dim, your headphones are on, and suddenly you hear a voice whispering, \u201cJaka... Jaka...\u201d from somewhere. You immediately look around. Nobody\u2019s there. A few seconds later, you hear footsteps coming from outside the room. But nothing unusual is happening on the screen.',
      'blog1-date':        'Updated December 24, 2025',
      'blog1-read-time':   '6 min read',
      'blog1-toc-title':   'Table of Contents',

      'blog1-p-intro': 'This is where horror sound design starts to do its job. Sometimes, a sound that does not even show you a monster can make you more nervous than suddenly seeing one right in front of you. In psychological horror, sound is not just something added to the visuals. It can make us imagine things that we cannot actually see. This idea can also be seen in <em>The Child Kidnapper</em>. Jaka is initially playing a game in his room when he hears a mysterious whisper. Then the lights suddenly go out, and Wewe Gombel appears from the computer screen.',

      'blog1-h-1': 'Why Can Sound Be Scarier Than a Jumpscare?',
      'blog1-p1-1': 'Jumpscares are definitely effective. A scary face suddenly appears on the screen, followed by a loud sound, and the first reaction is usually something like, \u201cOH, COME ON!\u201d This happens because of something called the <em>startle reflex</em>. It is simply the body\u2019s automatic reaction when something suddenly surprises us. In horror movies and games, a sudden loud sound is often used to make that reaction even stronger.',
      'blog1-p1-2': 'The problem is that a jumpscare usually gives us a quick scare. Once the monster appears, we immediately know where the threat is. \u201cOh... so that\u2019s what was there.\u201d Sound design can work in a different way. A sound can give us only part of the information. We hear something, but we do not know where it came from or what caused it. So our brain starts trying to figure it out. And honestly, our imagination can sometimes come up with something much scarier than the actual monster.',

      'blog1-h-2': 'Silence Isn\u2019t Empty. It\u2019s a Weapon.',
      'blog1-p2-1': 'One of the most important parts of horror sound design is silence. When a scene that was full of sound suddenly becomes quiet, we naturally start paying more attention. A small sound like dripping water, leaves moving, someone\u2019s breathing, or a creaking floor can suddenly feel much louder.',
      'blog1-p2-2': 'In horror, background sounds, music, sound effects, and even silence can help create tension. Think about Jaka and Adit walking through the forest. They are already nervous, and then footsteps start getting closer. Jaka even hides behind some bushes because he thinks something is coming. Visually, we do not even need to see Wewe Gombel yet. Just give the player the sound of footsteps.',
      'blog1-quote-1': 'Thump... thump... thump...<br>Getting closer.<br>Thump... thump... thump...<br>Then...<br>Nothing.',
      'blog1-p2-3': 'That moment of \u201cnothing\u201d is where the brain starts doing the work. \u201cWhere did the footsteps go?\u201d \u201cIs something still there?\u201d \u201cIs it behind me?\u201d Suddenly, the player is creating their own horror in their head.',

      'blog1-h-3': 'The Scariest Things Are Sometimes the Things We Can\u2019t See',
      'blog1-p3-1': 'Psychological horror often takes advantage of something very simple: people become uncomfortable when they cannot understand or predict what is happening. That is why sounds like whispers, breathing, footsteps, something moving nearby, a branch breaking, or a noise coming from far away can be so effective. We hear something, but we do not get to see its source.',
      'blog1-p3-2': 'In <em>The Child Kidnapper</em>, this happens from the very beginning. Jaka hears a mysterious voice calling his name. Then the lights go out. He looks around, but there is nobody there. Imagine the sound design going something like this: PC sounds &rarr; quiet room ambience &rarr; electrical noise &rarr; silence &rarr; a very soft whisper &rarr; silence again &rarr; the lights suddenly go out.',
      'blog1-p3-3': 'No jumpscare needed yet. The player is already thinking, \u201cWhere did that voice come from?\u201d And as long as that question has no answer, the fear can stay.',

      'blog1-h-4': 'Loud Doesn\u2019t Always Mean Scary',
      'blog1-p4-1': 'A common mistake in horror is thinking that louder sounds automatically make something scarier. But if everything is loud from beginning to end, our ears will eventually get used to it.',
      'blog1-p4-2': 'Good sound design needs contrast. A quiet sound can make a loud sound feel much stronger. Silence can make a tiny noise feel important. Even calm music can make a sudden change feel much more intense. So horror sound design is not simply about making scary noises. It is about choosing the right sound, the right volume, and the right moment. Sometimes, making a sound quieter can actually make the scene scarier.',

      'blog1-h-5': 'From Whispers to Screams: The Sound of <em>The Child Kidnapper</em>',
      'blog1-p5-1': 'If we apply these ideas to <em>The Child Kidnapper</em>, each location can have its own sound. In Jaka\u2019s room, we could hear the computer, a fan, keyboard sounds, and the quiet atmosphere of the room. When the mysterious whisper appears, those background sounds can slowly become quieter, making the whisper stand out.',
      'blog1-p5-2': 'When the story moves into the forest, the sounds change. Wind, leaves, insects, footsteps, and distant noises become part of the experience. Even Wewe Gombel does not always need to make a clear or recognizable sound. A strange sound coming from somewhere in the distance can be enough to make the player feel that something is nearby.',
      'blog1-p5-3': 'The same idea appears near the end, when Jaka, Adit, and Desi try to escape. They hear footsteps and frightening sounds behind them before eventually leaving Desi behind. Wewe Gombel then appears behind Desi, and the scene cuts to black.',
      'blog1-p5-4': 'The monster is gone from the screen. There is no visual. There is only Desi\u2019s scream: \u201cHELP!!!\u201d Then... silence.',
      'blog1-p5-5': 'Sometimes, what we cannot see can be much more disturbing than what is right in front of us.',

      'blog1-h-6': 'So, Which One Is Scarier?',
      'blog1-p6-1': 'Jumpscares and sound design are not really enemies. In fact, they work well together. A jumpscare can use sound to make the surprise stronger, while sound design can build the atmosphere and tension before the jumpscare even happens.',
      'blog1-p6-2': 'The difference is simple. A jumpscare makes us suddenly startle, while horror sound design can make us feel nervous while waiting for something to happen. We hear something, but we do not know what it is or where it came from. That uncertainty keeps our minds working and makes us imagine all kinds of possibilities.',
      'blog1-p6-3': 'This is also what happens in <em>The Child Kidnapper</em>. Wewe Gombel does not always need to appear immediately. Her presence can first be suggested through whispers, footsteps, and the sounds of the environment. Sound is not just something that supports the visuals. It can become part of the horror itself.',
      'blog1-quote-2': 'Because sometimes, a small sound coming from the darkness can be much scarier than a monster standing right in front of you.',

      'blog1-h-7': 'Dare to Listen?',
      'blog1-p7-1': 'Want to find out how scary an unseen sound can really be? Put on your headphones, turn off the lights, and imagine that you\u2019re alone in the middle of a dark forest. Now listen carefully.',
      'blog1-p7-2': 'You hear footsteps behind you... Getting closer... Closer... But whatever you do... Don\u2019t turn around.',
      'blog1-p7-3': 'Experience the sound. Feel the fear. Download <em>The Child Kidnapper</em> now on Game Jolt and experience the horror for yourself.',

      'blog1-sources-label': 'References &amp; Sources',
      'blog1-tag-1': 'Sound Design',
      'blog1-tag-2': 'Psychological Horror',
      'blog1-author-desc': 'An indie home studio focused on bringing local culture, myths, folklore, and urban legends into psychological horror games.'
    },
    id: {
      'nav-home':        'Beranda',
      'nav-about':       'Tentang Kami',
      'nav-projects':    'Proyek',
      'nav-news':        'Berita',
      'nav-careers':     'Karir',
      'nav-store':       'Toko',
      'hero-tagline':    'Nowl Vision Games adalah studio game indie rumahan yang berfokus pada pengembangan game horor dengan mengangkat budaya, mitos, cerita rakyat, dan urban legend lokal.',
      'btn-explore':     'Jelajahi',
      'sec-projects':    'Proyek Kami',
      'proj-sub':        'Dari rilis yang mendapat sambutan hangat hingga mimpi buruk berikutnya yang sedang digarap setiap proyek membawa sepotong cerita rakyat Indonesia.',
      'badge-released':  'Rilis',
      'btn-view-project':'Lihat Proyek',
      'proj-demit-desc': 'Horor bertahan hidup berakar pada mitologi Jawa.',
      'proj-pg-desc':    'Horor psikologis dari cerita rakyat Indonesia.',
      'proj-gombel-desc':'Horor bertahan hidup orang pertama, masih dalam pengembangan.',
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
      'about-p1':        'Nowl Vision Games adalah studio pengembang game independen yang berfokus pada genre horor dan horor psikologis, berdasarkan budaya, mitos, cerita rakyat, dan urban legend lokal Indonesia. Didirikan oleh Marcellino Natanael, studio ini memulai perjalanannya sebagai proyek rumahan yang didorong oleh keinginan untuk mengangkat narasi dan legenda urban Indonesia ke industri game global.',
      'about-p2':        'Kami percaya bahwa atmosfer horor terbaik lahir dari kedekatan budaya dan ketegangan psikologis yang kuat. Dengan mengintegrasikan nilai-nilai sejarah, arsitektur tradisional, dan mitologi lokal ke dalam mekanisme permainan yang kuat, Nowl Vision Games berkomitmen untuk menghadirkan pengalaman bermain game yang imersif, kompetitif, dan diakui secara internasional tanpa kehilangan identitas budaya kami.',
      'founder-title':   'Pendiri & CEO',
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
      'vm-vision-text':  'Menjadi studio game yang berkomitmen mengangkat dan melestarikan budaya, mitos, cerita rakyat, dan urban legend Nusantara, serta memperkenalkannya kepada dunia melalui media interaktif.',
      'vm-mission-title':'Misi',
      'vm-mission-p1':   'Menciptakan karya yang dapat dinikmati, bukan sekadar dimainkan.',
      'vm-mission-p2':   'Mengeksplorasi dan mengangkat budaya lokal untuk diperkenalkan ke seluruh dunia.',
      'vm-mission-p3':   'Mendorong inovasi teknologi dalam pengembangan game.',
      'vm-mission-p4':   'Mewujudkan estetika visual yang berkarakter kuat.',
      /* Core Values */
      'cv-n-title': 'Novelty',
      'cv-n-text':  'Berkomitmen untuk selalu menciptakan ide, konsep, dan tema secara kebaruan di setiap game yang kami kerjakan. Pendekatan ini memastikan tiap karya kami memberikan pengalaman baru yang kompetitif di industri global.',
      'cv-u-title': 'Unity',
      'cv-u-text':  'Menjunjung tinggi kerja tim dan kolaborasi yang solid. Kami percaya sinergi internal dan kedekatan dengan komunitas adalah fondasi utama untuk melahirkan produk yang relevan bagi para pemain.',
      'cv-s-title': 'Stewardship',
      'cv-s-text':  'Bertanggung jawab penuh dalam menjaga dan mengemas kekayaan cerita rakyat serta mitologi lokal Indonesia. Kami mengintegrasikan warisan budaya ini secara profesional tanpa mengorbankan kualitas teknis modern.',
      'cv-a-title': 'Authenticity',
      'cv-a-text':  'Mempertahankan orisinalitas dan identitas asli sebagai pondasi utama dalam setiap keputusan kreatif. Kami tetap setia pada akar budaya untuk menghasilkan karya horor yang jujur, unik, dan berkarakter di pasar internasional.',

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

      'terms-note': 'Dokumen ini adalah kerangka umum Syarat dan Ketentuan yang disusun berdasarkan struktur situs Nowl Vision Games, dengan mempertimbangkan status Studio sebagai proyek indie yang belum berbadan hukum resmi. Dokumen ini <strong>bukan pengganti nasihat hukum profesional</strong>. Sebelum dipublikasikan secara resmi, sangat disarankan untuk ditinjau oleh konsultan hukum agar sesuai dengan regulasi yang berlaku di yurisdiksi Anda, terutama terkait batasan tanggung jawab dan klausul ganti rugi.',

      'terms-h-01': 'Pendahuluan',
      'terms-p-01-a': 'Selamat datang di <strong>nusainteractivestudio.com</strong> ("Situs"), yang dikelola oleh Nowl Vision Games ("kami", "Studio"). Dengan mengakses atau menggunakan Situs ini, Anda ("Pengguna") menyetujui untuk terikat dengan Syarat dan Ketentuan berikut. Jika Anda tidak menyetujui salah satu ketentuan di sini, mohon untuk tidak melanjutkan penggunaan Situs.',
      'terms-p-01-b': '<strong>Nowl Vision Games</strong> adalah nama proyek/brand kreatif independen (indie) yang dikelola oleh perorangan dan/atau tim developer, dan <strong>saat ini belum berbentuk badan hukum resmi</strong> (seperti PT atau CV) di Indonesia. Seluruh aktivitas, komunikasi, dan produk yang dihasilkan di bawah nama ini dijalankan atas nama proyek independen tersebut. Apabila di kemudian hari status kelembagaan berubah menjadi badan hukum resmi, Syarat dan Ketentuan ini akan diperbarui untuk mencerminkan perubahan tersebut.',

      'terms-h-02': 'Definisi',
      'terms-li-02-situs':    '<strong>Situs</strong> merujuk pada nusainteractivestudio.com beserta seluruh halaman dan subdomain di dalamnya.',
      'terms-li-02-konten':   '<strong>Konten</strong> mencakup teks, gambar, video, logo, dan materi lain yang dipublikasikan di Situs.',
      'terms-li-02-produk':   '<strong>Produk</strong> merujuk pada game dan aset digital yang dikembangkan oleh Nowl Vision Games, termasuk namun tidak terbatas pada DEMIT dan Perjanjian Gaib.',
      'terms-li-02-pengguna': '<strong>Pengguna</strong> adalah setiap individu yang mengakses atau berinteraksi dengan Situs.',

      'terms-h-03': 'Penggunaan Situs',
      'terms-p-03-intro': 'Anda setuju untuk menggunakan Situs hanya untuk tujuan yang sah dan sesuai dengan Syarat dan Ketentuan ini. Anda dilarang untuk:',
      'terms-li-03-a': 'Menggunakan Situs dengan cara yang dapat merusak, menonaktifkan, atau membebani infrastruktur kami secara berlebihan.',
      'terms-li-03-b': 'Mencoba mengakses area Situs yang tidak diizinkan untuk publik.',
      'terms-li-03-c': 'Menggunakan bot, scraper, atau alat otomatis lain tanpa izin tertulis dari kami.',
      'terms-li-03-d': 'Mengunggah atau menyebarkan konten yang melanggar hukum, mengandung ujaran kebencian, atau melanggar hak pihak lain.',

      'terms-h-04': 'Hak Kekayaan Intelektual',
      'terms-p-04-a': 'Seluruh Konten yang ada di Situs termasuk namun tidak terbatas pada logo, nama produk (DEMIT, Perjanjian Gaib), tata letak, tulisan, dan hasil komposisi visual secara keseluruhan \u2014 adalah milik Nowl Vision Games atau pemberi lisensinya, dan dilindungi oleh hukum hak cipta serta kekayaan intelektual yang berlaku. Dilarang menyalin, mendistribusikan, memodifikasi, atau menggunakan kembali Konten tanpa izin tertulis dari kami, kecuali untuk keperluan pribadi dan non-komersial yang wajar (misalnya membagikan tautan Situs).',
      'terms-p-04-b': 'Sebagian aset visual, ilustrasi, elemen desain, dan aset dalam game kami dibuat menggunakan atau menggabungkan materi berlisensi dari pihak ketiga, termasuk namun tidak terbatas pada:',
      'terms-li-04-canva': '<strong>Canva</strong> elemen grafis dan template desain yang digunakan sesuai dengan <a class="inline-link" href="https://www.canva.com/policies/content-license-agreement/" target="_blank" rel="noopener">Canva Content License Agreement</a>.',
      'terms-li-04-fab':   '<strong>Fab (Epic Games / Unreal Engine Marketplace)</strong> aset 3D, model, tekstur, dan/atau plugin yang digunakan sesuai dengan ketentuan lisensi Fab End User License Agreement (EULA) yang berlaku pada masing-masing aset.',
      'terms-p-04-c': 'Hak cipta atas materi-materi asli dari pihak ketiga tersebut tetap dipegang oleh pembuat atau pemberi lisensi aslinya, dan penggunaannya oleh Nowl Vision Games dilakukan sesuai dengan lisensi yang berlaku pada masing-masing platform. Nowl Vision Games tidak mengklaim kepemilikan eksklusif atas aset mentah pihak ketiga tersebut, namun memegang hak cipta atas hasil karya, kompilasi, kombinasi kreatif, cerita, karakter, dan keseluruhan produk game yang dibangun dari aset-aset tersebut.',
      'terms-note-04': 'Apabila Anda menemukan potensi pelanggaran lisensi terkait aset pihak ketiga di Situs atau Produk kami, silakan hubungi kami melalui kanal yang tercantum di bagian Kontak.',

      'terms-h-05': 'Pembelian Produk &amp; Game',
      'terms-p-05': 'Pembelian game dan produk digital melalui halaman Store kami tunduk pada ketentuan platform distribusi terkait (misalnya Steam, itch.io, atau platform lain yang kami gunakan). Nowl Vision Games tidak memproses pembayaran secara langsung di Situs ini; transaksi diarahkan ke platform pihak ketiga yang memiliki kebijakan refund dan pembayarannya sendiri.',

      'terms-h-06': 'Konten Pengguna',
      'terms-p-06': 'Apabila Anda mengirimkan konten kepada kami (misalnya melalui formulir kontak, komunitas Discord, atau media sosial kami), Anda menjamin bahwa konten tersebut tidak melanggar hak pihak ketiga dan memberikan kami izin non-eksklusif untuk menggunakannya sepanjang berkaitan dengan aktivitas promosi atau pengembangan komunitas Studio.',

      'terms-h-07': 'Tautan Pihak Ketiga',
      'terms-p-07': 'Situs kami dapat memuat tautan ke platform pihak ketiga seperti Instagram, Discord, atau toko digital. Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik dari situs pihak ketiga tersebut. Akses terhadap tautan tersebut sepenuhnya menjadi risiko Anda sendiri.',

      'terms-h-08': 'Batasan Tanggung Jawab',
      'terms-p-08-a': 'Situs, Konten, dan Produk disediakan <strong>"sebagaimana adanya" ("as is") dan "sebagaimana tersedia" ("as available")</strong>, tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan kelayakan untuk tujuan tertentu, ketiadaan gangguan (bug), atau ketepatan informasi.',
      'terms-p-08-b': 'Sepanjang diizinkan oleh hukum yang berlaku, Nowl Vision Games \u2014 termasuk perorangan/tim yang mengelolanya \u2014 <strong>tidak bertanggung jawab</strong> atas segala bentuk kerugian langsung, tidak langsung, insidental, khusus, konsekuensial, atau kerugian lain apa pun (termasuk namun tidak terbatas pada kehilangan data, kehilangan keuntungan, kerusakan perangkat, atau gangguan bisnis) yang timbul dari atau berkaitan dengan penggunaan atau ketidakmampuan menggunakan Situs maupun Produk kami, sekalipun kami telah diberitahu mengenai kemungkinan terjadinya kerugian tersebut.',
      'terms-p-08-c': 'Karena Nowl Vision Games dijalankan sebagai proyek independen tanpa modal usaha formal, apabila terdapat kewajiban ganti rugi yang secara hukum tetap berlaku terlepas dari batasan di atas, maka total tanggung jawab kami kepada Anda dibatasi maksimal sejumlah nilai yang Anda bayarkan kepada kami untuk Produk terkait dalam 12 (dua belas) bulan terakhir, atau sejumlah Rp0 (nol rupiah) apabila Produk atau layanan tersebut diakses secara gratis.',

      'terms-h-09': 'Ganti Rugi',
      'terms-p-09-intro': 'Anda setuju untuk membela, mengganti rugi, dan membebaskan Nowl Vision Games beserta perorangan/tim yang mengelolanya dari segala klaim, tuntutan, kerugian, kewajiban, dan biaya (termasuk biaya hukum yang wajar) yang timbul akibat:',
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

      'privacy-note': 'Dokumen ini adalah kerangka umum Kebijakan Privasi yang disusun berdasarkan struktur situs Nowl Vision Games, dengan mempertimbangkan bahwa Situs ini bersifat statis (tidak memiliki sistem formulir, akun pengguna, atau pemrosesan pembayaran), serta status Studio sebagai proyek indie yang belum berbadan hukum resmi. Dokumen ini <strong>bukan pengganti nasihat hukum profesional</strong>. Sebelum dipublikasikan secara resmi, disarankan untuk ditinjau oleh konsultan hukum agar sesuai dengan regulasi perlindungan data yang berlaku (misalnya UU PDP di Indonesia).',

      'privacy-h-01': 'Pendahuluan',
      'privacy-p-01-a': 'Nowl Vision Games ("kami", "Studio") menghargai privasi setiap pengunjung situs <strong>nusainteractivestudio.com</strong> ("Situs"). Kebijakan Privasi ini menjelaskan bagaimana Situs ini beroperasi terkait data pengunjung, mengingat Situs kami adalah situs statis yang berfungsi sebagai media informasi, bukan platform yang mengumpulkan data pengguna secara aktif.',
      'privacy-p-01-b': '<strong>Nowl Vision Games</strong> adalah nama proyek/brand kreatif independen (indie) yang dikelola oleh perorangan dan/atau tim developer, dan saat ini belum berbentuk badan hukum resmi (seperti PT atau CV) di Indonesia.',

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
      'privacy-p-09': 'Sebagai proyek indie yang belum berbadan hukum resmi, dan sebagai situs statis tanpa pemrosesan data pribadi secara aktif, Nowl Vision Games tidak bertanggung jawab atas kerugian yang timbul dari platform pihak ketiga yang ditautkan dari Situs ini, atau dari insiden keamanan pada infrastruktur hosting pihak ketiga yang berada di luar kendali kami.',

      'privacy-h-10': 'Perubahan Kebijakan',
      'privacy-p-10': 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan pada Situs atau persyaratan hukum. Tanggal pembaruan terbaru akan selalu tercantum di bagian atas halaman ini.',

      'privacy-h-11': 'Kontak',
      'privacy-p-11-intro': 'Jika Anda memiliki pertanyaan terkait Kebijakan Privasi ini, silakan hubungi kami melalui:',

      /* ================= BLOG 2: SOUND DESIGN THE CHILD KIDNAPPER ================= */
      'blog2-copy-link':   'Salin Link',
      'blog2-title':       'Bagaimana suara dapat meningkatkan ketegangan dan ketakutan dengan lebih efektif dibandingkan jumpscare? Simak penjelasannya!',
      'blog2-lead':        'Bayangkan kamu sendirian di kamar. Lampu redup, headphone terpasang, dan tiba-tiba kamu dengar bisikan, "Jaka... Jaka..." dari suatu tempat. Kamu langsung menoleh ke sekeliling. Tidak ada siapa-siapa. Beberapa detik kemudian, terdengar suara langkah kaki dari luar kamar. Tapi di layar, tidak ada satu pun hal aneh yang terjadi.',
      'blog2-date':        'Diperbarui 24 Desember 2025',
      'blog2-read-time':   '6 menit baca',
      'blog2-toc-title':   'Daftar Isi',

      'blog2-p-intro': 'Di sinilah sound design horor mulai bekerja. Kadang, suara yang bahkan belum menampilkan monster sama sekali bisa bikin kamu lebih gelisah dibanding saat monster itu muncul tiba-tiba di depan mata. Dalam horor psikologis, suara bukan sekadar pelengkap visual. Suara bisa membuat kita membayangkan hal-hal yang sebenarnya tidak bisa kita lihat. Ide ini juga muncul di <em>The Child Kidnapper</em>. Jaka awalnya sedang bermain game di kamarnya ketika dia mendengar bisikan misterius. Lalu lampu tiba-tiba mati, dan Wewe Gombel muncul dari layar komputer.',

      'blog2-h-1': 'Kenapa Suara Bisa Lebih Menyeramkan daripada Jumpscare?',
      'blog2-p1-1': 'Jumpscare memang efektif. Wajah menyeramkan muncul tiba-tiba di layar, diikuti suara keras, dan reaksi pertama biasanya, "YA AMPUN!" Ini terjadi karena sesuatu yang disebut <em>startle reflex</em> refleks tubuh secara otomatis saat sesuatu mengejutkan kita tiba-tiba. Dalam film dan game horor, suara keras yang mendadak sering dipakai untuk memperkuat reaksi itu.',
      'blog2-p1-2': 'Masalahnya, jumpscare biasanya cuma memberi kekagetan sesaat. Begitu monsternya muncul, kita langsung tahu di mana ancamannya berada. "Oh... jadi itu yang tadi." Sound design bisa bekerja dengan cara berbeda. Sebuah suara cuma memberi kita sebagian informasi. Kita dengar sesuatu, tapi tidak tahu dari mana asalnya atau apa penyebabnya. Jadi otak kita mulai berusaha mencari tahu. Dan jujur saja, imajinasi kita kadang bisa menciptakan sesuatu yang jauh lebih menyeramkan dibanding monster aslinya.',

      'blog2-h-2': 'Keheningan Itu Bukan Kekosongan. Itu Senjata.',
      'blog2-p2-1': 'Salah satu bagian terpenting dari sound design horor adalah keheningan. Saat sebuah adegan yang tadinya penuh suara tiba-tiba jadi sunyi, kita secara alami jadi lebih memperhatikan. Suara kecil seperti tetesan air, dedaunan bergerak, napas seseorang, atau lantai berderit bisa tiba-tiba terasa jauh lebih keras.',
      'blog2-p2-2': 'Dalam horor, suara latar, musik, efek suara, bahkan keheningan bisa membangun ketegangan. Bayangkan Jaka dan Adit berjalan di hutan. Mereka sudah gugup, lalu suara langkah kaki mulai mendekat. Jaka bahkan bersembunyi di balik semak karena mengira ada sesuatu yang datang. Secara visual, kita bahkan belum perlu memperlihatkan Wewe Gombel. Cukup berikan pemain suara langkah kaki.',
      'blog2-quote-1': 'Dug... dug... dug...<br>Makin dekat.<br>Dug... dug... dug...<br>Lalu...<br>Hening.',
      'blog2-p2-3': 'Momen "hening" itulah yang bikin otak mulai bekerja. "Ke mana suara langkahnya?" "Masih ada sesuatu di sana?" "Jangan-jangan di belakangku?" Pemain pun mulai menciptakan horornya sendiri di kepala.',

      'blog2-h-3': 'Hal yang Paling Menyeramkan Kadang Justru yang Tidak Bisa Kita Lihat',
      'blog2-p3-1': 'Horor psikologis sering memanfaatkan satu hal sederhana: orang jadi tidak nyaman ketika mereka tidak bisa memahami atau memprediksi apa yang sedang terjadi. Itu sebabnya suara seperti bisikan, napas, langkah kaki, sesuatu yang bergerak di dekat kita, ranting patah, atau suara dari kejauhan bisa sangat efektif. Kita dengar sesuatu, tapi tidak melihat sumbernya.',
      'blog2-p3-2': 'Di <em>The Child Kidnapper</em>, ini terjadi sejak awal. Jaka mendengar suara misterius memanggil namanya. Lalu lampu padam. Dia menoleh ke sekeliling, tapi tidak ada siapa-siapa. Bayangkan alur sound design-nya kira-kira begini: suara PC &rarr; suasana kamar yang sunyi &rarr; suara listrik yang aneh &rarr; hening &rarr; bisikan sangat pelan &rarr; hening lagi &rarr; lampu tiba-tiba mati.',
      'blog2-p3-3': 'Belum perlu jumpscare sama sekali. Pemain sudah bertanya-tanya, "Dari mana suara itu tadi?" Dan selama pertanyaan itu belum terjawab, rasa takut itu akan terus bertahan.',

      'blog2-h-4': 'Keras Tidak Selalu Berarti Menyeramkan',
      'blog2-p4-1': 'Kesalahan umum dalam horor adalah menganggap suara yang lebih keras otomatis lebih menyeramkan. Padahal kalau semuanya keras dari awal sampai akhir, telinga kita akan terbiasa dengan sendirinya.',
      'blog2-p4-2': 'Sound design yang bagus butuh kontras. Suara pelan bisa membuat suara keras terasa jauh lebih kuat. Keheningan bisa membuat suara kecil terasa penting. Bahkan musik yang tenang bisa membuat perubahan mendadak terasa jauh lebih intens. Jadi sound design horor bukan sekadar soal membuat suara-suara menyeramkan. Ini soal memilih suara yang tepat, volume yang tepat, dan momen yang tepat. Kadang, membuat suara jadi lebih pelan justru bisa membuat adegan lebih menyeramkan.',

      'blog2-h-5': 'Dari Bisikan Sampai Teriakan: Suara di <em>The Child Kidnapper</em>',
      'blog2-p5-1': 'Kalau ide-ide ini diterapkan ke <em>The Child Kidnapper</em>, tiap lokasi bisa punya suaranya sendiri. Di kamar Jaka, kita bisa dengar suara komputer, kipas angin, suara keyboard, dan suasana kamar yang tenang. Saat bisikan misterius muncul, suara-suara latar itu bisa perlahan mengecil, supaya bisikannya lebih menonjol.',
      'blog2-p5-2': 'Saat cerita berpindah ke hutan, suasananya berubah. Angin, dedaunan, serangga, langkah kaki, dan suara-suara dari kejauhan jadi bagian dari pengalaman. Wewe Gombel sendiri tidak selalu perlu mengeluarkan suara yang jelas atau mudah dikenali. Suara aneh dari kejauhan saja sudah cukup untuk membuat pemain merasa ada sesuatu di dekatnya.',
      'blog2-p5-3': 'Ide yang sama muncul lagi menjelang akhir, saat Jaka, Adit, dan Desi berusaha melarikan diri. Mereka mendengar langkah kaki dan suara-suara menakutkan di belakang sebelum akhirnya meninggalkan Desi. Wewe Gombel kemudian muncul di belakang Desi, dan adegan langsung memotong ke layar hitam.',
      'blog2-p5-4': 'Monsternya hilang dari layar. Tidak ada visual sama sekali. Yang ada hanya teriakan Desi: "TOLONG!!!" Lalu... hening.',
      'blog2-p5-5': 'Kadang, hal yang tidak bisa kita lihat justru jauh lebih mengganggu dibanding sesuatu yang ada tepat di depan mata.',

      'blog2-h-6': 'Jadi, Mana yang Lebih Menyeramkan?',
      'blog2-p6-1': 'Jumpscare dan sound design sebenarnya bukan musuh. Justru keduanya bekerja dengan baik bersama-sama. Jumpscare bisa memakai suara untuk memperkuat efek kagetnya, sementara sound design membangun atmosfer dan ketegangan sebelum jumpscare itu terjadi.',
      'blog2-p6-2': 'Bedanya sederhana. Jumpscare membuat kita kaget secara tiba-tiba, sementara sound design horor bisa membuat kita gelisah sambil menunggu sesuatu terjadi. Kita dengar sesuatu, tapi tidak tahu apa itu atau dari mana asalnya. Ketidakpastian itu membuat pikiran kita terus bekerja dan membayangkan segala kemungkinan.',
      'blog2-p6-3': 'Ini juga yang terjadi di <em>The Child Kidnapper</em>. Wewe Gombel tidak selalu harus langsung muncul. Kehadirannya bisa lebih dulu diisyaratkan lewat bisikan, langkah kaki, dan suara-suara lingkungan sekitar. Suara bukan cuma pendukung visual ia bisa jadi bagian dari horornya sendiri.',
      'blog2-quote-2': 'Karena kadang, suara kecil dari kegelapan bisa jauh lebih menyeramkan dibanding monster yang berdiri tepat di depanmu.',

      'blog2-h-7': 'Berani Dengar?',
      'blog2-p7-1': 'Penasaran seberapa menyeramkan suara yang tidak terlihat itu? Pakai headphone, matikan lampu, dan bayangkan kamu sendirian di tengah hutan yang gelap. Sekarang, dengarkan baik-baik.',
      'blog2-p7-2': 'Kamu dengar langkah kaki di belakangmu... Makin dekat... Makin dekat... Tapi apa pun yang terjadi... Jangan menoleh ke belakang.',
      'blog2-p7-3': 'Rasakan suaranya. Rasakan takutnya. Unduh <em>The Child Kidnapper</em> sekarang di Game Jolt dan rasakan sendiri horornya.',

      'blog2-sources-label': 'Referensi dan Sumber',
      'blog2-tag-1': 'Desain Suara',
      'blog2-tag-2': 'Horor Psikologis',
      'blog2-author-desc': 'Studio game indie rumahan yang fokus mengangkat budaya, mitos, cerita rakyat, dan urban legend lokal ke dalam game horor psikologis.',

      /* ================= BLOG 1: DEVLOG (SOUND DESIGN) ================= */
      'blog1-copy-link':   'Salin Link',
      'blog1-title':       'Bisa Seram Tanpa Hantu yang Kelihatan? Intip Teknik Suara di Balik The Child Kidnapper',
      'blog1-lead':        'Bayangkan kamu sendirian di kamar. Lampu redup, headphone terpasang, dan tiba-tiba kamu dengar bisikan, "Jaka... Jaka..." dari suatu tempat. Kamu langsung menoleh ke sekeliling. Tidak ada siapa-siapa. Beberapa detik kemudian, terdengar suara langkah kaki dari luar kamar. Tapi di layar, tidak ada satu pun hal aneh yang terjadi.',
      'blog1-date':        'Diperbarui 24 Desember 2025',
      'blog1-read-time':   '6 menit baca',
      'blog1-toc-title':   'Daftar Isi',

      'blog1-p-intro': 'Di sinilah sound design horor mulai bekerja. Kadang, suara yang bahkan belum menampilkan monster sama sekali bisa bikin kamu lebih gelisah dibanding saat monster itu muncul tiba-tiba di depan mata. Dalam horor psikologis, suara bukan sekadar pelengkap visual. Suara bisa membuat kita membayangkan hal-hal yang sebenarnya tidak bisa kita lihat. Ide ini juga muncul di <em>The Child Kidnapper</em>. Jaka awalnya sedang bermain game di kamarnya ketika dia mendengar bisikan misterius. Lalu lampu tiba-tiba mati, dan Wewe Gombel muncul dari layar komputer.',

      'blog1-h-1': 'Kenapa Suara Bisa Lebih Menyeramkan daripada Jumpscare?',
      'blog1-p1-1': 'Jumpscare memang efektif. Wajah menyeramkan muncul tiba-tiba di layar, diikuti suara keras, dan reaksi pertama biasanya, "YA AMPUN!" Ini terjadi karena sesuatu yang disebut <em>startle reflex</em> refleks tubuh secara otomatis saat sesuatu mengejutkan kita tiba-tiba. Dalam film dan game horor, suara keras yang mendadak sering dipakai untuk memperkuat reaksi itu.',
      'blog1-p1-2': 'Masalahnya, jumpscare biasanya cuma memberi kekagetan sesaat. Begitu monsternya muncul, kita langsung tahu di mana ancamannya berada. "Oh... jadi itu yang tadi." Sound design bisa bekerja dengan cara berbeda. Sebuah suara cuma memberi kita sebagian informasi. Kita dengar sesuatu, tapi tidak tahu dari mana asalnya atau apa penyebabnya. Jadi otak kita mulai berusaha mencari tahu. Dan jujur saja, imajinasi kita kadang bisa menciptakan sesuatu yang jauh lebih menyeramkan dibanding monster aslinya.',

      'blog1-h-2': 'Keheningan Itu Bukan Kekosongan. Itu Senjata.',
      'blog1-p2-1': 'Salah satu bagian terpenting dari sound design horor adalah keheningan. Saat sebuah adegan yang tadinya penuh suara tiba-tiba jadi sunyi, kita secara alami jadi lebih memperhatikan. Suara kecil seperti tetesan air, dedaunan bergerak, napas seseorang, atau lantai berderit bisa tiba-tiba terasa jauh lebih keras.',
      'blog1-p2-2': 'Dalam horor, suara latar, musik, efek suara, bahkan keheningan bisa membangun ketegangan. Bayangkan Jaka dan Adit berjalan di hutan. Mereka sudah gugup, lalu suara langkah kaki mulai mendekat. Jaka bahkan bersembunyi di balik semak karena mengira ada sesuatu yang datang. Secara visual, kita bahkan belum perlu memperlihatkan Wewe Gombel. Cukup berikan pemain suara langkah kaki.',
      'blog1-quote-1': 'Dug... dug... dug...<br>Makin dekat.<br>Dug... dug... dug...<br>Lalu...<br>Hening.',
      'blog1-p2-3': 'Momen "hening" itulah yang bikin otak mulai bekerja. "Ke mana suara langkahnya?" "Masih ada sesuatu di sana?" "Jangan-jangan di belakangku?" Pemain pun mulai menciptakan horornya sendiri di kepala.',

      'blog1-h-3': 'Hal yang Paling Menyeramkan Kadang Justru yang Tidak Bisa Kita Lihat',
      'blog1-p3-1': 'Horor psikologis sering memanfaatkan satu hal sederhana: orang jadi tidak nyaman ketika mereka tidak bisa memahami atau memprediksi apa yang sedang terjadi. Itu sebabnya suara seperti bisikan, napas, langkah kaki, sesuatu yang bergerak di dekat kita, ranting patah, atau suara dari kejauhan bisa sangat efektif. Kita dengar sesuatu, tapi tidak melihat sumbernya.',
      'blog1-p3-2': 'Di <em>The Child Kidnapper</em>, ini terjadi sejak awal. Jaka mendengar suara misterius memanggil namanya. Lalu lampu padam. Dia menoleh ke sekeliling, tapi tidak ada siapa-siapa. Bayangkan alur sound design-nya kira-kira begini: suara PC &rarr; suasana kamar yang sunyi &rarr; suara listrik yang aneh &rarr; hening &rarr; bisikan sangat pelan &rarr; hening lagi &rarr; lampu tiba-tiba mati.',
      'blog1-p3-3': 'Belum perlu jumpscare sama sekali. Pemain sudah bertanya-tanya, "Dari mana suara itu tadi?" Dan selama pertanyaan itu belum terjawab, rasa takut itu akan terus bertahan.',

      'blog1-h-4': 'Keras Tidak Selalu Berarti Menyeramkan',
      'blog1-p4-1': 'Kesalahan umum dalam horor adalah menganggap suara yang lebih keras otomatis lebih menyeramkan. Padahal kalau semuanya keras dari awal sampai akhir, telinga kita akan terbiasa dengan sendirinya.',
      'blog1-p4-2': 'Sound design yang bagus butuh kontras. Suara pelan bisa membuat suara keras terasa jauh lebih kuat. Keheningan bisa membuat suara kecil terasa penting. Bahkan musik yang tenang bisa membuat perubahan mendadak terasa jauh lebih intens. Jadi sound design horor bukan sekadar soal membuat suara-suara menyeramkan. Ini soal memilih suara yang tepat, volume yang tepat, dan momen yang tepat. Kadang, membuat suara jadi lebih pelan justru bisa membuat adegan lebih menyeramkan.',

      'blog1-h-5': 'Dari Bisikan Sampai Teriakan: Suara di <em>The Child Kidnapper</em>',
      'blog1-p5-1': 'Kalau ide-ide ini diterapkan ke <em>The Child Kidnapper</em>, tiap lokasi bisa punya suaranya sendiri. Di kamar Jaka, kita bisa dengar suara komputer, kipas angin, suara keyboard, dan suasana kamar yang tenang. Saat bisikan misterius muncul, suara-suara latar itu bisa perlahan mengecil, supaya bisikannya lebih menonjol.',
      'blog1-p5-2': 'Saat cerita berpindah ke hutan, suasananya berubah. Angin, dedaunan, serangga, langkah kaki, dan suara-suara dari kejauhan jadi bagian dari pengalaman. Wewe Gombel sendiri tidak selalu perlu mengeluarkan suara yang jelas atau mudah dikenali. Suara aneh dari kejauhan saja sudah cukup untuk membuat pemain merasa ada sesuatu di dekatnya.',
      'blog1-p5-3': 'Ide yang sama muncul lagi menjelang akhir, saat Jaka, Adit, dan Desi berusaha melarikan diri. Mereka mendengar langkah kaki dan suara-suara menakutkan di belakang sebelum akhirnya meninggalkan Desi. Wewe Gombel kemudian muncul di belakang Desi, dan adegan langsung memotong ke layar hitam.',
      'blog1-p5-4': 'Monsternya hilang dari layar. Tidak ada visual sama sekali. Yang ada hanya teriakan Desi: "TOLONG!!!" Lalu... hening.',
      'blog1-p5-5': 'Kadang, hal yang tidak bisa kita lihat justru jauh lebih mengganggu dibanding sesuatu yang ada tepat di depan mata.',

      'blog1-h-6': 'Jadi, Mana yang Lebih Menyeramkan?',
      'blog1-p6-1': 'Jumpscare dan sound design sebenarnya bukan musuh. Justru keduanya bekerja dengan baik bersama-sama. Jumpscare bisa memakai suara untuk memperkuat efek kagetnya, sementara sound design membangun atmosfer dan ketegangan sebelum jumpscare itu terjadi.',
      'blog1-p6-2': 'Bedanya sederhana. Jumpscare membuat kita kaget secara tiba-tiba, sementara sound design horor bisa membuat kita gelisah sambil menunggu sesuatu terjadi. Kita dengar sesuatu, tapi tidak tahu apa itu atau dari mana asalnya. Ketidakpastian itu membuat pikiran kita terus bekerja dan membayangkan segala kemungkinan.',
      'blog1-p6-3': 'Ini juga yang terjadi di <em>The Child Kidnapper</em>. Wewe Gombel tidak selalu harus langsung muncul. Kehadirannya bisa lebih dulu diisyaratkan lewat bisikan, langkah kaki, dan suara-suara lingkungan sekitar. Suara bukan cuma pendukung visual ia bisa jadi bagian dari horornya sendiri.',
      'blog1-quote-2': 'Karena kadang, suara kecil dari kegelapan bisa jauh lebih menyeramkan dibanding monster yang berdiri tepat di depanmu.',

      'blog1-h-7': 'Berani Dengar?',
      'blog1-p7-1': 'Penasaran seberapa menyeramkan suara yang tidak terlihat itu? Pakai headphone, matikan lampu, dan bayangkan kamu sendirian di tengah hutan yang gelap. Sekarang, dengarkan baik-baik.',
      'blog1-p7-2': 'Kamu dengar langkah kaki di belakangmu... Makin dekat... Makin dekat... Tapi apa pun yang terjadi... Jangan menoleh ke belakang.',
      'blog1-p7-3': 'Rasakan suaranya. Rasakan takutnya. Unduh <em>The Child Kidnapper</em> sekarang di Game Jolt dan rasakan sendiri horornya.',

      'blog1-sources-label': 'Referensi dan Sumber',
      'blog1-tag-1': 'Desain Suara',
      'blog1-tag-2': 'Horor Psikologis',
      'blog1-author-desc': 'Studio game indie rumahan yang fokus mengangkat budaya, mitos, cerita rakyat, dan urban legend lokal ke dalam game horor psikologis.'
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

  /* ---- Generic carousel (arrows + dots + swipe) ---- */
  function initCarousel(wrapper) {
    var track    = wrapper.querySelector('.carousel-track');
    var prev     = wrapper.querySelector('.carousel-prev');
    var next     = wrapper.querySelector('.carousel-next');
    var scope    = wrapper.closest('.container') || wrapper.parentElement;
    var dotsWrap = scope.querySelector('.carousel-dots');
    if (!track) return;

    var slides     = track.querySelectorAll('.carousel-slide');
    var total      = slides.length;
    var perDesktop = parseInt(wrapper.dataset.perView, 10) || 2;
    var perMobile  = parseInt(wrapper.dataset.perViewMobile, 10) || 1;
    var breakpoint = parseInt(wrapper.dataset.breakpoint, 10) || 900;
    var current    = 0;

    function perView() { return window.innerWidth < breakpoint ? perMobile : perDesktop; }
    function maxIdx()  { return Math.max(0, total - perView()); }

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (var i = 0; i <= maxIdx(); i++) {
        (function (idx) {
          var d = document.createElement('button');
          d.className = 'carousel-dot' + (idx === current ? ' active' : '');
          d.setAttribute('aria-label', 'Slide ' + (idx + 1));
          d.addEventListener('click', function () { goTo(idx); });
          dotsWrap.appendChild(d);
        })(i);
      }
    }

    function updateUI() {
      var sw = slides[0].offsetWidth + 4; // 4 = gap
      track.style.transform = 'translateX(-' + (current * sw) + 'px)';
      if (dotsWrap) {
        dotsWrap.querySelectorAll('.carousel-dot').forEach(function (d, i) {
          d.classList.toggle('active', i === current);
        });
      }
      if (prev) prev.disabled = current === 0;
      if (next) next.disabled = current >= maxIdx();
    }

    function goTo(i) {
      current = Math.max(0, Math.min(i, maxIdx()));
      updateUI();
    }

    if (prev) prev.addEventListener('click', function () { goTo(current - 1); });
    if (next) next.addEventListener('click', function () { goTo(current + 1); });

    buildDots();
    goTo(0);

    var rTimer;
    window.addEventListener('resize', function () {
      clearTimeout(rTimer);
      rTimer = setTimeout(function () {
        current = Math.min(current, maxIdx());
        buildDots();
        goTo(current);
      }, 200);
    });

    var tx = 0;
    track.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = tx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.carousel-wrapper').forEach(initCarousel);
  });

})();