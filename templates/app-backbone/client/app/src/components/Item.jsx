/** @jsx React.DOM */


'use strict';


var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');


var ITEM = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    AppActions.removeItemAction(this.props.item.id);
  },

  render: function(){
    return (
      <li key={this.props.key} className="list-group-item">
        {this.props.item.item}
        <a className="close" onClick={this.handleClick} href="#">x</a>
      </li> 
    )
  }
})

module.exports = ITEM;