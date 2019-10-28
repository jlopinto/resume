import gulp from 'gulp';
import conf from './helpers/options';

function watchTask() {
  gulp.watch(conf.paths.src.images, gulp.series('image'));
  gulp.watch(`${conf.paths.src.scripts}**/*.js`, gulp.series('scripts'));
  gulp.watch(conf.paths.src.styles, gulp.series('styles'));
  gulp.watch(conf.paths.src.fonts, gulp.series('copy:fonts'));
  gulp.watch(`${conf.paths.src.views}**/*.twig`, gulp.series('html'));
  gulp.watch(conf.paths.src.svg_sprites, gulp.series('sprite:svg'));
}

export default watchTask;
