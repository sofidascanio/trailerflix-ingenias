const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Genero = require('../models/genero.js');
const Titulo = require('../models/titulo.js');
const Reparto = require('../models/reparto.js');
const Actor = require('../models/actor.js');

// GET /actores
router.get('/', async (req, res) => {
    // 6. Mostrar nombre completo de actrices/actores junto a: título de los trabajos, categoría y género.

    // Actor -> Reparto -> Titulo -> Categoria / Titulo -> Genero

    // SELECT a.nombreCompleto, t.titulo, c.nombreCategoria, g.nombreGenero
    // FROM actores a INNER JOIN reparto r ON (a.id = r.idActor)
    //                 INNER JOIN titulos t ON (t.id = r.idTitulo)
    //                 INNER JOIN categorias c ON (c.id = t.idCategoria)
    //                 INNER JOIN generos g ON (g.id = t.idGenero);

    // Devuelve 948 resultados
    // si entiendo lo que pide, es mostrar el "reparto" de cada titulo

    // prueba de asociación actor - reparto - titulo
    try {
        const reparto = await Reparto.findAll({
        include: [{ model: Titulo, attributes: [['titulo', 'Nombre']] }, 
                { model: Actor, attributes: [['nombreCompleto', 'Nombre de Actor']] }],
        });

        res.json(reparto);
    } catch (error) {
        console.error('Error al consultar los rankings:', error);
        res.status(500).json({ error: 'Error al consultar los rankings' });
    }

});

module.exports = router;
