// 实现这个项目的构建任务
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
      },
      main: {
        files: {
          'dist/css/main.css': 'src/assets/styles/main.scss',
        },
      },
    },
    babel: {
      options: {
        presets: ['@babel/preset-env'],
      },
      main: {
        files: {
          'dist/js/app.js': 'src/assets/scripts/main.js',
        },
      },
    },
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

  // 开发
  grunt.registerTask('start', ['sass', 'babel', 'watch'])
  // 打包
  grunt.registerTask('build', ['clean', 'sass', 'babel'])
}
