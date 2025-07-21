const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Reparto = require('../../models/reparto.js');
const Actor = require('../../models/actor.js');

// GET /actores/titulos/:id
router.get('/titulos/:id', async (req, res) => {
    try {
        const actorId = req.params.id;
        const actor = await Actor.findByPk(actorId);

        if (!actor) {
            res.status(404).json({ error: 'Actor no encontrado' })
        }

        const reparto = await Reparto.findAll({
            where: { idActor: actor.id },
            // se podria agregar categoria + genero
            include: [ { model: Actor, attributes: ['nombreCompleto'] },
                    { model: Titulo, attributes: ['titulo'] } ]
        });

        const nombreActor = reparto[0].Actor.nombreCompleto;
        const titulos = reparto.map(r => r.Titulo.titulo);

        actorTitulos = {
            'Nombre': nombreActor,
            'Titulos': titulos
        };
        
        res.json(actorTitulos);

    } catch (error) {
        console.error('Error al buscar el actor:', error);
        res.status(500).json({ error: `Error al buscar el actor con id: ${actorId}`});
    }
});

module.exports = router;
