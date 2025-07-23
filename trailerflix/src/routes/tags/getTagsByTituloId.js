const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Tag = require('../../models/tag.js');
const TagsTitulos = require('../../models/tagstitulos.js');

// GET /tags/titulos/:id
router.get('/:id', async (req, res) => {
    try {
        const tituloId = req.params.id;
        const titulo = await Titulo.findByPk(tituloId);

        if (!titulo) {
            res.status(404).json({ error: 'Titulo no encontrado' })
        }

        const tagst = await TagsTitulos.findAll({
            include: [{ model: Titulo, attributes: ['titulo'] }, 
                      { model: Tag, attributes: ['nombreTag', 'id'] }],
            where: { idTitulo: titulo.id },
        });

        // tags en array
        // me quedo con id y nombre de tag
        const tags = tagst.map(t => ({ id: t.Tag.id, titulo: t.Tag.nombreTag }));

        tagsDelTitulo = {
            'Titulo': titulo.titulo,
            'Tags': tags
        };
        
        res.json(tagsDelTitulo);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener titulos` });
    }
});

module.exports = router;
