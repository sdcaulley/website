import globals from "globals";
import js from '@eslint/js';
import * as google from 'eslint-config-google';

export default [
  js.configs.recommended,
  google,
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    globals: {...globals.browser, ...globals.node} 
  }
];
