const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

// nombre tabla? 
const Actor = sequelize.define('Actor', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    nombreCompleto: {
        type: DataTypes.STRING(255), allowNull: false
    },
    },
    {
        tableName: 'actores',
        timestamps: false,
});

module.exports = Actor