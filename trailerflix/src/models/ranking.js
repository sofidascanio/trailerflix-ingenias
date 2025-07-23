const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Titulo = require('../models/titulo.js');

const Ranking = sequelize.define('Ranking', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    idTitulo: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    calificacion: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    comentarios: {
        type: DataTypes.STRING(255), allowNull: false
    },
    },
    {
        tableName: 'ranking',
        timestamps: false,
});

Ranking.belongsTo(Titulo, { foreignKey: 'idTitulo' });

module.exports = Ranking