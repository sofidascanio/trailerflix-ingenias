const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js'); 
const Ranking = require('../models/ranking.js');

// GET /ranking
router.get('/', async (req, res) => {
    // 15. Agregar una tabla "Ranking" con: ID de película/serie, calificación y comentarios.

    // Esto tambien se agrega directo a la base, podemos listar aca los ranking que existen

    // (calificacion y comentarios) Ranking -> Titulo (titulo)
});

module.exports = router;