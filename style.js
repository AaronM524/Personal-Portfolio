// Simple Loading Controller
function startLoading() {
  const progressPercent = document.getElementById("progressPercent");
  const loadingText = document.getElementById("loadingText");

  // Loading messages
  const messages = [
    "Loading Experience...",
    "Preparing Content...",
    "Almost Ready...",
  ];

  let messageIndex = 0;
  let progress = 0;

  // Update progress and messages
  const progressInterval = setInterval(() => {
    progress += 2;
    progressPercent.textContent = progress + "%";

    // Change message every 33%
    if (progress === 33 || progress === 66) {
      messageIndex++;
      loadingText.textContent = messages[messageIndex];
    }

    // Complete loading at 100%
    if (progress >= 100) {
      clearInterval(progressInterval);
      setTimeout(completeLoading, 500);
    }
  }, 60); // Updates every 60ms for smooth animation
}

// Complete loading and show main content
function completeLoading() {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  loadingScreen.classList.add("hidden");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.classList.add("show");
  }, 600);
}

// Start loading when page loads
window.addEventListener("load", startLoading);

// Fallback: Start loading after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(startLoading, 100);
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



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});
