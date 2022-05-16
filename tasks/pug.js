const { src, dest } = require('gulp')
const pug = require('gulp-pug')

const config = {
  // pretty: process.env.NODE_ENV === 'development',
  pretty: true,
  data: {
    // development: process.env.NODE_ENV === 'development',
    development: true,
    // production: process.env.NODE_ENV === 'production',
    production: false,
  }
}

module.exports = function() {
  return src('source/pages/*.pug')
    .pipe(pug(config))
    .pipe(dest('dest/'))
}
