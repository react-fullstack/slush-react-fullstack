module.exports = function (_, conflict, gulp, inquirer, install, mkdirp, rename, template) {
  gulp.task('react-actions', function (done) {
    var prompts = [{
      name: 'actionName',
      message: 'What is the name of the new action?'
    }];
    //Ask
    inquirer.prompt(prompts, function (answers) {
      if (!answers) {
        return done();
      }
      answers.slugifiedActionName = _.slugify(answers.actionName);
      answers.underscoredActionName = _.underscored(answers.slugifiedActionName);
      answers.classifiedActionName = _.classify(answers.underscoredActionName);

      gulp.src(__dirname + '/../templates/react-actions/react-actions.js')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
        .pipe(rename(answers.classifiedActionName + '.js'))
        .pipe(conflict('client/app/src/actions'))
        .pipe(gulp.dest('client/app/src/actions'))
        .on('end', function () {
          done();
        }); 
    });
  });
  return gulp;
};