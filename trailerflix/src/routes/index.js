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
const getTituloByResumen = require('./titulos/getByResumen.js');
const getSeriesByTemporadas = require('./titulos/getSeriesByTemporadas.js');
const getCantidadTitulos = require('./titulos/getCantidadTitulos.js');
const getByCategoria = require('./titulos/getByCategoria.js');
const getTituloByNombre = require('./titulos/getTituloByNombre.js');

const getTitulosByTagId = require('./tags/getById.js');
const getAllTags = require('./tags/getAll.js');
const getTagsByTituloId = require('./tags/getTagsByTituloId.js')

const getAllRankings = require('./ranking/getAll.js');
const getRankingByTituloId = require('./ranking/getByTituloId.js');

router.use('/generos', getAllGeneros);
router.use('/generos', getTituloByGeneroId);

router.use('/actores/titulos', getTitulosActorById);
router.use('/actores/nombre', getActorByName);
router.use('/actores', getActorById);
router.use('/actores', getAllActores);

router.use('/titulos/series', getSeriesByTemporadas);
router.use('/titulos/resumen', getTituloByResumen);
router.use('/titulos/categoria', getByCategoria);
router.use('/titulos/cantidad', getCantidadTitulos);
router.use('/titulos/reparto', getRepartoTitulo);
router.use('/titulos/nombre', getTituloByNombre);
router.use('/titulos', getTituloById);
router.use('/titulos', getAllTitulos);

router.use('/tags/titulos', getTagsByTituloId);
router.use('/tags', getTitulosByTagId);
router.use('/tags', getAllTags);

router.use('/ranking', getRankingByTituloId);
router.use('/ranking', getAllRankings);

module.exports = router;