const { Router } = require('express');
const { getSeries, getPeliculas, getPelicula, getOrigenNombre } = require('../controllers/demo');

const Rutas = Router();

Rutas.get('/peliculas', getPeliculas)

Rutas.get('/pelicula/:id', getPelicula)

Rutas.get('/series', getSeries)

Rutas.get('/nombre/:name', getOrigenNombre)

module.exports = Rutas;