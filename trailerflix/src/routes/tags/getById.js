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
            include: [{ model: Titulo, attributes: ['titulo', 'id'] }, 
                      { model: Tag, attributes: ['nombreTag'] }],
            where: { idTag: tag.id },
        });

        const nombreTag = tagst[0].Tag.nombreTag;
        // mapeo para quedarme con los titulos (nombre + id) en un array
        const titulos = tagst.map(tt => ({ id: tt.Titulo.id, titulo: tt.Titulo.titulo  }));

        tagsConTitulos = {
            'Nombre': nombreTag,
            'Titulos': titulos
        };
        
        res.json(tagsConTitulos);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener titulos que pertenecen al tag: ${tagId}` });
    }
});

module.exports = router;
