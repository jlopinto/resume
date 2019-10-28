import gulp from 'gulp';
import { argv } from 'yargs';
import browserify from 'browserify';
import tap from 'gulp-tap';
import buffer from 'gulp-buffer';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import conf from './helpers/options';


import { noop, onErrorHandler } from './helpers/tools';

const { production } = argv;
const bundler = file => browserify({
  entries: file,
  debug: !production
});

const scriptsBundler = () =>
  gulp
    .src(`${conf.paths.src.scripts}*.js`, { read: false })
    .pipe(onErrorHandler())
    .pipe(!production ? sourcemaps.init() : noop())
    .pipe(
      tap(file => {
        const f = file;
        f.contents = bundler(f.path)
          .transform(babelify.configure({ presets: ['@babel/preset-env'] }))
          .transform("browserify-shim", { global: true })
          .bundle()
          .on('error', onErrorHandler);
      })
    )
    .pipe(buffer())
    .pipe(production ? uglify() : noop())
    .pipe(!production ? sourcemaps.write() : noop())
    .pipe(gulp.dest(conf.paths.dist.scripts));


export default scriptsBundler;
