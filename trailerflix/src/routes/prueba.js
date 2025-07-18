const express = require('express');
const Categoria = require('../models/categoria');
// objeto de express para manejar rutas
const router = express.Router();

// ruta principal
router.get("/", (req, res) => {
  res.send("Prueba de routes/prueba.js a server.js");
});

router.get('/categorias', async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    console.error('Error al consultar los categorias:', error);
    res.status(500).json({ error: 'Error al consultar los categorias' });
  } 
});

// Si tenemos otro endpoint ej: /:nombre, en este archivo, la llamamos como /peliculas/:nombre

module.exports = router;
