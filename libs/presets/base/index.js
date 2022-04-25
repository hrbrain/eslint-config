const { WARN } = require("../utils");

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
  extends: ["eslint:recommended"],
  plugins: ["simple-import-sort", "sort-keys-fix", "sort-destructure-keys"],
  rules: {
    "simple-import-sort/exports": WARN,
    "simple-import-sort/imports": WARN,
    "sort-destructure-keys/sort-destructure-keys": WARN,
    "sort-keys-fix/sort-keys-fix": [WARN, "asc", { natural: true }],
  },
};

module.exports = config;
