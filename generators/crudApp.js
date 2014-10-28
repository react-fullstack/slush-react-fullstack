module.exports = function (_, conflict, gulp, inquirer, install, mkdirp, rename, template) {
	gulp.task('crud-app', function (done) {
    var prompts = [{
    	name: 'crudName',
    	message: 'What would you like to call your CRUD application?'
    }];
    //Ask
  	inquirer.prompt(prompts, function (answers) {
    	if (!answers) {
        return done();
      }
      answers.slugifiedCrudName = _.slugify(answers.crudName);
      answers.underscoredCrudName = _.underscored(answers.slugifiedCrudName);
      answers.classifiedCrudName = _.classify(answers.underscoredCrudName);

      gulp.src(__dirname + '/../templates/crud-app/client/crudApp/**')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
     		.pipe(rename(function(file) {
     			if (file.basename.slice(0, 8) === 'CrudApp') {
            console.log('working here', file.basename);
     				file.basename = file.basename.replace('CrudApp', answers.classifiedCrudName);
            console.log(file.basename);
     			}
     		}))
        .pipe(conflict('client/' + answers.classfiedCrudName + '/'))
        .pipe(gulp.dest('client/' + answers.classfiedCrudName + '/'))
        .pipe(install());

      gulp.src(__dirname + '/../templates/crud-app/server/**')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
        .pipe(rename(function(file) {
          if (file.basename.indexOf('thing') === 0) {
            file.basename = file.basename.replace('thing', answers.classifiedCrudName);
            console.log('second ', file.basename)
          }
        }))
        .on('end', function() {
          done();
        });
    });
	});
	return gulp;
}