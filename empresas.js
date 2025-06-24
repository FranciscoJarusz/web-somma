import { crearGaleria } from './galeriaEnComun.js';

const empresas = [   
    {
        id: 'e1',
        titulo: 'CARREFOUR PATIO DE COMIDAS SUCURSAL MORENO',
        imagenes: [
        'img/carr1.jpg',
        'img/carr2.jpg',
        'img/carr3.jpg',
        ],
        tarea: 'Dirección y construcción.',
        ubicacion: 'Av. Gaona y Puente Graham Bell - Buenos Aires Moreno.',
        superficie: 'Local comercial 425m² aproximadamente',
        anio: '2016'
    },
    {
        id: 'e2',
        titulo: 'CARREFOUR PATIO DE COMIDAS SUCURSAL MORENO',
        imagenes: [
        'img/carr1.jpg',
        'img/carr2.jpg',
        'img/carr3.jpg',
        ],
        tarea: 'Dirección y construcción.',
        ubicacion: 'Av. Gaona y Puente Graham Bell - Buenos Aires Moreno.',
        superficie: 'Local comercial 425m² aproximadamente',
        anio: '2016'
    },
    {
        id: 'e3',
        titulo: 'CARREFOUR PATIO DE COMIDAS SUCURSAL MORENO',
        imagenes: [
        'img/carr1.jpg',
        'img/carr2.jpg',
        'img/carr3.jpg',
        ],
        tarea: 'Dirección y construcción.',
        ubicacion: 'Av. Gaona y Puente Graham Bell - Buenos Aires Moreno.',
        superficie: 'Local comercial 425m² aproximadamente',
        anio: '2016'
    },
    {
        id: 'e4',
        titulo: 'CARREFOUR PATIO DE COMIDAS SUCURSAL MORENO',
        imagenes: [
        'img/carr1.jpg',
        'img/carr2.jpg',
        'img/carr3.jpg',
        ],
        tarea: 'Dirección y construcción.',
        ubicacion: 'Av. Gaona y Puente Graham Bell - Buenos Aires Moreno.',
        superficie: 'Local comercial 425m² aproximadamente',
        anio: '2016'
    },
    {
        id: 'e5',
        titulo: 'CARREFOUR PATIO DE COMIDAS SUCURSAL MORENO',
        imagenes: [
        'img/carr1.jpg',
        'img/carr2.jpg',
        'img/carr3.jpg',
        ],
        tarea: 'Dirección y construcción.',
        ubicacion: 'Av. Gaona y Puente Graham Bell - Buenos Aires Moreno.',
        superficie: 'Local comercial 425m² aproximadamente',
        anio: '2016'
    },
];

document.addEventListener("DOMContentLoaded", () => {
  crearGaleria(empresas, 'empresasContainer');
});