import { crearGaleria } from './galeriaEnComun.js';

const comercios = [
  {
    id: 'c1',
    titulo: 'COMPUMUNDO',
    imagenes: [
      'img/compum1.jpg',
      'img/compum2.jpg',
      'img/compum3.jpg',
      'img/compum4.jpg',
      'img/compum5.jpg'
    ],
    tarea: 'Dirección y construcción.',
    ubicacion: 'Híper libertad provincia de Rosario',
    superficie: 'Local comercial máxima 300m² aproximadamente.',
    anio: '2016'
  },
  {
    id: 'c2',
    titulo: 'COMPUMUNDO',
    imagenes: [
      'img/compum1.jpg',
      'img/compum2.jpg',
      'img/compum3.jpg',
      'img/compum4.jpg',
      'img/compum5.jpg'
    ],
    tarea: 'Dirección y construcción.',
    ubicacion: 'Híper libertad provincia de Rosario',
    superficie: 'Local comercial máxima 300m² aproximadamente.',
    anio: '2016'
  },
  {
    id: 'c3',
    titulo: 'COMPUMUNDO',
    imagenes: [
      'img/compum1.jpg',
      'img/compum2.jpg',
      'img/compum3.jpg',
      'img/compum4.jpg',
      'img/compum5.jpg'
    ],
    tarea: 'Dirección y construcción.',
    ubicacion: 'Híper libertad provincia de Rosario',
    superficie: 'Local comercial máxima 300m² aproximadamente.',
    anio: '2016'
  },
  {
    id: 'c4',
    titulo: 'COMPUMUNDO',
    imagenes: [
      'img/compum1.jpg',
      'img/compum2.jpg',
      'img/compum3.jpg',
      'img/compum4.jpg',
      'img/compum5.jpg'
    ],
    tarea: 'Dirección y construcción.',
    ubicacion: 'Híper libertad provincia de Rosario',
    superficie: 'Local comercial máxima 300m² aproximadamente.',
    anio: '2016'
  },
  {
    id: 'c5',
    titulo: 'COMPUMUNDO',
    imagenes: [
      'img/compum1.jpg',
      'img/compum2.jpg',
      'img/compum3.jpg',
      'img/compum4.jpg',
      'img/compum5.jpg'
    ],
    tarea: 'Dirección y construcción.',
    ubicacion: 'Híper libertad provincia de Rosario',
    superficie: 'Local comercial máxima 300m² aproximadamente.',
    anio: '2016'
  }
];

document.addEventListener("DOMContentLoaded", () => {
  crearGaleria(comercios, 'comerciosContainer');
});