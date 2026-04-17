/**
 * contact.js
 * ─────────────────────────────────────────────────────────────────────────
 * Contact form — powered by Formspree (free, no backend needed).
 *
 * HOW TO ACTIVATE (takes 2 minutes):
 *  1. Go to https://formspree.io/ and sign up for free
 *  2. Create a new form → choose your email → copy the form endpoint URL
 *     It looks like: https://formspree.io/f/xyzabc12
 *  3. Paste it below as FORMSPREE_ENDPOINT
 *  4. Done — messages will arrive in your inbox instantly ✓
 * ─────────────────────────────────────────────────────────────────────────
 */

const Contact = (() => {

  /* ── Formspree endpoint ─────────────────────────────── */
  /* Replace with your own: https://formspree.io/f/YOUR_ID */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgabnln';

  /* ── Toast notifications ────────────────────────────────────────────────── */
  const showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  };

  /* ── Field validation ───────────────────────────────────────────────────── */
  const validateField = (input, message) => {
    const group = input.closest('.form-group');
    const error = group?.querySelector('.field-error');
    if (!input.value.trim()) {
      group?.classList.add('has-error');
      if (error) error.textContent = message || 'This field is required.';
      return false;
    }
    group?.classList.remove('has-error');
    return true;
  };

  const validateEmail = (input) => {
    const group = input.closest('.form-group');
    const error = group?.querySelector('.field-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.value.trim()) {
      group?.classList.add('has-error');
      if (error) error.textContent = 'Email is required.';
      return false;
    }
    if (!emailPattern.test(input.value)) {
      group?.classList.add('has-error');
      if (error) error.textContent = 'Please enter a valid email address.';
      return false;
    }
    group?.classList.remove('has-error');
    return true;
  };

  const validateForm = () => {
    const checks = [
      validateField(document.getElementById('contact-name'),    'Please enter your name.'),
      validateEmail(document.getElementById('contact-email')),
      validateField(document.getElementById('contact-subject'), 'Please enter a subject.'),
      validateField(document.getElementById('contact-message'), 'Please write your message.'),
    ];
    return checks.every(Boolean);
  };

  const clearErrorsOnInput = () => {
    document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.form-group')?.classList.remove('has-error');
      });
    });
  };

  /* ── Form submission via Formspree ──────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn  = document.getElementById('submit-btn');
    const form = document.getElementById('contact-form');

    btn?.classList.add('loading');
    if (btn) btn.disabled = true;

    const payload = {
      name:    document.getElementById('contact-name')?.value.trim(),
      email:   document.getElementById('contact-email')?.value.trim(),
      subject: document.getElementById('contact-subject')?.value.trim(),
      message: document.getElementById('contact-message')?.value.trim(),
    };

    /* ── Demo mode (no Formspree ID yet) ─────────────────────────────────── */
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      await new Promise(r => setTimeout(r, 1200));
      showToast('Demo mode: Set up Formspree to receive real emails. See js/contact.js for instructions.', 'success');
      form?.reset();
      btn?.classList.remove('loading');
      if (btn) btn.disabled = false;
      return;
    }

    /* ── Live mode — send to Formspree ───────────────────────────────────── */
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(payload),
      });

      if (res.ok) {
        showToast("Message sent! I'll get back to you soon 🚀", 'success');
        form?.reset();
      } else {
        const data = await res.json();
        throw new Error(data?.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Form error:', err);
      showToast('Something went wrong. Please email me directly at abdelrhmanelyamny70@gmail.com', 'error');
    } finally {
      btn?.classList.remove('loading');
      if (btn) btn.disabled = false;
    }
  };

  /* ── WhatsApp redirect ──────────────────────────────────────────────────── */
  const initWhatsApp = () => {
    const waBtn = document.getElementById('whatsapp-btn');
    if (!waBtn) return;
    waBtn.addEventListener('click', () => {
      const phone   = portfolioData.personal.phone.replace(/\D/g, '');
      const message = encodeURIComponent(`Hi ${portfolioData.personal.nameShort}! I saw your portfolio and would like to connect.`);
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
  };

  /* ── Init ───────────────────────────────────────────────────────────────── */
  const init = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', handleSubmit);
    clearErrorsOnInput();
    initWhatsApp();
  };

  return { init };
})();
