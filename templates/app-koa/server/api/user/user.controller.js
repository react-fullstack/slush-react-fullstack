//MIGHT NEED TO HANDLE NEXT DIFFERENTLY

'use strict';

var User = require('./user.model');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function *(err) {
  this.throw(422, err);
};

/**
 * Get list of users
 */
exports.index = function *() {
  try {
    var users = yield User.find({}, '-salt -hashedPassword').exec();
  } catch(err) {
    this.throw(500, err);
  }
  this.response.status = 200;
  this.response.body = users;
};

/**
 * Creates a new user
 */
exports.create = function *(next) {
  var newUser = this.request.body;
  newUser.provider = 'local';
  newUser.role = 'user';
  try{
    var user = yield User.create(newUser);
  } catch (err) {
    yield validationError(err);
  }
  var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
  this.response.body = {token: token};
};

/**
 * Get a single user
 */
exports.show = function *(next) {
  var userId = this.params.id;
  
  try {
    var user = yield User.findById(userId).exec();
  } catch (err) {
    yield next(err);
  }

  if(!user){
    this.response.status = 401;
  } else {
    this.response.body = user.profile;
  }
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function *() {
  try {
    var user = yield User.findByIdAndRemove(this.params.id).exec();
  } catch (err) {
    this.throw(500, err);
  }
  this.response.status = 204;
};

/**
 * Change a users password
 */
exports.changePassword = function *(next) {
  var userId = this.request.user._id;
  var oldPass = String(this.request.body.oldPassword);
  var newPass = String(this.request.body.newPassword);
  var user = yield User.findById(userId).exec();
  if(user.authenticate(oldPass)){
    user.password = newPass;
    try {
      yield user.save();
    } catch(err) {
      yield validationError(err);
    }
    this.response.status = 200;
  } else {
    this.response.status = 403;
  }
};

/**
 * Get my info
 */
exports.me = function *(next) {
  var userId = this.request.user._id;
  try {
    var user = User.findOne({_id: userId}, '-salt -hashedPassword').exec();
  } catch (err) {
    yield next(err);
  }
  if(!user){
    this.response.status = 401;
  } else {
    this.response.body = user;
  }
};

/**
 * Authentication callback
 */
exports.authCallback = function *(next) {
  this.response.redirect('/');
};
