const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  /**
   * maps compiled code to original source code to
   * show file & line where error originates
   */
  devtool: 'inline-source-map',
  
  // webpack-dev-server
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: './dist'
  }
});