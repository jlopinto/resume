import gulp from 'gulp';
import scsslint from 'gulp-sass-lint';

import { argv } from 'yargs';

import conf from './helpers/options';
import { noop } from './helpers/tools';

const { production } = argv;

const stylesLint = () => gulp
  .src(conf.paths.src.styles)
  .pipe(scsslint(conf.modules.scsslint))
  .pipe(scsslint.format())
  .pipe(!production ? noop() : scsslint.failOnError());

export default stylesLint;
