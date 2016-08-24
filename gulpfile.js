var requireDir = require('require-dir');

// pull in tasks
requireDir('./src/gulp/tasks', { recurse: true });
//var gulp = require('gulp');
//var gutil = require('gulp-util');
