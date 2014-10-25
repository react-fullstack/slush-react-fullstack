var gulp = require('gulp');
var install = require('gulp-install');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var inquirer = require('inquirer');

gulp = require('./generators/app')(_, conflict, gulp, inflection, inquirer, install, mkdirp, rename, template);
gulp = require('./generators/crudModule')(_, conflict, gulp, inflection, inquirer, install, mkdirp, rename, template);
