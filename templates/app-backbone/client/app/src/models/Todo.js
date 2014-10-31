var Backbone = require('backbone');

var Todo = module.exports = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});
