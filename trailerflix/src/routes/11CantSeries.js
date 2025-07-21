const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');

// GET /cantidad_series
router.get('/', async (req, res) => {
    // 11. Contar la cantidad total de series registradas.

    // Categoria (Serie) 

    // SELECT COUNT(*) AS 'Cantidad de Series Registradas'
   // FROM categorias c INNER JOIN titulos t ON (c.id = t.idCategoria)
   // WHERE c.nombreCategoria = "Serie"
   // GROUP BY c.id;

   // Devuelve 25

    //SELECT idCategoria, COUNT(*) AS 'Cantidad de Peliculas Registradas'
    //FROM titulos
    //WHERE idCategoria = (SELECT idCategoria
    //                    FROM categorias
    //                    WHERE nombreCategoria = "Serie") 
    // GROUP BY idCategoria;
    // esta tambien funca pero devuelve la cantidad de series Y peliculas, la primera trae solo series

});

module.exports = router;