var React = require('react');

var BANNER = React.createClass({
 
  
  render: function(){
    return (
      <div className="container-fluid banner">
        <img src="./app/image/slush-react-fullstack.png"/>
      </div>
    )
  }
})

module.exports = BANNER;