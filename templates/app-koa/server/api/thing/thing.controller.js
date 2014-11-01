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
  try {
    var things = yield Thing.find().exec();
  } catch(err) {
    yield handleError(err);
  }
  this.response.status = 200;
  this.response.body = things;
};

// Get a single thing
exports.show = function *() {
  try {
    var thing = yield Thing.findById(this.params.id).exec();
  } catch(err) {
    yield handleError(err);
  }
  if(!thing){
    this.response.status = 404;
  } else {
    this.response.body = thing;
  }
};

// Creates a new thing in the DB.
exports.create = function *() {
  try {
    var thing = yield Thing.create(this.request.body);
  } catch(err) {
    yield handleError(err);
  }
  this.response.status = 201;
  this.response.body = thing;
};

// Updates an existing thing in the DB.
exports.update = function *() {
  if(this.request.body._id) { 
    delete this.request.body._id; 
  }

  try {
    var thing = yield Thing.findById(this.params.id).exec();
  } catch(err) {
    yield handleError(err);
  }
  
  if(! thing){
    this.response.status = 404;
  } else {
    var updated = _.merge(thing, this.request.body);
    try {
      yield updated.save();
    } catch (err) {
      handleError(err);
    }
    this.response.status = 200;
    this.response.body = thing;
  }
};

// Deletes a thing from the DB.
exports.destroy = function *() {
  try {
    var thing = yield Thing.findById(this.params.id).exec();
  } catch (err) {
    handleError(err);
  }

  if(!thing){
    this.response.status = 404;
  } else {
    try {
      thing.remove(); //need to yield here?
    } catch(err) {
      handleError(err);
    }
    this.response.status = 204;
  }
};

function *handleError(err) {
  this.throw(500, err);
}