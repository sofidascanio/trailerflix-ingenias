const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Reparto = sequelize.define('Reparto', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    idTitulo: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    idActor: {
        type: DataTypes.INTEGER, defaultValue: null
    },
    // idTitulo: {
    //     type: DataTypes.INTEGER,
    //         references: {
    //         model: Titulo, 
    //         key: 'id',
    //         defaultValue: null,
    //     },
    // },
    // idActor: {
    //     type: DataTypes.INTEGER,
    //         references: {
    //         model: Titulo,
    //         key: 'id',
    //         defaultValue: null,
    //     },
    // },
    },
    {
        tableName: 'Reparto',
        timestamps: false,
});

// Titulo.belongsToMany(Actor, { through: Reparto });
// Actor.belongsToMany(Titulo, { through: Reparto });

module.exports = Reparto