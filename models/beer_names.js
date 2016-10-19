'use strict';
module.exports = function(sequelize, DataTypes) {
  var beer_names = sequelize.define('beer_names', {
    name: DataTypes.STRING,
    aroma: DataTypes.INTEGER,
    style: DataTypes.INTEGER,
    abv: DataTypes.INTEGER,
    color: DataTypes.INTEGER,
    key_notes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beer_names;
};