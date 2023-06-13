# 介绍

提供一系列的组件方便快速开发。

## 基础组件

基础UI组件由 [Element Plus](https://element-plus.org/#/zh-CN) 提供大约**50+** 个组件。

阅读并学习请查看 [Element Plus 官方文档](https://element-plus.org/#/zh-CN)。


## 扩展组件

扩展组件为框架封装的组件，在 Element Plus 组件上二次封装的组件，还有一些则是封装了第三方的插件和自定义组件。

### 公共组件

公共组件存放在 `/src/components/` 目录下，每个组件按文件夹进行区分。
每个组件的文件夹内尽量使用 `index.vue` 的组件入口，文件夹名称即为组件名。

### 局部组件
局部组件采用就近原则，即在每个模块的文件夹下，建立一个 `components` 文件夹用于存放局部组件。
