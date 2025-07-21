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
```
PORT= Puerto para usar
DB_HOST= host
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
| GET | [/titulos/:id](./trailerflix/src/routes/titulos/getById.js) | Busqueda de titulo por *id* |
| GET | [/titulos/reparto/:id](./trailerflix/src/routes/titulos/getReparto.js) | Reparto de un titulo por su *id* |
| GET | [/titulos/series](./trailerflix/src/routes/titulos/getAllSeries.js) | Listado de **Series** |
| GET | [/titulos/peliculas](./trailerflix/src/routes/titulos/getAllPeliculas.js) | Listado de **Peliculas**|
| GET | [/generos](./trailerflix/src/routes/generos/getAll.js) | Listado de **Generos** disponibles|
| GET | [/generos/:id](./trailerflix/src/routes/generos/getById.js) | Listado de titulos que corresponden al genero indicado por *id* |
| GET | [/actores](./trailerflix/src/routes/actores/getAll.js) | Listado de **Actores/Actrices** |
| GET | [/actores/:id](./trailerflix/src/routes/actores/getById.js) | Busqueda de actor por *id*|
| GET | [/actores/titulos/:id](./trailerflix/src/routes/actores/getTitulosActor.js) | Listado de titulos donde participo el actor/actriz indicado por *id* |
| GET | [/tags](/trailerflix-ingenias/trailerflix/src/routes/tags/getAll.js) | Listado de **Tags** disponibles |
| GET | [/tags/:id](/trailerflix-ingenias/trailerflix/src/routes/actores/getById.js) | Listado de titulos que corresponden al tag indicado por *id* |

-----------
## Titulos
##### Listado de Titulos
Devuelve el catalogo de trailerflix, cada pelicula/serie con su ID, Nombre, Resumen y Trailer
``` 
GET `/titulos`
```

-----------------
##### Busqueda de Titulo
Busqueda de un titulo indicado por *id*
``` 
GET `/titulos/:id`
```

Ejemplo:
``` 
GET `/titulos/5`
```

Devuelve:
``` 
{
  "Nombre": "The Crown",
  "Resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
  "Temporadas": "4",
  "Genero": "Suceso Real",
  "Categoria": "Serie"
}
```

--------------------------
##### Busqueda de Reparto por Titulo
Devuelve el reparto (todos los actores y actrices que trabajaron) de un titulo indicado por *id*
``` 
GET `/titulos/reparto/:id`
```

Ejemplo:
``` 
GET `/titulos/reparto/8`
```

Devuelve:
``` 
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
##### Listado de Series
Devuelve un listado de todas las series, cada una con su nombre, resumen, cantidad de temporadas y trailer.
``` 
GET `/titulos/series`
```

-------------------------------
##### Listado de Peliculas
Devuelve un listado de todas las peliculas, cada una con su nombre, resumen, duración y trailer.
``` 
GET `/titulos/peliculas`
```

---------------------------
## Generos
##### Listado de Generos
Devuelve un listado con todos los generos disponibles en el modelo.
``` 
GET `/generos`
```

---------------------------
##### Busqueda de Titulos por Genero
Devuelve un listado con todos titulos (peliculas/series) que correspondan al genero indicado por *id*
``` 
GET `/generos/:id`
```

``` 
GET `/generos/8` Comedia
```

Devuelve:
``` 
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
##### Listado de Actores
Devuelve un listado de todos los actores/actrices registrados en el sistemas
``` 
GET `/actores`
```


---------------------------
##### Busqueda de Actor
Busqueda de un actor indicado por *id*
``` 
GET `/actores`
```

``` 
GET `/actores/78`
```

Devuelve:
``` 
{
  "id": 78,
  "nombreCompleto": "Tom Braidwood"
}
```


---------------------------
##### Busqueda de Titulos por Actor
Devuelve un listado de todos los titulos (peliculas/series) donde participo el actor/actriz indicado por *id*
``` 
GET `/actores/titulo/:id`
```

``` 
GET `/actores/titulos/1`
```

Devuelve:
``` 
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
##### Listado de Tags
Devuelve un listado con todos los tags disponibles en el modelo.
``` 
GET `/tags`
```


---------------------------
##### Busqueda de Tags por Genero
Devuelve un listado con todos titulos (peliculas/series) que correspondan al tag indicado por *id*
``` 
GET `/tags/:id`
```

``` 
GET `/tags/7`
```

Devuelve:
``` 
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
