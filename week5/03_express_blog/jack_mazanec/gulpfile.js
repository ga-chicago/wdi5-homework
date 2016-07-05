// Gulpfile
// ========
// This file is responsible for defining
// and running our Gulp tasks.

'use strict';

// Require our dependencies
var gulp      = require('gulp'),
    less      = require('gulp-less'),
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    gls       = require('gulp-live-server');



// Server
// ------
// Runs an Express server
gulp.task('server', function() {
  var server = gls('./src/index.js');

  // Reload the server on change
  gulp.watch(['./gulpfile.js', './src/index.js'], function() {
    server.start.bind(server)()
  });
});



// Run jshint on JS files
gulp.task('jshint', function() {
  gulp.src(['./src/index.js', './src/public/js/**/*.js', '!./server/public/vendor/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});



// LESS
// ----
// Transpiles LESS to CSS
// Lint JS files
gulp.task('less', function() {
  gulp.src('./src/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'));
});



// Watch for changes and run defined tasks
gulp.task('watch', function() {
  gulp.watch(['./src/index.js', './src/public/js/**/*.js'], ['jshint']);
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
});



// Default task
gulp.task('default', ['watch', 'server']);
