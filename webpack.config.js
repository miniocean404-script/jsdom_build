// webpack.config.js
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/guard/index',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // library: {
    //   name: 'MyLibrary',
    //   type: 'umd',
    //   umdNamedDefine: true,
    // },
  },
}
