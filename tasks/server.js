import connect from 'gulp-connect';

export const server = () =>
  connect.server({
    root: 'dist',
    port: 4000,
    livereload: true,
  });
