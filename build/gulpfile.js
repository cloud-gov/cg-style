
var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var gulpStylelint = require('gulp-stylelint');
var path = require('path');

var base = '../';

var config = {
  mode: {
    symbol: {
      dest: '',
      sprite: 'cloudgov-sprite.svg'
    }
  }
};

// Build an svg-sprite with svg <symbol>s out of all the svg images.
gulp.task('svg-sprite', function() {
  return gulp.src(base + './src/img/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest(base + './img'));
});

gulp.task('default', function() {
  // Will perform any build tasks that require the gulp build system.
  gulp.start('svg-sprite');
});

gulp.task('scss:lint', function() {
  return gulp
    .src('../src/css/**/*.scss')
    .pipe(gulpStylelint({
      config: require('../stylelintrc.js'),
      configBasedir: path.join(__dirname, '../', './lib'),
      syntax: 'scss',
      reporters: [
        {formatter: 'verbose', console: true}
      ]
    }));
});
