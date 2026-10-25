// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
let navOpen = false;

navToggle.addEventListener('click', function () {
  navOpen = !navOpen;
  navLinks.className = navOpen ? 'nav-links open' : 'nav-links';
});

// ===== Dark / Light Theme Toggle (persisted with localStorage) =====
const themeToggle = document.getElementById('themeToggle');
let darkMode = localStorage.getItem('theme') === 'dark';

function updateTheme() {
  document.body.className = darkMode ? 'dark-mode' : '';
  themeToggle.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
}

updateTheme();

themeToggle.addEventListener('click', function () {
  darkMode = !darkMode;
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  updateTheme();
});

// ===== Greeting Message Based on Time of Day =====
const greetingEl = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = 'Welcome';

if (hour < 12) {
  greetingText = 'Good morning!';
} else if (hour < 18) {
  greetingText = 'Good afternoon!';
} else {
  greetingText = 'Good evening!';
}

greetingEl.textContent = greetingText;

// ===== Contact Form Interaction (no backend) =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  if (name === '') {
    formStatus.textContent = 'Please enter your name.';
    formStatus.className = 'form-status error';

  } else if (email === '') {
    formStatus.textContent = 'Please enter your email.';
    formStatus.className = 'form-status error';

  } else if (!email.includes('@') || !email.includes('.')) {
    formStatus.textContent = 'Please enter a valid email.';
    formStatus.className = 'form-status error';

  } else if (message === '') {
    formStatus.textContent = 'Please enter your message.';
    formStatus.className = 'form-status error';

  } else {
    formStatus.textContent = 'Thank you, ' + name + '! Form completed successfully (demo only).';
    formStatus.className = 'form-status success';

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }
});

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Project Filter =====
const projects = document.querySelectorAll('.project-card');

function filterProjects(status) {
  for (let project of projects) {
    if (status === 'all' || project.dataset.status === status) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  }
}

document.getElementById('showAll').addEventListener('click', function () {
  filterProjects('all');
});

document.getElementById('showCompleted').addEventListener('click', function () {
  filterProjects('completed');
});

document.getElementById('showProgress').addEventListener('click', function () {
  filterProjects('progress');
});
