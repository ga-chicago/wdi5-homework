// declare dependencies 
var gulp = require('gulp'),
    less = require('gulp-less'),
    gls  = require('gulp-live-server');


// less
gulp. task('less', function() {
  gulp.src('./src/public/less/style.less')
    .pipe(less())
      .pipe(gulp.dest('./src/public/css'))
});


// server
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_ENV: 'development', PORT: 3000})
  server.start();


  // watch server stuff
  gulp.watch(['gulpfile.js', './src/index.js', './src/controllers/**/*.js'], function() {
    server.start.bind(server)()
  });
});

// watch less
gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
})


// default
gulp.task('default', ['watch', 'server']);
