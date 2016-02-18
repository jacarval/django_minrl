var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  devtool: 'source-map',

  entry: {
    client: [
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
    path: path.resolve(__dirname, 'assets', 'dist'),
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats-prod.json'}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }}),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({mangle: false, minimize: true})
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/, include: path.resolve(__dirname, 'assets') },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(eot|svg|ttf|woff|woff2)/, loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  }
};