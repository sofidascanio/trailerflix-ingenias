const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const TagsTitulos = require('../../models/tagstitulos.js');
const Tag = require('../../models/tag.js');

// GET /titulos
router.get('/', async (req, res) => {
    try {
        // no devuelve tags
        const titulos = await Titulo.findAll({
            attributes: [ ['id', 'ID'], ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['trailer', 'Trailer'], ['fecha_lanzamiento', 'Fecha de Estreno'] ],
        });

        res.json(titulos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener los titulos de trailerflix` });
    }
});

module.exports = router;