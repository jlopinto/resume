import through from 'through2';
import gulpPlumber from 'gulp-plumber';

const noop = () => through.obj();
const onErrorHandler = error => gulpPlumber(() => {
  console.warn(error);
  this.emit('end');
});
export { noop, onErrorHandler };
