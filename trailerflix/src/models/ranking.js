const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Ranking = sequelize.define('Ranking', {
    RankingID: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    },
    {
        tableName: 'Ranking',
        timestamps: false,
});

module.exports = Ranking