'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        static associate(models) {
            // define association here
        }
    };
    History.init({
        patientId: DataTypes.INTEGER,
        doctorID: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        file: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};