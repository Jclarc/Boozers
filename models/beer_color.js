'use strict';
module.exports = function(sequelize, DataTypes) {
  var beer_color = sequelize.define('beer_color', {
    color_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beer_color;
};