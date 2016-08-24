var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

// BrowserSync Task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: config.paths.dist
    }
  })
});
