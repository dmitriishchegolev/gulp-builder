import gulp from 'gulp';
import { buildHtml } from './html.js';
import { buildStyles } from './styles.js';

export const buildProcessProd = gulp.parallel(buildHtml, buildStyles);
export const buildProcessDev = gulp.parallel(buildHtml, buildStyles);
