const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('show');

  if (menuOpen) {
    hamburgerIcon.src = 'assets/icons/close.svg'; // path to your cross icon
  } else {
    hamburgerIcon.src = 'assets/icons/menu.png'; // path to your hamburger icon
  }
});

// Optional: Close menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    hamburgerIcon.src = 'assets/icons/menu.png';
    menuOpen = false;
  });
});


// Hide menu & reset icon on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    hamburgerIcon.src = 'assets/icons/menu.png';
    menuOpen = false;
  });
});


// Typed text animation
new Typed("#typed-text", {
  strings: [
    "Frontend Developer 💻",
    "Backend Explorer 🛠️",
    "React & JavaScript Enthusiast ⚛️",
    "API + Fetch-based Weather App 🌦️",
    "Flutter & ML Currency Detector 📱💸",
    "Always Evolving 🚀"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

new Typed("#typed-text-2", {
  strings: [
    "“I don’t just build websites — I build experiences.”",
    "“Design. Develop. Deliver.”",
    "“I code what you imagine.”",
    "“Development that feels like design.”"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});
