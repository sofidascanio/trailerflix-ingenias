const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');

// GET /cantidad_series
router.get('/', async (req, res) => {
    // 11. Contar la cantidad total de series registradas.

    // Categoria (Serie) 
    // creo que no es necesario consultar a titulo
});

module.exports = router;