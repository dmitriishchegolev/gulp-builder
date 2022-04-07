import gulp from 'gulp';
import fileinclude from 'gulp-file-include';

export const buildHtml = () => {
  return gulp
    .src(['src/app/**/*.html', '!src/app/modules/**/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'));
};
