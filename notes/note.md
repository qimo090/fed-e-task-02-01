> Part 2 - 前端工程化实战
>
> Module 1 - 开发脚手架与自动化构建工作流封装
>
> 本模块带你了解到底什么是前端工程化，同时了解脚手架工具的本质和工作原理，然后自己开发一个脚手架工具；另外还会学习如何自动化构建工具实现开发过程中的自动化，从而提高开发效率，以及自动化构建工具的发展，其中我们会基于 Gulp 封装一套自己的自动化构建工作流。

# Part 2 - Module 1

## Task 1 - 工程化概述

### 前端工程化

> 全副武装：通过工程化提升「战斗力」

#### 「刀耕火种」的年代

![WechatIMG3](https://tva1.sinaimg.cn/large/007S8ZIlly1gf9n30jefhj31q60py7dc.jpg)

#### 面临的问题

> 技术是为了解决问题而存在的

- 想要使用 ES6+ 新特性，但是存在兼容问题
- 想要使用 Less/Sass/PostCSS 增强 CSS 的编程性，但是运行环境不能直接支持
- 想要使用模块化的方式提高项目的可维护性，但运行环境不能直接支持
- 部署上线前需要 **手动** 压缩代码及资源文件，部署过程需要 **手动** 上传代码到服务器
- 多人协作开发，无法硬性统一大家的代码风格，从仓库中 pull 回来的代码质量无法保证
- 部分功能开发时需要等待后端服务接口提前完成

#### 主要解决的问题

- 传统语言或语法的弊端
- 无法使用模块化/组件化
- 重复的机械式工作
- 代码风格统一、质量保证
- 依赖后端服务接口支持
- 整体依赖后端项目

### 工程化表现

> 一切以提高效率、降低成本、质量保证为目的的手段都属于「工程化」

#### 一切重复的工作都应该被自动化

```flow
st=>start: 创建项目
op1=>operation: 编码
op2=>operation: 预览/测试
op3=>operation: 提交
e=>end: 部署
st(right)->op1(right)->op2(right)->op3(right)->e(right)
e(top)->op1(right)->op2(right)->op3(right)->e(right)
```

- 创建项目
  - 创建项目结构
  - 创建特定类型文件
- 编码
  - 格式化代码
  - 校验代码风格
  - 编译/构建/打包
- 预览/测试
  - Web Server / Mock
  - Live Reloading / HMR
  - Source Map
- 提交
  - Git Hooks
  - Lint-staged
  - 持续集成
- 部署
  - CI/CD
  - 自动发布

#### 工程化 ≠ 某个工具

![image-20200530091828104](https://tva1.sinaimg.cn/large/007S8ZIlly1gfa7nzxaqhj31fo0u0avd.jpg)

#### 一些成熟的工程化集成

- create-react-app
- vue-cli
- angular-cli
- gatsby-cli

### 工程化与 Node.js

> Powered by Node.js
>
> 厥功至伟的 Node.js

#### 内容概要

- 脚手架工具的开发
- 自动化构建系统
- 模块化打包
- 项目代码规范化
- 自动化部署

## Task 2 - 脚手架工具

### 概要

#### 脚手架工具

- 前端工程化的发起者

#### 脚手架的本质作用

- 创建项目的基础结构、提供项目规范和约定
  - 相同的组织结构
  - 相同的开发范式
  - 相同的模块依赖
  - 相同的工具配置
  - 相同的基础代码
- 举个例子
  - IDE 创建项目的过程就是一个脚手架的工作流程，如 Android Studio

#### 后续内容概要

- 脚手架的作用
- 常用的脚手架工具
- 通用脚手架工具剖析
- 开发一款脚手架

### 常用的脚手架工具

| -            | -                |
| ------------ | ---------------- |
| React 项目   | create-react-app |
| Vuejs 项目   | vue-cli          |
| Angular 项目 | angular-cli      |

根据信息创建对应的项目基础结构

Yeoman https://yeoman.io/

Plop https://plopjs.com/

例如创建一个组建/模板所需要的文件

重点关注几个有代表性的工具

### Yeoman

> The web's scaffolding tool for modern webapps

#### 基本使用

- 在全局范围安装 yo

  ```shell
  $ npm install yo --global # or yarn global add yo
  ```

- 安装对应的 generator

  ```shell
  $ npm install generator-node --global # or yarn global add generator-node
  ```

- 通过 yo 运行 generator

  ```shell
  $ cd path/to/project-dir
  $ mkdir my-module
  $ yo node
  ```

#### Sub Generator

#### 常规使用步骤

1. 明确你的需求；
2. 找到合适的 Generator；
3. 全局范围安装找到的 Generator；
4. 通过 Yo 运行对应的 Generator；
5. 通过命令行交互填写选项；
6. 生成你所需要的项目结构；

#### 自定义 Generator

> 基于 Yeoman 搭建自己的脚手架

#### 创建 Generator 模块

> Generator 本质上就是一个 NPM 模块

Generator 基本结构

```
|- generators/ ------------ 生成器目录
|  |- app/ ---------------- 默认生成器目录
|	 |  |- index.js --------- 默认生成器实现
|  |- component/ ---------- 其他生成器目录
|  |  |- index.js --------- 其他生成器实现
|- package.json ----------- 模块包配置文件
```

generator-\<name\>

#### 根据模板创建文件

#### 接受用户输入数据

#### Vue Generator 案例

#### 发布 Generator

### Plop

一个小而美的脚手架

#### Plop 的基本使用

步骤

- 将 plop 模块作为项目开发依赖安装
- 在项目根目录下创建一个 plopfile.js 文件
- 在 plopfile.js 文件中定义脚手架任务
- 编写用于生成特定类型文件的模板
- 通过 Plop 提供的 CLI 运行脚手架任务

## Task 3 - 自动化构建

> 一切重复工作都应自动化

自动化 构建

源代码 => 自动化构建 => 生产代码

自动化构建工作流

脱离运行环境兼容带来的问题

在开发阶段使用提高效率的语法、规范和标准

- ECMAScript Next
- Sass
- 模板引擎

这些用法大都不被浏览器直接支持

自动化构建工具，构建转换那些不被支持的「特性」

NPM Scripts

实现自动化构建工作流的最简方式

### 常用的自动化构建工具

Grunt Gulp FIS

### Gulp

#### 基本使用

1. 新建一个空项目

   ```shell
   mkdir gulp-sample && cd gulp-sample
   ```

2. 初始化

   ```shell
   yarn init -y # npm init -y
   ```

3. 安装 gulp 开发依赖

   ```shell
   yarn add gulp --dev # npm i gulp -D
   ```

4. 根目录新建 gulp 入口文件

   ```shell
   touch gulpfile.js
   ```

#### 新建 gulp 任务

`done()` 标识任务完成

1. 老方式，_不推荐_

   ```js
   gulp.task('bar', done => {
     console.log('bar working ~')
     done()
   })
   ```

2. 通过导出成员的方式创建任务

   ```js
   // 具名任务
   exports.foo = done => {
     console.log('foo task working ~')
     done()
   }

   // 默认任务
   exports.default = done => {
     console.log('default task working')
     done()
   }
   ```

#### 组合任务

串行、并行执行多任务

```js
const { series, parallel, task } = require('gulp')

const task1 = done => {
  setTimeout(() => {
    console.log('task1 working ~')
    done()
  }, 1000)
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2 working ~')
    done()
  }, 1000)
}

const task3 = done => {
  setTimeout(() => {
    console.log('task3 working ~')
    done()
  }, 1000)
}

// 串行
exports.foo = series(task1, task2, task3)
// 并行
exports.bar = parallel(task1, task2, task3)
```

#### 异步任务的三种方式

```js
const fs = require('fs')

// 回调方式
exports.callback = done => {
  console.log('callback task ~')
  done()
}
exports.callback_error = done => {
  console.log('callback task ~')
  done(new Error('task failed!'))
}

// Promise 方式
exports.promise = () => {
  console.log('promise task~')
  return Promise.resolve()
}
exports.promise_error = () => {
  console.log('promise task~')
  return Promise.reject(new Error('task failed!'))
}

// Promise - async await
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
exports.async = async () => {
  await timeout(1000)
  console.log('async task~')
}

// stream 流
// exports.stream = () => {
//   const readStream = fs.createReadStream('package.json')
//   const writeStream = fs.createWriteStream('temp.txt')
//   readStream.pipe(writeStream)
//   return readStream
// }

exports.stream = done => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('temp.txt')
  readStream.pipe(writeStream)
  readStream.on('end', () => {
    done()
  })
}
```

#### 构建过程核心工作原理

```js
const fs = require('fs')
const { Transform } = require('stream')

exports.default = () => {
  // 文件读取流
  const read = fs.createReadStream('./normalize.css')
  // 文件写入流
  const write = fs.createWriteStream('./normalize.min.css')

  // 文件转换流
  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      // 核心转换过程实现
      // chunk => 读取流中读取的内容(Buffer)
      const input = chunk.toString()
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
      callback(null, output)
    },
  })

  // 把读取出来的文件流导入写入文件流
  read
    .pipe(transform) // 转换
    .pipe(write) // 写入

  return read
}
```

输入 => 加工 => 输出

读取流 => 转换流 => 写入流

> The streaming build system

#### 文件操作 API

```js
const { src, dest } = require('gulp')
const clearCss = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = () => {
  return src('./src/*.css')
    .pipe(clearCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
```

### Gulp 案例

#### 样式编译

```js
const { src, dest } = require('gulp')
const sass = require('gulp-sass')

const style = () => {
  return src('./src/assets/styles/*.scss', { base: 'src' })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('dist'))
}

module.exports = {
  style,
}
```

#### 脚本编译

```js
const { src, dest } = require('gulp')
const babel = require('gulp-babel')

const script = () => {
  return src('./src/assets/scripts/*.js', { base: 'src' })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('dist'))
}

module.exports = {
  script,
}
```

#### 页面模板编译

```js
const { src, dest } = require('gulp')
const swig = require('gulp-swig')

const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html',
    },
    {
      name: 'Features',
      link: 'features.html',
    },
    {
      name: 'About',
      link: 'about.html',
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce',
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme',
        },
        {
          name: 'divider',
        },
        {
          name: 'About',
          link: 'https://github.com/zce',
        },
      ],
    },
  ],
  pkg: require('./package.json'),
  date: new Date(),
}

const page = () => {
  return src('./src/*.html', { base: 'src' })
    .pipe(swig({ data }))
    .pipe(dest('dist'))
}
module.exports = {
  page,
}
```

并行处理

```js
const compile = parallel(style, script, page)
module.exports = {
  compile,
}
```

#### 图片和字体文件的转换

```js
const image = () => {
  return src('./src/assets/images/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}

const font = () => {
  return src('./src/assets/fonts/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}
```

#### 其他文件及文件清除

```js
const del = require('del')

const clean = () => {
  return del(['dist'])
}

const compile = parallel(style, script, page, image, font)
const build = series(clean, parallel(compile, extra))

module.exports = {
  compile,
  build,
}
```

#### 自动加载插件

```js
const loadPlugins = require('gulp-load-plugins')

const plugins = loadPlugins()

const style = () => {
  return src('./src/assets/styles/*.scss', { base: 'src' })
    .pipe(plugins.sass({ outputStyle: 'expanded' }))
    .pipe(dest('dist'))
}

// ...
```

#### 开发服务器

```js
const browserSync = require('browser-sync')
const bs = browserSync.create()

const serve = () => {
  bs.init({
    notify: false,
    port: 2080,
    open: false,
    files: 'dist/**',
    server: {
      baseDir: 'dist',
      routes: {
        '/node_modules': 'node_modules',
      },
    },
  })
}
```

#### Useref 文件引用处理

```js
const useref = () => {
  return src('dist/*.html', { base: 'dist' })
    .pipe(plugins.useref({ searchPath: ['dist', '.'] }))
    .pipe(dest('dist'))
}
```

#### 文件压缩

```js
const useref = () => {
  return (
    src('dist/*.html', { base: 'dist' })
      .pipe(plugins.useref({ searchPath: ['dist', '.'] }))
      // html js css
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
      .pipe(dest('release'))
  )
}
```

#### 重新规划构建过程
