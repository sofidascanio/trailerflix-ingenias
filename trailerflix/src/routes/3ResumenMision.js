const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js');

// GET /resumen_incluye_mision
router.get('/', async (req, res) => {
    // 3. Visualizar títulos y categorías cuyo resumen contenga la palabra "misión".

    // campo resumen en Titulo 
});

module.exports = router;