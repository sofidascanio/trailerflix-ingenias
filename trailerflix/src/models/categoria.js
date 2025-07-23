const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    nombreCategoria: {
        type: DataTypes.STRING(100), allowNull: false
    },
    },
    {
        tableName: 'categorias',
        timestamps: false,
});

module.exports = Categoria