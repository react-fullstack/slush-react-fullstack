var gulp = require('gulp');
var install = require('gulp-install');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var inquirer = require('inquirer');

gulp.task('default', function (done) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'Give your app a name', default: gulp.args.join(' ')},
    {type: 'confirm', name: 'moveon', message: 'Continue?'}
  ],
  function (answers){
    if (!answers.moveon) {
      return done();
    }
    gulp.src(__dirname + '/templates/**')
      .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', function() {
        done();
      })
  });
});
