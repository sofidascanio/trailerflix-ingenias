const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Reparto = sequelize.define('Reparto', {
    RepartoID: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    idTitulo: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    idActor: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    },
    {
        tableName: 'Reparto',
        timestamps: false,
});

module.exports = Reparto