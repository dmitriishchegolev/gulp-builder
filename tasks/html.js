import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import connect from 'gulp-connect';

export const buildHtmlDev = () =>
  gulp
    .src([
      'src/app/modules/**/*.html',
      '!src/app/modules/**/components/**/*.html',
    ])
    .pipe(fileinclude())
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());

export const buildHtmlProd = () =>
  gulp
    .src([
      'src/app/modules/**/*.html',
      '!src/app/modules/**/components/**/*.html',
    ])
    .pipe(fileinclude())
    .pipe(rename({ dirname: '' }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
