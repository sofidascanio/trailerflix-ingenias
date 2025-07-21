const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Genero = require('../../models/genero.js');

// GET /generos
router.get('/', async (req, res) => {
    try {
        const generos = await Genero.findAll({
            attributes: [ ['id', 'ID'], ['nombreGenero', 'Nombre'], ]
        });

        res.json(generos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener generos` });
    }
});

module.exports = router;