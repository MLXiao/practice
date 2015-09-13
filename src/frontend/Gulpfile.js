var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");

gulp.task('css', function() {
	return gulp.src('./sass/**/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(autoprefixer(['last 2 versions']))
    .pipe(concat('app.css'))
	  .pipe(minifyCss())
	  .pipe(rename({suffix: ".min"}))
	  .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['css']);
});