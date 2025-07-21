const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Tag = require('../models/tag.js');
const Titulo = require('../models/titulo.js');
const TagsTitulos = require('../models/tagstitulos.js');

// GET /series
router.get('/', async (req, res) => {
  // 8. Ver solo la categoría "Series": mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, cantidad de temporadas, tráiler y resumen.

  // Tag -> TagsTitulos ->  Titulo <- Categoria (Serie)

  // SELECT UCASE(t.titulo) AS Nombre, UCASE(g.nombreGenero) AS Genero, t.duracion AS Duración, t.trailer AS Trailer,
  //     GROUP_CONCAT(ta.nombreTag ORDER BY ta.nombreTag SEPARATOR ', ') AS Tags
  // FROM titulos t INNER JOIN generos g ON (t.idGenero = g.id)
  //             INNER JOIN tagstitulos tt ON (t.id = tt.idTitulo)
  //             INNER JOIN tags ta ON (ta.id = tt.idTag)
  // WHERE t.idCategoria = (SELECT id
  //                     FROM categorias
  //                     WHERE nombreCategoria = "Serie")
  // GROUP BY t.id;

  // Devuelve 25 resultados
});

module.exports = router;
