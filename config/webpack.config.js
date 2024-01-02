// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// module.exports = {
//   // ... other webpack configuration ...

//   optimization: {
//     minimize: true,
//     minimizer: [
//       new CssMinimizerPlugin(),
//     ],
//   },
// };

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // ... other webpack configuration ...

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // For JavaScript minification
      new OptimizeCSSAssetsPlugin(), // For CSS minification
    ],
  },
};