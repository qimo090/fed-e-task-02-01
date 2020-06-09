module.exports = grunt => {
  grunt.initConfig({
    build: {
      options: {
        foo: 'bar',
      },
      css: '1',
      js: '2',
    },
  })
  // 多目标模式，可以让任务根据配置形成多个子任务
  grunt.registerMultiTask('build', function () {
    console.log(this)

    console.log(this.options())

    console.log(`target: ${this.target}, data: ${this.data}`)
  })
}
