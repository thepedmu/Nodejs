const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const EmpAddr = sequelize.define('employee_address', {
    empId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    housename: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pincode :{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    street:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = EmpAddr;