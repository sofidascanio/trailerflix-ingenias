const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

// RUTAS
const peliculas = require("./src/routes/peliculas.js");
app.use("/peliculas", peliculas);

// CONEXION BD
const { authenticate, closeConnection } = require('./src/mysql.js');

// MODELOS
const Categoria = require('./src/models/categoria.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// GET /
app.get('/', (req, res) => {
    res.status(200).end("Hola Mundo");
});

// GET /trailerflix
app.get('/trailerflix', async (req, res) => {
    // catalogo entero?
});

// GET /trailerflix/genero/:genero
app.get('/trailerflix/genero/:genero', async (req, res) => {
    // 1. Obtener una lista de películas por género (por ejemplo: "Acción", "Terror", "Suspenso").

    // Entra: genero
    // Devuelve: listado de peliculas (titulos con categoria "pelicula")

    // SELECT * FROM titulos WHERE categoria = "Pelicula" AND genero = :genero ponele
});

// GET /trailerflix/tags/:tags
app.get('/trailerflix/tags/:tags', async (req, res) => {
    // 2. Obtener películas con los tags "Aventura" y "Ciencia Ficción", o "Aventura" y "Fantasía".

    // Entra: "Aventura" y "Ciencia Ficción" O "Aventura" y "Fantasía"
    //   (se puede tomar 'ciencia ficcion' o 'fantasia' como parametros solo porque 'aventura' lo busca siempre¿?)
    // Devuelve: listado de peliculas (titulos con categoria "pelicula")

    // cada pelicula tiene varios tags, separados por ','
    // tabla aparte¿?

    // SELECT * FROM titulos WHERE categoria = "Pelicula" AND (tags = :tags)
    // Si se parsea el string, puede ser algo como: (tags IN ("Aventura", "Ciencia Ficción"))

});

// GET /trailerflix/resumen/:string
app.get('/trailerflix/resumen/:string', async (req, res) => {
    // 3. Visualizar títulos y categorías cuyo resumen contenga la palabra "misión".

    // armar el get solo para "mision" o para cualquier string que coincida? 

    // Entra: palabra "misión" o cualquier string
    // Devuelve: titulos (+ categoria) que su resumen contenga "misión" (o string)

    // SELECT * FROM titulos WHERE resumen LIKE "%mision%"
});

// GET /trailerflix/series/:temporadas
app.get('/trailerflix/series/:temporadas', async (req, res) => {
    // 4. Listar las series con al menos 3 temporadas.

    // misma duda que con busqueda "mision"
    // armamos GET general para que busque por al menos x temporadas o lo limitamos a 3?
 
    // SELECT COUNT(temporadas) as cantidadTemporadas FROM titulos
    // WHERE categoria = "Serie"
    // GROUP BY id
    // HAVING COUNT(temporadas) > 3
});

app.get('/trailerflix/...', async (req, res) => {
    // 5. Contar cuántas películas/series trabajó el actor Chris Pratt.

    // actor/actriz sera una tabla
    // reparto otra ¿? conectada con titulo 

    // SELECT COUNT(*) as CantidadTitulosChrisPratt FROM titulos
    // WHERE (reparto incluye a 'Chris Pratt')
    // GROUP BY id
});

// GET /trailerflix/:actor
app.get('/trailerflix/:actor', async (req, res) => {
    // 6. Mostrar nombre completo de actrices/actores junto a:
    //      título de los trabajos, categoría y género.

    // Entra: nombre de actriz/actor
    // Devuelve: listado de todas los titulos + categoria + genero

    // SELECT CONCAT(a.nombre, a.apellido) as 'Nombre Completo'
    //        t.titulo,
    //        t.categoria,
    //        t.genero
    // FROM Titulo t INNER JOIN Reparto r ON (...)
    //               INNER JOIN Artista ON (...)
    // ponele
    
});

// GET /trailerflix/categoria/:categoria
app.get('/trailerflix/categoria/:categoria', async (req, res) => {
    // 7. Ver solo la categoría "Películas":
    //      mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, duración y enlace al tráiler.

    // 8. Ver solo la categoría "Series":
    //      mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, cantidad de temporadas, tráiler y resumen.

    // SELECT ...
    // FROM titulos
    // WHERE categoria = parametro

    // serian dos consultas distintas pq piden cosas distintas
});


app.get('/trailerflix/...', async (req, res) => { 
    // 9. Identificar la película/serie con más actores y la que tiene menos actores, indicando la cantidad en cada caso.

    // Artistas --- Reparto --- Titulo
    // El MAX o MIN se haria desde reparto, mientras mas ID de artistas tenga¿?

});

app.get('/trailerflix/...', async (req, res) => {
    // 10. Contar la cantidad total de películas registradas.

    // SELECT (*) 
    // FROM titulos 
    // WHERE categoria = "pelicula"
    // GROUP BY id 

});

app.get('/trailerflix/...', async (req, res) => {
    // 11. Contar la cantidad total de series registradas.

    // SELECT (*) 
    // FROM titulos 
    // WHERE categoria = "serie"
    // GROUP BY id 

});

// GET /trailerflix/series/descendente
app.get('/trailerflix/series/descendente', async (req, res) => {
    // 12. Listar las series en orden descendente por cantidad de temporadas.

    // SELECT *
    // FROM titulos
    // WHERE categoria = "serie"
    // ORDER BY temporadas DESC

});

app.get('/trailerflix/...', async (req, res) => {
    // 13. Agregar el campo fecha_lanzamiento (tipo DATE) a la tabla de trabajos fílmicos y actualizar las fechas de los títulos del género "Aventura".

    // Seria agregarlo antes a la BD, no creo que sea manejarlo con un POST
    // ¿?
});

// GET /trailerflix/busqueda/:palabra
app.get('/trailerflix/busqueda/:palabra', async (req, res) => {
    // 14. Buscar películas por palabra clave en título o descripción (por ejemplo: "Aventura", "madre", "Ambientada").

    // Entra: palabra
    // Devuelve: listado de titulos (categoria: pelicula) donde contenga 'palabra' en su titulo o descripción

    // SELECT *
    // FROM titulos
    // WHERE categoria = "pelicula" AND (titulo LIKE "%palabra" OR resumen LIKE "%palabra")
});

app.get('/trailerflix/...', async (req, res) => {
    // 15. Agregar una tabla "Ranking" con:
    //   ID de película/serie, calificación y comentarios.

    // mismo que punto 14, se agrega antes a la BD¿?
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