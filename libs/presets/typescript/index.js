const { WARN, ERROR } = require("../utils");

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: { sourceType: "module" },
  parser: "@typescript-eslint/parser",
  plugins: ["typescript-sort-keys", "@typescript-eslint"],
  rules: {
    "typescript-sort-keys/interface": WARN,
    "typescript-sort-keys/string-enum": WARN,
    "@typescript-eslint/no-unused-vars": ERROR,
  },
};

module.exports = config;
