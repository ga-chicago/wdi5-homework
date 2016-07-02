//  ALL THE GULP TASKS
//  ==================

'use strict';

//  Dependencies
//  ------------

var gulp      = require('gulp'),
    less      = require('gulp-less'),
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    gls       = require('gulp-live-server');

//  Run the Express server
//  ----------------------

gulp.task('server', function() {
  var server = gls('./src/index.js');

  gulp.watch(['./gulpfile.js', './src/index.js'], function() {
    server.start.bind(server)()
    console.log('server is running')
  })
})

//  Run jshint on JS files of all srots
//  -----------------------------------

gulp.task('jshint', function() {
  gulp.src(['./src/index.js', './src/public/js/**/*.js', '!./server/public/vendor/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
})

//  Transpiling LESS to CSS and linting JS files
//  --------------------------------------------

gulp.task('less', function() {
  gulp.src('./src/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'));
    console.log('LESS was transpiled.');
})

//  Watch for changes in files and act on those changes
//  ---------------------------------------------------

gulp.task('watch', function() {
  gulp.watch(['./src/index.js', './src/public/js/**/*.js'], ['jshint']);
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
})

//  Defaul gulp task
//  ----------------

gulp.task('default', ['watch', 'server'])
