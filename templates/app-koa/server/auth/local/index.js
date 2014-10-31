'use strict';

var auth = require('../auth.service');
var User = require('../../api/user/user.model');

module.exports = function *() {
  var email = this.request.body.email;
  var password = this.request.body.password;
  try {
    var user = yield User.findOne({email: email}).exec();
  } catch (err){
    this.throw(500);
  }
  if(!user){
    this.throw(401, 'Incorrect email or password');
  }
  if(!user.authenticate(password)){
    this.throw(401, 'Incorrect email or password');
  }
  var token = auth.signToken(user._id, user.role);
  this.response.body = {token: token};
};
