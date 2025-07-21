const express = require('express');
const router = express.Router();

// GET /fecha_lanzamiento_titulo
router.get('/', async (req, res) => {
    // 13. Agregar el campo fecha_lanzamiento (tipo DATE) a la tabla de trabajos fílmicos y actualizar las fechas de los títulos del género "Aventura".

    // Esto ya lo agregariamos a la BD directamente, podriamos mostrar¿?
    // campo DATE: AÑO-MES-DIA
    // UPDATE titulos
    // SET fecha_lanzamiento = "2025-01-01"
    // WHERE idGenero = (SELECT id
    //                     FROM generos
    //                     WHERE nombreGenero = "Aventura");

    // SELECT *
    // FROM titulos
    // WHERE idGenero = (SELECT id
    //                     FROM generos
    //                     WHERE nombreGenero = "Aventura");
});

module.exports = router;