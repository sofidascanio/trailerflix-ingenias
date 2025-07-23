const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');

// GET /titulos/categoria/peliculas
router.get('/categoria/peliculas', async (req, res) => {
    try {
        const categoria = await Categoria.findOne({ where: { nombreCategoria: 'Pelicula' } });

        const peliculas = await Titulo.findAll({
            attributes: [ ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['duracion', 'Duración'], ['trailer', 'Trailer'], ],
            where: { idCategoria: categoria.id }
        });

        res.json(peliculas);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener peliculas` });
    }
});

module.exports = router;
