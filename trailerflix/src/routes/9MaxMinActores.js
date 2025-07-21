const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js');
const Reparto = require('../models/reparto.js');

// GET /max_min_actores
router.get('/', async (req, res) => {
   // 9. Identificar la película/serie con más actores y la que tiene menos actores, indicando la cantidad en cada caso.

   // Reparto -> Titulo 

   // Pelicula/Serie con menos Actores:
   // SELECT t.titulo, COUNT(r.idActor) AS Cantidad
   // FROM titulos t INNER JOIN reparto r ON (t.id = r.idTitulo)
   // GROUP BY t.id
   // ORDER BY Cantidad
   // LIMIT 1;
   // Cuenta por tabla reparto, ORDER BY para que ordene por cantidad, trae el primero
   // Resultado: Centigrados - 4

   // Pelicula/Serie con mas Actores:
   // SELECT t.titulo, COUNT(r.idActor) AS Cantidad
   // FROM titulos t INNER JOIN reparto r ON (t.id = r.idTitulo)
   // GROUP BY t.id
   // ORDER BY Cantidad DESC
   // LIMIT 1;
   // Resultado: Black Mirror - 70
});

module.exports = router;