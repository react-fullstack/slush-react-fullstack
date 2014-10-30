'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  item: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);