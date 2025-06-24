// Fade out the hero as you scroll
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('home');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    let opacity = 1 - scrollY / heroHeight;
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;
    hero.style.opacity = opacity;
  });
});
