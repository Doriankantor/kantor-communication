/* Kantor Communication Consulting and Education — minimal vanilla JS.
   No dependencies, no build step. Progressive enhancement only:
   the site is fully usable with JS disabled. */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    // Close when a link is chosen (mobile)
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Capability ticker: duplicate items for a seamless loop ----------- */
  /* The track is animated to translateX(-50%); duplicating the content makes
     the second half identical to the first, so the loop is seamless. We only
     duplicate when motion is allowed — the reduced-motion static list is shown
     via CSS otherwise. */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Duplicate the contents of every scrolling track (ticker + experience marquee)
  // so the -50% translate loop is seamless. Skipped under reduced motion (CSS
  // shows a static list instead).
  if (!reduceMotion) {
    var tracks = document.querySelectorAll('.ticker__track, .marquee__track');
    Array.prototype.forEach.call(tracks, function (track) {
      var clone = track.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      while (clone.firstChild) { track.appendChild(clone.firstChild); }
    });
  }

  /* ---- Forms: client-side validation, then native submit to Netlify ----- */
  /* All three forms are native Netlify forms (data-netlify="true"). We only
     enforce HTML5 required-field validation here; valid forms submit natively
     so Netlify captures the submission and emails languages@kantor-communication.com. */
  var forms = document.querySelectorAll('form[data-kc-form]');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
      }
    });
  });

  /* ---- Scroll reveal: one restrained motion (gentle rise + fade) -------- */
  /* Elements with .reveal fade/rise in once as they enter the viewport.
     Under reduced motion they are shown immediately (CSS forces visible). */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && !reduceMotion && 'IntersectionObserver' in window) {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    Array.prototype.forEach.call(revealEls, function (el) {
      // Only arm (hide) elements that start below the fold — avoids a flash and
      // keeps above-the-fold content visible immediately.
      if (el.getBoundingClientRect().top > vh * 0.85) {
        el.classList.add('is-armed');
        io.observe(el);
      }
    });
  }

  /* ---- Multilingual "be understood" motif: slow cross-fade ------------- */
  /* Cycles one language into the next. Skipped under reduced motion (CSS
     hides the rotator and shows a static stacked list instead). */
  if (!reduceMotion) {
    var rotators = document.querySelectorAll('.motif__rotator');
    Array.prototype.forEach.call(rotators, function (rotator) {
      var phrases = rotator.querySelectorAll('.motif__phrase');
      if (phrases.length < 2) { return; }
      var i = 0;
      setInterval(function () {
        phrases[i].classList.remove('is-active');
        i = (i + 1) % phrases.length;
        phrases[i].classList.add('is-active');
      }, 2800);
    });
  }
})();
