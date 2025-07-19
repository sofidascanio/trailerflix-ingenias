# Trailerflix
## Entrega Final
### Grupo 13
------
- [Integrantes](#integrantes)
- [Para Iniciar Servidor](#para-iniciar-servidor)
- [Dependencias](#dependencias)
- [Peticiones](#peticiones)
    - [Busqueda por Genero](#get-peliculas_generogenero)
    - [Busqueda por Tags](#get-peliculas_tagstag)

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
| GET | [/trailerflix](/) | Catalogo de Trailerflix |
| GET | [/peliculas_genero/:genero](/) | Listado de Peliculas por **Género** |
| GET | [/peliculas_tags/:tag](/) | Listado de Peliculas con Tags **"Aventura"** y: *"Ciencia Ficción"* o *"Fantasia"*|
| GET | [/resumen_incluye_mision](/) | Listado de Titulos (Series/Peliculas) cuyo resumen contenga la palabra **"misión"** |
| GET | [/series_tres_temporadas](/) | Listado de series con al menos *3 temporadas* |
| GET | [/titulos_chris_pratt](/) | Cantidad de películas/series donde trabajó el actor *Chris Pratt*.|
| GET | [/actores](/) | Listado de Actores/Actrices |
| GET | [/peliculas](/) | Listado de Peliculas  |
| GET | [/series](/) | Listado de Series |
| GET | [/max_min_actores](/) | Titulo con **mayor** cantidad de actores y Titulo con **menor** cantidad de actores |
| GET | [/cantidad_peliculas](/) | Cantidad de Peliculas registradas |
| GET | [/cantidad_series](/) | Cantidad de Series registradas |
| GET | [/series_orden_descendente](/) | Listado de series en orden descendente por cantidad de temporadas |
| GET | [/fecha_lanzamiento_titulo](/) | ¿? campo fecha_lanzamiento agregado, mostrar listado | 
| GET | [/palabra_clave_titulo](/) | Listado de Peliculas cuyo titulo o descripcion contengan **:palabra** |
| GET | [/ranking](/) | Listado de Ranking de Peliculas y Series |

-----------
## GET `/peliculas_genero/:genero`
**:genero** : Existen X generos en *trailerflix*
* `cienciaficcion`: para buscar **"Ciencia Ficción"**
* `drama`: para buscar **"Drama"**
* ....

-----------------
## GET `/peliculas_tags/:tag`
En esta petición, *tag* puede tener dos valores: 
* `cienciaficcion`: para buscar peliculas con el tag **"Ciencia Ficción"**
* `fantasia`: para buscar peliculas con el tag **"Fantasia"**
Esto devuelve un listado de peliculas con el tag **"Aventura"** y el tag indicado por parametro. 