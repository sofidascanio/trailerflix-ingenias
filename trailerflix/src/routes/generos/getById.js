const express = require('express');
const router = express.Router();

const Titulo = require('../../models/titulo.js');
const Genero = require('../../models/genero.js');

// GET /generos/:id
router.get('/:id', async (req, res) => {
    try {
        const generoId = req.params.id;
        const genero = await Genero.findByPk(generoId);

        if (!genero) {
            res.status(404).json({ error: 'Genero no encontrado' });
        }

        const titulos = await Titulo.findAll({
            attributes: [ 'titulo', 'id', 'fecha_lanzamiento'],
            where: { idGenero: genero.id },
        });

        // mapeo para quedarme solo con los titulos y sus ID en un array 
        const titulosGeneros = titulos.map(t => ({ id: t.id, titulo: t.titulo, estreno: t.fecha_lanzamiento}));

        titulosDelGenero = {
            'Genero': genero.nombreGenero,
            'Titulos': titulosGeneros
        };
        
        res.json(titulosDelGenero);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener titulos del genero ${generoId}` });
    }
});

module.exports = router;