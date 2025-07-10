/* ------------------------------------------------------------------ PRE-LOADER ------------------------------------------------------------------ */

window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.05s ease';

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);
});

/* ------------------------------------------------------------------ ANIMACIÓN AL SCROLLEAR ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.somma, .estudio, .exp-comp');

  elementos.forEach(el => {
    el.classList.add('scroll-anim');
  });

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);

  elementos.forEach(el => {
    observer.observe(el);
  });
});