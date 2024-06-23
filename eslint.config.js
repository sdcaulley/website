import config from "eslint-config-standard";

export default [
  ...[].concat(config),
  {
    rules: {
      indent: ["error", 2],
      semi: ["error", "always"],
      "no-extra-semi": "error",
      quotes: ["error", "single"],
    },
  },
];
