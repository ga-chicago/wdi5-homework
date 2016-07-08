var gulp = require('gulp'),
    less = require('gulp-less'),
    gls  = require('gulp-live-server');


//Transpile LESS into CSS
gulp.task('less', function() {
  gulp.src('./src/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'));
});

// Run a local server
gulp.task('server', function() {
  var server = gls('./src/app.js', {NODE_ENV: 'development', PORT: 3000});
  server.start(); 


  gulp.watch(['gulpfile.js', './src/app.js'], function() {
    server.start.bind(server)()
  });
});

//watch for file changes
gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'] ['less']);
})

//Default task - watch files for changes and run a local server
gulp.task('default', ['watch', 'server']);



