const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');

// GET /titulos/peliculas
router.get('/', async (req, res) => {
    try {
        // busco categoria 
        const categoria = await Categoria.findOne({ where: { nombreCategoria: 'Pelicula' } });

        // attributes para alias
        // where para where normal
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
