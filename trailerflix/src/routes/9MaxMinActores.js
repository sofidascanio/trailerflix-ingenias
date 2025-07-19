const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js');
const Reparto = require('../models/reparto.js');

// GET /max_min_actores
router.get('/', async (req, res) => {
   // 9. Identificar la película/serie con más actores y la que tiene menos actores, indicando la cantidad en cada caso.

   // Reparto -> Titulo 
});

module.exports = router;