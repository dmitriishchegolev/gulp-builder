import gulp from 'gulp';
import connect from 'gulp-connect';

export const server = () => {
  return connect.server({
    root: 'dist',
    port: 4000,
    livereload: true,
  });
};
