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

        const tagst = await TagsTitulos.findAll({
            include: [{ model: Titulo, attributes: ['titulo'] }, 
                      { model: Tag, attributes: ['nombreTag'] }],
        });

        const nombreTag = tagst[0].Tag.nombreTag;
        // primero mapeo para quedarme con los titulos en un array
        // creo un set (del map) para que no tenga duplicados
        // ... para quede array plano 
        const titulos = [...new Set(tagst.map(tt => tt.Titulo.titulo))];

        tagsConTitulos = {
            'Nombre': nombreTag,
            'Titulos': titulos
        };
        
        res.json(tagsConTitulos);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener titulos` });
    }
});

module.exports = router;
