'use strict';

process.env.BABEL_ENV = 'main';
const path = require('path');
const pkg = require('./app/package.json');
const settings = require('./config.js');
const webpack = require('webpack');

let mainConfig = {
  //指入口文件的配置项，它是一个数组的原因是webpack允许多个入口点。 当然如果你只有一个入口的话，也可以直接使用双引号"./entry.js"
  entry: {
    main: path.join(__dirname, 'app/src/main/index.js')
  },
  externals: Object.keys(pkg.dependencies || {}),
  //定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。
  //当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。
  module: {
    rules: [
      {test: /\.css$/,loaders: ['style-loader','css-loader?importLoaders=1','postcss-loader']},
      {test: /\.html$/ , loader: 'vue-html-loader'},
      {test: /\.js$/ , loader: 'babel-loader',exclude: /node_modules/},
      {test: /\.json$/ , loader: 'json-loader'},
      {test: /\.vue$/ , loader: 'vue-loader'},
      {test: /\.(png|jpe?g|gif|svg)(\?.*)?$/ , loader: 'file-loader?limit=10000!./file.png' },
      {test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/ , loader: 'url-loader' , query: {limit: 8192 , name: 'fonts/[name].[hash:7].[ext]'}}
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  //配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'app/dist')
  },
  //插件项
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  //其它解决方案配置
  resolve: {
    extensions: ['.js', '.json', '.node'],
    modules: [
      path.join(__dirname, 'app/node_modules')
    ]
  },
  target: 'electron-main'
};

module.exports = mainConfig;
