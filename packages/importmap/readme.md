## @vis-resm/importmap

resm 运行时 importmap 管理工具。

  <img alt="license" src="https://img.shields.io/npm/l/@vis-resm/importmap?color=blue">
  <img alt="version" src="https://img.shields.io/npm/v/@vis-resm/importmap?color=light">
  <img alt="downloads" src="https://img.shields.io/npm/dt/@vis-resm/importmap">

## 使用

### 一般使用

```json
// package.json
{
  "name": "@examples/demo1",
  "version": "1.0.0",
  "dependencies": {
    "vue": "^2.6.14",
    "style-inject": "0.3.0"
  },
  "external": []
}
```

```js
import { install } from "@vis-resm/importmap";
import pkg from "xxx/package.json";

install(pkg);
```

最后会自动在浏览器插入以下`importmap`

```html
<script type="importmap-shim">
  {
    "imports": {
      "@examples/demo1@1.0.0/vue": "https://unpkg.com/vue@2.6.14/dist/vue.esm.browser.min.js",
      "@examples/demo1@1.0.0/style-inject": "https://unpkg.com/style-inject@0.3.0/dist/style-inject.es.js",
    }
  }
</script>
```

### 使用 external

有些情况下我们不想将`dependencies`的依赖全部生成 map，我们可以通过`external`字段指定。

```json
// package.json
{
  "name": "@examples/demo1",
  "version": "1.0.0",
  "dependencies": {
    "vue": "^2.6.14",
    "style-inject": "0.3.0"
  },
  "external": ["vue"]
}
```

```html
<script type="importmap-shim">
  {
    "imports": {
      "@examples/demo1@1.0.0/vue": "https://unpkg.com/vue@2.6.14/dist/vue.esm.browser.min.js"
    }
  }
</script>
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

