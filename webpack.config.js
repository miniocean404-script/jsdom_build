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
    minimize: true, // 打包是否压缩代码
  },
  module: {
    rules: [
      {
        // 处理 .node 文件
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
}
