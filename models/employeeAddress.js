const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const EmpAddr = sequelize.define('employee_address', {
    empId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = EmpAddr;