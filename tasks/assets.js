import gulp from 'gulp';

export const buildAssets = () =>
  gulp.src('src/assets/**/*.*').pipe(gulp.dest('./dist/assets'));
