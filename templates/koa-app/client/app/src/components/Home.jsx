/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var NAV = require('./NavBar.jsx');
var BANNER = require('./Banner.jsx');
var TODO = require('./ToDo.jsx');

var Q = require('q');

function getAppState(){
  return AppStore.getData();
};

function getInitialAppState(){
  return AppStore.getInitialData();
}

var APP = React.createClass({
  getInitialState: function(){
    return getInitialAppState();
    // return getAppState();
    // return null;
  },

  _onChange: function(){
    // this.setState(getAppState());
    var that = this;
    Q(getAppState()).then(function(promise){
      console.log('change')
      console.log(promise)
      that.setState({todos: promise})
    })

  },

  componentDidMount: function(){
    var that = this;
    console.log(1)
    AppStore.addChangeListener(this._onChange);
    // Q(AppActions.populateAction()).then(function(promisedData){
    //   console.log(promisedData);
    //   this.setState(promisedData);
    // });
    Q(getAppState()).then(function(promise){
      console.log(2)
      console.log("this:",that)
      console.log(promise)
      // var data = {todos: promise}
      that.setState({todos: promise})
    })
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  handleClick: function(){
    AppActions.exampleAction('Data from View');
  },
  
  render: function(){
    return (
      <div>
        <TODO allTodos={this.state.todos}/>
      </div>
      )
  }
})

module.exports = APP;
