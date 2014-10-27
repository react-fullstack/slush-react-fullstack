'use strict';

var <?? classifiedCrudName ?>Dispatcher = require('../dispatchers/<?? classifiedCrudName ?>Dispatcher');
var EventEmitter = require('events').EventEmitter;
var <?? classifiedCrudName ?>Constants = require('../constants/<?? classifiedCrudName ?>Constants');
var merge = require('react/lib/merge');
var Q = require('q');

var CHANGE_EVENT = 'change';

var _data = {
  todos: []
};

// {item:'React', id: 0},
//     {item:'Flux', id: 1},
//     {item:'Gulp', id: 2},
//     {item:'Express Server', id: 3},
//     {item: 'Mongo Database', id: 4}
var staticPromise = function(params){
  var output = Q.defer();
  Q.resolve(params);
  return Q.promise;
}

var httpGet = function(url){
  var output = Q.defer();
  $.ajax({
    type: 'GET',
    url: url
  }).success(function(data){
    for (var i = 0; i < data.length; i++) {
      data[i].id = i;
    };
    _data.todos = data;
    output.resolve(data);
  }).error(function(error){
    output.reject(error);
  });
  return output.promise;
}
var <?? classifiedCrudName ?>Store = merge(EventEmitter.prototype, {

  getInitialData: function(){
    return _data;
  },

  getData: function(){
    return httpGet('/api/things');
  },


  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
});

<?? classifiedCrudName ?>Dispatcher.register(function(payload){
  var action = payload.action;

  if(action.actionType === <?? classifiedCrudName ?>Constants.POPULATE) {
    return <?? classifiedCrudName ?>Store.getData();
  }

  if(action.actionType === <?? classifiedCrudName ?>Constants.ADD){

    //Find out how many elements are in the todo.
    //Make new todo - id = highest id +1, message = name
    //Submit Post Req
    //On Success, getData?
    var id;
    if (_data.todos.length > 0) {
      id = _data.todos[_data.todos.length-1].id + 1;
    } else {
      id = 0;
    }
    var temp = {item: action.text, id: id};
    _data.todos.push(temp);
    <?? classifiedCrudName ?>Store.emitChange();
    $.ajax({
      type: 'POST',
      data: JSON.stringify(temp),
      contentType: 'application/json',
      url: '/api/things/',
      success: function(item) {
        console.log('db reconciled with memory. added:', item);
        <?? classifiedCrudName ?>Store.getData();
      },
      failure: function(item) {
        console.log('db failed to reconciled with memory.');
        <?? classifiedCrudName ?>Store.getData();
        //Maybe add some Visual To improve user experience e.g. a sorry message
      }
    });
  }



  if(action.actionType === <?? classifiedCrudName ?>Constants.REMOVE){
    console.log(action)
    console.log(_data.todos)

    for (var i = 0; i < _data.todos.length; i++) {
      console.log(action.id);
      if (_data.todos[i].id === action.id) {
        var temp = _data.todos.splice(i, 1);
        <?? classifiedCrudName ?>Store.emitChange();
        console.log(temp[0]['_id'])
        //AJAX GET passing in n
        return $.ajax({
          type: 'DELETE',
          url: '/api/things/' + temp[0]['_id'],
          success: function(item){
            console.log('item removed successfully');
            console.log(item)
            <?? classifiedCrudName ?>Store.emitChange();
          },
          failure: function(failure){
            console.log('item remove failed', failure);
            <?? classifiedCrudName ?>Store.getData();
            <?? classifiedCrudName ?>Store.emitChange();
          },
        });
        break;
      }
    }
  }

  <?? classifiedCrudName ?>Store.emitChange();

});



module.exports = <?? classifiedCrudName ?>Store;
