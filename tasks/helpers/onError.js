import gulpPlumber from 'gulp-plumber';

module.exports = error => gulpPlumber(
  () => {
    console.warn(error);
    this.emit('end');
  }
);
