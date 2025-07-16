document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.classList.add("scale-105");
    });
    link.addEventListener("mouseout", () => {
      link.classList.remove("scale-105");
    });
  });
});

// Sélectionne tous les liens de la nav
const navLinks = document.querySelectorAll('.nav-link');
// Sélectionne toutes les sections avec id
const sections = [...document.querySelectorAll('main section[id]')];

// Fonction qui met à jour l'onglet actif en fonction du scroll
function updateActiveLink() {
  const scrollPos = window.scrollY + window.innerHeight / 3; // Ajuste ce chiffre pour le déclenchement

  let currentSectionId = sections[0].id;

  for (const section of sections) {
    if (scrollPos >= section.offsetTop) {
      currentSectionId = section.id;
    }
  }

  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.classList.add('font-bold', 'underline', 'decoration-[#8c93e3]', 'underline-offset-4');
      link.classList.remove('hover:text-[#8c93e3]');
      link.style.color = '#7b5fd8'; // violet actif
    } else {
      link.classList.remove('font-bold', 'underline', 'decoration-[#8c93e3]', 'underline-offset-4');
      link.classList.add('hover:text-[#8c93e3]');
      link.style.color = '#3bcebf'; // vert normal
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// Met à jour l'état actif au chargement
window.addEventListener('load', updateActiveLink);
