/* KCC theme — header scroll states. Load AFTER assets/js/main.js.
   Nothing else in main.js changes. */
(function () {
  'use strict';
  var header = document.querySelector('.site-header');
  if (!header) { return; }

  /* The ink block at the top of the page: the homepage hero, or .page-intro
     on every interior page. If a page has neither, the bar just behaves as the
     ordinary light ribbon. */
  var ink = document.querySelector('.hero') || document.querySelector('.page-intro');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var past = ink ? y > (ink.offsetHeight - 90) : true;
    header.classList.toggle('is-over-ink', !!ink && !past);
    header.classList.toggle('is-scrolled', past);
    header.classList.toggle('is-veiled', y > 8);
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();
