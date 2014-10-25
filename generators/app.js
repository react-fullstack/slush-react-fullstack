module.exports = function(_, conflict, gulp, inflection, inquirer, install, mkdirp, rename, template){
	gulp.task('default', function (done) {
    var prompts = [{
      name: 'appName',
      message: 'What would you like to call your application?',
      default: 'React-Flux-Fullstack'
    }, {
      name: 'appDescription',
      message: 'How would you describe your application?',
      default: 'Full-Stack JavaScript with MongoDB, Express, React, Flux and Node.js'
    }, {
      name: 'appKeywords',
      message: 'How would you describe your application in comma seperated key words?',
      default: 'MongoDB, Express, React, Flux, Node.js'
    }, {
      name: 'appAuthor',
      message: 'What is your company/author name?'
    // }, {
    //   type: 'confirm',
    //   name: 'addArticleExample',
    //   message: 'Would you like to generate the article example CRUD module?',
    //   default: true
    }];
	    //Ask
    inquirer.prompt(prompts, function (answers) {
    	if (!answers.appName) {
        return done();
      }
      answers.slugifiedAppName = _.slugify(answers.appName);
      answers.humanizedAppName = _.humanize(answers.appName);
      answers.capitalizedAppAuthor = _.capitalize(answers.appAuthor);
      
      // gulp.src(__dirname + '/../templates/app/**')
      //   .pipe(rename(function(file) {
      //     if (file.basename.indexOf('__') == 0) {
      //       file.basename = '.' + file.basename.slice(2);
      //     }
      //  	}))
      //   .pipe(conflict('./'))
      //   .pipe(gulp.dest('./'));

      gulp.src(__dirname + '/../templates/app/**')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function() {
          done();
        });
    });
	});
	return gulp;
}

// var gulp = require('gulp');
// var install = require('gulp-install');
// var conflict = require('gulp-conflict');
// var template = require('gulp-template');
// var inquirer = require('inquirer');

// gulp.task('default', function (done) {
//   inquirer.prompt([
//     {type: 'input', name: 'name', message: 'Give your app a name', default: gulp.args.join(' ')},
//     {type: 'confirm', name: 'moveon', message: 'Continue?'}
//   ],
//   function (answers){
//     if (!answers.moveon) {
//       return done();
//     }
//     gulp.src(__dirname + '/templates/**')
//       .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
//       .pipe(conflict('./'))
//       .pipe(gulp.dest('./'))
//       .pipe(install())
//       .on('end', function() {
//         done();
//       })
//   });
// });
