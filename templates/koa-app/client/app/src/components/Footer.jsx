/** @jsx React.DOM */


var React = require('react');

var FOOTER = React.createClass({
 
  
  render: function(){
    return (
      <div className="footer">
        <div className="container">
          <p className="text-muted"> Fork us on Github! </p>
        </div>
      </div>
    )
  }
})

module.exports = FOOTER;