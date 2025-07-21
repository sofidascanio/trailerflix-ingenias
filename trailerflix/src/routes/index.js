const express = require('express');
const router = express.Router();

const getTituloByGeneroId = require('./generos/getById.js');
const getAllGeneros = require('./generos/getAll.js');

const getAllActores = require('./actores/getAll.js');
const getActorById = require('./actores/getById.js');
const getTitulosActorById = require('./actores/getById.js');

const getAllTitulos = require('./titulos/getAll.js');
const getTituloById = require('./titulos/getById.js');
const getRepartoTitulo = require('./titulos/getAll.js');
const getAllSeries = require('./titulos/getAllSeries.js');
const getAllPeliculas = require('./titulos/getAllPeliculas.js');

const getTitulosByTagId = require('./tags/getById.js');
const getAllTags = require('./tags/getAll.js');

router.get('/generos/:id', getTituloByGeneroId);
router.get('/generos', getAllGeneros);

router.get('/actores', getAllActores);
router.get('/actores/:id', getActorById);
router.get('/actores/titulos/:id', getTitulosActorById);

router.get('/titulos', getAllTitulos);
router.get('/titulos/:id', getTituloById);
router.get('titulos/reparto/:id', getRepartoTitulo);
router.get('/titulos/series', getAllSeries);
router.get('/titulos/peliculas', getAllPeliculas);

router.get('/tags/:id', getTitulosByTagId);
router.get('/tags', getAllTags);

module.exports = router;