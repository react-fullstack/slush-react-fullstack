/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var Router = require('react-router');
var Link = Router.Link;

function getAppState(){
  return AppStore.getData();
};

var NAV = React.createClass({
  
  render: function(){
    return (
        <nav className="navbar navbar-default" role="navigation">
          <Link className="navbar-brand" to="home">React-Flux-Fullstack</Link>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="signup">Signup</Link></li>
            <li><Link className="login" to="login">Login</Link></li>
          </ul>
        </nav>
    );
  }
})

module.exports = NAV;