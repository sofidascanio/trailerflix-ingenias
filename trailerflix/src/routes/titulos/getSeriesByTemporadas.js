const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');

// GET /titulos/series/:temporadas
router.get('/:temporadas', async (req, res) => {
    const cantidad = parseFloat(req.params.temporadas);

    console.log("Entra al series");

    if (isNaN(cantidad)){
        return res.status(400).send('Debe ingresar un numero');
    }

    try {
        const categoria = await Categoria.findOne({ where: { nombreCategoria: 'Serie' } });

        const series = await Titulo.findAll({
            attributes: [ ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['temporadas', 'Temporadas'], ['trailer', 'Trailer'], ],
            where: { idCategoria: categoria.id, temporadas: { [Op.lt]: cantidad } },
            order: [ ['temporadas', 'DESC'] ]
        });

        res.json(series);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener series` });
    }
});

module.exports = router;
