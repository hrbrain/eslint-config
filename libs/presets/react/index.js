const { WARN, OFF } = require("../utils");

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  rules: {
    "react/jsx-sort-props": [
      WARN,
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/prop-types": OFF,
  },
};

module.exports = config;
