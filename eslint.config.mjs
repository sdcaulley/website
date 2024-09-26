import config from "eslint-config-google";
import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  js.configs.recommended,
  jsdoc.configs['flat/recommended'],
  ...[].concat(config),
  {
    files: ['**/*.js'],
    plugins: {
        jsdoc
    },
    rules: {
        'jsdoc/require-description': 'warn'
    }
  }
];
