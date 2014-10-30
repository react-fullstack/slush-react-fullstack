//SOME OF THESE MAY NOT BE VALID RESPONSES. NOT SURE IF KOA SUPPORTS RESPONSE.JSON

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
  Thing.find(function (err, things) {
    if(err) { return handleError(this.response, err); }
    return this.response.json(200, things);
  });
};

// Get a single thing
exports.show = function *() {
  Thing.findById(this.request.params.id, function (err, thing) {
    if(err) { return handleError(this.response, err); }
    if(!thing) { return this.response.send(404); }
    return this.response.json(thing);
  });
};

// Creates a new thing in the DB.
exports.create = function *() {
  Thing.create(this.request.body, function(err, thing) {
    if(err) { return handleError(this.response, err); }
    return this.response.json(201, thing);
  });
};

// Updates an existing thing in the DB.
exports.update = function *() {
  if(this.request.body._id) { delete this.request.body._id; }
  Thing.findById(this.request.params.id, function (err, thing) {
    if (err) { return handleError(this.response, err); }
    if(!thing) { return this.response.send(404); }
    var updated = _.merge(thing, this.request.body);
    updated.save(function (err) {
      if (err) { return handleError(this.response, err); }
      return this.response.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function *() {
  Thing.findById(this.request.params.id, function (err, thing) {
    if(err) { return handleError(this.response, err); }
    if(!thing) { return this.response.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(this.response, err); }
      return this.response.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}