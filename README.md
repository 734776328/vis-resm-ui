# vis-resm-ui

vis 运行时 esm 组件库

### 仓库管理

本仓库使用`pnpm`进行管理，请先安装`pnpm`。

- `npm i pnpm -g`
- `pnpm install`

> 相关文档：[https://pnpm.io/installation](https://pnpm.io/installation)

### 项目结构

- element-ui：放置 element-ui 相关 resm 组件
- importmap：运行时的 importmap 辅助

你还可以根据需要 resm 化的组件库添加额外的 package

### 组件开发

我想开发一个 resm 组件，举个例子：`el-button`

- 移动到目标目录：`cd packages/element-ui`
- 创建组件模板：`pnpm create vis-resm el-button`,这里使用的是`create-vis-resm`仓库。
- 根据指引选择组件模板，模板具体功能请查看模板`readme.md`
- 开发组件
- 打包发布: `npm publish --access public`

### 添加 importmap 支持

如果你想使用`@vis-resm/importmap`仓库快速注册各种`importmap`依赖映射,可以去到 importmap 相关仓库的相关配置单下添加映射。

### 相关仓库

#### create-vis-resm

<p>
  <img alt="license" src="https://img.shields.io/npm/l/create-vis-resm?color=blue">
  <img alt="version" src="https://img.shields.io/npm/v/create-vis-resm?color=light">
  <img alt="downloads" src="https://img.shields.io/npm/dt/create-vis-resm">
</p>

#### @vis-resm/cli

<p>
  <img alt="license" src="https://img.shields.io/npm/l/@vis-resm/cli?color=blue">
  <img alt="version" src="https://img.shields.io/npm/v/@vis-resm/cli?color=light">
  <img alt="downloads" src="https://img.shields.io/npm/dt/@vis-resm/cli">
</p>

#### @vis-resm/importmap

<p>
  <img alt="license" src="https://img.shields.io/npm/l/@vis-resm/importmap?color=blue">
  <img alt="version" src="https://img.shields.io/npm/v/@vis-resm/importmap?color=light">
  <img alt="downloads" src="https://img.shields.io/npm/dt/@vis-resm/importmap">
</p>

## 贡献者

<a href="https://github.com/Shiotsukikaedesari/vis-resm-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Shiotsukikaedesari/vis-resm-ui" />
</a>
