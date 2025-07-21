const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Tag = require('../models/tag.js');
const Titulo = require('../models/titulo.js');
const TagsTitulos = require('../models/tagstitulos.js');

// GET /peliculas
router.get('/', async (req, res) => {
    // 7. Ver solo la categoría "Películas": mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, duración y enlace al tráiler.
    
    // Tag -> TagsTitulos -> Titulo <- Categorias (Pelicula)

    // SELECT UCASE(t.titulo) AS Nombre, UCASE(g.nombreGenero) AS Genero, t.duracion AS Duración, t.trailer AS Trailer,
    //     GROUP_CONCAT(ta.nombreTag ORDER BY ta.nombreTag SEPARATOR ', ') AS Tags
    // FROM titulos t INNER JOIN generos g ON (t.idGenero = g.id)
    //             INNER JOIN tagstitulos tt ON (t.id = tt.idTitulo)
    //             INNER JOIN tags ta ON (ta.id = tt.idTag)
    // WHERE t.idCategoria = (SELECT id
    //                     FROM categorias
    //                     WHERE nombreCategoria = "Pelicula")
    // GROUP BY t.id;
    // Devuelve 72 resultados
    
    // group_concat: para concatenar valores de varias filas en una misma columna
    // en el group_concat podria no ir el ORDER BY, es opcional
    // el group by va si o si


    // prueba de asociación tag - tagstitulos - titulo
    try {
        const tagst = await TagsTitulos.findAll({
        include: [{ model: Titulo, attributes: [['titulo', 'Nombre']] }, 
                  { model: Tag, attributes: [['nombreTag', 'Tag']] }],
        });

        res.json(tagst);
    } catch (error) {
        console.error('Error al consultar los rankings:', error);
        res.status(500).json({ error: 'Error al consultar los rankings' });
    }
});

module.exports = router;
