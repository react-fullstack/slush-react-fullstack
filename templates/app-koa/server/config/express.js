/**
 * Express configuration
 */

'use strict';

var serve = require('koa-static');
var session = require('koa-session');
var mongoStore = require('koa-session-mongo');
var bodyParser = require('koa-bodyparser');
var passport = require('koa-passport');
var views = require('koa-views');
var methodOverride = require('koa-methodoverride');
var compression = require('koa-compress');
var logger = require('koa-logger');
var errorHandler = require('koa-error-handler');
var favicon = require('koa-favicon');
var path = require('path');
var config = require('./environment');
var mongoose = require('mongoose');

module.exports = function(app) {
  // var env = app.get('env');

  app.use(views(config.root+'/server/views', {
    default: 'html'
  }));
  app.use(compression());
  app.use(bodyParser());
  app.use(methodOverride());
  app.use(passport.initialize());
  app.use(passport.session());

  app.keys = [config.secrets.session];
  app.use(session({
    store: mongoStore.create({
      mongoose: mongoose.connection
    })
  }));

  // if ('production' === env) {
  //   app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
  //   app.use(serve(path.join(config.root, 'public')));
  //   app.set('appPath', config.root + '/public');
  //   app.use(morgan('dev'));
  // }

  // if ('development' === env || 'test' === env) {
  //   app.use(require('connect-livereload')());
  //   app.use(serve(path.join(config.root, '.tmp')));
  //   app.use(serve(path.join(config.root, 'client')));
  //   app.set('appPath', 'client');
  //   app.use(morgan('dev'));
  //   app.use(errorHandler()); // Error handler - has to be last
  // }

  // app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
  app.use(require('koa-livereload')());
  app.use(serve(path.join(config.root, '.tmp')));
  app.use(serve(path.join(config.root, 'client')));
  app.use(logger());
  errorHandler(app); // Error handler - has to be last
};
