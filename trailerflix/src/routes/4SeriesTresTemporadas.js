const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Titulo = require('../models/titulo.js');

// GET /series_tres_temporadas
router.get('/', async (req, res) => {
    // 4. Listar las series con al menos 3 temporadas

    // campo temporadas Titulo -> Categoria(Serie)


});

module.exports = router;