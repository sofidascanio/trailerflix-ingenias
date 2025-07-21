const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Titulo = require('../models/titulo.js');
const Tag = require('../models/tag.js');

const TagsTitulos = sequelize.define('TagsTitulos', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    // idTitulo: {
    //     type: DataTypes.INTEGER, defaultValue: null
    // },
    // idTag: {
    //     type: DataTypes.INTEGER, defaultValue: null
    // },
    idTitulo: {
        type: DataTypes.INTEGER,
            references: {
            model: Titulo, 
            key: 'id',
            defaultValue: null,
        },
    },
    idTag: {
        type: DataTypes.INTEGER,
            references: {
            model: Tag,
            key: 'id',
            defaultValue: null,
        },
    },
    },
    {
        tableName: 'TagsTitulos',
        timestamps: false,
});

TagsTitulos.belongsTo(Titulo, { foreignKey: 'idTitulo' });
TagsTitulos.belongsTo(Tag, { foreignKey: 'idTag' });

module.exports = TagsTitulos