/**
 * animations.js
 * ─────────────────────────────────────────────────────────────────────────
 * Handles:
 *  - IntersectionObserver for scroll-triggered reveal animations
 *  - Typing / typewriter effect for the hero title
 *  - Animated counters for hero stats
 *  - Loading screen fade-out
 * ─────────────────────────────────────────────────────────────────────────
 */

const Animations = (() => {

  /* ── Loading screen ─────────────────────────────────────────────────────── */
  const hideLoadingScreen = () => {
    const screen = document.getElementById('loading-screen');
    if (!screen) return;

    // Wait for all content to render, then fade out
    setTimeout(() => {
      screen.classList.add('hidden');
      // Remove from DOM after transition
      setTimeout(() => screen.remove(), 600);
    }, 600);
  };

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

  /* ── Typing effect ──────────────────────────────────────────────────────── */
  const initTyping = () => {
    const el = document.getElementById('hero-typing');
    if (!el) return;

    const words   = portfolioData.personal.titleTypes || ['Data Scientist'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Insert cursor span after the typing element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    el.parentNode.insertBefore(cursor, el.nextSibling);

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        el.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex  = (wordIndex + 1) % words.length;
        delay = 400;
      }

      setTimeout(type, delay);
    };

    // Small initial delay so it starts after hero animations
    setTimeout(type, 1200);
  };

  /* ── Animated counter for stats ─────────────────────────────────────────── */
  const animateCounters = () => {
    // Observe the stats container
    const statsEl = document.getElementById('hero-stats');
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        statsEl.querySelectorAll('.hero-stat-value').forEach(el => {
          const raw    = el.dataset.target || el.textContent;
          const suffix = raw.replace(/[0-9]/g, ''); // e.g. "+" or ""
          const target = parseInt(raw) || 0;
          let current  = 0;
          const step   = Math.max(1, Math.floor(target / 30));
          const tick   = () => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current < target) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsEl);
  };

  /* ── Re-run scroll reveal after dynamic content renders ─────────────────── */
  const refresh = () => {
    // Short delay to let the renderer finish injecting HTML
    setTimeout(initScrollReveal, 100);
  };

  /* ── Init ───────────────────────────────────────────────────────────────── */
  const init = () => {
    hideLoadingScreen();
    initTyping();
    animateCounters();
    refresh();
  };

  return { init, refresh };
})();
