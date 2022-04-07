import gulp from 'gulp';
import { buildProcessDev, buildProcessProd } from './tasks/build.js';
import { server } from './tasks/server.js';
import { watchDev, watchProd } from './tasks/watch.js';

export const buildDev = buildProcessDev;
export const buildProd = buildProcessProd;

export const serveDev = gulp.series(
  buildProcessDev,
  gulp.parallel(server, watchDev)
);
export const serveProd = gulp.series(
  buildProcessProd,
  gulp.parallel(server, watchProd)
);
