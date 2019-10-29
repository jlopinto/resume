module.exports = {
  modules: {
    scsslint: { configFile: './src/styles/.scsslint.yml' },
    uncss: { configFile: './src/styles/.uncssrc' },
    eslint: { configFile: './src/scripts/.eslintrc.json' }
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
      views: './',
      index: './dist/',
      styles: './dist/',
      scripts: './dist/',
      images: './dist/images/',
      fonts: './dist/fonts/',
      data: './dist/datas/'
    }
  }
};
