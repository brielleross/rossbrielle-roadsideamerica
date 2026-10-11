const toggle = document.querySelector('.menu-toggle');
const nav = toggle.closest('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});