const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname,
      },
    ]).then(answers => {
      this.answers = answers
    })
  }
  writing() {
    const templates = [
      './README.md',
      './package.json',
      './public',
      './public/favicon.ico',
      './public/index.html',
      './src',
      './src/index.css',
      './src/index.js',
      './src/kreact',
      './src/kreact/CONST.js',
      './src/kreact/Component.js',
      './src/kreact/ReactDOM.js',
      './src/kreact/index.js',
      './src/kreact-2',
      './src/kreact-2/CONSTS.js',
      './src/kreact-2/Component.js',
      './src/kreact-2/ReactDOM.js',
      './src/kreact-2/index.js',
      './yarn.lock',
    ]

    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}
