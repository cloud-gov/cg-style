
var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

var base = '../';

var config = {
  mode: {
    symbol: {
      dest: '', 
      sprite: 'icons.svg'
    }
  }
};

gulp.task('svg-sprite', function() {
  return gulp.src(base + './src/img/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest(base + './img'));
});

gulp.task('default', function() {
  // place code for your default task here
  gulp.start('svg-sprite');
});

