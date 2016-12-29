'use strict';
const path = require('path');
const webpack = require('webpack');
const settings = require('./config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  devtool: '#eval-source-map',
  //指入口文件的配置项，它是一个数组的原因是webpack允许多个入口点。 当然如果你只有一个入口的话，也可以直接使用双引号"./entry.js"
  entry: {
    build: path.join(__dirname, 'app/src/main.js')// jshint ignore:line
  },
  //配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'app/dist')// jshint ignore:line
  },
  //定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。
  //当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。
  module: {
    loaders: [
      {test: /\.css$/ , loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.html$/ , loader: 'vue-html-loader'},
      {test: /\.js$/ , loader: 'babel-loader',exclude: /node_modules/},
      {test: /\.json$/ , loader: 'json-loader'},
      {test: /\.vue$/ , loader: 'vue-loader'},
      {test: /\.less/ , loaders: ['style', 'css', 'autoprefixer', 'less'],},
      {test: /\.(png|jpe?g|gif|svg)(\?.*)?$/ , loader: 'url-loader' , query: {limit: 8192 , name: 'imgs/[name].[hash:7].[ext]'}},
      {test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/ , loader: 'url-loader' , query: {limit: 8192 , name: 'fonts/[name].[hash:7].[ext]'}}
    ]
  },
  //插件项
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({filename: 'index.html' , template: './app/index.ejs' , title: settings.name}),
    new webpack.NoErrorsPlugin()
  ],
  //其它解决方案配置
  resolve: {
    alias: {'components': path.join(__dirname, 'app/src/components') , 'src': path.join(__dirname, 'app/src')},// jshint ignore:line
    extensions: ['', '.js', '.vue', '.json', '.css'],
    fallback: [path.join(__dirname, 'app/node_modules')]// jshint ignore:line
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')// jshint ignore:line
  },
  target: 'electron-renderer',
  vue: {
    loaders: {
      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
      scss: 'vue-style-loader!css-loader!sass-loader'
    }
  }
};

/**
 * Adjust config for production settings
 */
if (process.env.NODE_ENV === 'production') {// jshint ignore:line
  config.devtool = '';

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = config;
