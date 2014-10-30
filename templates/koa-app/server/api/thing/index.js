'use strict';

//MIGHT NEED TO REQUIRE koa-router AND IMPLEMENT IT

// var express = require('express');
var controller = require('./thing.controller');

// var router = express.Router();

var router = require('koa-router');
const thingRouter = new router();

thingRouter.get('/api/things/', controller.index);
thingRouter.get('/api/things/:id', controller.show);
thingRouter.post('/api/things/', controller.create);
thingRouter.put('/api/things/:id', controller.update);
thingRouter.patch('/api/things/:id', controller.update);
thingRouter.delete('/api/things/:id', controller.destroy);

module.exports = thingRouter;

// module.exports = function (app) {
//   console.log('IN HERE');
//   app.get('/api/things/', controller.index);
//   app.get('/api/things/:id', controller.show);
//   app.post('/api/things/', controller.create);
//   app.put('/api/things/:id', controller.update);
//   app.patch('/api/things/:id', controller.update);
//   app.delete('/api/things/:id', controller.destroy);
// };

// module.exports = router;