---
to: sandbox/.eslintrc.js
---
// You can change following config path.

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["../libs/configs/react/index.js"],
};
module.exports = config;


