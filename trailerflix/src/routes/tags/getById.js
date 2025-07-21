const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Tag = require('../../models/tag.js');
const TagsTitulos = require('../../models/tagstitulos.js');

// GET /tags/:id
router.get('/:id', async (req, res) => {
    try {
        const tagId = req.params.id;
        const tag = await Tag.findByPk(tagId);

        if (!tag) {
            res.status(404).json({ error: 'Tag no encontrado' })
        }

        // tags - tagstitulos - titulos

        //mostrar todos los titulos con este tag

        const tagst = await TagsTitulos.findAll({
            include: [{ model: Titulo, attributes: [['titulo', 'Nombre']] }, 
                      { model: Tag, attributes: [['nombreTag', 'Tag']] }],
        });
        
        res.json(tagst);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener titulos` });
    }
});

module.exports = router;
