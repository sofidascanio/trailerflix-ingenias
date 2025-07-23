const express = require('express');
const router = express.Router();

const getTituloByGeneroId = require('./generos/getById.js');
const getAllGeneros = require('./generos/getAll.js');

const getAllActores = require('./actores/getAll.js');
const getActorById = require('./actores/getById.js');
const getTitulosActorById = require('./actores/getTitulosActor.js');
const getActorByName = require('./actores/getActorByName.js');

const getAllTitulos = require('./titulos/getAll.js');
const getTituloById = require('./titulos/getById.js');
const getRepartoTitulo = require('./titulos/getReparto.js');
const getAllSeries = require('./titulos/getAllSeries.js');
const getAllPeliculas = require('./titulos/getAllPeliculas.js');
const getTituloByResumen = require('./titulos/getByResumen.js');
const getSeriesByTemporadas = require('./titulos/getSeriesByTemporadas.js');
const getCantidadTitulos = require('./titulos/getCantidadTitulos.js');

const getTitulosByTagId = require('./tags/getById.js');
const getAllTags = require('./tags/getAll.js');

const getAllRankings = require('./ranking/getAll.js');
const getRankingByTituloId = require('./ranking/getByTituloId.js');

router.use('/generos', getTituloByGeneroId);
router.use('/generos/:id', getAllGeneros);

router.use('/actores', getAllActores);
router.use('/actores/:id', getActorById);
router.use('/actores/titulos/:id', getTitulosActorById);
router.use('/actores/nombre/:nombre', getActorByName);

router.use('/titulos', getAllTitulos);
router.use('/titulos/:id', getTituloById);
router.use('/titulos/reparto/:id', getRepartoTitulo);
router.use('/titulos/categoria/series', getAllSeries);
router.use('/titulos/categoria/peliculas', getAllPeliculas);
router.use('/titulos/resumen/:palabra', getTituloByResumen);
router.use('/titulo/series/:cantidad', getSeriesByTemporadas);
router.use('/titulos/cantidad', getCantidadTitulos);

router.use('/tags/:id', getTitulosByTagId);
router.use('/tags', getAllTags);

router.use('/ranking', getAllRankings);
router.use('/ranking/:id', getRankingByTituloId);

module.exports = router;