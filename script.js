// =============================
// Utility: Copy Functions
// =============================
function copyPhoneNumber() {
  const phoneNumber = '+91 9080609250';
  navigator.clipboard.writeText(phoneNumber).then(() => {
    alert('Phone number copied to clipboard!');
  }).catch(err => console.error('Copy failed', err));
}

function copyEmail() {
  const email = 'tagorkarthi2005@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Email address copied to clipboard!');
  }).catch(err => console.error('Copy failed', err));
}

function goBack() {
  window.location.href = '/index.html';
}

// Expose functions globally (for inline HTML onclick usage)
window.copyPhoneNumber = copyPhoneNumber;
window.copyEmail = copyEmail;
window.goBack = goBack;

// =============================
// Navigation & Hamburger Menu
// =============================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked (mobile UX)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// =============================
// Smooth Scroll Enhancement
// =============================
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      const yOffset = -70; // Account for fixed navbar
      const yPosition = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  });
});

// =============================
// Back To Top Button
// =============================
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =============================
// Intersection Observer Animations
// =============================
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .achievement-card');
const fadeInOptions = {
  threshold: 0.15
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up');
      observer.unobserve(entry.target);
    }
  });
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(onEntry, fadeInOptions);
  animatedElements.forEach(el => observer.observe(el));
}

// =============================
// Active Nav Link Highlighting
// =============================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let currentId = null;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // offset for fixed nav
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentId = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// =============================
// Keyboard Accessibility Enhancements
// =============================
if (hamburger) {
  hamburger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });
}

// =============================
// Graceful Degradation: Fallback Animations
// =============================
if (!('IntersectionObserver' in window)) {
  animatedElements.forEach(el => el.classList.add('slide-up'));
}

// =============================
// Console Banner
// =============================
console.log('%cPortfolio Loaded', 'background: #6A0DAD; color: #fff; padding: 6px 12px; border-radius: 4px;');