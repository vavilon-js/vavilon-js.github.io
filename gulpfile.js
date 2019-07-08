const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

function scss(cb) {
    const options = {
        includePaths: ['./src/scss'],
        outputStyle: 'compressed'
    }

    gulp
        .src('./src/scss/style.scss')
        .pipe(sass(options))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css/'));

    cb();
}

exports.default = gulp.series(scss);
exports.watch = function() {
    gulp.watch('./src/scss/**/*.scss', scss);
}
