var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'example/www'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 9021,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          'presets': ['env', 'react'],
          'plugins': ['transform-class-properties']          
        },
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|ico|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

