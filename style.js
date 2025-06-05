// Immediately show main content on page load
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  if (loadingScreen) {
    loadingScreen.style.display = "none"; // hide loading screen if exists
  }

  if (mainContent) {
    mainContent.classList.add("show"); // show main content immediately
  }
});
const phrases = [
  "Web Developer",
  "Frontend Developer",
  "UI/UX Designer",
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  const current = phrases[currentPhrase];

  if (isDeleting) {
    typewriter.textContent = current.substring(0, currentChar - 1);
    currentChar--;
  } else {
    typewriter.textContent = current.substring(0, currentChar + 1);
    currentChar++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentChar === current.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(type, typeSpeed);
}

// Start the typewriter effect
type();

function scrollDown() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
}

const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const grid = document.getElementById('projectsGrid');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove "active" class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      // Clear the grid and re-append matching cards
      grid.innerHTML = '';

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          grid.appendChild(card);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });