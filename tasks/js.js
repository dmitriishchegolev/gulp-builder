import gulp from 'gulp';
import map from 'gulp-sourcemaps';
import connect from 'gulp-connect';
import uglify from 'gulp-uglify-es';

export const buildJsDev = () =>
  gulp
    .src('src/app/**.js')
    .pipe(map.init())
    .pipe(uglify.default())
    .pipe(map.write('./'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());

export const buildJsProd = () =>
  gulp
    .src('src/app/**.js')
    .pipe(uglify.default())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
