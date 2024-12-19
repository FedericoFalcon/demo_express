const { Router } = require('express');
const { getAlquileres, getPeliculas, getPelicula, getNovedades } = require('../controllers/demo');

const Rutas = Router();

Rutas.get('/peliculas', getPeliculas)

Rutas.get('/pelicula/:id', getPelicula)

Rutas.get('/alquileres/', getAlquileres)

Rutas.get('/novedades/', getNovedades)

module.exports = Rutas;