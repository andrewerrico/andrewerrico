var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.paths.pug.all, ['pug']);
  gulp.watch(config.paths.styles.all, ['styles']);
  gulp.watch(config.paths.js.all, ['scripts']);
});
