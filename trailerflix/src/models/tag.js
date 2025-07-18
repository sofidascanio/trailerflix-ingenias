const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Tag = sequelize.define('Tag', {
    TagID: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    },
    {
        tableName: 'Tags',
        timestamps: false,
});

module.exports = Tag