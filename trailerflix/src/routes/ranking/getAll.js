const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Ranking = require('../../models/ranking.js');

// GET /ranking
router.get('/', async (req, res) => {
    try {
        const rankings = await Ranking.findAll({
            attributes: [ ['calificacion', 'Calificación'], ['Comentarios', 'Comentarios'] ],
            include: [{ model: Titulo, attributes: [['titulo', 'Nombre']] }]
        });

        res.json(rankings);
    } catch (error) {
        console.error('Error al consultar los rankings:', error);
        res.status(500).json({ error: 'Error al consultar los rankings' });
    }
});

module.exports = router;