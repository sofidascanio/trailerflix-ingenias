const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js');
const Reparto = require('../models/reparto.js');
const Actor = require('../models/actor.js');

// GET /titulos_chris_pratt
router.get('/', async (req, res) => {
    // 5. Contar cuántas películas/series trabajó el actor Chris Pratt.

    // nombre = Chris Pratt
    // Actor -> Reparto -> Titulo

    // SELECT a.nombreCompleto, COUNT(r.idActor) AS 'Peliculas/Series'
    // FROM actores a INNER JOIN reparto r ON (a.id = r.idActor)
    // WHERE nombreCompleto = "Chris Pratt" 
    // GROUP BY r.idActor;

    // Se podria agregar mas detalle como el nombre de los titulos pero no lo pide

    // Devuelve 4
});

module.exports = router;
