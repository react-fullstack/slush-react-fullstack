'use strict';

var React = require('react');

var <?? classifiedCrudName ?>Store = require('../stores/<?? classifiedCrudName ?>Store');
var <?? classifiedCrudName ?>Actions = require('../actions/<?? classifiedCrudName ?>Actions');

function getAppState(){
  return <?? classifiedCrudName ?>Store.getData()
};

var <?? classifiedCrudName ?> = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  _onChange: function(){
    this.setState(getAppState());
  },

  componentDidMount: function(){
    <?? classifiedCrudName ?>Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    <?? classifiedCrudName ?>Store.removeChangeListener(this._onChange);
  },

  handleClick: function(){
    <?? classifiedCrudName ?>Actions.exampleAction('Data from View');
  },
  
  render: function(){
    return (
      <div>
        <this.props.activeRouteHandler/>
      </div>
      )
  }
})

module.exports = <?? classifiedCrudName ?>;