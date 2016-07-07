// Require and access methods of dependencies
var gulp = require('gulp'); 
var less = require('gulp-less'); 
var gls  = require('gulp-live-server'); 



// Transpile LESS into CSS
gulp.task('less', function() {
  gulp.src('./src/public/less/style.less')
  .pipe(less())
  .pipe(gulp.dest('./src/public/css'));
});



// Run local server
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_END: 'development', PORT: 9000});
  server.start(); //starts the server

  gulp.watch(['gulpfile.js', './src/index.js'], function() {
    server.start.bind(server)()         
  });
});



// Watch for changes
gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
});



// Default task
gulp.task('default', ['watch', 'server']);
