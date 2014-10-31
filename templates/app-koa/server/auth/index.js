'use strict';

var config = require('../config/environment');
var User = require('../api/user/user.model');

var router = require('koa-router');

// Passport Configuration
// require('./local/passport').setup(User, config);
// require('./facebook/passport').setup(User, config);
// require('./google/passport').setup(User, config);
// require('./twitter/passport').setup(User, config);

const authRouter = new router();
authRouter.post('/auth/local/', require('./local/index'));

// authRouter.use('/facebook', require('./facebook'));
// authRouter.use('/twitter', require('./twitter'));
// authRouter.use('/google', require('./google'));

module.exports = authRouter;
