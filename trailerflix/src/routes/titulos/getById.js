const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Categoria = require('../../models/categoria.js');
const Genero = require('../../models/genero.js');
const TagsTitulos = require('../../models/tagstitulos.js');
const Tag = require('../../models/tag.js');

// GET /titulos/:id
router.get('/:id', async (req, res) => {
    try {
        const tituloId = req.params.id;
        const titulo = await Titulo.findByPk(tituloId);

        if (!titulo) {
            res.status(404).json({ error: 'Titulo no encontrado' });
        }

        // categoria y genero
        const categoria = await Categoria.findOne({ where: { id: titulo.idCategoria } });
        const genero = await Genero.findOne({ where: { id: titulo.idGenero } });

        // busco tags
        const tagst = await TagsTitulos.findAll({
            include: [{ model: Titulo, attributes: ['titulo'] }, 
                      { model: Tag, attributes: ['nombreTag'] }],
            where: { idTitulo: titulo.id },
        });

        // tags en array
        const tags = tagst.map(r => r.Tag.nombreTag);

        // armo json para mostrar 
        const tituloResultado = {
            'Nombre': titulo.titulo,
            'Resumen': titulo.resumen,
            'Fecha de Estreno': titulo.fecha_lanzamiento,
            'Genero': genero.nombreGenero,
            'Categoria': categoria.nombreCategoria,
            'Tags': tags
        };

        if (categoria.nombreCategoria === "Serie") {
            tituloResultado['Temporadas'] = titulo.temporadas;
        } else {
            tituloResultado['Duración'] = titulo.duracion;
        };

        res.json(tituloResultado);

    } catch (error) {
        console.error('Error al buscar el titulo:', error);
        res.status(500).json({ error: `Error al buscar el titulo por id: ${id}` });
    }
});

module.exports = router;
