const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Titulo = require('../models/titulo.js');
const Actor = require('../models/actor.js');

const Reparto = sequelize.define('Reparto', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    idTitulo: {
        type: DataTypes.INTEGER,
            references: {
            model: Titulo, 
            key: 'id',
            defaultValue: null,
        },
    },
    idActor: {
        type: DataTypes.INTEGER,
            references: {
            model: Actor,
            key: 'id',
            defaultValue: null,
        },
    },
    },
    {
        tableName: 'Reparto',
        timestamps: false,
});

// tomo reparto como uno a uno con titulo y actor
// no se si se aclara que es tabla intermedia
Reparto.belongsTo(Titulo, { foreignKey: 'idTitulo' });
Reparto.belongsTo(Actor, { foreignKey: 'idActor' });

module.exports = Reparto