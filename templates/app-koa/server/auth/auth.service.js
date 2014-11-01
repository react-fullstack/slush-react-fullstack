'use strict';

var config = require('../config/environment');
var jwt = require('jsonwebtoken');
var User = require('../api/user/user.model');

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function *isAuthenticated(next) {
  var token;
  if(this.request.query){
    token = this.request.query.access_token;
  }
  try {
    var userId = jwt.decode(token);
  } catch (err){
    this.throw(401)
  }
  try {
    var user = yield User.findById(userId._id).exec();
  } catch (err){
    yield next(err);
  }
  if(!user){
    this.response.status = 401;
  } else {
    this.request.user = user;
  }
  yield next
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
function *hasRole(roleRequired) {
  if (!roleRequired) {
    this.throw('Required role needs to be set');
  }

  yield isAuthenticated();
  if(config.userRoles.indexOf(this.request.user.role) < config.userRoles.indexOf(roleRequired)){
    this.response.status = 403;
  } else {
    yield next;
  }
}

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(id) {
  return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60*5 });
}

/**
 * Set token cookie directly for oAuth strategies
 */
function *setTokenCookie() {
  if (!this.request.user) {
    this.response.status = 404;
    this.response.body = {message: 'Something went wrong, please try again.'};
  } else {
    //Might not be working correctly
    var token = signToken(this.request.user._id, this.request.user.role);
    this.response.cookie('token', JSON.stringify(token));
    this.response.redirect('/');
  }
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;