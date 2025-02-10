import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"], 
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
  },
  minify: true,
  sourcemap: true,
  splitting: false,
  esbuildOptions(options) {
    options.loader = {
      ".js": "jsx",
      ".ts": "tsx",
      ".tsx": "tsx"  
    };
  },
});
