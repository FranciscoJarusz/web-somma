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
  const secciones = document.querySelectorAll('.scroll-section');

  const options = {
    threshold: 0.1
  };

  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const hijos = entry.target.querySelectorAll('*');

        if (entry.isIntersecting) {
          hijos.forEach((hijo, index) => {
            setTimeout(() => {
              hijo.classList.add('visible');
            }, index * 30);
          });
        } else {

          hijos.forEach(hijo => {
            hijo.classList.remove('visible');
          });
        }
      });
    }, options);

    secciones.forEach(section => {
      observer.observe(section);
    });

  }, 1000);
});