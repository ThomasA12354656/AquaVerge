// Fade out hero and about sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('home');
  const about = document.getElementById('about');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const aboutHeight = about.offsetHeight;

    // Fade hero
    let heroOpacity = 1 - scrollY / heroHeight;
    heroOpacity = Math.max(0, Math.min(1, heroOpacity));
    hero.style.opacity = heroOpacity;

    // Fade about
    const aboutStartFade = heroHeight / 2; // start fading halfway through hero
    let aboutOpacity;
    if (scrollY < aboutStartFade) {
      aboutOpacity = 1;
    } else {
      aboutOpacity = 1 - (scrollY - aboutStartFade) / aboutHeight;
    }
    aboutOpacity = Math.max(0, Math.min(1, aboutOpacity));
    document.querySelector('#about').style.opacity = aboutOpacity;
  });
});
