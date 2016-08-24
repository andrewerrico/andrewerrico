var gulp = require('gulp');
var config = require('../config');
var gutil = require('gulp-util');

var browserSync = require('browser-sync');

gulp.task('default', ['build', 'watch', 'browserSync']);
