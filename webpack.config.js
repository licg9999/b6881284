const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
  },
  externals: [nodeExternals({ includeAbsolutePaths: true })],
};
