/** @jsx React.DOM */


'use strict';


var React = require('react');

var ITEM = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    console.log(this.props.item.url());
    this.props.item.destroy({
      success: function() {
        console.log('destroyed!');
      },
      error: function() {
        console.log('failed to destroy!');
      },
      wait:true
    });

  },

  render: function(){
    return (
      <li key={this.props.key} className="list-group-item">
        {this.props.item.get('item')}
        <a className="close" onClick={this.handleClick} href="#">x</a>
      </li>
    )
  }
})

module.exports = ITEM;
