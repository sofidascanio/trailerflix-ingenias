const express = require('express');
const router = express.Router();

const Actor = require('../../models/titulo.js');

// GET /actores
router.get('/', async (req, res) => {
    try {
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener actores` });
    }
});

module.exports = router;