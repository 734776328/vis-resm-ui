import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import json from "@rollup/plugin-json";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "es",
    exports: "auto",
  },
  plugins: [
    del({ targets: "dist*" }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    terser(),
    json(),
  ],
  external: [/node_modules/],
};
