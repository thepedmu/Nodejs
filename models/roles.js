const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Role = sequelize.define('role', {
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Role;