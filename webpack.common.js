const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    phaser: ['phaser']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
