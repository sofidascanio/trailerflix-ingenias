const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');

const Actor = require('../../models/actor.js');

// GET /actores/nombre/:nombre
router.get('/', async (req, res) => {
    try {
        const nombre = req.params.nombre;
        console.log(nombre);

        const actores = await Actor.findAll({
            attributes: [['id', 'ID'], ['nombreCompleto', 'Nombre'], ],
            where: { nombreCompleto: { [Op.like]: `%${nombre}%` } },
        });

        res.json(actores);

    } catch (error) {
        console.error('Error al buscar los actores:', error);
        res.status(500).json({ error: `Error al obtener actores cuyo nombre incluyan: ${nombre}` });
    }
});

module.exports = router;