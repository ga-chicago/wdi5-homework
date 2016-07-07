var gulp   = require('gulp'),
    less   = require('gulp-less'),
    gls    = require('gulp-live-server');

//transpile less to css 
gulp.task('less', function() {
  gulp.src("./src/public/less/style.less") //will import all less file and input one file
  .pipe(less())
  .pipe(gulp.dest('./src/public/css'))
});

// Run a local server
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_ENV: 'development', PORT: 3000});
  server.start();               // start the server

  gulp.watch(['gulpfile.js', './src/index.js'], function() {
    server.start.bind(server)()
  });
});

// Watch for file changes

gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
});


// Default task, run our server and watches for changes
gulp.task('default', ['watch', 'server']);
