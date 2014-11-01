var Backbone = require('backbone');
var Todo = require('../models/Todo');

var Todos = module.exports = Backbone.Collection.extend({
  model: Todo,
  url: '/api/things'
});
