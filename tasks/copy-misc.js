import gulp from 'gulp';
import conf from './helpers/options';

const copyMisc = () => gulp
  .src([
    `${conf.paths.src.index}/.htaccess`,
    `${conf.paths.src.index}/*.png`,
    `${conf.paths.src.index}/*.txt`,
    `${conf.paths.src.index}/*.xml`,
    `${conf.paths.src.index}/*.ico`
  ])
  .pipe(gulp.dest(conf.paths.dist.index));

export default copyMisc;
