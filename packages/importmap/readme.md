## @vis-resm/importmap

resm 运行时 importmap 管理工具。

  <img alt="license" src="https://img.shields.io/npm/l/@vis-resm/importmap?color=blue">
  <img alt="version" src="https://img.shields.io/npm/v/@vis-resm/importmap?color=light">
  <img alt="downloads" src="https://img.shields.io/npm/dt/@vis-resm/importmap">

## 使用

### 一般使用

```js
import { install } from "@vis-resm/importmap";
import pkg from "xxx/package.json";

install(pkg);
```

### 指定 url 库

目前支持`unpkg`与`node_modules`中获取。

```js
import { install } from "@vis-resm/importmap";
import pkg from "xxx/package.json";

install(pkg, "unpkg");

install(pkg, "node_modules");
```

### 自定义源映射

```js
import { install } from "@vis-resm/importmap";
import pkg from "xxx/package.json";

install(pkg, "custom", {
  "vue@2.6.14": "./plugins/vue/browser.es.min.js",
});
```

### 添加共用源

由于 npm 库模块众多，如果需要，请自行添加相关包映射在相关`json`配置中。

#### 添加格式

- 依赖名称：`<name>@<version> : <url>`
- unpkg 匹配规则请查看官网：`https://unpkg.com/`
- node_modules 匹配命名注意：`<url> ---> node_modules/<name>-<version>/xxx/xxx`

> 尽量精确到文件名，防止浏览器多次重定向影响包下载速度。

### 支持

本库是配合`es-module-shims`库使用的：[https://github.com/guybedford/es-module-shims](https://github.com/guybedford/es-module-shims)

> 由于目前 WICG 的 importmap 有部分功能还不完善，es-module-shims 过渡 importmap 比较方便：[https://github.com/WICG/import-maps](https://github.com/WICG/import-maps)
