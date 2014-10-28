'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var <?? classifiedCrudName ?>Schema = new Schema({
  item: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('<?? classifiedCrudName ?>', <?? classifiedCrudName ?>Schema);