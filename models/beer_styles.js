'use strict';
module.exports = function(sequelize, DataTypes) {
  var beer_styles = sequelize.define('beer_styles', {
    style_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beer_styles;
};