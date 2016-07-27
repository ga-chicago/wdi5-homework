var gulp = require('gulp'),
    less = require('less');


gulp.task('less', function() {
  gulp.src('./app/public/less/style.less')
  .pipe(less())
  .pipe(gulp.dest('./app/public/css'))
});

gulp.task('watch', function() {
  gulp.watch(['./app/public/less/**/*.less'], ['less'])
});

gulp.task('default', ['watch']);

