module.exports = grunt => {
  grunt.registerTask('bad', () => {
    console.log('bad working')
    return false
  })
  grunt.registerTask('foo', () => {
    console.log('foo working')
  })
  grunt.registerTask('bar', () => {
    console.log('bar working')
  })
  grunt.registerTask('default', ['foo', 'bad', 'bar'])

  grunt.registerTask('bad-async', function () {
    const done = this.async()
    setTimeout(() => {
      console.log('bad async working')
      done(false)
    }, 1000)
  })
}
