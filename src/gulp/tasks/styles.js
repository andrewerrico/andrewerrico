var gulp = require('gulp');
var config = require('../config');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var browserSync = require('browser-sync');

// Sass Task
gulp.task('styles', function() {
  return gulp.src(config.paths.styles.src)

    .pipe(gutil.env.dev === true ? sass({outputStyle: 'expanded'}) : gutil.noop())
    .pipe(gutil.env.prod === true ? sass({outputStyle: 'compressed'}) : gutil.noop())
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest(config.paths.styles.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});
