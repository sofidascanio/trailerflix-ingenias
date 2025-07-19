const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js');

// GET /series_orden_descendente
router.get('/', async (req, res) => {
    // 12. Listar las series en orden descendente por cantidad de temporadas.

    // campo temporadas en Titulo
});

module.exports = router;