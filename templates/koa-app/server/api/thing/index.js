'use strict';

//MIGHT NEED TO REQUIRE koa-router AND IMPLEMENT IT

// var express = require('express');
var controller = require('./thing.controller');

// var router = express.Router();

module.exports = function (app) {
  app.get('/', controller.index);
  app.get('/:id', controller.show);
  app.post('/', controller.create);
  app.put('/:id', controller.update);
  app.patch('/:id', controller.update);
  app.delete('/:id', controller.destroy);
};

// module.exports = router;