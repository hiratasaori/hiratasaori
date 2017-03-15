/* jshint node: true */
'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var please = require('gulp-pleeease');
var watchList = {
    stylus: [
        './src/stylus/*.styl',
        '!./src/stylus/_*.styl'
    ]
};

var AUTOPREFIXER_BROWSERS = [
    'last 2 versions',
    'Android 2.3'
];

gulp.task('default', function () {
    gulp.watch(watchList.stylus, ['stylus']);
});

gulp.task('stylus', function () {
    return gulp.src( ['./src/stylus/*.styl', '!./src/stylus/_*.styl'] )
        .pipe(plumber())
        .pipe(stylus())
        .pipe(please({
            "autoprefixer": { "browsers": AUTOPREFIXER_BROWSERS },
            minifier: false,
            stylus: true
        }))
        .pipe(gulp.dest('./css/'))
        .on('end', reload);
});
