/**
 * renderer.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Reads portfolioData from data.js and injects all content into the DOM.
 * Every section is populated here — no hardcoded content in index.html.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const Renderer = (() => {
  const d = portfolioData; // shorthand

  /* ── Helpers ────────────────────────────────────────────────────────────── */

  /** Safely set innerHTML on an element (skips if not found) */
  const inject = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };

  /** Safely set attribute on an element */
  const attr = (selector, name, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(name, value);
  };

  /* ── Hero Section ───────────────────────────────────────────────────────── */
  const renderHero = () => {
    // Photo
    const img = document.querySelector('#hero-photo');
    if (img) {
      img.src = d.personal.photo;
      img.alt = d.personal.name;
    }

    // Name
    inject('#hero-name', d.personal.name);

    // Bio
    inject('#hero-bio', d.personal.bio);

    // CV download link
    const cvBtn = document.querySelector('#hero-cv-btn');
    if (cvBtn) {
      cvBtn.href = d.personal.cvFile;
      cvBtn.download = d.personal.cvFile;
    }

  };



  /* ── Skills Section ─────────────────────────────────────────────────────── */
  const renderSkills = () => {
    const tabsEl  = document.querySelector('#skills-tabs');
    const panelsEl = document.querySelector('#skills-panels');
    if (!tabsEl || !panelsEl) return;

    const allItems = d.skills.flatMap(cat => cat.items);

    const allTab = `<button class="skills-tab active" data-idx="all">All</button>`;
    const catTabs = d.skills.map((cat, i) =>
      `<button class="skills-tab" data-idx="${i}">${cat.category}</button>`
    ).join('');
    tabsEl.innerHTML = allTab + catTabs;

    // All panel
    const allPanel = `
      <div class="skills-panel active" data-panel="all">
        <div class="skills-chips stagger-children">
          ${allItems.map(s => `
            <div class="skill-chip">
              <i class="${s.icon}"></i>
              <span>${s.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Category panels
    const catPanels = d.skills.map((cat, i) => `
      <div class="skills-panel" data-panel="${i}">
        <div class="skills-category-title">
          <i class="${cat.icon}"></i> ${cat.category}
        </div>
        <div class="skills-chips stagger-children">
          ${cat.items.map(s => `
            <div class="skill-chip">
              <i class="${s.icon}"></i>
              <span>${s.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    panelsEl.innerHTML = allPanel + catPanels;

    // Tab switching logic
    tabsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.skills-tab');
      if (!btn) return;
      const idx = btn.dataset.idx;
      tabsEl.querySelectorAll('.skills-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      panelsEl.querySelectorAll('.skills-panel').forEach(p => {
        p.classList.toggle('active', p.dataset.panel === idx);
      });
    });
  };

  /* ── Experience Section ─────────────────────────────────────────────────── */
  const renderExperience = () => {
    const el = document.querySelector('#experience-timeline');
    if (!el) return;

    el.innerHTML = d.experience.map(exp => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="exp-card">
          <div class="exp-header">
            <div>
              <div class="exp-title">${exp.title}</div>
              <div class="exp-company">
                <a href="${exp.companyUrl}" target="_blank" rel="noopener">${exp.company}</a>
              </div>
            </div>
            <div class="exp-meta">
              <span class="exp-period"><i class="fa-regular fa-calendar"></i> ${exp.period}</span>
              <span class="exp-location">
                <i class="fa-solid fa-location-dot"></i>
                <a href="${exp.locationUrl}" target="_blank" rel="noopener">${exp.location}</a>
              </span>
            </div>
          </div>
          <div class="exp-type-badge">${exp.type}</div>
          <div class="exp-bullets">
            ${exp.bullets.map(b => `
              <div class="exp-bullet">
                <i class="fa-solid fa-circle"></i>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  };

  /* ── Education Section ──────────────────────────────────────────────────── */
  const renderEducation = () => {
    const el = document.querySelector('#education-grid');
    if (!el) return;

    el.innerHTML = d.education.map(edu => `
      <div class="edu-card reveal">
        <div class="edu-icon"><i class="${edu.icon}"></i></div>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-institution">${edu.institution}</div>
        <div class="edu-meta">
          <span class="edu-period">
            <i class="fa-regular fa-calendar"></i> ${edu.period}
          </span>
          <span class="edu-grade">
            <i class="fa-solid fa-star"></i> ${edu.grade}
          </span>
        </div>
        <p class="edu-desc">${edu.description}</p>
      </div>
    `).join('');
  };

  /* ── Projects Section ───────────────────────────────────────────────────── */
  const renderProjects = () => {
    const grid = document.querySelector('#projects-grid');
    const filterBar = document.querySelector('#filter-buttons');
    if (!grid || !filterBar) return;

    // Filter buttons
    filterBar.innerHTML = d.projectCategories.map(cat => `
      <button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">
        ${cat}
      </button>
    `).join('');

    // Project cards
    grid.innerHTML = d.projects.map(proj => `
      <div class="project-card ${proj.featured ? 'featured' : ''} reveal"
           data-category="${proj.category}"
           data-title="${proj.title.toLowerCase()}"
           data-desc="${proj.description.toLowerCase()}"
           data-tags="${proj.tags.join(' ').toLowerCase()}">
        <div class="project-card-top">
          <div class="project-icon"><i class="${proj.icon}"></i></div>
          ${proj.featured ? '<span class="project-featured-badge">★ Featured</span>' : ''}
        </div>
        ${proj.badge ? `<div class="project-hackathon-badge">${proj.badge}</div>` : ''}
        <div class="project-title">${proj.title}</div>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${proj.github ? `
            <a class="project-link" href="${proj.github}" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i> Source
            </a>
          ` : ''}
          ${proj.live ? `
            <a class="project-link" href="${proj.live}" target="_blank" rel="noopener">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');

    // No results placeholder
    grid.insertAdjacentHTML('beforeend', `
      <div class="no-results" id="no-results">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>No projects found. Try a different filter or search term.</p>
      </div>
    `);
  };

  /* ── Certifications Section ─────────────────────────────────────────────── */
  const renderCertifications = () => {
    const el = document.querySelector('#certs-grid');
    if (!el) return;

    el.innerHTML = d.certifications.map(cert => `
      <a class="cert-card" href="${cert.url}" target="_blank" rel="noopener">
        <div class="cert-icon"><i class="${cert.icon}"></i></div>
        <div class="cert-info">
          <div class="cert-name" title="${cert.name}">${cert.name}</div>
          <div class="cert-issuer">${cert.issuer}</div>
        </div>
        <div class="cert-date">${cert.date}</div>
      </a>
    `).join('');
  };

  /* ── Contact Section ────────────────────────────────────────────────────── */
  const renderContact = () => {
    // Contact items
    const itemsEl = document.querySelector('#contact-items');
    if (itemsEl) {
      const contactItems = [
        { icon: 'fa-solid fa-envelope', label: d.personal.email, href: `mailto:${d.personal.email}` },
        { icon: 'fa-solid fa-phone',    label: d.personal.phone, href: `tel:${d.personal.phone}` },
        { icon: 'fa-solid fa-location-dot', label: d.personal.location, href: '#' },
      ];
      itemsEl.innerHTML = contactItems.map(item => `
        <a class="contact-item" href="${item.href}">
          <div class="contact-item-icon"><i class="${item.icon}"></i></div>
          <span>${item.label}</span>
        </a>
      `).join('');
    }

    // Social links
    const socialEl = document.querySelector('#social-links');
    if (socialEl) {
      const socials = [
        { name: 'LinkedIn',  key: 'linkedin',  icon: 'fa-brands fa-linkedin',  url: d.personal.linkedin },
        { name: 'GitHub',    key: 'github',    icon: 'fa-brands fa-github',    url: d.personal.github },
        { name: 'WhatsApp',  key: 'whatsapp',  icon: 'fa-brands fa-whatsapp',  url: d.personal.whatsapp },
      ];
      socialEl.innerHTML = socials.map(s => `
        <a class="social-btn" href="${s.url}" target="_blank" rel="noopener" data-social="${s.key}">
          <i class="${s.icon}"></i> ${s.name}
        </a>
      `).join('');
    }
  };

  /* ── Footer ─────────────────────────────────────────────────────────────── */
  const renderFooter = () => {
    const el = document.querySelector('#footer-copy');
    if (el) {
      el.innerHTML = `© ${new Date().getFullYear()} <span>${d.personal.nameShort}</span>. All rights reserved.`;
    }
  };

  /* ── Page meta ──────────────────────────────────────────────────────────── */
  const renderMeta = () => {
    document.title = `${d.personal.name} — ${d.personal.title}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = `Portfolio of ${d.personal.name} — ${d.personal.title}. ${d.personal.bio.slice(0, 120)}…`;
  };

  /* ── Init ───────────────────────────────────────────────────────────────── */
  const init = () => {
    renderMeta();
    renderHero();
    renderExperience();
    renderEducation();
    renderProjects();
    renderSkills();
    renderCertifications();
    renderContact();
    renderFooter();
  };

  return { init };
})();
