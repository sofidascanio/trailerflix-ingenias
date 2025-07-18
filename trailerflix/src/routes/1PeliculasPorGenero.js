const express = require('express');
const router = express.Router();

// GET /peliculas_genero/:genero
router.get('/:genero', async (req, res) => {
    // 1. Obtener una lista de películas por género (por ejemplo: "Acción", "Terror", "Suspenso").

    // :genero es el genero a buscar

    // tenemos nombreGenero de tabla Genero
    // Genero -> Titulo <- Categoria (Pelicula)

});

module.exports = router;