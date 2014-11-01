'use strict';

var controller = require('./user.controller');
var auth = require('../../auth/auth.service');
var router = require('koa-router');

const userRouter = new router();

userRouter.get('/api/users/', auth.isAuthenticated, controller.index);
userRouter.delete('/api/users/:id', auth.isAuthenticated, controller.destroy);
userRouter.get('/api/users/me', auth.isAuthenticated, controller.me);
userRouter.put('/api/users/:id/password', auth.isAuthenticated, controller.changePassword);
userRouter.get('/api/users/:id', auth.isAuthenticated, controller.show);
userRouter.post('/api/users/', controller.create);

module.exports = userRouter;
