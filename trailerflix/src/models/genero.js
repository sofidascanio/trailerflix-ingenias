const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Genero = sequelize.define('Genero', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    nombreGenero: {
        type: DataTypes.STRING(100), allowNull: false
    },
    },
    {
        tableName: 'generos',
        timestamps: false,
});

module.exports = Genero