// 实现这个项目的构建任务

const { src, dest, parallel, series } = require('gulp')
const del = require('del')
const loadPlugins = require('gulp-load-plugins')

const plugins = loadPlugins()

// 模板变量数据集合
const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html',
    },
    {
      name: 'About',
      link: 'about.html',
    },
  ],
  pkg: require('./package.json'),
  date: new Date(),
}

// 清除 dist 和 temp 目录
const clean = () => del(['dist', 'temp'])

// css
const style = () => {
  return src('./src/assets/styles/*.scss', { base: 'src' })
    .pipe(plugins.sass({ outputStyle: 'expanded' }))
    .pipe(dest('temp'))
}

// js
const script = () => {
  return src('./src/assets/scripts/*.js', { base: 'src' })
    .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('temp'))
}

// 将 模板变量数据 注入html模板，并将html输出到 temp
const page = () => {
  return src('./src/*.html', { base: 'src' })
    .pipe(plugins.swig({ data }))
    .pipe(dest('temp'))
}

// image
const image = () => {
  return src('./src/assets/images/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

// font
const font = () => {
  return src('./src/assets/fonts/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

// public 下的文件直接挪到 dist 下
const extra = () => {
  return src('public/**', { base: 'public' }).pipe(dest('dist'))
}

// 合并 html 中引用的 js 和 css
const useref = () => {
  return src('temp/*.html', { base: 'temp' })
    .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
    .pipe(plugins.if(/\.js$/, plugins.uglify()))
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(
      plugins.if(
        /\.html$/,
        plugins.htmlmin({
          collapseWhitespace: true,
          minifyCss: true,
          minifyJS: true,
        })
      )
    )
    .pipe(dest('dist'))
}

const compile = parallel(style, script, page)
// 打包构建
const build = series(
  clean,
  parallel(series(compile, useref), image, font, extra)
)

module.exports = {
  clean,
  build,
}
