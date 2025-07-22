const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Ranking = require('../../models/ranking.js');

// GET /ranking/:id
router.get('/:id', async (req, res) => {
    // devuelvo todos los rankings de un titulo, no es busqueda de id de ranking
    try {
        const tituloId = req.params.id;
        const titulo = await Titulo.findByPk(tituloId);

        if (!titulo) {
            res.status(404).json({ error: 'Titulo no encontrado' })
        }

        const rankings = await Ranking.findAll({
            attributes: [ ['calificacion', 'Calificación'], ['Comentarios', 'Comentarios'] ],
            include: [{ model: Titulo, attributes: [['titulo', 'Nombre']] }],
            where: { id: tituloId },
        });

        res.json(rankings);
    } catch (error) {
        console.error('Error al consultar los rankings:', error);
        res.status(500).json({ error: 'Error al consultar los rankings' });
    }
});

module.exports = router;
