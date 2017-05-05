var gulp = require('gulp');
var deploy = require('gulp-gh-pages')
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

var paths = {
    jsSource: ['public/app/**/*.js'],
    cssSource: ['public/app/**/*.scss'],
    viewsSource: ['public/**/*.html'],
    icoSource: ['public/**/*.ico'],
    imgSource: ['public/app/images/**.*']
};

gulp.task('deploy', function () {
    return gulp.src('./dist/**.*')
    .pipe(deploy())
});

gulp.task('js', function () {
    gulp.src(paths.jsSource)
        .pipe(annotate())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist'));     
});

gulp.task('views', function () {
    gulp.src(paths.viewsSource)
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
    gulp.src(paths.cssSource)
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('ico', function () {
    gulp.src(paths.icoSource)
    .pipe(gulp.dest('./dist'));
});

gulp.task('img', function () {
    gulp.src(paths.imgSource)
    .pipe(gulp.dest('./dist/app/images'));
});

gulp.task('watch', function () {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.viewsSource, ['views']);
    gulp.watch(paths.cssSource, ['css']);
    gulp.watch(paths.icoSource, ['ico']);
    gulp.watch(paths.imgSource, ['img']);
});

gulp.task('default', ['js','views','css','ico','img','watch']);
