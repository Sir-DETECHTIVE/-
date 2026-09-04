/* ==========================================================================
   DE-TECH-TIVE SERVICES — Global JS
   Handles: mobile nav toggle, active-link marking, the missed-call ROI
   calculator, portfolio filtering, and the contact form.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  markActiveLink();
  initRoiCalculator();
  initPortfolioFilters();
  initContactForm();
});

/* ---------- Mobile navigation ---------- */
function initMobileNav() {
  const toggle = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!links.classList.contains('open')) return;
    if (links.contains(e.target) || toggle.contains(e.target)) return;
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
}