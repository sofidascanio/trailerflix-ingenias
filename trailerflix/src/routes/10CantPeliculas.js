const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');

// GET /cantidad_peliculas
router.get('/', async (req, res) => {
   // 10. Contar la cantidad total de películas registradas.

   // Categoria (Pelicula)

   // SELECT COUNT(*) AS 'Cantidad de Peliculas Registradas'
   // FROM categorias c INNER JOIN titulos t ON (c.id = t.idCategoria)
   // WHERE c.nombreCategoria = "Pelicula"
   // GROUP BY c.id;

   // Devuelve 72
});

module.exports = router;