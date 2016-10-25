

"use strict";

module.exports = function(sequelize, DataTypes) {
  var beer_names = sequelize.define("beer_names", {
    name: DataTypes.STRING,
    aroma: { type: DataTypes.STRING},
    abv: DataTypes.DECIMAL(10,1),
    style: DataTypes.STRING,
    color: DataTypes.STRING,
    key_notes: DataTypes.STRING
  }, {
  
    tableName: 'beer_names',

    classMethods: {
      associate: function(models) {
        }
      }
})
  return beer_names;
};

