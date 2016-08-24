var gulp = require('gulp');
var config = require('../config');

var pug = require('gulp-pug');
var browserSync = require('browser-sync');

gulp.task('pug', function() {
  return gulp.src(config.paths.pug.src)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.paths.pug.dist))
    .pipe(browserSync.reload({
      stream: true
    }))
});
