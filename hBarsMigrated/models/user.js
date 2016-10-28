"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'users',
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return User;
};
