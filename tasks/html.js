/**
 * HTML task
 * .html file generation
 */
import gulp from 'gulp';
import twig from 'gulp-twig';
import { argv } from 'yargs';
import htmlmin from 'gulp-htmlmin';
import conf from './helpers/options';
import { noop, onErrorHandler } from './helpers/tools';

const { production } = argv;


const htmlBundler = () => gulp
  .src(`${conf.paths.src.views}*.twig`)
  .pipe(twig())
  .pipe(production ? htmlmin({
    collapseWhitespace: true
  }) : noop())
  .pipe(gulp.dest(conf.paths.dist.views));

export default htmlBundler;
