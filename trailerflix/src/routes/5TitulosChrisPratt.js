const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js');
const Reparto = require('../models/reparto.js');
const Actor = require('../models/actor.js');

// GET /titulos_chris_pratt
router.get('/', async (req, res) => {
    // 5. Contar cuántas películas/series trabajó el actor Chris Pratt.

    // nombre = Chris Pratt
    // Actor -> Reparto -> Titulo
});

module.exports = router;
