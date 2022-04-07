import gulp from 'gulp';
import watch from 'gulp-watch';
import connect from 'gulp-connect';
import { buildHtmlDev, buildHtmlProd } from './html.js';
import { buildStylesDev, buildStylesProd } from './styles.js';
import { buildJsDev, buildJsProd } from './js.js';

export const watchDev = () => {
  watch('src/app/**/*.html', buildHtmlDev);
  watch('src/app/**/*.js', buildJsDev);
  watch('src/styles/**/*.scss', buildStylesDev);
};

export const watchProd = () => {
  watch('src/app/**/*.html', buildHtmlProd);
  watch('src/app/**/*.js', buildJsProd);
  watch('src/styles/**/*.scss', () => buildStylesProd);
};
