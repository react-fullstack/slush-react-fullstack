//NOT HANDLING ERRORS

/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');

// Get list of things
exports.index = function *() {
  // var that = this;
  // Thing.find(function (err, things) {
  //   if(err) { 
  //     handleError(that.response, err);
  //     // return handleError(that.response, err); 
  //   }
  //   that.response.status = 200;
  //   that.response.body = things;
  //   // return this.response.json(200, things);
  // });

  var things = yield Thing.find().exec();
  this.response.status = 200;
  this.response.body = things;
};

// Get a single thing
exports.show = function *() {
  // var that = this;
  // Thing.findById(this.request.params.id, function (err, thing) {
  //   if(err) { 
  //     handleError(that.response, err);
  //     // return handleError(that.response, err); 
  //   } else if(!thing) { 
  //     that.response.status = 404;
  //     // return this.response.send(404); 
  //   } else {
  //     that.response.body = thing;
  //     // return this.response.json(thing);
  //   }  
  // });

  var thing = yield Thing.findById(this.params.id).exec();
  if(!thing){
    this.response.status = 404;
  } else {
    this.response.body = thing;
  }
};

// Creates a new thing in the DB.
exports.create = function *() {
  // var that = this;
  // Thing.create(this.request.body, function(err, thing) {
  //   if(err) { 
  //     handleError(that.response, err);
  //     // return handleError(this.response, err); 
  //   } else {
  //     that.response.status = 201;
  //     that.response.body = thing;
  //     // return this.response.json(201, thing);
  //   }
  // });

  var thing = yield Thing.create(this.request.body).exec();
  this.response.status = 201;
  this.response.body = thing;
};

// Updates an existing thing in the DB.
exports.update = function *() {
  // if(this.request.body._id) { 
  //   delete this.request.body._id; 
  // }
  // Thing.findById(this.request.params.id, function (err, thing) {
  //   if (err) { 
  //     return handleError(this.response, err); 
  //   }
  //   if(!thing) { 
  //     return this.response.send(404); 
  //   }
  //   var updated = _.merge(thing, this.request.body);
  //   updated.save(function (err) {
  //     if (err) { 
  //       return handleError(this.response, err); 
  //     }
  //     return this.response.json(200, thing);
  //   });
  // });

  var thing = yield Thing.findById(this.params.id).exec();
  if(this.request.body._id) { 
    delete this.request.body._id; 
  }
  if(! thing){
    this.response.status = 404;
  } else {
    var updated = _.merge(thing, this.request.body);
    yield updated.save();
    this.response.status = 200;
    this.response.body = thing;
  }
};

// Deletes a thing from the DB.
exports.destroy = function *() {
  // var that = this;
  // Thing.findById(this.params.id, function (err, thing) {
  //   if(err) { 
  //     handleError(that.response, err);
  //     // return handleError(this.response, err); 
  //   } else if(!thing) {
  //     that.status = 404; 
  //     // return this.response.send(404); 
  //   } else {
  //     thing.remove(function(err) {
  //       if(err) {
  //         handleError(that.response, err); 
  //         // return handleError(this.response, err); 
  //       } else {
  //         that.response.status = 204;
  //         // return this.response.send(204);
  //       }
  //     });
  //   }
  // });

  var thing = yield Thing.findById(this.params.id).exec();
  if(!thing){
    this.response.status = 404;
  } else {
    thing.remove();
    this.response.status = 204;
  }
};

function handleError(res, err) {
  res.status = 500;
  res.body = err;
  // return res.send(500, err);
}