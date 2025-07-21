const express = require('express');
const router = express.Router();

const Tag = require('../../models/titulo.js');

// GET /tags
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.findAll({
            attributes: [ ['id', 'ID'], ['nombreTag', 'Nombre'], ]
        });

        res.json(tags);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: `Error al obtener tags` });
    }
});

module.exports = router;