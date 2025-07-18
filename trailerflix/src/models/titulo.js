const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Titulo = sequelize.define('Titulo', {
    TituloID: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    },
    {
        tableName: 'Titulos',
        timestamps: false,
});

module.exports = Titulo