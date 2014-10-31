'use strict';

// var express = require('express');
// var passport = require('passport');
var auth = require('../auth.service');
var User = require('../../api/user/user.model');

// var router = express.Router();

module.exports = function *() {
  var email = this.request.body.email;
  var password = this.request.body.password;
  var user = yield User.findOne({email: email}).exec();
  if(!user){
    this.throw(401, 'Incorrect email or password');
  }
  if(!user.authenticate(password)){
    this.throw(401, 'Incorrect email or password');
  }
  var token = auth.signToken(user._id, user.role);
  this.response.body = {token: token};
}

// router.post('/', function(req, res, next) {
//   passport.authenticate('local', function (err, user, info) {
//     var error = err || info;
//     if (error) return res.json(401, error);
//     if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

//     var token = auth.signToken(user._id, user.role);
//     res.json({token: token});
//   })(req, res, next)
// });

// module.exports = router;