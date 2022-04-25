# ESLint config for [HRBrain](https://www.hrbrain.jp/)

[![GitHub Packages](https://img.shields.io/badge/package-GitHub-red.svg?style=flat-square)](https://github.com/hrbrain/eslint-config/packages/)
![LICENSE Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-green.svg?style=flat-square)
[![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)

## Usage

`<your-project>/.npmrc`

```
@hrbrain:registry=https://npm.pkg.github.com
```

```bash
yarn add eslint @hrbrain/eslint-config
```

`<your-project>/.eslintrc.js`

```js
/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
  extends: ["@hrbrain/eslint-config/libs/configs/react"],
};

module.exports = config;
```

## [Configs](./libs/configs)

## Contributing

Thanks!! We prepare [contributing guide](./CONTRIBUTING.md).
Please check this file at first.

## LICENSE (Apache-2.0)

See [LICENSE file](./LICENSE).
