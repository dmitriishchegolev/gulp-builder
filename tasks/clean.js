import gulp from 'gulp';
import clean from 'gulp-clean';

export const cleanDist = () =>
  gulp.src('./dist', { allowEmpty: true }).pipe(clean());
