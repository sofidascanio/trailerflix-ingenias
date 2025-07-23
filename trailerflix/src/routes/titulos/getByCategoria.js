const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');
const TagsTitulos = require('../../models/tagstitulos.js');
const Tag = require('../../models/tag.js');

// GET /titulos/categoria/:categoria
router.get('/:categoria', async (req, res) => {
    try {
        const nombre = req.params.categoria;

        const categoria = await Categoria.findOne({ where: { nombreCategoria: nombre } });

        if (!categoria) {
            res.status(404).json({ error: "La categoria debe ser 'serie' o 'pelicula'" })
        }

        // Falta agregar los tags de cada una
        if (categoria.nombreCategoria === "pelicula") {
            const peliculas = await Titulo.findAll({
                attributes: [ ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['duracion', 'Duración'], ['trailer', 'Trailer'], ],
                where: { idCategoria: categoria.id }
            });
            res.json(peliculas);
        } else {
            const series = await Titulo.findAll({
                attributes: [ ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['temporadas', 'Temporadas'], ['trailer', 'Trailer'], ],
                where: { idCategoria: categoria.id }
            });
            res.json(series);
        }

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener peliculas` });
    }
});

module.exports = router;
