/**
 * HOME.JS — Nowl Vision Games
 * Division filter tabs (Projects carousel is handled by global.js's generic initCarousel)
 */
(function () {
  'use strict';

  /* ---- Division filter tabs ---- */
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('#careers-preview .tab-btn');
    var rows = document.querySelectorAll('#jobTableBody .job-row');
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var f = tab.dataset.filter;
        rows.forEach(function (r) {
          r.style.display = (f === 'all' || r.dataset.division === f) ? '' : 'none';
        });
      });
    });
  });

})();
