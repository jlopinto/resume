import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import uncss from 'postcss-uncss';
import sourcemaps from 'gulp-sourcemaps';
import { argv } from 'yargs';
import conf from './helpers/options';
import { noop } from './helpers/tools';


const { production } = argv;

const styleBundler = () => {

  const plugins = [
    autoprefixer(),
    cssnano()
  ];

  return gulp
    .src(conf.paths.src.styles)
    .pipe(!production ? sourcemaps.init() : noop())
    .pipe(sass({ precision: 8 }).on('error', sass.logError))
    .pipe(postcss(plugins))
    // .pipe(autoprefixer())
    // .pipe(!production ? noop() : cleanCss({
    //   specialComments: 'all'
    // }))
    .pipe(!production ? sourcemaps.write() : noop())
    .pipe(gulp.dest(conf.paths.dist.styles));

  // return gulp.src(`${conf.paths.dist.styles}main.css`)
  //   .pipe(postcss([
  //     uncss({
  //       uncssrc: conf.modules.uncss.configFile,
  //       html: [`${conf.paths.dist.views}index.html`],
  //     })
  //   ]))
  //   .pipe(gulp.dest(`${conf.paths.dist.styles}styles.css`))
}

export default styleBundler;
