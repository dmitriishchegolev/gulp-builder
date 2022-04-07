import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import clean from 'gulp-clean-css';
import map from 'gulp-sourcemaps';
import connect from 'gulp-connect';
import prefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);
const browsers = [
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24',
  'Explorer >= 11',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6',
];

export const buildStylesDev = () =>
  gulp
    .src('./src/styles/styles.scss')
    .pipe(map.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      prefixer({
        overrideBrowserslist: ['last 8 versions'],
        browsers,
      })
    )
    .pipe(clean({ compatibility: 'ie8' }))
    .pipe(map.write('./'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());

export const buildStylesProd = () =>
  gulp
    .src('./src/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      prefixer({
        overrideBrowserslist: ['last 8 versions'],
        browsers,
      })
    )
    .pipe(clean({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
