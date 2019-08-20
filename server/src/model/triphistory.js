const sequelize = require("../config/db").sequelize
const Sequelize = require("../config/db").Sequelize
const crypto    = require("crypto")

var triphistory = sequelize.define('triphistory',{
    id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    userId: {
        type: Sequelize.STRING(13)
    },
    tripDate: {
        type:Sequelize.BIGINT
    },
    endTime: {
        type:Sequelize.BIGINT
    },
    start: {
        type: Sequelize.STRING(30)
    },
    end: {
        type: Sequelize.STRING(30)
    },
    cost: {
        type: Sequelize.DOUBLE
    },
    transport: {
        type: Sequelize.STRING(14)
    },
    distance: {
        type: Sequelize.DOUBLE
    },
    pathList: {
        type: Sequelize.TEXT
    }
  }, {
    timestamps: false,
    tableName: 'triphistory'
});

module.exports.Triphistory = triphistory;
