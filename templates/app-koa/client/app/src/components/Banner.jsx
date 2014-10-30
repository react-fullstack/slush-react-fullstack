/** @jsx React.DOM */


var React = require('react');

var BANNER = React.createClass({
 
  
  render: function(){
    return (
      <div className="container-fluid banner">
        <img src="http://s28.postimg.org/uiq4zy3j1/slush_react_fullstack.png"/>
      </div>
    )
  }
})

module.exports = BANNER;