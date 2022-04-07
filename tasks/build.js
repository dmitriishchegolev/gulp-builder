import gulp from 'gulp';
import { buildHtmlDev, buildHtmlProd } from './html.js';
import { buildStylesDev, buildStylesProd } from './styles.js';
import { cleanDist } from './clean.js';

export const buildProcessDev = gulp.series(
  cleanDist,
  buildHtmlDev,
  buildStylesDev
);
export const buildProcessProd = gulp.series(
  cleanDist,
  buildHtmlProd,
  buildStylesProd
);
