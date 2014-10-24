'use strict';

var React = require('react');

var APP = require('./components/App.jsx');
var LOGIN = require('./components/Login.jsx');
var HOME = require('./components/Home.jsx');
var SIGNUP = require('./components/Signup.jsx');

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;


var routes = (
  <Routes location="history">
    <Route name="home" path="/" handler={HOME}/>
    <Route name="login" handler={LOGIN}/>
    <Route name="signup" handler={SIGNUP}/>
    <DefaultRoute handler={HOME}/>
  </Routes>
);

module.exports = React.renderComponent(routes, document.body);