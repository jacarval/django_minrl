var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  devtool: 'eval',

  entry: {
    client: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'assets', 'js', 'index'),
    ],
    vendor: [
      'font-awesome/css/font-awesome.css',
      'foundation-sites/dist/foundation-flex.css',
      '!!script!jquery/dist/jquery.min.js',
      '!!script!foundation-sites/dist/foundation.min.js',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets', 'bundles'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/assets/bundles/',
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/, include: path.resolve(__dirname, 'assets') },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(eot|svg|ttf|woff|woff2)/, loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  }
};