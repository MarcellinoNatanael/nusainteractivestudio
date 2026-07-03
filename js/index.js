/**
 * HOME.JS — Nusa Interactive Studio
 * Projects carousel + Division filter tabs
 */
(function () {
  'use strict';

  /* ---- Carousel ---- */
  document.addEventListener('DOMContentLoaded', function () {
    var track    = document.getElementById('projTrack');
    var prev     = document.getElementById('projPrev');
    var next     = document.getElementById('projNext');
    var dotsWrap = document.getElementById('projDots');
    if (!track) return;

    var slides  = track.querySelectorAll('.carousel-slide');
    var total   = slides.length;
    var current = 0;

    function perView() { return window.innerWidth < 900 ? 1 : 2; }
    function maxIdx()  { return Math.max(0, total - perView()); }

    function buildDots() {
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
      dotsWrap.querySelectorAll('.carousel-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
      prev.disabled = current === 0;
      next.disabled = current >= maxIdx();
    }

    function goTo(i) {
      current = Math.max(0, Math.min(i, maxIdx()));
      updateUI();
    }

    prev.addEventListener('click', function () { goTo(current - 1); });
    next.addEventListener('click', function () { goTo(current + 1); });

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

    /* swipe */
    var tx = 0;
    track.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = tx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    }, { passive: true });
  });

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
