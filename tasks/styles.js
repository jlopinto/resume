import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import uncss from 'gulp-uncss';
import sourcemaps from 'gulp-sourcemaps';
import { argv } from 'yargs';
import conf from './helpers/options';
import { noop, onErrorHandler } from './helpers/tools';


const { production } = argv;

const styleBundler = () => gulp
  .src(conf.paths.src.styles)
  .pipe(!production ? sourcemaps.init() : noop())
  .pipe(sass({ precision: 8 }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(uncss({ uncssrc:'.uncssrc'}))
  .pipe(!production ? noop() : cleanCss({
    specialComments: 'all'
  }))
  .pipe(!production ? sourcemaps.write() : noop())
  .pipe(gulp.dest(conf.paths.dist.styles))

export default styleBundler;
