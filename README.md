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
        - [Listado de Titulos](#get-titulos)
        - [Busqueda de Titulo](#get-titulosid)
        - [Busqueda de Reparto por Titulo](#get-titulosrepartoid)
        - [Listado de Series](#get-titulosseries)
        - [Listado de Peliculas](#get-titulospeliculas)
    - [Generos](#generos)
        - [Listado de Generos](#get-generos)
        - [Busqueda de Titulos por Genero](#get-generosid)
    - [Actores](#actores)
        - [Listado de Actores](#get-actores)
        - [Busqueda de Actor](#get-actoresid)
        - [Busqueda de Titulos por Actor](#get-actorestituloid)
    - [Tags](#tags)
        - [Listado de Tags](#get-tags)
        - [Busqueda de Tags por Genero](#get-tagsid)

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
| GET | [/titulos](/trailerflix-ingenias/trailerflix/src/routes/titulos/getAll.js) | Catalogo de **Trailerflix** |
| GET | [/titulos/:id](/trailerflix-ingenias/trailerflix/src/routes/titulos/getById.js) | Busqueda de titulo por *id* |
| GET | [/titulos/reparto/:id](/trailerflix-ingenias/trailerflix/src/routes/titulos/getReparto.js) | Reparto de un titulo por su *id* |
| GET | [/titulos/series](/trailerflix-ingenias/trailerflix/src/routes/titulos/getAllSeries.js) | Listado de **Series** |
| GET | [/titulos/peliculas](/trailerflix-ingenias/trailerflix/src/routes/titulos/getPeliculas.js) | Listado de **Peliculas**|
| GET | [/generos](/trailerflix-ingenias/trailerflix/src/routes/generos/getAll.js) | Listado de **Generos** disponibles|
| GET | [/generos/:id](/trailerflix-ingenias/trailerflix/src/routes/generos/getById.js) | Listado de titulos que corresponden al genero indicado por *id* |
| GET | [/actores](/trailerflix-ingenias/trailerflix/src/routes/actores/getAll.js) | Listado de **Actores/Actrices** |
| GET | [/actores/:id](/trailerflix-ingenias/trailerflix/src/routes/actores/getById.js) | Busqueda de actor por *id*|
| GET | [/actores/titulos/:id](/trailerflix-ingenias/trailerflix/src/routes/actores/getTitulosActor.js) | Listado de titulos donde participo el actor/actriz indicado por *id* |
| GET | [/tags](/trailerflix-ingenias/trailerflix/src/routes/tags/getAll.js) | Listado de **Tags** disponibles |
| GET | [/tags/:id](/trailerflix-ingenias/trailerflix/src/routes/actores/getById.js) | Listado de titulos que corresponden al tag indicado por *id* |

-----------
## Titulos
##### GET `/titulos`
Devuelve el catalogo de trailerflix

-----------------
##### GET `/titulos/:id`
Busqueda de un titulo indicado por *id*

--------------------------
##### GET `/titulos/reparto/:id`
Devuelve el reparto (todos los actores y actrices que trabajaron) de un titulo indicado por *id*

-----------------------------
##### GET `/titulos/series`
Devuelve un listado de todas las series.

-------------------------------
##### GET `/titulos/peliculas`
Devuelve un listado de todas las peliculas.

---------------------------
## Generos
##### GET `/generos`
Devuelve un listado con todos los generos disponibles en el modelo.

---------------------------
##### GET `/generos/:id`
Devuelve un listado con todos titulos (peliculas/series) que correspondan al genero indicado por *id*

---------------------------
## Actores
##### GET `/actores`
Devuelve un listado de todos los actores/actrices registrados en el sistemas

---------------------------
##### GET `/actores/:id`
Busqueda de un actor indicado por *id*

---------------------------
##### GET `/actores/titulo/:id`
Devuelve un listado de todos los titulos (peliculas/series) donde participo el actor/actriz indicado por *id*

---------------------------
## Tags
##### GET `/tags`
Devuelve un listado con todos los tags disponibles en el modelo.

---------------------------
##### GET `/tags/:id`
Devuelve un listado con todos titulos (peliculas/series) que correspondan al tag indicado por *id*
