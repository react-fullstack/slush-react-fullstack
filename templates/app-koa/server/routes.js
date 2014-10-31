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

  // Insert routes below
  // app.all('/api/things', function *(next){
  //   require('./api/thing')(app);
  // });
  // app.all('/api/users', function *(next){
  //   require('./api/user')(app);
  // });

  // app.all('/auth', function *(next){
  //   require('./auth')(app);
  // });
  
  // All undefined asset or api routes should return a 404
  // app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  //  .get(errors[404]);

  // // All other routes should redirect to the index.html
  // app.route('/*')
  //   .get(function(req, res) {
  //     res.sendfile(app.get('appPath') + '/index.html');
  //   });

  //MIGHT NEED TO SWITCH TO THIS
  // All undefined asset or api routes should return a 404
  app.all('/:url(api|auth|components|app|bower_components|assets)/*', errors[404]);

  // All other routes should redirect to the index.html
  app.get('/*', function *(next){
    console.log('SERVING UP');
    res.sendfile(app.get('appPath') + '/index.html');
  });
};
