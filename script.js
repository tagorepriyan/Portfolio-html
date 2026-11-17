// Highlight the nav link for the section currently in view
const links = document.querySelectorAll('.profile nav a');
const sections = [...document.querySelectorAll('main section[id]')];

function setActive() {
  const marker = window.scrollY + window.innerHeight * 0.3;
  let current = sections[0].id;
  for (const s of sections) {
    if (s.offsetTop <= marker) current = s.id;
  }
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
    current = sections[sections.length - 1].id;
  }
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', setActive, { passive: true });
window.addEventListener('resize', setActive);
setActive();

// Copy email with an inline confirmation
const EMAIL = 'tagorepriyansaravanavel@gmail.com';
const copyBtn = document.getElementById('copyEmail');
const toast = document.getElementById('toast');
let timer;

function say(msg) {
  toast.textContent = msg;
  clearTimeout(timer);
  timer = setTimeout(() => (toast.textContent = ''), 3000);
}

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    say('Email copied.');
  } catch {
    say('Copy failed. Select the address above and copy it manually.');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
