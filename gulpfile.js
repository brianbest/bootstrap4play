/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
    jshint = require('gulp-jshint');
    plugins = require('gulp-load-plugins')();
    //livereload = require('gulp-livereload');

// create a default task and just log a message
gulp.task('default',['watch']);

gulp.task('jshint', function(){
	return gulp.src('src/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(plugins.livereload());
});

gulp.task('watch',function(){
	plugins.livereload.listen();
	gulp.watch('src/**/*.js',['jshint']);
});