'use strict';

// var express = require('express');
// var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/user/user.model');

// Passport Configuration
require('./local/passport').setup(User, config);
require('./facebook/passport').setup(User, config);
require('./google/passport').setup(User, config);
require('./twitter/passport').setup(User, config);

// var router = express.Router();

module.exports = function (app) {
  app.use('/local', require('./local'));
  app.use('/facebook', require('./facebook'));
  app.use('/twitter', require('./twitter'));
  app.use('/google', require('./google'));
}

// module.exports = router;