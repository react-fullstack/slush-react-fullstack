module.exports = function(_, conflict, gulp, inquirer, install, mkdirp, rename, template){
  gulp.task('backbone', function (done) {
    var prompts = [{
      name: 'appName',
      message: 'What would you like to call your application?',
      default: 'React-Flux-Fullstack-Backbone'
    }, {
      name: 'appDescription',
      message: 'How would you describe your application?',
      default: 'Full-Stack JavaScript with MongoDB, Express, React, Backbone and Node.js'
    }, {
      name: 'appKeywords',
      message: 'How would you describe your application in comma seperated key words?',
      default: 'MongoDB, Express, React, Backbone, Node.js'
    }, {
      name: 'appAuthor',
      message: 'What is your company/author name?'
    }];
      //Ask
    inquirer.prompt(prompts, function (answers) {
      if (!answers.appName) {
        return done();
      }
      answers.slugifiedAppName = _.slugify(answers.appName);
      answers.humanizedAppName = _.humanize(answers.appName);
      answers.capitalizedAppAuthor = _.capitalize(answers.appAuthor);

      gulp.src(__dirname + '/../templates/app-backbone/**')
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
};
