/* BLOG.JS — reading progress bar + copy link + filter */
(function () {
  'use strict';

  // Reading progress bar (halaman artikel)
  var bar = document.getElementById('readProgress');
  if (bar) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      bar.style.width = scrolled + '%';
    });
  }

  // Filter kategori (halaman blog.html)
  var filterWrap = document.getElementById('blogFilter');
  if (filterWrap) {
    var buttons = filterWrap.querySelectorAll('.blog-filter-btn');
    var cards = document.querySelectorAll('.blog-card');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          var show = f === 'all' || card.getAttribute('data-category') === f;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
})();

window.copyLink = function () {
  navigator.clipboard.writeText(window.location.href).then(function () {
    alert('Link disalin!');
  });
};