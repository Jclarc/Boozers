'use strict';
module.exports = function(sequelize, DataTypes) {
  var beer_key_notes = sequelize.define('beer_key_notes', {
    key_notes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beer_key_notes;
};