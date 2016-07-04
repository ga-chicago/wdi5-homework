// Require and access methods of dependencies
var gulp = require('gulp'); 
var less = require('gulp-less'); 
var gls  = require('gulp-live-server'); 



// Transpile LESS into CSS
gulp.task('less', function() {   //second variable can be a callback function or an array of other task names
  gulp.src('./src/public/less/style.less')                     // gulp.src gets from the src folder. and we select the specific file
  .pipe(less())                      //outputs to css. actual transpiling
  .pipe(gulp.dest('./src/public/css'));                  // must use gulp's api to send it to dest
});
/// to actually run it and initialize it: go to terminal and do $ gulp less.



// Run local server
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_END: 'development', PORT: 9000});    // the node end must be all caps. sets the default environment. gls take script file that runs server. second argument is an object that contains environment variables. sets port.
  server.start(); //starts the server

  gulp.watch(['gulpfile.js', './src/index.js'], function() {   // tell it what to watch. important changes that'll make application restart
    server.start.bind(server)()         // somehow restarts server
  });
});
// run $ gulp server / in order to check it



// Watch for changes
gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
});



// Default task
gulp.task('default', ['watch', 'server']);
