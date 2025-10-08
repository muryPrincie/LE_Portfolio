window.addEventListener("DOMContentLoaded", () => {
  const profilBg = document.getElementById("profil-bg");

  // Initialisation VANTA selon le thème
  const initVanta = (isDark) => {
    if (profilBg.vantaEffect) profilBg.vantaEffect.destroy();

    VANTA.NET({
      el: "#profil-bg",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: 12.0,
      maxDistance: 20.0,
      spacing: 18.0,
      color: 0x1e3a8a,                    
      backgroundColor: isDark ? 0x1a1a1a : 0xffffff 
    });
  };

  // Fonction pour mettre à jour le thème
  const themeToggle = document.getElementById("theme-toggle");
  const setTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    // Mise à jour theme VANTA
    if (profilBg && window.VANTA) initVanta(isDark);
  };

 
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Toggle du thème
  themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    const gradients = [
      "from-indigo-400 to-fuchsia-500",
      "from-yellow-400 to-red-500",
      "from-purple-400 to-pink-500",
      "from-green-400 to-blue-500",
      "from-pink-400 to-red-500",
    ];

    const projectNames = [
      "BANGER_PLANET",
      "JUMP_ERA",
      "PUISSANCE_KONG",
      "MY_WYSIWYG",
      "PROJET PERSO",
    ];

    const projectDetails = [
      "Inspiré de Spotify, BANGER_Planet est une plateforme musicale interactive...",
      "JUMP_ERA est un mini site e-commerce intégrant une base de données utilisateurs...",
      "PUISSANCE_KONG est une revisite du jeu Puissance 4, développée en JavaScript...",
      "MY_WYSIWYG est un éditeur de texte en ligne personnalisable...",
      "PROJET PERSO – En cours de conception.",
    ];

    const projectLinks = [
      "spotify.html",
      "https://jump-area.wuaze.com/login.php",
      "https://kong4.netlify.app/",
      "https://remarkable-starship-314c64.netlify.app/",
      "",
    ];

    for (let i = 0; i < 5; i++) {
      const card = document.createElement("div");
      card.className = "flip-card";

      let linkHtml = "";
      if (projectLinks[i]) {
        linkHtml = `<a href="${projectLinks[i]}" target="_blank" class="underline text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-500">Voir le projet</a>`;
      }

      card.innerHTML = `
        <div class="flip-inner shadow-lg cursor-pointer">
          <div class="flip-front bg-gradient-to-r ${gradients[i]} p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-black dark:text-white">${projectNames[i]}</h3>
          </div>
          <div class="flip-back rounded-2xl p-6 bg-gray-800 text-white">
            <p>${projectDetails[i]}${linkHtml ? "<br><br>" + linkHtml : ""}</p>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    }
  }

  // VANTA.BIRDS pour contact
  if (window.VANTA && document.getElementById("contact")) {
    VANTA.BIRDS({
      el: "#contact",
      mouseControls: true,
      touchControls: true,
      minHeight: 400.0,
      minWidth: 300.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundAlpha: 0,
      color1: 0xff69b4,
      color2: 0xffb6c1,
      birdSize: 1.2,
      wingSpan: 25.0,
      speedLimit: 2.5,
      separation: 50.0,
      alignment: 25.0,
      cohesion: 20.0,
      quantity: 10,
    });
  }

 
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav a");

  function onScroll() {
    let scrollPos = window.scrollY + window.innerHeight / 3;
    let currentSectionId = sections[0]?.id;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) currentSectionId = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + currentSectionId
      );
    });

    sections.forEach((section) => {
      if (window.scrollY + window.innerHeight * 0.7 > section.offsetTop) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});
