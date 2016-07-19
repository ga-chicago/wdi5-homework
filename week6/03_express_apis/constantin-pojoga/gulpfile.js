var gulp = require('gulp'),
    gls  = require('gulp-live-server');

// Run the local server
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_ENV: 'development', PORT: 3000});
  server.start();

  gulp.watch(['gulpfile.js', './src/index.js', './src/controllers/**/*.js'], function() {
    server.start.bind(server)()
  })
})

gulp.task('default', ['server']);
