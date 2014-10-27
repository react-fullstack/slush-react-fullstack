module.exports = function (_, conflict, gulp, inquirer, install, mkdirp, rename, template) {
  gulp.task('react-dispatcher', function (done) {
    var prompts = [{
      name: 'dispatcherName',
      message: 'What is the name of the new dispatcher?'
    }];
    //Ask
    inquirer.prompt(prompts, function (answers) {
      if (!answers) {
        return done();
      }
      answers.slugifiedDispatcherName = _.slugify(answers.dispatcherName);
      answers.underscoredDispatcherName = _.underscored(answers.slugifiedDispatcherName);
      answers.classifiedDispatcherName = _.classify(answers.underscoredDispatcherName);

      gulp.src(__dirname + '/../templates/react-dispatcher/react-dispatcher.js')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
        .pipe(rename(answers.classifiedDispatcherName + '.js'))
        .pipe(conflict('client/app/src/dispatchers'))
        .pipe(gulp.dest('client/app/src/dispatchers'))
        .on('end', function () {
          done();
        }); 
    });
  });
  return gulp;
};