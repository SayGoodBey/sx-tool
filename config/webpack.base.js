/*
 * @Description: 
 * @Autor: 
 * @Date: 2021-06-01 17:08:17
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-04 17:26:39
 */
// webpack.config.js
// TODO 只是开发环境的设置
const path = require('path');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
module.exports = {
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions. //添加在此的后缀所对应的文件可以省略后缀
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@$': path.resolve(__dirname, '..','src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      // ts-loader 用于加载解析 ts 文件
      {
        test: /\.ts?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/.vue$/], //再查查相关资料
          }
        }],
        exclude: /node_modules/
      },
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

    ],
  },
  plugins: [new VueLoaderPlugin()]
};




