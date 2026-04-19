/**
 * main.js — Internship Task Doc
 * Handles: mobile nav toggle, active nav links on scroll,
 *          scroll-to-top button, section entrance animations.
 */

/* ── Mobile Nav Toggle ───────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const headerNav = document.querySelector('.header-nav');

if (navToggle && headerNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);

    // Animate hamburger → X
    const spans = navToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close nav when a link is clicked
  headerNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      headerNav.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

/* ── Active Nav on Scroll ────────────────────────── */
const sections  = document.querySelectorAll('.doc-section[id]');
const navLinks  = document.querySelectorAll('.header-nav a[href^="#"]');

const observerOptions = {
  root: null,
  rootMargin: `-${64 + 20}px 0px -60% 0px`,
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, observerOptions);

sections.forEach(sec => observer.observe(sec));

/* ── Scroll-to-top Button ────────────────────────── */
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-top';
scrollBtn.setAttribute('aria-label', 'Scroll to top');
scrollBtn.innerHTML = '↑';
document.body.appendChild(scrollBtn);

const toggleScrollBtn = () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
};

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleScrollBtn, { passive: true });
toggleScrollBtn(); // initial check

/* ── Staggered Section Animations via IntersectionObserver ── */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.doc-section').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.07}s`;
  el.style.animationPlayState = 'paused';
  animObserver.observe(el);
});

console.log('%c📄 Internship Task Doc', 'font-size:14px;font-weight:bold;color:#c97b2e;');
console.log('%cBuilt with Handlebars + Vite ⚡', 'color:#4a4438;');
