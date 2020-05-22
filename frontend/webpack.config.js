const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPugin = require('mini-css-extract-plugin');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPugin.loader,
            options: {
              publicPath: './',
              esModule: true
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      cleanOnceBeforeBuildPatterns: [
        
        path.resolve(__dirname,'dist'),

      ]
    }),
    new HtmlWebpackPlugin({
      //inject: false,
      //hash: true,
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPugin({
      filename: '[name].css'
    }),
    new BrowserSyncWebpackPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir:['./dist']}
    }),
  ],
}