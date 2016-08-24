var gulp = require('gulp');
var config = require('../config');

// Copy Fonts
gulp.task('fonts', function() {
  return gulp.src(config.paths.fonts.src)
    .pipe(gulp.dest(config.paths.fonts.dist))
});
