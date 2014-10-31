'use strict';

// var express = require('express');
// var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/user/user.model');

var router = require('koa-router');

// Passport Configuration
// require('./local/passport').setup(User, config);
// require('./facebook/passport').setup(User, config);
// require('./google/passport').setup(User, config);
// require('./twitter/passport').setup(User, config);

// var router = express.Router();

const authRouter = new router();
authRouter.post('/auth/local/', require('./local/index'));

// authRouter.use('/local', require('./local'));
// authRouter.use('/facebook', require('./facebook'));
// authRouter.use('/twitter', require('./twitter'));
// authRouter.use('/google', require('./google'));

module.exports = authRouter;

// module.exports = function (app) {
//   app.use('/local', require('./local'));
//   app.use('/facebook', require('./facebook'));
//   app.use('/twitter', require('./twitter'));
//   app.use('/google', require('./google'));
// }

// module.exports = router;
