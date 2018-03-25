/**
 * Created by locker on 3/22/2018.
 */
var gulp        = require('gulp');

var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');
var server = require('gulp-server-livereload');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var TestServer = require('karma').Server;

gulp.task('build', function () {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: './app/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('serve', function(done) {
    gulp.src('./')
      .pipe(webserver({
        livereload: true,
        open: true,
        port:8080
      }));
  });

gulp.task('sass', function () {
  gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat('./dist/style.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('test',function (done) {
    new TestServer({
        configFile: __dirname+'/karma.conf.js',
        debug:true
    },done).start();
});

gulp.task('watch', ['build','sass'], function () {
    gulp.watch('./app/js/*.js', ['build']);
    gulp.watch('./app/scss/*.scss',['sass']);
});

gulp.task('default', ['serve','watch']);

