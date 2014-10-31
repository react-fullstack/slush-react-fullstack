/** @jsx React.DOM */

'use strict';


var React = require('react');

var ITEM = require('./Item.jsx');


var TODO = React.createClass({

  handleClick: function() {

    var task = this.refs.todo.getDOMNode().value.trim();
    if (task != '') {
      this.props.allTodos.add({item: task});
    }
    this.refs.todo.getDOMNode().value = '';
  },

  handleInput: function(e) {
    if (e.nativeEvent.charCode === 13) {
      this.handleClick();
    }
  },

  render: function(){
    //console.log('RENDER:', this.props);
    var items = this.props.allTodos.models.map(function(todo, i) {
      //console.log(todo);
      //console.log(todo.get('item'));

      // pass todo model to item component
      return <ITEM item={todo} key={i}/>
    });
    return (
      <div>
        <div className="container">
          <div><h1>Welcome To The React-Flux-Fullstack Slush Generator</h1></div>
          <div className="input-group">
            <input type="text" className="form-control" onKeyPress={this.handleInput} placeholder="New item..." ref="todo"/>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={this.handleClick}>Add</button>
            </span>
            </div>
          <div><h3>Features:</h3></div>
          <ul className="list-group">
            {items}
          </ul>
        </div>
      </div>
    );
  }
})

module.exports = TODO;
