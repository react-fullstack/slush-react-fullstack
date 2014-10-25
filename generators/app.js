module.exports = function(_, conflict, gulp, inflection, inquirer, install, mkdirp, rename, template){
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
	return gulp;
};