module.exports = {
  modules: {
    scsslint: { configFile: './.scsslint.yml' },
    eslint: { configFile: './.eslintrc.json' },
  },
  paths: {
    src: {
      index: './src/',
      views: './src/views/',
      styles: './src/styles/**/*.scss',
      scripts: './src/scripts/',
      fonts: './src/fonts/',
      images: './src/images/**/*',
      svg_sprites: './src/svg-sprite/**/*',
      data: './src/datas/**/*.json'
    },
    dist: {
      views: './dist/',
      index: './dist/',
      styles: './dist/styles/',
      scripts: './dist/scripts/',
      images: './dist/images/',
      fonts: './dist/fonts/',
      data: './dist/datas/'
    }
  }
};
