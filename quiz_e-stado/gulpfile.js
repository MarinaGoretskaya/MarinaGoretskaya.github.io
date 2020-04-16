const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const jquery = require('jquery');
const watch = require('gulp-watch');

const cssFiles = [
	// './node_modules/jquery/dist/css/bootstrap.min.css',
	'./scss/**/*.scss'
]

const jsFiles = [
	'./node_modules/jquery/dist/jquery.min.js',
	'./node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
	'./node_modules/inputmask/dist/jquery.inputmask.min.js',
	'./js/ajax.js',
	'./js/main.js'
]

function scripts() {
	return gulp.src(jsFiles)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./js'))
}

gulp.task('sass-compile', function () {
	// return gulp.src('./scss/**/*.scss')
	return gulp.src(cssFiles)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css/'))
})

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
	gulp.watch('./js/**/*.js', scripts);
})

gulp.task('scripts', scripts);

