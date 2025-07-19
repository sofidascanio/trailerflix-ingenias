const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const TagsTitulos = sequelize.define('TagsTitulos', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    // buscar si se explicita que es clave foranea
    idTitulo: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    idTag: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    },
    {
        tableName: 'TagsTitulos',
        timestamps: false,
});

module.exports = TagsTitulos