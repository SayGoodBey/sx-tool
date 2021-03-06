/*
 * @Description: 
 * @Autor: 
 * @Date: 2021-06-01 17:32:40
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-07 17:57:53
 */
const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname,'..', dir)
}

console.log('------',path.resolve(__dirname, '../'))

module.exports = merge(base, {
  mode:"development",
  entry: resolve('example/main.ts'),
  devtool: 'inline-source-map',
  output: {
    path:resolve('example/dist'),
    filename: 'bundle.js',
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
  plugins: [
    // 自动注入编译打包好的代码至 html
    new HtmlWebpackPlugin({
      template: resolve('example/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    proxy: {
      '/api/': {
        target: 'http://baidu.com',
        secure: false,
        changeOrigin: true
      }
    }
  },
})
