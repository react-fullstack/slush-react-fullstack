module.exports = function (_, conflict, gulp, inquirer, install, mkdirp, rename, template) {
	gulp.task('react-component', function (done) {
		var prompts = [{
			name: 'componentName',
			message: 'What is the name of the new component?'
		}];
		//Ask
		inquirer.prompt(prompts, function (answers) {
			if (!answers) {
				return done();
			}
			answers.slugifiedComponentName = _.slugify(answers.componentName);
			answers.underscoredComponentName = _.underscored(answers.slugifiedComponentName);
			answers.classifiedComponentName = _.classify(answers.underscoredComponentName);

			gulp.src(__dirname + '/../templates/react-component/react-component.jsx')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
        .pipe(rename(answers.classifiedComponentName + '.jsx'))
        .pipe(conflict('client/app/src/components'))
        .pipe(gulp.dest('client/app/src/components'))
        .on('end', function () {
          done();
        });	
		});
	});
	return gulp;
};