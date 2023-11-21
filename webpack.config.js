const { EsbuildPlugin } = require('esbuild-loader')

module.exports = {
  module: {
    rules: [
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          // JavaScript version to compile to
          target: 'es2015',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015', // Syntax to transpile to (see options below for possible values)
        css: true, // Apply minification to CSS assets
      }),
    ],
  },
}
