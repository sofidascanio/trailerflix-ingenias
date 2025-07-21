const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');
const Genero = require('../../models/genero.js');

// GET /titulos/:id
router.get('/:id', async (req, res) => {
    try {
        const tituloId = req.params.id;
        const titulo = await Titulo.findByPk(tituloId);

        if (!titulo) {
            res.status(404).json({ error: 'Titulo no encontrado' })
        }

        const categoria = await Categoria.findOne({ where: { id: titulo.idCategoria } });
        const genero = await Genero.findOne({ where: { id: titulo.idGenero } });

        // falta buscar tags y traerlos

        if (categoria.nombreCategoria === "Serie") {
            t = {
                'Nombre': titulo.nombre,
                'Resumen': titulo.resumen,
                'Temporadas': titulo.temporadas,
                'Genero': genero.nombreGenero,
                'Categoria': categoria.nombreCategoria      
            };
        } else {
            t = {
                'Nombre': titulo.nombre,
                'Resumen': titulo.resumen,
                'Duración': titulo.duracion,
                'Genero': genero.nombreGenero,
                'Categoria': categoria.nombreCategoria      
            };
        }

        res.json(t);

    } catch (error) {
        console.error('Error al buscar el titulo:', error);
        res.status(500).json({ error: 'Error al buscar el titulo' });
    }
});

module.exports = router;
