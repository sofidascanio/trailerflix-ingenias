const express = require('express');
const router = express.Router();
const { sequelize } = require('../mysql.js');
const { fn, col } = require('sequelize');

const Categoria = require('../models/categoria.js');
const Genero = require('../models/genero.js');
const Titulo = require('../models/titulo.js');

// GET /peliculas_genero/:genero
router.get('/:genero', async (req, res) => {
    // 1. Obtener una lista de películas por género (por ejemplo: "Acción", "Terror", "Suspenso").

    // :genero es el genero a buscar

    // tenemos nombreGenero de tabla Genero
    // Genero -> Titulo <- Categoria (Pelicula)

    // SELECT titulo AS Nombre, resumen AS Resumen, duracion as Duración, trailer AS Trailer
    // FROM titulos
    // WHERE idCategoria = (SELECT id FROM categorias WHERE nombreCategoria = "Pelicula")
    //     AND idGenero = (SELECT id FROM generos WHERE LCASE(nombreGenero) = :genero); 

    const nombreGenero = req.params.genero;

    // si no es string, no es valido
    // no entra nunca aca, si no es string quiero que corte aca
    if (typeof nombreGenero !== 'string') {
        return res.status(400).send('El género tiene que ser una cadena de caracteres.');
    }

    try {
        // busco genero

        // const genero = await Genero.findOne({ where: { nombreGenero: nombreGenero } });

        // fn para usar las funciones de bd
        // para comparar en una funcion de bd, se necesita sequelize.where
        // sequelize.where(sequelize.fn('char_length', sequelize.col('content')), 7)
        // WHERE char_length("content") = 7
        // WHERE LCASE(nombreGenero) = nombreGenero
        const genero = await Genero.findOne({ where: sequelize.where(fn('LCASE', col('nombreGenero')), nombreGenero.toLowerCase()) });

        if (genero === null) {
            return res.status(404).send('No se encontro el genero.');
        }

        // busco categoria 
        const categoria = await Categoria.findOne({ where: { nombreCategoria: 'Pelicula' } });

        // attributes para alias
        // where para where normal
        const peliculas = await Titulo.findAll({
            attributes: [ ['titulo', 'Nombre'], ['resumen', 'Resumen'], ['duracion', 'Duración'], ['trailer', 'Trailer'], ],
            where: { idCategoria: categoria.id, idGenero: genero.id, }
        });

        res.json(peliculas);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener películas del genero: ${nombreGenero}` });
    }
																					 

});

module.exports = router;