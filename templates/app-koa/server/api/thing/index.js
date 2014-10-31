'use strict';

var controller = require('./thing.controller');
var router = require('koa-router');

const thingRouter = new router();

thingRouter.get('/api/things/', controller.index);
thingRouter.get('/api/things/:id', controller.show);
thingRouter.post('/api/things/', controller.create);
thingRouter.put('/api/things/:id', controller.update);
thingRouter.patch('/api/things/:id', controller.update);
thingRouter.delete('/api/things/:id', controller.destroy);

module.exports = thingRouter;

