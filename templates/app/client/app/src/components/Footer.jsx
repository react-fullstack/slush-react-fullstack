/** @jsx React.DOM */


var React = require('react');

var FOOTER = React.createClass({


  render: function(){
    return (
      <div className="footer">
        <div className="container">
          <p className="text-muted">
            <a href="https://github.com/react-fullstack/slush-react-fullstack">Fork us on Github!</a>
          </p>
        </div>
      </div>
    )
  }
})

module.exports = FOOTER;
