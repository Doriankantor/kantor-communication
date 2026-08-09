/* Kantor Communication — homepage + interior interactions.
   Every feature guards on its elements, so this one file is safe to load on
   any page: the header state runs everywhere; counters/flip/gold-fill/tabs/
   slider only activate where their markup exists. Load AFTER the DOM. */
(function () {
  'use strict';

  /* Mobile nav toggle (data-open pattern, matches the interior pages). */
  var navToggle = document.querySelector('.nav-toggle'),
      siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var open = siteNav.getAttribute('data-open') === 'true';
      siteNav.setAttribute('data-open', String(!open));
      navToggle.setAttribute('aria-expanded', String(!open));
    });
    siteNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { siteNav.setAttribute('data-open', 'false'); navToggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* Header: ivory over the dark hero/intro, frosted light bar past it. */
  var hdr = document.getElementById('hdr'),
      intro = document.querySelector('.hero, .page-intro');
  if (hdr && intro) {
    var onScroll = function () {
      var hb = intro.getBoundingClientRect().bottom;
      if (hb <= 64) { hdr.classList.remove('is-over-ink', 'is-veiled'); hdr.classList.add('is-scrolled'); }
      else { hdr.classList.add('is-over-ink'); hdr.classList.remove('is-scrolled'); hdr.classList.toggle('is-veiled', window.scrollY > 8); }
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* Flipping services line. */
  var flip = document.querySelectorAll('.hero__flip .flip__item');
  if (flip.length > 1) {
    var fi = 0;
    setInterval(function () {
      var cur = flip[fi]; cur.classList.add('is-leaving'); cur.classList.remove('is-active');
      fi = (fi + 1) % flip.length;
      setTimeout(function () { cur.classList.remove('is-leaving'); }, 560);
      flip[fi].classList.add('is-active');
    }, 2400);
  }

  /* Why KC — roll-up counters + stars, re-triggering on each entry. */
  var whyGrid = document.getElementById('whyGrid');
  if (whyGrid) {
    var whyIn = false, whyT = [];
    var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
    var countUp = function (el) {
      var target = +el.dataset.count, suf = el.dataset.suffix || '', dur = 1200, s = null;
      var step = function (ts) { if (!s) s = ts; var p = Math.min((ts - s) / dur, 1); el.textContent = Math.round(easeOut(p) * target) + (p >= 1 ? suf : ''); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    };
    var resetWhy = function () {
      whyT.forEach(clearTimeout); whyT = [];
      whyGrid.querySelectorAll('.why').forEach(function (t) {
        t.classList.remove('is-in');
        var f = t.querySelector('.why__fig'); if (f) f.textContent = '0';
        t.querySelectorAll('.why__stars span').forEach(function (s) { s.classList.remove('on'); });
      });
    };
    var playWhy = function () {
      whyGrid.querySelectorAll('.why').forEach(function (t, i) {
        whyT.push(setTimeout(function () {
          t.classList.add('is-in');
          var f = t.querySelector('.why__fig'); if (f) countUp(f);
          t.querySelectorAll('.why__stars span').forEach(function (s, j) { whyT.push(setTimeout(function () { s.classList.add('on'); }, 260 + j * 140)); });
        }, i * 220));
      });
    };
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !whyIn) { whyIn = true; resetWhy(); playWhy(); }
        else if (!e.isIntersecting && whyIn) { whyIn = false; resetWhy(); }
      });
    }, { threshold: 0.35 }).observe(whyGrid);
  }

  /* Gold scroll-fill on the banner words (lead-in delay, staggered). */
  var gb = document.getElementById('goldBanner');
  if (gb) {
    var words = gb.querySelectorAll('.goldfill');
    var clamp = function (v) { return Math.max(0, Math.min(1, v)); };
    var LEAD = 0.34, GAP = 0.30, SPAN = 0.20;
    var goldFill = function () {
      var r = gb.getBoundingClientRect(), vh = window.innerHeight;
      var raw = Math.max(0, (vh - r.top) / (vh * 0.95));
      words.forEach(function (w, i) { var st = LEAD + i * GAP; w.style.setProperty('--f', clamp((raw - st) / SPAN).toFixed(3)); });
    };
    window.addEventListener('scroll', goldFill, { passive: true });
    window.addEventListener('resize', goldFill); goldFill();
  }

  /* In-Focus tabs. */
  var sigNav = document.getElementById('sigNav'), sigPanel = document.getElementById('sigPanel');
  if (sigNav && sigPanel) {
    sigNav.addEventListener('click', function (e) {
      var b = e.target.closest('.signals__navbtn'); if (!b) return;
      var i = b.dataset.i;
      sigNav.querySelectorAll('li').forEach(function (li) { li.classList.remove('active'); });
      b.closest('li').classList.add('active');
      sigPanel.querySelectorAll('.panel').forEach(function (p) { p.classList.toggle('show', p.dataset.p === i); });
    });
  }

  /* KC Effect reviews slider. */
  var track = document.getElementById('slTrack');
  if (track) {
    var slides = track.children, n = slides.length, idx = 0,
        dotsWrap = document.getElementById('slDots'), dots = [];
    function go(i) { idx = (i + n) % n; track.style.transform = 'translateX(-' + (idx * 100) + '%)'; dots.forEach(function (d, j) { d.classList.toggle('active', j === idx); }); }
    var timer = setInterval(function () { go(idx + 1); }, 5200);
    function rst() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 5200); }
    if (dotsWrap) {
      for (var k = 0; k < n; k++) {
        (function (k) {
          var d = document.createElement('button');
          d.className = 'slider__dot' + (k === 0 ? ' active' : '');
          d.setAttribute('aria-label', 'Review ' + (k + 1));
          d.onclick = function () { go(k); rst(); };
          dotsWrap.appendChild(d); dots.push(d);
        })(k);
      }
    }
    var pv = document.getElementById('slPrev'), nx = document.getElementById('slNext');
    if (pv) pv.onclick = function () { go(idx - 1); rst(); };
    if (nx) nx.onclick = function () { go(idx + 1); rst(); };
    var sl = document.getElementById('slider');
    if (sl) { sl.addEventListener('mouseenter', function () { clearInterval(timer); }); sl.addEventListener('mouseleave', rst); }
  }
})();
