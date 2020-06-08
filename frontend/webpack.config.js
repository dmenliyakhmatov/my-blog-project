const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPugin = require('mini-css-extract-plugin');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPugin.loader,
            options: {
              publicPath: './',
              esModule: true,
              hmr: process.env.NODE_ENV === 'development',
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                }
            }
        ]
    },
      {
        test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
              },
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
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
      hash: true,
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
  resolve: {
    extensions: ['.ts', '.tsx','.js', '.css', '.jsx']
  }
}