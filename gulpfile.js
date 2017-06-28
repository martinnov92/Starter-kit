var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function(){
  return gulp.src('client/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('client/css/build/'))
});