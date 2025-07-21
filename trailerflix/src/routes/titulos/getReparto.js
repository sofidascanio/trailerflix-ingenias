const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Reparto = require('../../models/reparto.js');
const Actor = require('../../models/actor.js');

// GET /titulos/reparto/:id
router.get('/reparto/:id', async (req, res) => {
    try {
        console.log("Hola");
        const tituloId = req.params.id;
        const titulo = await Titulo.findByPk(tituloId);

        if (!titulo) {
            res.status(404).json({ error: 'Titulo no encontrado' })
        }

        const reparto = await Reparto.findAll({
            where: { idTitulo: titulo.id },
            include: { model: Actor, attributes: ['nombreCompleto'] }
        });

        const actores = reparto.map(r => r.Actor.nombreCompleto)

        repartoTitulo = {
            'Titulo': titulo.titulo,
            'Actores': actores
        };
        
        res.json(repartoTitulo);

    } catch (error) {
        console.error('Error al buscar el reparto titulo:', error);
        res.status(500).json({ error: 'Error al buscar el reparto del titulo' });
    }
});

module.exports = router;
