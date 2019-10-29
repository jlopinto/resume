import gulp from 'gulp';
import { argv } from 'yargs';
const { production } = argv;
import scriptsLint from './tasks/scripts-lint';
import stylesLint from './tasks/styles-lint';
import scriptsbundler from './tasks/scripts';
import stylesbundler from './tasks/styles';
import htmlbundler from './tasks/html';
import watch from './tasks/watch';
import clean from './tasks/clean';
import copyMiscs from './tasks/copy-misc';
import copyFonts from './tasks/copy-fonts';
import svgSprite from './tasks/svg-sprite';
import imgOpti from './tasks/img-opti';
import uncss from './tasks/uncss';

// Single tasks
gulp.task('copy:misc', copyMiscs);
gulp.task('copy:fonts', copyFonts);

gulp.task('sprite:svg', svgSprite);
gulp.task('images', imgOpti);

gulp.task('lint:scripts', scriptsLint);
gulp.task('lint:styles', stylesLint);

gulp.task('scripts', scriptsbundler);
gulp.task('styles', stylesbundler);
gulp.task('uncss', uncss);

gulp.task('html', htmlbundler);
gulp.task('clean', clean);
gulp.task('uncss', uncss);

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('copy:misc', 'copy:fonts', 'images', 'sprite:svg', 'scripts'),
  'html',
  'styles',
  'uncss')
);

gulp.task('w', gulp.series('default', watch));
