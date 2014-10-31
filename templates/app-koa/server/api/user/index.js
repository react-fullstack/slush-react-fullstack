'use strict';

//MIGHT NEED TO REQUIRE koa-router AND IMPLEMENT IT

// var express = require('express');
var controller = require('./user.controller');
// var config = require('../../config/environment');
var auth = require('../../auth/auth.service');
// var router = express.Router();

var router = require('koa-router');

const userRouter = new router();

userRouter.get('/api/user/', auth.isAuthenticated, controller.index);
userRouter.delete('/api/user/:id', auth.isAuthenticated, controller.destroy);
userRouter.get('/api/user/me', auth.isAuthenticated, controller.me);
userRouter.put('/api/user/:id/password', auth.isAuthenticated, controller.changePassword);
userRouter.get('/api/user/:id', auth.isAuthenticated, controller.show);
userRouter.post('/api/user/', controller.create);

module.exports = userRouter;

// module.exports = function (app) {
//   //NOT SURE IF THESE ARGUMENTS WORK THE SAME AS EXPRESS
//   app.get('/', auth.hasRole('admin'), controller.index);
//   app.delete('/:id', auth.hasRole('admin'), controller.destroy);
//   app.get('/me', auth.isAuthenticated(), controller.me);
//   app.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
//   app.get('/:id', auth.isAuthenticated(), controller.show);
//   app.post('/', controller.create);
// };

// module.exports = router;
