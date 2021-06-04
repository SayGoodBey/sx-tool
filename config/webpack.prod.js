/*
 * @Description: 
 * @Autor: 
 * @Date: 2021-06-01 17:32:53
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-04 16:55:00
 */
const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path')
function resolve (dir) {
  return path.join(__dirname,'..', dir)
}
module.exports = merge(base, {
  mode:"development",
  entry: resolve('./src/index.ts'),
  devtool: 'none',
  output: {
    path:resolve('example/dist'),
    filename: 'index.js',
    library: 'sx-tool',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  //生产环境 外部插件加入peerDependencies 
  // externals: {
  //   'react': 'react',
  // },
  plugins: [
    new CleanWebpackPlugin(),    // 编译之前清空 /dist
  ],
})
