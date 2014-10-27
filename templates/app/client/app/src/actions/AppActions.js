/*ReadMe:
  Actions are data packaged from user interactions or web APIs.
  It is an object literal containing the new fields of data and
  specific action types.  Actions are sent to the dispatcher before
  the store.
*/

'use strict';
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  populateAction: function() {
    return AppDispatcher.handleViewAction({
      actionType: AppConstants.POPULATE
    });
  },
  addItemAction: function(text) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD,
      text: text
    });
  },
  removeItemAction: function(id) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE,
      id: id
    });
  }
};

module.exports = AppActions;
