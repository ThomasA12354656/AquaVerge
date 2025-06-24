const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;
  let opacity = 1 - scrollY / heroHeight;
  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;
  hero.style.opacity = opacity;
});
