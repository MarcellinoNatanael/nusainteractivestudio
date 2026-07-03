/* CAREERS.JS — division filter tabs */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.division-tabs .tab-btn');
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
