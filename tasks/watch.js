import watch from 'gulp-watch';
import { buildHtmlDev, buildHtmlProd } from './html.js';
import { buildStylesDev, buildStylesProd } from './styles.js';
import { buildJsDev, buildJsProd } from './js.js';
import { buildAssets } from './assets.js';

export const watchDev = () => {
  watch('src/app/**/*.html', buildHtmlDev);
  watch('src/app/**/*.js', buildJsDev);
  watch('src/styles/**/*.scss', buildStylesDev);
  watch('src/assets/**/*.*', buildAssets);
};

export const watchProd = () => {
  watch('src/app/**/*.html', buildHtmlProd);
  watch('src/app/**/*.js', buildJsProd);
  watch('src/styles/**/*.scss', () => buildStylesProd);
  watch('src/assets/**/*.*', buildAssets);
};
