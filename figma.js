const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});