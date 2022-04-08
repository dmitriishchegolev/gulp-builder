import gulp from 'gulp';
import { buildHtmlDev, buildHtmlProd } from './html.js';
import { buildStylesDev, buildStylesProd } from './styles.js';
import { buildJsDev, buildJsProd } from './js.js';
import { cleanDist } from './clean.js';

const buildAssets = () => gulp.src('src/assets').pipe(gulp.dest('./dist'));

export const buildProcessDev = gulp.series(
  cleanDist,
  buildAssets,
  buildHtmlDev,
  buildStylesDev,
  buildJsDev
);

export const buildProcessProd = gulp.series(
  cleanDist,
  buildAssets,
  buildHtmlProd,
  buildStylesProd,
  buildJsProd
);
