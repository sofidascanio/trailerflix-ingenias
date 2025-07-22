const express = require('express');
const router = express.Router();

const getTituloByGeneroId = require('./generos/getById.js');
const getAllGeneros = require('./generos/getAll.js');

const getAllActores = require('./actores/getAll.js');
const getActorById = require('./actores/getById.js');
const getTitulosActorById = require('./actores/getTitulosActor.js');

const getAllTitulos = require('./titulos/getAll.js');
const getTituloById = require('./titulos/getById.js');
const getRepartoTitulo = require('./titulos/getReparto.js');
const getAllSeries = require('./titulos/getAllSeries.js');
const getAllPeliculas = require('./titulos/getAllPeliculas.js');
const getTituloByResumen = require('./titulos/getByResumen.js');

const getTitulosByTagId = require('./tags/getById.js');
const getAllTags = require('./tags/getAll.js');

const getAllRankings = require('./ranking/getAll.js');
const getRankingByTituloId = require('./ranking/getByTituloId.js');

router.use('/generos', getTituloByGeneroId);
router.use('/generos', getAllGeneros);

router.use('/actores', getAllActores);
router.use('/actores', getActorById);
router.use('/actores', getTitulosActorById);

router.use('/titulos', getAllTitulos);
router.use('/titulos', getTituloById);
router.use('/titulos', getRepartoTitulo);
router.use('/titulos', getAllSeries);
router.use('/titulos', getAllPeliculas);
router.use('/titulos', getTituloByResumen);

router.use('/tags', getTitulosByTagId);
router.use('/tags', getAllTags);

router.use('/ranking', getAllRankings);
router.use('/ranking', getRankingByTituloId);

module.exports = router;