const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Titulo = require('../models/titulo.js');

// GET /series_tres_temporadas
router.get('/', async (req, res) => {
    // 4. Listar las series con al menos 3 temporadas

    // campo temporadas Titulo -> Categoria(Serie)

    // SELECT t.titulo AS Nombre, t.resumen AS Resumen, t.trailer AS Trailer, t.temporadas AS Temporadas
    // FROM titulos t
    // WHERE t.temporadas < 3 AND t.idCategoria = (SELECT id FROM categorias WHERE nombreCategoria = "Serie");

    // devuelve 8
});

module.exports = router;