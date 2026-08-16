(function () {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const nav = document.getElementById('nav');

  burger?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  let isScrolled = false;

  const onScroll = () => {
    if (!nav) return;

    const scrolled = window.scrollY > 20;
    if (scrolled === isScrolled) return;

    isScrolled = scrolled;
    nav.classList.toggle('nav-scrolled', scrolled);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
