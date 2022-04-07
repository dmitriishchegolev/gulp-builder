import gulp from 'gulp';
import clean from 'gulp-clean';

export const cleanDist = () => {
  return gulp.src('dist').pipe(clean());
};
