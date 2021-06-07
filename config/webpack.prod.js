/*
 * @Description: 
 * @Autor: 
 * @Date: 2021-06-01 17:32:53
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-07 16:58:49
 */
const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname,'..', dir)
}
module.exports = merge(base, {
  mode:"production",
  entry: resolve('./src/index.ts'),
  output: {
    path:resolve('dist'),
    filename: 'index.js',
    library: 'sx-tool',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
        // 用于加载解析 less 文件
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader', },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[hash:base64:6]',
                },
              }
            },
            { loader: 'less-loader', },
          ]
        },
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
