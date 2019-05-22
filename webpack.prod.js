const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  /**
   * maps compiled code to original source code to
   * show file & line where error originates
   */
  devtool: 'source-map'
});