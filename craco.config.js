const { CracoAliasPlugin } = require('react-app-alias')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    }
  ],
  webpack: {
    plugins: {
      add: [
        new VanillaExtractPlugin(),
      ],
    },
  },
  jest: {
    configure: (jestConfig) => {
      jestConfig.transform = {
        ...{ '\\.css\\.ts$': '@vanilla-extract/jest-transform' },
        ...structuredClone(jestConfig.transform),
      }
      return jestConfig;
    },
  },
}
