const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');
const Genero = require('../../models/genero.js');

// GET /titulos/resumen/:palabra
router.get('/:palabra', async (req, res) => {
    try {
        const palabra = req.params.palabra;

        // mejorar formato para mostrar ¿?
        const titulos = await Titulo.findAll({
            attributes: [['titulo', 'Nombre'], ['resumen', 'Resumen'], ['trailer', 'Trailer']],
            include: [{ model: Categoria, attributes: [['nombreCategoria', 'Categoria']] }, 
                    { model: Genero, attributes: [['nombreGenero', 'Genero']] }],
            where: { resumen: { [Op.like]: `%${palabra}%` } },
        });

        res.json(titulos);

    } catch (error) {
        console.error('Error al buscar el titulo:', error);
        res.status(500).json({ error: `Error al obtener películas cuyo resumen incluyan la palabra ${palabra}` });
    }
});

module.exports = router;
