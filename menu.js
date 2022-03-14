let isMenuOpen = false;

const menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuButton.classList.add('open');
  } else {
    menuButton.classList.remove('open');
  }
});