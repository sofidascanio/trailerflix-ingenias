const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const routes = require('./src/routes/index.js');

// no se si es necesario
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header("Content-Type", "application/json; charset=utf-8");
//     next();
// });

// Conexión con BD
const { authenticate, closeConnection } = require('./src/mysql.js');

// GET /
app.get('/', (req, res) => {
    rutas = {
        'Bienvenidos a Trailerflix': "Estas son las rutas disponibles:",
        '/titulos': "Catalogo de Trailerflix",
        '/titulos/:id': "Busqueda de titulo por ID",
        '/titulos/reparto/:id': "Reparto de un titulo por ID",
        '/titulos/categoria/:categoria': "Busqueda de titulos por Categoria",
        '/titulos/resumen/:palabra': "Busqueda de titulos por resumen (que coincida con :palabra)",
        '/titulos/cantidad': "Cantidad de series y peliculas en Trailerflix" ,
        '/titulos/series/:temporadas': "Listado de series con menos temporadas que el numero indicado por :temporadas",
        '/generos': "Listado de generos disponibles",
        '/generos/:id': "Listado de titulos que corresponden al genero indicado por ID",
        '/actores': "Listado de actores/actrices",
        '/actores/:id': "Busqueda de actor por ID",
        '/actores/nombre/:nombre': "Busqueda de actor por nombre y/o apellido (que coincida con :nombre)",
        '/actores/titulos/:id': "Listado de titulos del actor indicado por ID",
        '/tags': "Busqueda de tags disponibles",
        '/tags/:id': "Busqueda de titulos que corresponden al tag indicado por ID",
        '/tags/titulos/:id': "Busqueda de tags que corresponden al titulo indicado por ID",
        '/ranking': "Busqueda de rankings disponibles",
        '/ranking/:id': "Listado de rankings que corresponden al titulo indicado por ID"
    };

    res.json(rutas);
});

// Rutas
app.use('/', routes);

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