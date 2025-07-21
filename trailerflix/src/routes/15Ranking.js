const express = require('express');
const router = express.Router();

const Titulo = require('../models/titulo.js'); 
const Ranking = require('../models/ranking.js');

// GET /ranking
router.get('/', async (req, res) => {
    // 15. Agregar una tabla "Ranking" con: ID de película/serie, calificación y comentarios.

    // Esto tambien se agrega directo a la base, podemos listar aca los ranking que existen

    // (calificacion y comentarios) Ranking -> Titulo (titulo)

    // SELECT t.titulo AS Nombre, 
	// CONCAT(r.calificacion,'/5') AS Calificación, r.comentarios AS Comentarios
    // FROM titulos t INNER JOIN ranking r ON (t.id = r.idTitulo);

    // para insertar mas rankings
    // INSERT INTO ranking (idTitulo, calificacion, comentarios) VALUES (2, 3, "Buena");

    try {
        const rankings = await Ranking.findAll({
        attributes: [
            ['calificacion', 'Calificación'],
            ['Comentarios', 'Comentarios']
        ],
        include: [{
            model: Titulo,
            attributes: [['titulo', 'Nombre']]
        }]
        });

        res.json(rankings);
    } catch (error) {
        console.error('Error al consultar los rankings:', error);
        res.status(500).json({ error: 'Error al consultar los rankings' });
    }
});

module.exports = router;