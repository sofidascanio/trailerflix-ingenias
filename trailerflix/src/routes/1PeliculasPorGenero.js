const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Genero = require('../models/genero.js');
const Titulo = require('../models/titulo.js');


// GET /peliculas_genero/:genero
router.get('/:genero', async (req, res) => {
    // 1. Obtener una lista de películas por género (por ejemplo: "Acción", "Terror", "Suspenso").

    // :genero es el genero a buscar

    // tenemos nombreGenero de tabla Genero
    // Genero -> Titulo <- Categoria (Pelicula)

});

module.exports = router;