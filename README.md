# Trailerflix
## Entrega Final
### Grupo 13
------
- [Integrantes](#integrantes)
- [Para Iniciar Servidor](#para-iniciar-servidor)
- [Dependencias](#dependencias)
- [Archivo .env](#archivo-env)
- [Peticiones](#peticiones)
    - [Titulos](#titulos)
        - [Listado de Titulos](#listado-de-titulos)
        - [Busqueda de Titulo](#busqueda-de-titulo)
        - [Busqueda de Reparto por Titulo](#busqueda-de-reparto-por-titulo)
        - [Listado de Series](#listado-de-series)
        - [Listado de Peliculas](#listado-de-series)
        - [Busqueda de Titulo por Resumen](#busqueda-de-titulos-por-resumen)
    - [Generos](#generos)
        - [Listado de Generos](#listado-de-generos)
        - [Busqueda de Titulos por Genero](#busqueda-de-titulos-por-genero)
    - [Actores](#actores)
        - [Listado de Actores](#listado-de-actores)
        - [Busqueda de Actor](#listado-de-actores)
        - [Busqueda de Titulos por Actor](#busqueda-de-titulos-por-actor)
    - [Tags](#tags)
        - [Listado de Tags](#listado-de-tags)
        - [Busqueda de Tags por Genero](#busqueda-de-tags-por-genero)
    - [Ranking](#ranking)
        - [Listado de Ranking](#listado-de-ranking)
        - [Busqueda de Rankings por Titulo](#busqueda-de-rankings-por-titulo)

------
#### Integrantes
* Sofia D'Ascanio
* Yanina Anahí Mylek
* María de los Ángeles Rechach

#### Para Iniciar Servidor

* ` cd trailerflix `
* ` npm start `

#### Dependencias

* ` npm install dotenv` 
* ` npm install --save sequelize `
* ` npm install --save mysql2`

#### Archivo `.env`
Necesario para la conexión a la Base de Datos.
```javascript
PORT= Puerto para usar
DB_HOST= Host
DB_NAME= Nombre de la Base de Datos
DB_USER= Nombre de Usuario de MySQL
DB_PASS= Contraseña de MySQL
```
-----------
## Modelo Trailerflix
![BD](./img/trailerflix_1.png)

---------
## Peticiones
| PETICIÓN | URL | DESCRIPCIÓN |
|:--------:|-----|-------------|
| GET | [/titulos](./trailerflix/src/routes/titulos/getAll.js) | Catalogo de **Trailerflix** |
| GET | [/titulos/:id](./trailerflix/src/routes/titulos/getById.js) | Busqueda de **titulo** por *id* |
| GET | [/titulos/reparto/:id](./trailerflix/src/routes/titulos/getReparto.js) | Reparto de un **titulo** por su *id* |
| GET | [/titulos/series](./trailerflix/src/routes/titulos/getAllSeries.js) | Listado de **Series** |
| GET | [/titulos/peliculas](./trailerflix/src/routes/titulos/getAllPeliculas.js) | Listado de **Peliculas**|
| GET | [/titulos/resumen/:palabra](./trailerflix/src/routes/titulos/getAllPeliculas.js) | Listado de titulos cuyo resumen incluya la palabra *:palabra*|
| GET | [/generos](./trailerflix/src/routes/generos/getAll.js) | Listado de **Generos** disponibles|
| GET | [/generos/:id](./trailerflix/src/routes/generos/getById.js) | Listado de titulos que corresponden al **genero** indicado por *id* |
| GET | [/actores](./trailerflix/src/routes/actores/getAll.js) | Listado de **Actores/Actrices** |
| GET | [/actores/:id](./trailerflix/src/routes/actores/getById.js) | Busqueda de **actor** por *id*|
| GET | [/actores/titulos/:id](./trailerflix/src/routes/actores/getTitulosActor.js) | Listado de titulos donde participo el **actor/actriz** indicado por *id* |
| GET | [/tags](./trailerflix/src/routes/tags/getAll.js) | Listado de **Tags** disponibles |
| GET | [/tags/:id](./trailerflix/src/routes/actores/getById.js) | Listado de titulos que corresponden al **tag** indicado por *id* |
| GET | [/ranking](./trailerflix/src/routes/ranking/getAll.js) | Listado de **Rankings** disponibles |
| GET | [/ranking/:id](./trailerflix/src/routes/ranking/getByTituloId.js) | Listado de **rankings** que corresponden al titulo indicado por *id* |

-----------
## Titulos
### Listado de Titulos
Catalogo de trailerflix, cada pelicula/serie con su ID, nombre, resumen y trailer.
``` 
GET `/titulos`
```

-----------------
### Busqueda de Titulo
Busqueda de un titulo indicado por *id*
``` 
GET `/titulos/:id`
```

**Ejemplo:**
``` 
GET `/titulos/5`
```

*Devuelve:*
``` javascript
{
  "Nombre": "The Crown",
  "Resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
  "Temporadas": "4",
  "Genero": "Suceso Real",
  "Categoria": "Serie"
}
```

-------------------------
### Busqueda de Reparto por Titulo
Reparto (todos los actores y actrices que trabajaron) de un titulo indicado por *id*
``` 
GET `/titulos/reparto/:id`
```

Ejemplo:
``` 
GET `/titulos/reparto/8`
```

*Devuelve:*
``` javascript
{
  "Titulo": "Avengers: End Game",
  "Actores": [
    "Robert Downey Jr.",
    "Chris Evans",
    "Mark Ruffalo",
    "Chris Hemsworth",
    "Scarlett Johansson",
    "Jeremy Renner"
  ]
}
```

-----------------------------
### Listado de Series
Listado de todas las series, cada una con su nombre, resumen, cantidad de temporadas y trailer.
```bash
GET `/titulos/series`
```

-------------------------------
### Listado de Peliculas
Listado de todas las peliculas, cada una con su nombre, resumen, duración y trailer.
```bash
GET `/titulos/peliculas`
```

----------------------------------
### Busqueda de Titulos por resumen

Listado de titulos cuyo resumen contenga la palabra indicada por parametro `:palabra`

```bash
GET `/titulos/resumen/:palabra`
```

---------------------------
## Generos
### Listado de Generos
Listado con todos los generos disponibles en el modelo, cada uno con su ID y nombre.
```bash 
GET `/generos`
```

---------------------------
### Busqueda de Titulos por Genero
Listado con todos titulos (peliculas/series) que correspondan al genero indicado por *id*
```bash 
GET `/generos/:id`
```

**Ejemplo:**
```bash 
GET `/generos/8`
```

*Devuelve:*
```javascript 
{
  "Genero": "Acción",
  "Titulos": [
    "Ava",
    "Jurassic World",
    "El Contador",
    "Noche en el Museo",
    "Jurassic World - El reino caido",
    "Indiana Jones - y el Reino de la Calavera de Cristal",
    "El código Da Vinci"
  ]
}
```

---------------------------
## Actores
### Listado de Actores
Listado de todos los actores/actrices registrados en el sistemas.
```bash 
GET `/actores`
```


---------------------------
### Busqueda de Actor
Busqueda de un actor indicado por *id*
```bash 
GET `/actores`
```

**Ejemplo:**
```bash 
GET `/actores/78`
```

*Devuelve:*
``` javascript
{
  "id": 78,
  "nombreCompleto": "Tom Braidwood"
}
```


---------------------------
### Busqueda de Titulos por Actor
Listado de todos los titulos (peliculas/series) donde participo el actor/actriz indicado por *id*
```bash 
GET `/actores/titulo/:id`
```

**Ejemplo:**
```bash 
GET `/actores/titulos/1`
```

*Devuelve:*
``` javascript
{
  "Nombre": "Pedro Pascal",
  "Titulos": [
    "The Mandalorian",
    "Mujer Maravilla 1984"
  ]
}
```


---------------------------
## Tags
### Listado de Tags
Listado con todos los tags disponibles en el modelo, cada uno con su ID y nombre.
```bash 
GET `/tags`
```


---------------------------
### Busqueda de Tags por Genero
Listado con todos titulos (peliculas/series) que correspondan al tag indicado por *id*
```bash 
GET `/tags/:id`
```

**Ejemplo:**
```bash 
GET `/tags/7`
```

*Devuelve:*
``` javascript
{
  "Nombre": "Sci-Fi",
  "Titulos": [
    "The Mandalorian",
    "The Umbrella Academy",
    "Gambito de Dama",
    "Riverdale",
    "The Crown",
    "Enola Holmes",
    "Guasón",
    "Avengers: End Game",
    "Juego de tronos",
    ....
  ]
}
```
---------------
## Ranking
### Listado de Ranking
Listado con todos los rankings disponibles en el modelo, cada uno con su el ID, nombre del titulo al que corresponde, ID del titulo, calificación, y comentarios.
```bash 
GET `/ranking`
```

-----------------
### Busqueda de Rankings por Titulo
Listado con todos ranking que correspondan al titulo indicado por *id*
```bash 
GET `/ranking/:id`
```

**Ejemplo:**
```bash 
GET `/ranking/7`
```

*Devuelve:*
``` javascript

```