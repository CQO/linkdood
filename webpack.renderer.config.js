'use strict'

process.env.BABEL_ENV = 'renderer'

const path = require('path')
const pkg = require('./app/package.json')
const settings = require('./config.js')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let rendererConfig = {
  devtool: '#eval-source-map',
  entry: {
    renderer: path.join(__dirname, 'app/renderer/main.js')
  },
  externals: Object.keys(pkg.dependencies || {}),
  //定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。
  //当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。
  module: {
    rules: [
      {test: /\.css$/,loader: ExtractTextPlugin.extract({fallback: 'style-loader',loader: 'css-loader'})},
      {test: /\.html$/,loader: 'vue-html-loader'},
      {test: /\.js$/,loader: 'babel-loader',include: [ path.resolve(__dirname, 'app/renderer') ],exclude: /node_modules/},
      {test: /\.json$/,loader: 'json-loader'},
      {test: /\.node$/,loader: 'node-loader'},
      {test: /\.vue$/,loader: 'vue-loader',options: {loaders: {sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',scss: 'vue-style-loader!css-loader!sass-loader'}}},
      {test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,loader: 'url-loader',query: {limit: 1,name: 'imgs/[name].[ext]'}},
      {test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,loader: 'url-loader',query: {limit: 10000,name: 'fonts/[name].[ext]'}}
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.ejs',
      appModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, 'app/node_modules')
        : false,
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'builds/dist')
  },
  resolve: {
    alias: {
      'components': path.join(__dirname, 'app/renderer/components'),
      'renderer': path.join(__dirname, 'app/renderer')
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node'],
    modules: [
      path.join(__dirname, 'app/node_modules'),
      path.join(__dirname, 'node_modules')
    ]
  },
  target: 'electron-renderer'
};


/**
 * Adjust rednererConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  rendererConfig.devtool = '';

  rendererConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = rendererConfig;
