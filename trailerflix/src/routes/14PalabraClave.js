const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Titulo = require('../models/titulo.js');

// GET /palabra_clave_titulo
router.get('/:palabra', async (req, res) => {
    // 14. Buscar películas por palabra clave en título o descripción (por ejemplo: "Aventura", "madre", "Ambientada").

    // campo titulo o descripcion Titulo <- Categoria(Pelicula)
});

module.exports = router;