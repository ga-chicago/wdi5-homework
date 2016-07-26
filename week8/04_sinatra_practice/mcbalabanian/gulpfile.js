var gulp = require('gulp'),
    less = require('gulp-less');

// Transpile LESS
gulp.task('less', function() {
  gulp.src('./app/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./app/public/css'))
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch(['./app/public/less/**/*.less'], ['less'])
});

// Default task
gulp.task('default', ['watch']);
