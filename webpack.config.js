var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './public/Javascripts/main.js',
  devtool : "eval-sourcemap",
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules : [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname,"node_modules")
        ],
        // issuer: { test, exclude },        
        loader: 'babel-loader',
        options: {
            presets: ['es2015', 'react'] //'stage-0'
        }        
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.png($|\?)|\.jpe?g($|\?)|\.gif($|\?)/,
          loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins :[
    //   new webpack.DefinePlugin({
    //     'process.env':{
    //         'NODE_ENV': JSON.stringify('production')
    //     }
    // }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html'
    }),
    new ExtractTextPlugin("style.css"),
    new OptimizeCssAssetsPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ]  
}
