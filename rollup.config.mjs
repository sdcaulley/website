import copy from "rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import livereload from "rollup-plugin-livereload";
import watch from "rollup-plugin-watch";

const isWatchMode = process.env.ROLLUP_WATCH;
const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/index.js", // Entry point for your library
  output: {
    file: "public/index.js", // Output file
    format: "iife", // Format
    sourcemap: !isProduction, // Sourcemap only for dev builds, useful for debugging
  },
  plugins: [
    isWatchMode && livereload(),
    watch({
      dir: "src",
    }),
    resolve(),
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
    }),
    // summary(),
    copy({
      targets: [
        { src: "src/**/*.html", dest: "public" }, // Copy index.html to public
        { src: "assets/**/*", dest: "public/assets" }, // Copy assets
      ],
    }),
  ],
  preserveEntrySignatures: "strict",
};
