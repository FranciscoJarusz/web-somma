export function crearGaleria(lista, containerId) {
  const container = document.getElementById(containerId);

  lista.forEach((item, index) => {
    const sliderName = `slider_${containerId}_${index}`;

    const checkedInputs = item.imagenes.map((_, i) =>
      `<input type="radio" name="${sliderName}" id="slide_${containerId}_${index}_${i}" ${i === 0 ? 'checked' : ''}>`
    ).join('');

    const slides = item.imagenes.map((src, i) =>
      `<div class="slide${i === 0 ? ' active' : ''}">
         <img src="${src}" alt="Imagen galería">
       </div>`
    ).join('');

    const nav = item.imagenes.map((_, i) =>
      `<label for="slide_${containerId}_${index}_${i}" class="manual-btn"></label>`
    ).join('');

    const descripcion = `
      <div class="descripcion-casac">
        <h2>${item.titulo || 'PROYECTO'}</h2>
        <p>Tarea: ${item.tarea}</p>
        <p>Ubicación: ${item.ubicacion}</p>
        <p>Superficie: ${item.superficie}</p>
        <p>Período de ejecución: Año ${item.anio}</p>
      </div>`;

    const html = `
      <div class="vivienda-galeria-css">
        ${checkedInputs}
        <div class="slides">${slides}</div>
        <div class="navigation-manual">${nav}</div>
        ${descripcion}
      </div>`;

    container.insertAdjacentHTML('beforeend', html);
  });

  // Activación de clase .active en slides
  container.querySelectorAll('.vivienda-galeria-css').forEach(gal => {
    const radios = gal.querySelectorAll('input[type="radio"]');
    const slides = gal.querySelectorAll('.slide');

    radios.forEach((radio, idx) => {
      radio.addEventListener('change', () => {
        slides.forEach(s => s.classList.remove('active'));
        slides[idx].classList.add('active');
      });
    });
  });
}
