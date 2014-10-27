module.exports = function (_, conflict, gulp, inquirer, install, mkdirp, rename, template) {
  gulp.task('react-store', function (done) {
    var prompts = [{
      name: 'storeName',
      message: 'What is the name of the new store?'
    }];
    //Ask
    inquirer.prompt(prompts, function (answers) {
      if (!answers) {
        return done();
      }
      answers.slugifiedStoreName = _.slugify(answers.storeName);
      answers.underscoredStoreName = _.underscored(answers.slugifiedStoreName);
      answers.classifiedStoreName = _.classify(answers.underscoredStoreName);

      gulp.src(__dirname + '/../templates/react-store/react-store.js')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
        .pipe(rename(answers.classifiedStoreName + '.js'))
        .pipe(conflict('client/app/src/stores'))
        .pipe(gulp.dest('client/app/src/stores'))
        .on('end', function () {
          done();
        }); 
    });
  });
  return gulp;
};