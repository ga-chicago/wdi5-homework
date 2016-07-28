var gulp       = require('gulp'),
    less       = require('gulp-less'),
    gls        = require('gulp-live-server'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream');

gulp.task('less', function(){
  gulp.src('./src/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'))
});

gulp.task('react', function(){
  return browserify('./clientReact/app.js')
          .transform('babelify', {presets: ["react", "es2015"]})
          .bundle()
          .pipe(source('build.js'))
          .pipe(gulp.dest('./app/public/js')) 
});

gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
  gulp.watch(['./clientReact/*.js'], ['react'])
});

gulp.task('default', ['watch']);
