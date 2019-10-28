import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import options from './helpers/options';

const imgOpti = () => gulp
  .src(options.paths.src.images)
  .pipe(imagemin({ optimizationLevel: 5 }))
  .pipe(gulp.dest(options.paths.dist.images));

export default imgOpti;
