import gulp from 'gulp';
import { argv } from 'yargs';
import conf from './helpers/options';
import { noop, onErrorHandler } from './helpers/tools';
import uncss from 'gulp-uncss';

const { production } = argv;

export default () => {
  return gulp
    .src(`${conf.paths.dist.styles}main.css`)
    .pipe(uncss({
      html: [`${conf.paths.dist.views}app-index.html`]
    }))
    .pipe(gulp.dest(`${conf.paths.dist.styles}main.uncss.css`));
}
