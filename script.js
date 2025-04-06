const btn = document.getElementById('animateBtn');
const themeSelect = document.getElementById('themeSelect');

// Load user preference from localStorage
window.onload = () => {
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme) {
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
  }
};

// Store preference on change
themeSelect.addEventListener('change', () => {
  const selected = themeSelect.value;
  localStorage.setItem('preferredTheme', selected);
  applyTheme(selected);
});

function applyTheme(theme) {
  document.body.style.backgroundColor = (theme === 'dark') ? '#333' : '#fff';
  document.body.style.color = (theme === 'dark') ? '#fff' : '#000';
}

// Trigger CSS animation on button click
btn.addEventListener('click', () => {
  btn.classList.add('animate-pop');

  // Remove class after animation completes so it can be reused
  setTimeout(() => {
    btn.classList.remove('animate-pop');
  }, 400);
});
