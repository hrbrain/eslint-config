const { ESLint } = require("eslint");
const path = require("path");

/**
 * @param {import("./types").FixtureExtensions} extension
 * @returns {string}
 */
const getFixturePath = (extension) =>
  path.join(__dirname, "../", "fixtures", `index.${extension}`);

/**
 * @param {import("./types").ConfigType} configType
 * @param {import("./types").FixtureExtensions} targetExtension
 * @returns {Promise<import("eslint").Linter.Config>} config
 */
const getESLintConfig = async (configType, targetExtension) => {
  const eslint = new ESLint({
    overrideConfigFile: `libs/configs/${configType}/index.js`,
    ignore: false,
    useEslintrc: false,
    extensions: [targetExtension],
  });
  const target = getFixturePath(targetExtension);

  const config = await eslint.calculateConfigForFile(target);

  return config;
};

module.exports = {
  getESLintConfig,
};
