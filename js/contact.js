(function () {
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
})();
