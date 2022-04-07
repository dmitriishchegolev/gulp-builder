import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import connect from 'gulp-connect';

export const buildHtml = () => {
  return gulp
    .src(['src/app/**/*.html', '!src/app/modules/**/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
};
