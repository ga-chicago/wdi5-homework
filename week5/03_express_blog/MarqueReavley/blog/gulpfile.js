
//  G U L P F I L E
//  ==========================================================
//  Run Express/Node server; transpile LESS, watch for changes

//  Require dependencies
//  --------------------
var gulp = require('gulp'),
    less = require('gulp-less'),
    gls  = require('gulp-live-server');

//  Transpile LESS into CSS (TASK)
//  ------------------------------
gulp.task('less', function () {
  gulp.src('./src/public/less/style.less')    // finds the source LESS file which will be transpiled into CSS
    .pipe(less())                             // pipes less to the gulp-less transpiler
    .pipe(gulp.dest('./src/public/css'));     // pipes the transpiled CSS to the destination folder
});

//  Run the local server (TASK)
//  ---------------------------
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_ENV: 'development', PORT: 3000});   // finds the local port
  server.start();                                                              // starts the server running

  gulp.watch(['gulpfile.js', './src/index.js'], function() {    // indicates which files will be watched
    server.start.bind(server)()
  });
});

//  Watch for file changes (TASK)
//  -----------------------------
gulp.task('watch', function() {                           // sets up the watching of selected files
  gulp.watch(['./src/public/less/modules/**/*.less'], ['less']);  // 
});

//  Default task
//  ------------
gulp.task('default', ['watch', 'server']);   // the default task runs the watching of files and starts the server
