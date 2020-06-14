// 实现这个项目的构建任务
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')
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

module.exports = grunt => {
  grunt.initConfig({
    htmlmin: {
      options: {
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 折叠空格
      },
      target: {
        files: {
          'dist/index.html': 'src/index.html',
          'dist/about.html': 'src/about.html',
        },
      },
    },
    // sass => css
    sass: {
      options: {
        implementation: sass,
      },
      main: {
        files: {
          'dist/assets/styles/main.css': 'src/assets/styles/main.scss',
        },
      },
    },
    // 压缩 css
    cssmin: {
      options: {},
      target: {
        files: {
          'dist/assets/styles/main.css': 'dist/assets/styles/main.css',
        },
      },
    },
    // js兼容
    babel: {
      options: {
        presets: ['@babel/preset-env'],
      },
      main: {
        files: {
          'dist/assets/scripts/main.js': 'src/assets/scripts/main.js',
        },
      },
    },
    // 压缩 js
    uglify: {
      options: {
        compress: {
          dead_code: true,
        },
      },
      targets: {
        files: {
          'dist/assets/scripts/main.js': 'dist/assets/scripts/main.js',
        },
      },
    },
    // 清除dist目录
    clean: ['dist'],
    watch: {
      js: {
        files: ['src/assets/scripts/*.js'],
        tasks: ['babel'],
      },
      css: {
        files: ['src/assets/styles/*.scss'],
        tasks: ['sass'],
      },
    },
  })
  // grunt.loadNpmTasks('grunt-sass')
  loadGruntTasks(grunt)
  // 打包
  grunt.registerTask('build', [
    'clean',
    'htmlmin',
    'sass',
    'cssmin',
    'babel',
    'uglify',
  ])
}
