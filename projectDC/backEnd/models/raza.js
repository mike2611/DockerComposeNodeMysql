const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const RazaPerro = db.define('raza_perro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableNAme: 'raza_perros'
}

);

module.exports = RazaPerro;
