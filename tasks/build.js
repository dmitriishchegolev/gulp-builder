import gulp from 'gulp';
import { buildHtml } from './html.js';
import { buildStylesDev, buildStylesProd } from './styles.js';

export const buildProcessDev = gulp.series(buildHtml, buildStylesDev);
export const buildProcessProd = gulp.series(buildHtml, buildStylesProd);
