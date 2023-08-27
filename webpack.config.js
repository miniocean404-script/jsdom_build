// webpack.config.js
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/guard/index',
  target: 'node',
  output: {
    filename: 'bundle_mt.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      // umd 时是对象
      type: 'commonjs2',
    },
  },
  optimization: {
    minimize: false, // 打包是否压缩代码
  },
}
