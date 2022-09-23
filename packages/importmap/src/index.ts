import unpkg from "./unpkg.json";
import nodeModules from "./nodeModules.json";

const versionReg = /(\d|\.)+(.)+/;

const getVersion = (version: string) => {
  const match = version.match(versionReg);
  return match ? match[0] : match;
};

export const install = (
  packageJSON: {
    name: string;
    version: string;
    dependencies: Record<string, string>;
    external?: string[];
  },
  sign: "unpkg" | "node_modules" | "custom" = "unpkg",
  importmap?: Record<string, string>
) => {
  let importShim = (window as any).importShim;

  if (!importShim) {
    console.warn(
      `you can use: https://github.com/guybedford/es-module-shims, to support import-shim;`
    );
    return;
  }

  // external 列表
  let external = packageJSON.external;

  if (!external || !external.length) {
    external = Object.keys(packageJSON.dependencies);
  }

  const mapReference =
    sign === "unpkg"
      ? unpkg
      : sign === "node_modules"
      ? nodeModules
      : importmap || {};

  // 分析版本获取映射
  const imports = {};
  const shimImportMap = importShim.getImportMap();

  for (const dependency of external) {
    if (!packageJSON.dependencies[dependency]) {
      console.warn(
        `can not found dependency from package dependencies: ${dependency}`,
        packageJSON
      );
      continue;
    }
    const version = getVersion(packageJSON.dependencies[dependency]);
    const dependencyScope = `${dependency}@${version}`;
    const importmapScope = `${packageJSON.name}@${packageJSON.version}/${dependency}`;

    if (shimImportMap[importmapScope]) {
      continue;
    }

    if (!mapReference[dependencyScope]) {
      console.warn(
        `can not found dependency; ${dependencyScope} form ${sign} map, substitute with unpkg default.`,
        mapReference
      );
      mapReference[
        dependencyScope
      ] = `https://unpkg.com/${dependency}@${version}`;
    }

    imports[importmapScope] = mapReference[dependencyScope];
  }

  const shimDom = document.createElement("script");
  shimDom.setAttribute("type", "importmap-shim");

  shimDom.innerHTML = JSON.stringify({
    imports,
  });

  document.body.appendChild(shimDom);
};

export default {
  install,
};
