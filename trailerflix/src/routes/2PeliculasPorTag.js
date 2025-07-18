const express = require('express');
const router = express.Router();

// GET /peliculas_tags/:tag
router.get('/:tag', async (req, res) => {
    // 2. Obtener películas con los tags "Aventura" y "Ciencia Ficción", o "Aventura" y "Fantasía".

    // :tag es el tag (Ciencia Ficcion o Fantasia) a buscar (Aventura lo busca siempre)

    // nombreTag de tabla Tag
    // Tag -> TagsTitulos -> Titulo <- Categoria (Pelicula)

});

module.exports = router;