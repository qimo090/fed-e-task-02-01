#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: 'my-react-app',
    },
  ])
  .then(answers => {
    const tmplDir = path.resolve(__dirname, 'templates')
    const destDir = process.cwd()
    readdir(tmplDir, destDir, answers)
  })

function readdir(tmplDir, destDir, answers) {
  fs.readdir(tmplDir, (err, files) => {
    if (err) throw err
    files.forEach(file => {
      // 当前文件或文件夹
      const curDir = path.join(tmplDir, file)
      // 目标文件或文件夹
      const tarDir = path.join(destDir, file)
      // 判断当前是文件还是文件夹
      if (fs.statSync(curDir).isDirectory()) {
        fs.mkdirSync(tarDir)
        // 文件夹 => 递归调用读写文件
        readdir(curDir, tarDir, answers)
      } else {
        ejs.renderFile(curDir, answers, (err, result) => {
          if (err) throw err
          fs.writeFileSync(tarDir, result)
        })
      }
    })
  })
}
