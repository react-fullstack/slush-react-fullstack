/** @jsx React.DOM */


'use strict';

var Backbone = require('backbone');

var Todos = require('../collections/todos');

var React = require('react');

var NAV = require('./NavBar.jsx');
var BANNER = require('./Banner.jsx');
var TODO = require('./ToDo.jsx');

var Q = require('q');

var BackboneMixin = {
	componentDidMount: function () {
		// Whenever there may be a change in the Backbone data, trigger a
		// reconcile.
    console.log('collections', this.getBackboneCollections());
		this.getBackboneCollections().forEach(function (collection) {
			console.log('binding');

      // Add event listener to the collection to
      // force update on change.
      collection.on('add remove change', function() {
        //console.log('update!');
        this.forceUpdate();
      }.bind(this));

      // Initial fetch of the collection.
      collection.fetch();
		}, this);
	},

	componentWillUnmount: function () {
		// Ensure that we clean up any dangling references when the component is
		// destroyed.
		this.getBackboneCollections().forEach(function (collection) {
			collection.off(null, null, this);
		}, this);
	}
};

var APP = React.createClass({
  mixins: [BackboneMixin],

  getBackboneCollections: function() {
    return [this.state.todos];
  },

  getInitialState: function(){
    // Initialize Backbone Todos model
    var todos = new Todos();
    console.log("todos:", todos);
    return {todos: todos};
  },

  _onChange: function(){
    // this.setState(getAppState());
    var that = this;
    Q(getAppState()).then(function(promise){
      console.log('change')
      console.log(that.state)
      that.setState({todos: that.state.todos.models})
      that.forceUpdate();
    })

  },

  componentDidMount: function(){
    var that = this;
    console.log("mounted");
  },

  componentWillUnmount: function(){

  },

  handleClick: function(){

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
