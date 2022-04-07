import gulp from 'gulp';
import { buildHtmlDev, buildHtmlProd } from './html.js';
import { buildStylesDev, buildStylesProd } from './styles.js';

export const buildProcessDev = gulp.series(buildHtmlDev, buildStylesDev);
export const buildProcessProd = gulp.series(buildHtmlProd, buildStylesProd);
