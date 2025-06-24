import { crearGaleria } from './galeriaEnComun.js';

const viviendas = [
  {
    id: 'v1',
    titulo: 'CASA COUNTRY',
    imagenes: [
      'img/casac1.jpg',
      'img/casac2.jpg',
      'img/casac3.jpg',
      'img/casac4.jpg',
      'img/casac5.jpg'
    ],
    tarea: 'Proyecto, dirección y construcción.',
    ubicacion: 'Country Club Banco Provincia, Francisco Álvarez',
    superficie: '310 m²',
    anio: '2016'
  },
  {
    id: 'v2',
    titulo: 'CASA COUNTRY',
    imagenes: [
      'img/casac1.jpg',
      'img/casac2.jpg',
      'img/casac3.jpg',
      'img/casac4.jpg',
      'img/casac5.jpg'
    ],
    tarea: 'Proyecto, dirección y construcción.',
    ubicacion: 'Country Club Banco Provincia, Francisco Álvarez',
    superficie: '310 m²',
    anio: '2016'
  },
  {
    id: 'v3',
    titulo: 'CASA COUNTRY',
    imagenes: [
      'img/casac1.jpg',
      'img/casac2.jpg',
      'img/casac3.jpg',
      'img/casac4.jpg',
      'img/casac5.jpg'
    ],
    tarea: 'Proyecto, dirección y construcción.',
    ubicacion: 'Country Club Banco Provincia, Francisco Álvarez',
    superficie: '310 m²',
    anio: '2016'
  },
  {
    id: 'v4',
    titulo: 'CASA COUNTRY',
    imagenes: [
      'img/casac1.jpg',
      'img/casac2.jpg',
      'img/casac3.jpg',
      'img/casac4.jpg',
      'img/casac5.jpg'
    ],
    tarea: 'Proyecto, dirección y construcción.',
    ubicacion: 'Country Club Banco Provincia, Francisco Álvarez',
    superficie: '310 m²',
    anio: '2016'
  },
  {
    id: 'v5',
    titulo: 'CASA COUNTRY',
    imagenes: [
      'img/casac1.jpg',
      'img/casac2.jpg',
      'img/casac3.jpg',
      'img/casac4.jpg',
      'img/casac5.jpg'
    ],
    tarea: 'Proyecto, dirección y construcción.',
    ubicacion: 'Country Club Banco Provincia, Francisco Álvarez',
    superficie: '310 m²',
    anio: '2016'
  }
];

document.addEventListener("DOMContentLoaded", () => {
  crearGaleria(viviendas, 'viviendasContainer');
});