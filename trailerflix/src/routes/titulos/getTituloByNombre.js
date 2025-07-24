const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');
const Genero = require('../../models/genero.js');

// GET /titulos/nombre/:nombre
router.get('/:nombre', async (req, res) => {
    try {
        const nombre = req.params.nombre;

        // include desde titulo con categoria y genero, tomo los nombres
        const titulos = await Titulo.findAll({
            attributes: [ ['id','ID'], ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['trailer', 'Trailer'] ],
            include: [
                { model: Categoria, attributes: [['nombreCategoria', 'Categoria']] }, 
                { model: Genero, attributes: [['nombreGenero', 'Genero']] }
            ],
            where: { titulo: { [Op.like]: `%${nombre}%` } },
        });

        res.json(titulos);

    } catch (error) {
        console.error('Error al buscar el titulo:', error);
        res.status(500).json({ error: `Error al obtener películas cuyo titulo incluya ${nombre}` });
    }
});

module.exports = router;
