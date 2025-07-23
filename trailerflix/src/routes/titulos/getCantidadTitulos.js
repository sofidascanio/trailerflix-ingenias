const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');

// GET /titulos/cantidad
router.get('/', async (req, res) => {
    try {
        // tendria que ser algo mas elaborado pero no me anda
        const categoriaSeries = await Categoria.findOne({ where: { nombreCategoria: 'Serie' } });
        const categoriaPeliculas = await Categoria.findOne({ where: { nombreCategoria: 'Pelicula' } });

        const series = await Titulo.count({ where: { idCategoria: { [Op.eq]: categoriaSeries.id, }, }, });
        const peliculas = await Titulo.count({ where: { idCategoria: { [Op.eq]: categoriaPeliculas.id, }, }, });

        resultados = {
            'Cantidad de Series': series,
            'Cantidad de Peliculas': peliculas
        }

        res.json(resultados);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener series` });
    }
});

module.exports = router;
