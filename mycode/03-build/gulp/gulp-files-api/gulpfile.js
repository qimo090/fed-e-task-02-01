const { src, dest } = require('gulp')
const clearCss = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = () => {
  return src('./src/*.css')
    .pipe(clearCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
