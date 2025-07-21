const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const routes = require('./src/routes/index.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// Rutas
app.use('/', routes);

// Conexión con BD
const { authenticate, closeConnection } = require('./src/mysql.js');

// GET /
app.get('/', (req, res) => {
    res.status(200).end("Hola Mundo");
});

// Manejo de rutas invalidas
app.use((req, res) => {
    res.status(404).send({
      error: "404",
      descripcion: "No se encuentra la ruta o recurso solicitado."
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});