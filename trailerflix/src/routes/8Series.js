const express = require('express');
const router = express.Router();

const Categoria = require('../models/categoria.js');
const Tag = require('../models/tag.js');
const Titulo = require('../models/titulo.js');
const TagsTitulos = require('../models/tagstitulos.js');

// GET /series
router.get('/', async (req, res) => {
  // 8. Ver solo la categoría "Series": mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, cantidad de temporadas, tráiler y resumen.

  // Tag -> TagsTitulos ->  Titulo <- Categoria (Serie)

  // PRUEBA CON TAG
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    console.error('Error al consultar los productos:', error);
    res.status(500).json({ error: 'Error al consultar los productos' });
  } 
});

module.exports = router;
