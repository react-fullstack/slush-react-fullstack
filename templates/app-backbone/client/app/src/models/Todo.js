var Backbone = require('backbone');

var Todo = module.exports = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    completed: false
  },

});
