const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Genero = sequelize.define('Genero', {
    GeneroID: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    NombreGenero: {
        type: DataTypes.STRING(45), allowNull: false
    },
    },
    {
        tableName: 'Generos',
        timestamps: false,
});

module.exports = Genero