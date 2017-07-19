var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './example/index.js'
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
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

