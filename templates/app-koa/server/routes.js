/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var router = require('koa-router');
var thingRouter = require('./api/thing/index');
var userRouter = require('./api/user/index');
var authRouter = require('./auth/index');

module.exports = function(app) {
  
  app.use(router(app));

  app.use(thingRouter.middleware());
  app.use(userRouter.middleware());
  app.use(authRouter.middleware());

  //MIGHT NEED TO SWITCH TO THIS
  // All undefined asset or api routes should return a 404
  app.all('/:url(api|auth|components|app|bower_components|assets)/*', errors[404]);

  // All other routes should redirect to the index.html
  app.all('/*', function *(next){
    res.sendfile(app.get('appPath') + '/index.html');
  });
};
