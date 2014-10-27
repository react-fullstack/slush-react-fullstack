/** @jsx React.DOM */


'use strict';

var React = require('react');

var LOGIN = require('./components/Login.jsx');
var HOME = require('./components/Home.jsx');
var SIGNUP = require('./components/Signup.jsx');
var NAV = require('./components/NavBar.jsx');
var BANNER = require('./components/Banner.jsx');
var FOOTER = require('./components/Footer.jsx');

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;


var APP = React.createClass({
  render: function(){
    return (
      <div>
        <NAV />
        <BANNER />
        <this.props.activeRouteHandler/>
        <FOOTER />
      </div>
    )
  }
})

var routes = (
  <Routes location="history">
    <Route handler={APP}>
      <Route name="home" path="/" handler={HOME}/>
      <Route name="login" path="/login" handler={LOGIN}/>
      <Route name="signup" path="/signup" handler={SIGNUP}/>
      <DefaultRoute handler={APP}/>
    </Route>
  </Routes>
);

module.exports = React.renderComponent(routes, document.body);
