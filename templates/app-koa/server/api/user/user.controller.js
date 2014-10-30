//SOME OF THESE MAY NOT BE VALID RESPONSES. NOT SURE IF KOA SUPPORTS RESPONSE.JSON
//MIGHT NEED TO HANDLE NEXT DIFFERENTLY

'use strict';

var User = require('./user.model');
// var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function *(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function *() {

  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return this.response.send(500, err);
    this.response.json(200, users);
  });
};

/**
 * Creates a new user
 */
exports.create = function *(next) {
  var newUser = new User(this.request.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(this.response, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expithis.responseInMinutes: 60*5 });
    this.response.json({ token: token });
  });
};

/**
 * Get a single user
 */
exports.show = function *(next) {
  var userId = this.request.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return this.response.send(401);
    this.response.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function *() {
  User.findByIdAndRemove(this.request.params.id, function(err, user) {
    if(err) return this.response.send(500, err);
    return this.response.send(204);
  });
};

/**
 * Change a users password
 */
exports.changePassword = function *(next) {
  var userId = this.request.user._id;
  var oldPass = String(this.request.body.oldPassword);
  var newPass = String(this.request.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(this.response, err);
        this.response.send(200);
      });
    } else {
      this.response.send(403);
    }
  });
};

/**
 * Get my info
 */
exports.me = function *(next) {
  var userId = this.request.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return this.response.json(401);
    this.response.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function *(next) {
  this.response.redirect('/');
};
