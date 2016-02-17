var path = require('path');
var webpack = require('webpack');
// var autoprefixer = require('autoprefixer');
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
    // vendor: [
    //   'font-awesome/css/font-awesome.css',
    //   'foundation-sites/dist/foundation-flex.css',
    //   '!!script!jquery/dist/jquery.min.js',
    //   '!!script!foundation-sites/dist/foundation.min.js',
    //   'immutable',
    //   'isomorphic-fetch',
    //   '!!react',
    //   'react-dom',
    //   'redux',
    //   'react-redux',
    //   'react-router',
    //   'react-youtube',
    //   'socket.io-client'
    // ]
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
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    // new webpack.ProvidePlugin({'$': 'jquery', jQuery: 'jquery'})
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/, include: path.resolve(__dirname, 'assets') },
      // { test: /\.scss$/, loader: "style!css!autoprefixer-loader?browsers=last 2 versions!sass" },
      // { test: /\.css$/, loader: "style!css" },
      // { test: /\.(png|jpg|jpeg|gif)$/, loader: 'file-loader?name=images/[name].[ext]' },
      // { test: /\.(webm|mp4|mov|m4v|ogg)$/, loader: 'file-loader?name=videos/[name].[ext]' },
      // { test: /\.(eot|svg|ttf|woff|woff2)/, loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  }
};