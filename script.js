// Select the hero element
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  // Calculate how far we've scrolled down
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  // Determine opacity based on scroll position
  let opacity = 1 - scrollY / heroHeight;

  // Clamp opacity between 0 and 1
  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;

  // Set the opacity of the hero
  hero.style.opacity = opacity;
});
