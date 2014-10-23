
'use strict';

var _ = require('underscore.string');
var conflict = require('gulp-conflict');
var gulp = require('gulp');
var inflection = require('inflection');
var inject = require('gulp-inject');
var inquirer = require('inquirer');
var install = require('gulp-install');
var mkdirp = require('mkdirp');
var rename = require('gulp-rename');
var template = require('gulp-template');

// load generators
gulp = require('./generators/app')(_, conflict, gulp, inflection, inject, inquirer, install, mkdirp, rename, template);
gulp = require('./generators/crudModule')(_, conflict, gulp, inflection, inject, inquirer, install, mkdirp, rename, template);
