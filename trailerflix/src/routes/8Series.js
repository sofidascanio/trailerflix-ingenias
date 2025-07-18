const express = require('express');
const router = express.Router();

// GET /series
router.get('/', async (req, res) => {
   // 8. Ver solo la categoría "Series": mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, cantidad de temporadas, tráiler y resumen.

   // Tag -> TagsTitulos ->  Titulo <- Categoria (Serie)
});

module.exports = router;
