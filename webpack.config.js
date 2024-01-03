const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Other webpack configuration...

  plugins: [
    // Other plugins...
    new CopyWebpackPlugin({
      patterns: [
        { from: '_redirects', to: '' },
        // Add other files or directories to copy if needed
      ],
    }),
  ],
};
