const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Genero = require('../../models/genero.js');

// GET /generos/:id
router.get('/:id', async (req, res) => {
    try {
        const generoId = req.params.id;
        const genero = await Genero.findByPk(generoId);

        if (!genero) {
            res.status(404).json({ error: 'Genero no encontrado' })
        }

        const titulos = await Titulo.findAll({
            attributes: [ ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['trailer', 'Trailer'], ],
            where: { idGenero: id },
        });

        res.json(titulos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener titulos` });
    }
});

module.exports = router;