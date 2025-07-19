const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// Conexión con BD
const { authenticate, closeConnection } = require('./src/mysql.js');

// Modelos
// Se llaman desde cada archivo de endpoint que lo usa
// const Actor = require('./src/models/actor.js');
// const Categoria = require('./src/models/categoria.js');
// const Genero = require('./src/models/genero.js');
// const Ranking = require('./src/models/ranking.js');
// const Reparto = require('./src/models/reparto.js');
// const Tag = require('./src/models/tag.js');
// const TagsTitulos = require('./src/models/tagstitulos.js');
// const Titulo = require('./src/models/titulo.js');

// Rutas
const prueba = require("./src/routes/prueba.js");
app.use("/prueba", prueba);

const peliculas_genero = require("./src/routes/1PeliculasPorGenero.js");
app.use("/peliculas_genero", peliculas_genero);

const peliculas_tags = require("./src/routes/2PeliculasPorTag.js");
app.use("/peliculas_tags", peliculas_tags);

const resumen_incluye_mision = require("./src/routes/3ResumenMision.js");
app.use("/resumen_incluye_mision", resumen_incluye_mision);

const series_tres_temporadas = require("./src/routes/4SeriesTresTemporadas.js");
app.use("/series_tres_temporadas", series_tres_temporadas);

const titulos_chris_pratt = require("./src/routes/5TitulosChrisPratt.js");
app.use("/titulos_chris_pratt", titulos_chris_pratt);

const actores = require("./src/routes/6Actores.js");
app.use("/actores", actores);

const peliculas = require("./src/routes/7Peliculas.js");
app.use("/peliculas", peliculas);

const series = require("./src/routes/8Series.js");
app.use("/series", series);

const max_min_actores = require("./src/routes/9MaxMinActores.js");
app.use("/max_min_actores", max_min_actores);

const cantidad_peliculas = require("./src/routes/10CantPeliculas.js");
app.use("/cantidad_peliculas", cantidad_peliculas);

const cantidad_series = require("./src/routes/11CantSeries.js");
app.use("/cantidad_series", cantidad_series);

const series_orden_descendente = require("./src/routes/12SeriesDescendente.js");
app.use("/series_orden_descendente", series_orden_descendente);

const fecha_lanzamiento_titulo = require("./src/routes/13FechaTitulo.js");
app.use("/fecha_lanzamiento_titulo", fecha_lanzamiento_titulo);

const palabra_clave_titulo = require("./src/routes/14PalabraClave.js");
app.use("/palabra_clave_titulo", palabra_clave_titulo);

const ranking = require("./src/routes/15Ranking.js");
app.use("/ranking", ranking);

// GET /
app.get('/', (req, res) => {
    res.status(200).end("Hola Mundo");
});

// GET /trailerflix
app.get('/trailerflix', async (req, res) => {
    // catalogo entero?
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