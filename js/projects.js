/**
 * projects.js
 * ─────────────────────────────────────────────────────────────────────────
 * Handles:
 *  - Category filter buttons (All / AI / ML / Data / Web)
 *  - Live search bar (filters title + description + tags)
 *  - Smooth show/hide of project cards
 *  - "No results" state
 * ─────────────────────────────────────────────────────────────────────────
 */

const Projects = (() => {

  let activeFilter = 'All';
  let searchQuery  = '';

  /* ── Core filter logic ──────────────────────────────────────────────────── */
  const applyFilters = () => {
    const cards     = document.querySelectorAll('.project-card[data-category]');
    const noResults = document.getElementById('no-results');
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category || '';
      const title    = card.dataset.title    || '';
      const desc     = card.dataset.desc     || '';
      const tags     = card.dataset.tags     || '';
      const q        = searchQuery.toLowerCase().trim();

      const matchesFilter = activeFilter === 'All' || category === activeFilter;
      const matchesSearch =
        !q ||
        title.includes(q) ||
        desc.includes(q)  ||
        tags.includes(q);

      const visible = matchesFilter && matchesSearch;
      card.classList.toggle('hidden', !visible);
      if (visible) visibleCount++;
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  /* ── Filter buttons ─────────────────────────────────────────────────────── */
  const initFilters = () => {
    const filterBar = document.getElementById('filter-buttons');
    if (!filterBar) return;

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  };

  /* ── Search input ───────────────────────────────────────────────────────── */
  const initSearch = () => {
    const input = document.getElementById('project-search');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = input.value;
        applyFilters();
      }, 200); // 200ms debounce for smooth UX
    });

    // Clear search on Escape
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.value = '';
        searchQuery = '';
        applyFilters();
        input.blur();
      }
    });
  };

  /* ── Init ───────────────────────────────────────────────────────────────── */
  const init = () => {
    initFilters();
    initSearch();
  };

  return { init };
})();
