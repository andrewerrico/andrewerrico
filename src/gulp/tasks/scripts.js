var gulp = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var del = require('del');
var browserSync = require('browser-sync');

// Task for handling custom scripts
gulp.task('custom-scripts', function() {

  return gulp.src(config.paths.js.custom)
    // concat
    .pipe(concat('app.js'))
    //.pipe(gutil.env.prod === true ? concat('app.js') : gutil.noop())
    // uglify
    .pipe(gutil.env.prod === true ? uglify() : gutil.noop())
    // add .min suffix
    .pipe(gutil.env.prod === true ? rename({suffix: '.min' }) : gutil.noop())
    //.pipe(concat('app.js'))
    //.pipe(uglify())
    //.pipe(rename({suffix: '.min' }))
    .pipe(gulp.dest(config.paths.js.dist))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Task for handling vendor scripts
gulp.task('vendor-scripts', function() {
  return gulp.src(config.paths.js.vendor)
    .pipe(gulp.dest(config.paths.js.dist))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Task for handling Angular scripts
gulp.task('app-scripts', function() {
  return gulp.src(config.paths.js.app)
    .pipe(concat('app.js'))
    .pipe(gutil.env.prod === true ? uglify() : gutil.noop())
    .pipe(gulp.dest(config.paths.js.distApp))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', ['custom-scripts', 'vendor-scripts', 'app-scripts']);
