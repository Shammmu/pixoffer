// JavaScript to toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  // Update ARIA attribute for accessibility
  navToggle.setAttribute('aria-expanded', expanded);
});



function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


