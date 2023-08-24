// webpack.config.js
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/guard/index',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'mtEncrypt',
      type: 'umd',
      umdNamedDefine: true,
    },
  },
  optimization: {
    minimize: false, // 打包是否压缩代码
  },
}
