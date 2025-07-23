const express = require('express');
const router = express.Router();

const Actor = require('../../models/actor.js');

// GET /actores/:id
router.get('/:id', async (req, res) => {
    try {
        const actorId = req.params.id;
        const actor = await Actor.findByPk(actorId);

        if (!actor) {
            res.status(404).json({ error: 'Actor no encontrado' });
        }

        res.json(actor);

    } catch (error) {
        console.error('Error al buscar el actor:', error);
        res.status(500).json({ error: `Error al buscar el actor con id: ${actorId}`});
    }
});

module.exports = router;
