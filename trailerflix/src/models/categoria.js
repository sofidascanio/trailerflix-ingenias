const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Categoria = sequelize.define('Categoria', {
    CategoriaID: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    NombreCategoria: {
        type: DataTypes.STRING(45), allowNull: false
    },
    },
    {
        tableName: 'Categorias',
        timestamps: false,
});

module.exports = Categoria