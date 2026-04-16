/* =========================================================
   Sinso Printing — Main JavaScript
   ========================================================= */

/* --- Language / i18n ---
   Strategy: each bilingual element has data-en and data-zh text.
   We inject the correct text based on the active language.
   Alternatively, elements with data-lang="en" / data-lang="zh" are shown/hidden.
   We use the latter approach (simpler, SEO-friendly with default EN visible).
   ========================================================= */

const LANG_KEY = 'sinso_lang';

function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
  updateLangButtons(lang);
}

function applyLang(lang) {
  // Show/hide elements with data-lang attribute
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.remove('lang-visible');
    if (el.dataset.lang === lang) {
      el.classList.add('lang-visible');
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Swap placeholder text on inputs
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    el.placeholder = lang === 'zh'
      ? (el.dataset.placeholderZh || el.dataset.placeholderEn)
      : el.dataset.placeholderEn;
  });
}

function updateLangButtons(lang) {
  // Top-bar small toggle
  document.querySelectorAll('.lang-btn[data-lang-switch]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langSwitch === lang);
  });
  // Header prominent toggle
  document.querySelectorAll('.header-lang-btn[data-lang-switch]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langSwitch === lang);
  });
}

/* --- Mobile Nav --- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --- Active Nav Link --- */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --- Contact Form --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = getCurrentLang() === 'zh' ? '发送中...' : 'Sending...';

    // Collect form data
    const data = Object.fromEntries(new FormData(form));

    // Build mailto link as fallback (opens native email client)
    const subject = encodeURIComponent(`Inquiry from ${data.company || data.name} — ${data.product || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company || 'N/A'}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nProduct: ${data.product || 'N/A'}\nQuantity: ${data.quantity || 'N/A'}\n\nMessage:\n${data.message || 'N/A'}`
    );

    // Simulate a brief delay then open mailto
    setTimeout(() => {
      window.location.href = `mailto:sales@sinsoprinting.com?subject=${subject}&body=${body}`;
      btn.disabled = false;
      btn.textContent = originalText;
      showToast(
        getCurrentLang() === 'zh'
          ? '正在打开邮件客户端...'
          : 'Opening your email client…',
        'success'
      );
      form.reset();
    }, 600);
  });
}

/* --- Toast Notification --- */
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'success'
        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
        : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
    </svg>
    ${message}
  `;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* --- Product Filter --- */
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* --- Scroll Reveal (lightweight) --- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !window.IntersectionObserver) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => obs.observe(el));
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  // Language
  const lang = getCurrentLang();
  applyLang(lang);
  updateLangButtons(lang);

  // Lang button click — both toggle types use data-lang-switch
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang-switch]');
    if (btn) setLang(btn.dataset.langSwitch);
  });

  initMobileNav();
  initActiveNav();
  initContactForm();
  initProductFilter();
  initScrollReveal();
});
