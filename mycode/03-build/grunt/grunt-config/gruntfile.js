module.exports = grunt => {
  grunt.initConfig({
    foo: {
      bar: 123,
    },
  })

  grunt.registerTask('foo', () => {
    console.log(grunt.config('foo.bar'))
  })
}
