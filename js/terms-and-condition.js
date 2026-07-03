/**
 * LEGAL.JS — Nusa Interactive Studio
 * Scrollspy for TOC sidebar + back-to-top button
 * Shared by terms.html and privacy.html
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ---- Scrollspy: highlight active TOC link ---- */
    var tocLinks = document.querySelectorAll('.legal-toc a');
    var sections = document.querySelectorAll('.legal-content section[id]');

    if (tocLinks.length && sections.length && 'IntersectionObserver' in window) {
      var map = {};
      tocLinks.forEach(function (link) {
        map[link.getAttribute('href').replace('#', '')] = link;
      });

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var link = map[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            tocLinks.forEach(function (l) { l.classList.remove('active'); });
            link.classList.add('active');
          }
        });
      }, {
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0
      });

      sections.forEach(function (sec) { observer.observe(sec); });
    }

    /* ---- Smooth scroll on TOC click ---- */
    tocLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href');
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 84,
          behavior: 'smooth'
        });
        history.pushState(null, '', targetId);
      });
    });

    /* ---- Back to top button ---- */
    var topBtn = document.getElementById('legalTopBtn');
    if (topBtn) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
          topBtn.classList.add('show');
        } else {
          topBtn.classList.remove('show');
        }
      });

      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
})();