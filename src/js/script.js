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
// Thème clair/sombre
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.theme = 'light';
    toggleBtn.textContent = '🌙';
  }
});


const grid = document.getElementById("skills-grid");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.className = "flip-card";

  card.innerHTML = `
    <div class="flip-inner shadow-lg cursor-pointer">
      <!-- Recto -->
      <div class="flip-front bg-gradient-to-r ${skill.color}">
        <div class="text-4xl mb-4">${skill.icon}</div>
        <h3 class="font-semibold text-lg">${skill.name}</h3>
      </div>
      <!-- Verso -->
      <div class="flip-back rounded-2xl">
        <p>${skill.desc}</p>
      </div>
    </div>
  `;
  grid.appendChild(card);
});
