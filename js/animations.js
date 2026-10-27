/**
 * animations.js
 * ─────────────────────────────────────────────────────────────────────────
 * Handles:
 *  - IntersectionObserver for scroll-triggered reveal animations
 * ─────────────────────────────────────────────────────────────────────────
 */

const Animations = (() => {

  /* ── Scroll reveal (IntersectionObserver) ───────────────────────────────── */
  const initScrollReveal = () => {
    const revealEls = document.querySelectorAll('.reveal, .stagger-children');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after first reveal (performance)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach(el => observer.observe(el));
  };

  /* ── Init ───────────────────────────────────────────────────────────────── */
  const init = () => {
    initScrollReveal();
  };

  return { init };
})();
