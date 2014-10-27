module.exports = function (_, conflict, gulp, inquirer, install, mkdirp, rename, template) {
	gulp.task('react-constants', function (done) {
		var prompts = [{
			name: 'constantsName',
			message: 'What is the name of the new component?'
		}];
		//Ask
		inquirer.prompt(prompts, function (answers) {
			if (!answers) {
				return done();
			}
			answers.slugifiedConstantsName = _.slugify(answers.constantsName);
			answers.underscoredConstantsName = _.underscored(answers.slugifiedConstantsName);
			answers.classifiedConstantsName = _.classify(answers.underscoredConstantsName);

			gulp.src(__dirname + '/../templates/react-constants/react-constants.js')
        .pipe(template(answers, {interpolate: /<\?\?(.+?)\?>/g}))
        .pipe(rename(answers.classifiedConstantsName + '.js'))
        .pipe(conflict('client/app/src/constants'))
        .pipe(gulp.dest('client/app/src/constants'))
        .on('end', function () {
          done();
        });	
		});
	});
	return gulp;
};