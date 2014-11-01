/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var koa = require('koa');
var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = koa();

require('./config/express')(app);
require('./routes')(app);
var server = require('http').createServer(app.callback());

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Koa server listening on %d, in %s mode', config.port, process.env.NODE_ENV);
});

// Expose app
exports = module.exports = app;