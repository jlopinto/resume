import { argv } from 'yargs';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import conf from './helpers/options';
import { noop } from './helpers/tools';

const { production } = argv;

const scriptsLint = () => gulp
  .src(`${conf.paths.src.scripts}**/*.js`) // no need of reading file because browserify does.
  .pipe(eslint({ configFile: conf.modules.eslint.configFile }))
  .pipe(eslint.format())
  .pipe(!production ? noop() : eslint.failAfterError());

export default scriptsLint;
