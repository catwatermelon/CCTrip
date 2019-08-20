const sequelize = require("../config/db").sequelize
const Sequelize = require("../config/db").Sequelize
const crypto    = require("crypto")

var User = sequelize.define('user',{
    id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    accountNumber: {
        type:Sequelize.STRING(13)
    },
    username: {
      type: Sequelize.STRING(15)
    },
    avatar: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.STRING(18),
      allowNull: false,
      set(variables){
        let md5 = crypto.createHash("md5");
        const PSW = md5.update(variables).digest('hex');
        this.setDataValue('password', PSW);
      }
    }
  }, {
    timestamps: false,
    tableName: 'user'
});

module.exports.User = User;
