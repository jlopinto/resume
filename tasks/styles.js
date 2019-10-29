import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';
import { argv } from 'yargs';
import conf from './helpers/options';
import { noop } from './helpers/tools';


const { production } = argv;



const styleBundler = () => {
  return gulp
    .src(conf.paths.src.styles)
    .pipe(!production ? sourcemaps.init() : noop())
    .pipe(sass({ precision: 8 }).on('error', sass.logError))
    .pipe(postcss(production ? [autoprefixer(), cssnano()] : [autoprefixer()]))
    .pipe(!production ? sourcemaps.write() : noop())
    .pipe(gulp.dest(conf.paths.dist.styles))
}

export default styleBundler;
