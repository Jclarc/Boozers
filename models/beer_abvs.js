'use strict';
module.exports = function(sequelize, DataTypes) {
  var beer_abvs = sequelize.define('beer_abvs', {
    abv_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beer_abvs;
};