// === Vanta.js Background for Profil ===
window.addEventListener('DOMContentLoaded', () => {
  if (window.VANTA && document.getElementById('profil-bg')) {
    VANTA.NET({
      el: "#profil-bg",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x1e3a8a,          // bleu du réseau
      backgroundColor: 0x000000, // fond noir
      points: 12.00,             // densité des points
      maxDistance: 20.00,        // distance max entre points
      spacing: 18.00             // espacement
    });
  }

  // === Projets Grid ===
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    const gradients = [
      "from-indigo-400 to-fuchsia-500",
      "from-yellow-400 to-red-500",
      "from-purple-400 to-pink-500",
      "from-green-400 to-blue-500",
      "from-pink-400 to-red-500",
      "from-orange-400 to-purple-500",
    ];
    const projectNames = [
      "MY_SPOTIFY",
      "MY_SHOP",
      "PUISSANCE 4",
      "MY_WYSIWYG",
      "MY_SNAPCHAT",
      "MY_CINEMA"
    ];
const projectLinks = [
  'spotify.html', // MY_SPOTIFY
  'https://jump-area.wuaze.com/login.php',// MY_SHOP
  'https://kong4.netlify.app/', // PUISSANCE 4
  'https://remarkable-starship-314c64.netlify.app/', // MY_WYSIWYG
  '',             // MY_SNAPCHAT
  '',             // MY_CINEMA
];


    for(let i = 0; i < 6; i++){
      const card = document.createElement("div");
      card.className = "flip-card";
      // Centrer la 6ᵉ carte horizontalement sur desktop
      if(i === 5){
        card.classList.add("md:col-start-2"); 
      }
      let linkHtml = projectLinks[i]
        ? `<a href="${projectLinks[i]}" target="_blank" class="underline text-blue-400 hover:text-blue-600">Voir le projet en ligne</a>`
        : '';
      card.innerHTML = `
        <div class="flip-inner shadow-lg cursor-pointer">
          <div class="flip-front bg-gradient-to-r ${gradients[i]} p-6 rounded-2xl">
            <h3 class="text-xl font-bold">${projectNames[i]}</h3>
          </div>
          <div class="flip-back rounded-2xl p-6 bg-gray-800 text-white">
            <p>Détails du projet ${projectNames[i]}, technologies utilisées.${linkHtml ? '<br>' + linkHtml : ''}</p>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    }
  }
});
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
