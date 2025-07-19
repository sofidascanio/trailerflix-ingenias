const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Genero = require('../models/genero.js');
const Titulo = require('../models/titulo.js');
const Reparto = require('../models/reparto.js');
const Actor = require('../models/actor.js');

// GET /actores
router.get('/', async (req, res) => {
    // 6. Mostrar nombre completo de actrices/actores junto a: título de los trabajos, categoría y género.

    // Actor -> Reparto -> Titulo -> Categoria / Titulo -> Genero

});

module.exports = router;
