/*ReadMe:
  Dispatchers operates as the central hub of data flow in a Flux application.
  They organize events into a single flow and ensure dependencies are taken care
  of at the right time before events continue to process.  Dispatchers act as a
  bridge function between user events/ web APIs and the stores so that the correct 
  changes can be made.
*/
'use strict';
var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');
var AppDispatcher = copyProperties(new Dispatcher(), {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  handleViewAction: function(action) {
    return this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;
