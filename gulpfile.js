var gulp      = require('gulp');
var sass      = require('gulp-sass');
var babel     = require('gulp-babel');
var watch     = require('gulp-watch');
var webserver = require('gulp-webserver');
var plumber   = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function() {
    gulp.src('./src/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
            // ☆IEは9以上、Androidは4以上、iOS Safariは8以上
            // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
            browsers: ["last 2 versions", "ie >= 9", "Android >= 4","ios_saf >= 8"],
            cascade: false
        }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('babel', function() {
    gulp.src(['src/*.js', 'src/**/*.js']).pipe(plumber()).pipe(babel()).pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch([
        'src/*.js', 'src/**/*.js', './src/scss/*.scss'
    ], ['sass', 'babel']);
});

gulp.task('webserver', function() {
    gulp.src('./').pipe(webserver({livereload: true}));
});

gulp.task('default', ['webserver', 'watch']);
