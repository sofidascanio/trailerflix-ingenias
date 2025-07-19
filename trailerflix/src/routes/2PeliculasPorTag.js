const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Titulo = require('../models/titulo.js');
const Tag = require('../models/tag.js');
const TagsTitulos = require('../models/tagstitulos.js');

// GET /peliculas_tags/:tag
router.get('/:tag', async (req, res) => {
    // 2. Obtener películas con los tags "Aventura" y "Ciencia Ficción", o "Aventura" y "Fantasía".

    // :tag es el tag (Ciencia Ficcion o Fantasia) a buscar (Aventura lo busca siempre)

    // nombreTag de tabla Tag
    // Tag -> TagsTitulos -> Titulo <- Categoria (Pelicula)

});

module.exports = router;