const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

const Tag = sequelize.define('Tag', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
        allowNull: false
    },
    nombreTag: {
        type: DataTypes.STRING(100), allowNull: false
    },
    },
    {
        tableName: 'Tags',
        timestamps: false,
});

module.exports = Tag