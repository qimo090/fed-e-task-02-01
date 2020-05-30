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

+ 想要使用 ES6+ 新特性，但是存在兼容问题
+ 想要使用 Less/Sass/PostCSS 增强 CSS 的编程性，但是运行环境不能直接支持
+ 想要使用模块化的方式提高项目的可维护性，但运行环境不能直接支持
+ 部署上线前需要 **手动** 压缩代码及资源文件，部署过程需要 **手动** 上传代码到服务器
+ 多人协作开发，无法硬性统一大家的代码风格，从仓库中 pull 回来的代码质量无法保证
+ 部分功能开发时需要等待后端服务接口提前完成

#### 主要解决的问题

+ 传统语言或语法的弊端
+ 无法使用模块化/组件化
+ 重复的机械式工作
+ 代码风格统一、质量保证
+ 依赖后端服务接口支持
+ 整体依赖后端项目



### 工程化表现

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

+ 创建项目
  + 创建项目结构
  + 创建特定类型文件
+ 编码
  + 格式化代码
  + 校验代码风格
  + 编译/构建/打包
+ 预览/测试
  + Web Server / Mock
  + Live Reloading / HMR
  + Source Map
+ 提交
  + Git Hooks
  + Lint-staged
  + 持续集成
+ 部署
  + CI/CD
  + 自动发布



#### 工程化 ≠ 某个工具

![image-20200530091828104](https://tva1.sinaimg.cn/large/007S8ZIlly1gfa7nzxaqhj31fo0u0avd.jpg)

#### 一些成熟的工程化集成

+ create-react-app
+ vue-cli
+ angular-cli
+ gatsby-cli



### 工程化与 Node.js

> Powered by Node.js
>
> 厥功至伟的 Node.js

#### 内容概要

+ 脚手架工具的开发
+ 自动化构建系统
+ 模块化打包
+ 项目代码规范化
+ 自动化部署



## Task 2 - 脚手架工具

### 概要

#### 脚手架工具

+ 前端工程化的发起者

#### 脚手架的本质作用

+ 创建项目的基础结构、提供项目规范和约定
  + 相同的组织结构
  + 相同的开发范式
  + 相同的模块依赖
  + 相同的工具配置
  + 相同的基础代码
+ 举个例子
  + IDE 创建项目的过程就是一个脚手架的工作流程，如 Android Studio

#### 后续内容概要

+ 脚手架的作用
+ 常用的脚手架工具
+ 通用脚手架工具剖析
+ 开发一款脚手架



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

+ 在全局范围安装 yo

  ```shell
  $ npm install yo --global # or yarn global add yo
  ```

+ 安装对应的 generator

  ```shell
  $ npm install generator-node --global # or yarn global add generator-node
  ```

+ 通过 yo 运行 generator

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

