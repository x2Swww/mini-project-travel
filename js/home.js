(function () {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const heroEls = document.querySelectorAll('[data-hero]');
  if (heroEls.length) {
    gsap.set(heroEls, { opacity: 0, y: 30 });
    gsap.to(heroEls, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.15,
    });
  }

  const glassFlower = document.getElementById('glassFlower');
  const glassCrescent = document.getElementById('glassCrescent');

  if (glassFlower) {
    gsap.from(glassFlower, {
      opacity: 0,
      x: -60,
      rotation: -20,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3,
    });
    gsap.to(glassFlower, { y: -18, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    gsap.to(glassFlower, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  if (glassCrescent) {
    gsap.from(glassCrescent, {
      opacity: 0,
      x: 60,
      rotation: 20,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.4,
    });
    gsap.to(glassCrescent, { y: 22, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    gsap.to(glassCrescent, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  gsap.utils.toArray('[data-card]').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 92%' },
      delay: (i % 3) * 0.08,
    });
  });

  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  gsap.utils.toArray('.bar').forEach((bar) => {
    gsap.from(bar, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: bar, start: 'top 95%' },
    });
  });
})();
