var gulp = require('gulp');
var gutil = require('gulp-util');

//var watch = require('./watch.js');

var dest;
gutil.env.dev = true;

if ( gutil.env.prod === true ) {
  dest = 'dist';
} else {
  dest = 'dev';
}

module.exports = {
  paths: {
    dist: dest,
    pug: {
      all: './src/**/*.pug',
      src: './src/**/*.pug',
      dist: './'+dest,
    },
    styles: {
      all: 'src/assets/scss/**/*.scss',
      src: 'src/assets/scss/*.scss',
      dist: dest+'/assets/css'
    },
    js: {
      all: 'src/**/*.js',
      app: 'src/app/**/*.js',
      custom: 'src/assets/scripts/*.js',
      vendor: 'src/assets/scripts/vendor/*.js',
      dist: dest+'/assets/js',
      distApp: dest+'/app'
    },
    fonts: {
      src: './src/assets/fonts/**/*',
      dist: './'+dest+'/assets/fonts',
    },
  },
  names: {
    css: 'app.min.css',
    js: {
      app: 'app.min.js',
      vendor: 'vendor.min.js'
    }
  }
};
