'use strict';

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../api/user/user.model');
var validateJwt = expressJwt({ secret: config.secrets.session });

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function *isAuthenticated(next) {
  // return compose()
  //   // Validate jwt
  //   .use(function(req, res, next) {
  //     // allow access_token to be passed through query parameter as well
  //     if(req.query && req.query.hasOwnProperty('access_token')) {
  //       req.headers.authorization = 'Bearer ' + req.query.access_token;
  //     }
  //     validateJwt(req, res, next);
  //   })
  //   // Attach user to request
  //   .use(function(req, res, next) {
  //     User.findById(req.user._id, function (err, user) {
  //       if (err) return next(err);
  //       if (!user) return res.send(401);

  //       req.user = user;
  //       next();
  //     });
  //   });

  // if(this.request.query && this.request.query.hasOwnProperty('access_token')){
  //   this.request.headers.authorization = 'Bearer ' + this.request.query.access_token;
  // }
  // validateJwt(req, res, next); //PROBABLY REPLACE
  var token = this.request.query.access_token;
  try {
    var userId = jwt.decode(token);
  } catch (err){
    this.throw(401)
  }
  var user = yield User.findById(userId._id).exec();
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
    // throw new Error('Required role needs to be set');
  }

  // return compose()
  //   .use(isAuthenticated())
  //   .use(function meetsRequirements(req, res, next) {
  //     if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
  //       next();
  //     }
  //     else {
  //       res.send(403);
  //     }
  //   });

  yield isAuthenticated();
  if(config.userRoles.indexOf(this.request.user.role) < config.userRoles.indexOf(roleRequired)){
    this.response.status = 403;
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
    // return res.json(404, { message: 'Something went wrong, please try again.'});
  } else {
    var token = signToken(this.request.user._id, this.request.user.role);
    this.response.cookie('token', JSON.stringify(token));
    this.response.redirect('/');
  }
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;