const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');

const Titulo = require('../models/titulo.js');
const Categoria = require('../models/categoria.js');

// GET /resumen_incluye_mision
router.get('/', async (req, res) => {
    // 3. Visualizar títulos y categorías cuyo resumen contenga la palabra "misión".

    // campo resumen en Titulo 

    // SELECT t.titulo AS Nombre, t.resumen AS Resumen, t.trailer AS Trailer, c.nombreCategoria AS Categoria
    // FROM titulos t INNER JOIN categorias c ON (t.idCategoria = c.id)
    // WHERE t.resumen LIKE "%mision%"; 

    // devuelve 13 resultados

    try {
        const titulos = await Titulo.findAll({
            attributes: [['titulo', 'Nombre'], ['resumen', 'Resumen'], ['trailer', 'Trailer']],
            include: [{ model: Categoria, attributes: [['nombreCategoria', 'Categoria']] }],
            where: { resumen: { [Op.like]: '%mision%' } },
        });

        res.json(titulos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener películas cuyo resumen incluyan la palabra Misión' });
    }
    
});

module.exports = router;

