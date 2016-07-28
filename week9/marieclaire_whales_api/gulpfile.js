// Require dependencies
var gulp       = require('gulp'),
    less       = require('gulp-less'),
    gls        = require('gulp-live-server'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream');



// Transpile React JS into readable JavaScript
// DOM can't read plain React (JSX)
gulp.task('react', function() {
  return browserify('./clientReact/app.js')
          .transform('babelify', {presets: ["react"]}) //second argument comes from babelify library.
          .bundle()
          // Create new file for the transformed code
          .pipe(source('build.js')) //name of file
          .pipe(gulp.dest('./src/public/js'))//destination of that new file
})


// Watch for changes
gulp.task('watch', function() {
  // gulp.watch(['./app/public/less/**/*.less'], ['less']);
  gulp.watch(['./clientReact/*.js'], ['react']);
  // gulp.watch(['./src/public/js/**/*.js'], ['jshint']);
});

// Default task - watch files for changes and run a local server
gulp.task('default', ['watch', 'react']);
