const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

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

module.exports = Titulo