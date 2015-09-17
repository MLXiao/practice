var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var amdOptimize = require('amd-optimize');

gulp.task('css', function() {
	return gulp.src('./sass/**/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(autoprefixer(['last 2 versions']))
   	    .pipe(concat('app.css'))
	    .pipe(minifyCss())
	    .pipe(rename({suffix: ".min"}))
	    .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
    return gulp.src('./js/**/*.js')
        .pipe(amdOptimize('bootstrap'))
        .pipe(concat('main-bundle.js'))
        .pipe(gulp.dest('./js/build'));
});

gulp.task('default', function () {
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./sass/**/*.scss', ['css']);
});