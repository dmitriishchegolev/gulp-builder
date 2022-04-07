import gulp from 'gulp';
import { buildHtmlDev, buildHtmlProd } from './html.js';
import { buildStylesDev, buildStylesProd } from './styles.js';
import { buildJsDev, buildJsProd } from './js.js';
import { cleanDist } from './clean.js';

export const buildProcessDev = gulp.series(
  cleanDist,
  buildHtmlDev,
  buildStylesDev,
  buildJsDev
);

export const buildProcessProd = gulp.series(
  cleanDist,
  buildHtmlProd,
  buildStylesProd,
  buildJsProd
);
