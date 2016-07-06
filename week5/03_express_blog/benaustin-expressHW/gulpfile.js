// Require DEV dependencies 
var gulp = require('gulp'),
    less = require('gulp-less'),
    gls  = require('gulp-live-server');

// LESS task
gulp.task('less', function() {
  gulp.src('./src/public/less/style.less') //take less file output and pipe to css
    .pipe(less())
      .pipe(gulp.dest('./src/public/css'))
});

// Run SERVER
gulp.task('server', function() {
  var server = gls('./src/index.js', {});
  server.start();
  gulp.watch(['gulpfile.js', './src/index.js'], function() {
    server.start.bind(server)();
  });
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
})

// Default task
gulp.task('default', ['watch', 'server']);
