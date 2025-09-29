const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');
const themeToggle = document.getElementById('theme-toggle');

function onScroll() {
  let scrollPos = window.scrollY + window.innerHeight / 3;
  let currentSectionId = sections[0].id;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) currentSectionId = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentSectionId);
  });

  sections.forEach(section => {
    if (window.scrollY + window.innerHeight * 0.7 > section.offsetTop) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScroll);
onScroll();

/* Mode sombre / clair */
function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newTheme);
});

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
