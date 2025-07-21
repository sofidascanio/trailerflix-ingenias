const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');

// GET /titulos/series
router.get('/', async (req, res) => {
    try {
        // busco categoria 
        const categoria = await Categoria.findOne({ where: { nombreCategoria: 'Serie' } });

        // attributes para alias
        // where para where normal
        const series = await Titulo.findAll({
            attributes: [ ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['temporadas', 'Temporadas'], ['trailer', 'Trailer'], ],
            where: { idCategoria: categoria.id }
        });

        res.json(series);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener series` });
    }
});

module.exports = router;
