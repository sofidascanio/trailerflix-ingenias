const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Reparto = require('../../models/reparto.js');
const Actor = require('../../models/actor.js');
const Categoria = require('../../models/categoria.js');
const Genero = require('../../models/genero.js');

// GET /actores/titulos/:id
router.get('/:id', async (req, res) => {
    try {
        const actorId = req.params.id;
        const actor = await Actor.findByPk(actorId);

        if (!actor) {
            return res.status(404).json({ error: 'Actor no encontrado' })
        }

        // actor <- reparto -> titulo -> (categoria, genero)
        // me paro en reparto, "voy" a actor y titulo, de actor tomo el nombreCompleto
        // de titulo tomo el "titulo" y tambien busco nombreCategoria y nombreGenero desde su sus tablas (doble include)
        const reparto = await Reparto.findAll({
            where: { idActor: actor.id },
            include: [ { model: Actor, attributes: ['nombreCompleto'] },
                       { model: Titulo, attributes: ['titulo'],
                            include: [
                                { model: Categoria, attributes: ['nombreCategoria'] },
                                { model: Genero, attributes: ['nombreGenero'] }
                            ] 
                        } ]
        });

        const nombreActor = reparto[0].Actor.nombreCompleto;

        // mapeo para tomar de cada titulo: titulo, categoria, genero, y que quede en un array 
        // sequelize pluraliza a "categoria" como "categorium", por el doble include, lo conecta a "titulo" pero con el nombre "categorium"
        const titulos = reparto.map(r => ({ titulo: r.Titulo.titulo, categoria: r.Titulo.Categorium.nombreCategoria, genero: r.Titulo.Genero.nombreGenero }));

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
