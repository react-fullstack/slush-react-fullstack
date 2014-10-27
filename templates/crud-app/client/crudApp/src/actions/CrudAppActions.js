'use strict';
var <?? classifiedCrudName ?>Dispatcher = require('../dispatchers/<?? classifiedCrudName ?>Dispatcher');
var <?? classifiedCrudName ?>Constants = require('../constants/<?? classifiedCrudName ?>Constants');

var <?? classifiedCrudName ?>Actions = {
  populateAction: function() {
    return <?? classifiedCrudName ?>Dispatcher.handleViewAction({
      actionType: <?? classifiedCrudName ?>Constants.POPULATE
    });
  },
  addItemAction: function(text) {
    <?? classifiedCrudName ?>Dispatcher.handleViewAction({
      actionType: <?? classifiedCrudName ?>Constants.ADD,
      text: text
    });
  },
  removeItemAction: function(id) {
    <?? classifiedCrudName ?>Dispatcher.handleViewAction({
      actionType: <?? classifiedCrudName ?>Constants.REMOVE,
      id: id
    });
  }
};

module.exports = <?? classifiedCrudName ?>Actions;
