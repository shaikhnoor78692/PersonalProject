/* ============================================================
   SCALESNAP — JAVASCRIPT
   Pure vanilla JS — no frameworks or libraries
   ============================================================

   Table of contents:
   1. IntersectionObserver — fade-in on scroll
   2. Nav — darken background on scroll
   3. Hamburger menu toggle
   4. Smooth scroll for anchor links
   5. Back-to-top button
   6. Quote form — validation & submission
   ============================================================ */


/* ============================================================
   1. INTERSECTION OBSERVER — Fade-in on scroll
   Watches all .fade-in elements and adds .visible when they
   enter the viewport. Stagger delay is applied based on the
   element's index among its siblings.
============================================================ */
(function initFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (!fadeElements.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        // Calculate stagger: find element's position among .fade-in siblings
        const parent   = entry.target.parentElement;
        const siblings = parent
          ? Array.from(parent.querySelectorAll('.fade-in'))
          : [];
        const index = siblings.indexOf(entry.target);

        // Apply a small delay per sibling index (max 0.5s so it doesn't feel slow)
        const delay = Math.min(index * 0.1, 0.5);
        entry.target.style.transitionDelay = delay + 's';

        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      });
    },
    {
      threshold: 0.12,   // trigger when 12% of element is visible
      rootMargin: '0px 0px -40px 0px', // trigger slightly before the very edge
    }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });
})();


/* ============================================================
   2. NAV — Darken background on scroll
   Adds .scrolled class to #navbar when page scrolls past 40px.
   CSS handles the visual transition.
============================================================ */
(function initNavScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Run once on load in case page is already scrolled (e.g. browser restore)
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ============================================================
   3. HAMBURGER MENU TOGGLE
   Toggles .open on #navLinks and .active on #hamburger.
   Closes menu when a nav link is clicked.
============================================================ */
(function initHamburger() {
  var navbar    = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on nav link click (smooth scroll takes over after)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close if user clicks outside the nav area
  document.addEventListener('click', function (e) {
    var clickedInsideNav = navbar && navbar.contains(e.target);
    if (!clickedInsideNav && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });
})();


/* ============================================================
   4. SMOOTH SCROLL FOR ANCHOR LINKS
   Intercepts all <a href="#..."> clicks and smoothly scrolls
   to the target element, accounting for the sticky nav height.
============================================================ */
(function initSmoothScroll() {
  var navbar = document.getElementById('navbar');

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var hash   = anchor.getAttribute('href');
      var target = document.querySelector(hash);

      if (!target) return; // Let the browser handle it if no match

      e.preventDefault();

      var navHeight = navbar ? navbar.offsetHeight : 0;
      var targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, '', hash);
      }
    });
  });
})();


/* ============================================================
   5. BACK-TO-TOP BUTTON
   Shows after scrolling 300px. Smooth-scrolls to page top on click.
============================================================ */
(function initBackToTop() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;

  function onScroll() {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  onScroll(); // Check on load
  window.addEventListener('scroll', onScroll, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ============================================================
   6. QUOTE FORM — Validation & Submission

   Validation rules for each field:
   - name:    required, at least 2 characters
   - email:   required, valid email format
   - service: required, must select an option
   - budget:  required, must select an option
   - message: required, at least 10 characters

   On submit:
   1. Validate all fields, show inline errors
   2. If valid: show loading spinner on button
   3. POST to Netlify Forms (or simulate if not on Netlify)
   4. Hide form button, show .form-success message
   5. Redirect to thank-you.html after 2 seconds
============================================================ */
(function initForm() {
  var form        = document.getElementById('quoteForm');
  var submitBtn   = document.getElementById('submitBtn');
  var formSuccess = document.getElementById('formSuccess');

  if (!form || !submitBtn || !formSuccess) return;

  /* -- Field definitions with validators -- */
  var fields = [
    {
      id:       'name',
      errorId:  'nameError',
      validate: function (val) {
        if (!val.trim()) return 'Please enter your full name.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      },
    },
    {
      id:       'email',
      errorId:  'emailError',
      validate: function (val) {
        if (!val.trim()) return 'Please enter your email address.';
        // Basic but effective email regex
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) {
          return 'Please enter a valid email address.';
        }
        return '';
      },
    },
    {
      id:       'service',
      errorId:  'serviceError',
      validate: function (val) {
        return val ? '' : 'Please select a service.';
      },
    },
    {
      id:       'budget',
      errorId:  'budgetError',
      validate: function (val) {
        return val ? '' : 'Please select a budget range.';
      },
    },
    {
      id:       'message',
      errorId:  'messageError',
      validate: function (val) {
        if (!val.trim()) return 'Please describe your project.';
        if (val.trim().length < 10) return 'Please give us a bit more detail (at least 10 characters).';
        return '';
      },
    },
  ];

  /* -- Helper: show or clear an error for a field -- */
  function setError(field, message) {
    var inputEl = document.getElementById(field.id);
    var errorEl = document.getElementById(field.errorId);
    if (!inputEl || !errorEl) return;

    if (message) {
      inputEl.classList.add('error');
      errorEl.textContent = message;
    } else {
      inputEl.classList.remove('error');
      errorEl.textContent = '';
    }
  }

  /* -- Validate all fields, return true if all pass -- */
  function validateAll() {
    var allValid = true;
    fields.forEach(function (field) {
      var inputEl = document.getElementById(field.id);
      var message = field.validate(inputEl ? inputEl.value : '');
      setError(field, message);
      if (message) allValid = false;
    });
    return allValid;
  }

  /* -- Live validation: clear error as user types/changes a field -- */
  fields.forEach(function (field) {
    var inputEl = document.getElementById(field.id);
    if (!inputEl) return;

    var eventType = (inputEl.tagName === 'SELECT') ? 'change' : 'input';
    inputEl.addEventListener(eventType, function () {
      var message = field.validate(inputEl.value);
      setError(field, message);
    });
  });

  /* -- Form submission handler -- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Step 1: Validate
    if (!validateAll()) {
      // Scroll to first error so it's visible on mobile
      var firstError = form.querySelector('.error');
      if (firstError) {
        var navH   = (document.getElementById('navbar') || {}).offsetHeight || 0;
        var top    = firstError.getBoundingClientRect().top + window.scrollY - navH - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
      return;
    }

    // Step 2: Show loading state
    submitBtn.classList.add('btn--loading');
    submitBtn.disabled = true;

    /* -- Step 3: Submit --
       This uses fetch to POST to Netlify Forms.
       Works automatically when deployed to Netlify because the form has
       data-netlify="true" and a hidden "form-name" input.

       To test locally (without Netlify), the fetch will fail gracefully
       and we still show the success state after a short delay.
    */
    var formData = new FormData(form);
    var urlEncoded = new URLSearchParams(formData).toString();

    var submitPromise;

    // Check if we're on a real server (not file://) before trying fetch
    if (window.location.protocol !== 'file:') {
      submitPromise = fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncoded,
      }).catch(function () {
        // Silently swallow network errors — still show success UX
      });
    } else {
      // Local file preview — simulate a short delay
      submitPromise = new Promise(function (resolve) {
        setTimeout(resolve, 1200);
      });
    }

    submitPromise.then(function () {
      // Step 4: Hide button, show success message
      submitBtn.style.display = 'none';
      formSuccess.hidden = false;

      // Step 5: Redirect to thank-you page after 2 seconds
      setTimeout(function () {
        window.location.href = 'thank-you.html';
      }, 2000);
    });
  });
})();
