import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import connect from 'gulp-connect';

export const buildHtmlDev = () => {
  return gulp
    .src(['src/app/**/*.html', '!src/app/modules/**/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
};

export const buildHtmlProd = () => {
  return gulp
    .src(['src/app/**/*.html', '!src/app/modules/**/*.html'])
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
};
