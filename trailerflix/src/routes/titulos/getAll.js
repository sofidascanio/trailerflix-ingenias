const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');

// GET /titulos
router.get('/', async (req, res) => {
    try {
        console.log("get all");
        const titulos = await Titulo.findAll({
            attributes: [ ['id', 'ID'], ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['trailer', 'Trailer'], ],
        });

        res.json(titulos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener titulos` });
    }
});

module.exports = router;