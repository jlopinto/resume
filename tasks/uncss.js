import gulp from 'gulp';
import { argv } from 'yargs';
import conf from './helpers/options';
import { noop, onErrorHandler } from './helpers/tools';
import uncss from 'gulp-uncss';

const { production } = argv;

export default (cb) => {
  if (!production)
    cb();

  return gulp
    .src(`${conf.paths.dist.styles}main.css`)
    .pipe(uncss({
      uncssrc: conf.modules.uncss.configFile,
      html: [`${conf.paths.dist.views}index.html`]
    }))
    .pipe(gulp.dest(`${conf.paths.dist.styles}`));
}
