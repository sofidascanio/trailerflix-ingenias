const express = require('express');
const router = express.Router();

const Actor = require('../../models/actor.js');

// GET /actores
router.get('/', async (req, res) => {
    try {
        const actores = await Actor.findAll({
            attributes: [ ['id', 'ID'], ['nombreCompleto', 'Nombre'], ],
        });

        res.json(actores);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener actores` });
    }
});

module.exports = router;