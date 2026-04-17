/**
 * nav.js
 * ─────────────────────────────────────────────────────────────────────────
 * Handles:
 *  - Transparent → glassmorphism navbar on scroll
 *  - Mobile hamburger menu open/close
 *  - Click-outside / overlay to close menu
 *  - Active nav link highlighting based on scroll position
 *  - Smooth scroll for all anchor links
 * ─────────────────────────────────────────────────────────────────────────
 */

const Nav = (() => {

  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('nav-toggle');
  const links    = document.getElementById('nav-links');
  const overlay  = document.getElementById('nav-overlay');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  /* ── Scroll: glassmorphism background ──────────────────────────────────── */
  const handleScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    highlightActiveLink();
  };

  /* ── Active link highlighting ───────────────────────────────────────────── */
  const highlightActiveLink = () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  /* ── Mobile menu ────────────────────────────────────────────────────────── */
  const openMenu = () => {
    toggle?.classList.add('open');
    links?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    toggle?.classList.remove('open');
    links?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
    toggle?.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = links?.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  };

  /* ── Smooth scroll ──────────────────────────────────────────────────────── */
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        closeMenu();
        const offset = navbar?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  };

  /* ── Init ───────────────────────────────────────────────────────────────── */
  const init = () => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    toggle?.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', closeMenu);

    // Close menu when a nav link is clicked on mobile
    navAnchors.forEach(link => link.addEventListener('click', closeMenu));

    // Keyboard: close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    initSmoothScroll();
    handleScroll(); // run once on load
  };

  return { init };
})();
