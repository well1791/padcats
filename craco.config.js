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
}
