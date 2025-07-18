const express = require('express');
const router = express.Router();

// GET /peliculas
router.get('/', async (req, res) => {
    // 7. Ver solo la categoría "Películas": mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, duración y enlace al tráiler.
    
    // Tag -> TagsTitulos -> Titulo <- Categorias (Pelicula)
    
});

module.exports = router;
