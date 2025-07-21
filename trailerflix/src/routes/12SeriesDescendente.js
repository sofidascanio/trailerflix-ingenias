const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js');

// GET /series_orden_descendente
router.get('/', async (req, res) => {
    // 12. Listar las series en orden descendente por cantidad de temporadas.

    // campo temporadas en Titulo

    //SELECT t.titulo AS Nombre, t.resumen AS Resumen, t.temporadas AS Temporadas
    //FROM titulos t
    //WHERE t.idCategoria = (SELECT id	
    //                    FROM categorias
    //                    WHERE nombreCategoria = "Serie")
    //ORDER BY t.temporadas DESC;
});

module.exports = router;