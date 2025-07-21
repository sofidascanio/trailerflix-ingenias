const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Categoria = require('../models/categoria.js');
const Genero = require('../models/genero.js');

const Titulo = sequelize.define('Titulo', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(255), allowNull: false
    },
    poster: {
        type: DataTypes.STRING(255), allowNull: false
    },
    resumen: {
        type: DataTypes.STRING(255), allowNull: false
    },
    temporadas: {
        type: DataTypes.STRING(50), allowNull: false
    },
    duracion: {
        type: DataTypes.STRING(100), allowNull: false
    },
    trailer: {
        type: DataTypes.STRING(255), allowNull: false
    },
    fecha_lanzamiento: {
        type: DataTypes.DATE
    },
    idGenero: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    idCategoria: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    },
    {
        tableName: 'Titulos',
        timestamps: false,
});

// A.belongsTo(B): relacion uno a uno con la clave foranea explicita en A
Titulo.belongsTo(Categoria, { foreignKey: 'idCategoria' });
Titulo.belongsTo(Genero, { foreignKey: 'idGenero' });

module.exports = Titulo