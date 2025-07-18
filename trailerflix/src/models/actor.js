const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

// nombre tabla? 
const Actor = sequelize.define('Actor', {
    ActorID: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    },
    {
        tableName: 'Actores',
        timestamps: false,
});

module.exports = Actor