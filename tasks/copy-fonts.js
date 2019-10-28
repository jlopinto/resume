import gulp from 'gulp';
import flatten from 'gulp-flatten';
import conf from './helpers/options';

const copyFonts = () => gulp
  .src(`${conf.paths.src.fonts}**/*`)
  .pipe(flatten())
  .pipe(gulp.dest(conf.paths.dist.fonts));

export default copyFonts;
