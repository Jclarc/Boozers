'use strict';
module.exports = function(sequelize, DataTypes) {
  var beer_aromas = sequelize.define('beer_aromas', {
    aroma_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beer_aromas;
};