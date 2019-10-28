import gulp from 'gulp';
import svgo from 'gulp-svgo';
import svgstore from 'gulp-svgstore';
import conf from './helpers/options';
import onError from './helpers/onError';

const svgSprite = () => gulp
  .src(conf.paths.src.svg_sprites)
  .pipe(onError())
  .pipe(svgo())
  .pipe(svgstore({ inlineSvg: true }))
  .pipe(gulp.dest(conf.paths.dist.images));

export default svgSprite;
