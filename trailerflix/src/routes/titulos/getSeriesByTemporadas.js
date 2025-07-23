const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');

// GET /titulos/series/:temporadas
router.get('/:temporadas', async (req, res) => {
    const temporadas = parseFloat(req.params.temporadas);

    if (isNaN(temporadas)){
        return res.status(400).send('Debe ingresar un numero');
    }

    try {
        const categoria = await Categoria.findOne({ where: { nombreCategoria: 'Serie' } });

        // busco todas las series con cantidad de temporadas menor a :temporadas
        // devuelvo en orden descendente
        const series = await Titulo.findAll({
            attributes: [ ['id', 'ID'], ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['temporadas', 'Temporadas'], ['trailer', 'Trailer'], ],
            where: { idCategoria: categoria.id, temporadas: { [Op.lt]: temporadas } },
            order: [ ['temporadas', 'DESC'] ]
        });

        res.json(series);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener series con cantidad de temporadas menor a: ${temporadas}` });
    }
});

module.exports = router;
