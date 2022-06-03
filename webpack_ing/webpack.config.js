const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/main/index.js',
    sub: './src/js/sub/index.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 5500
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.js|jsx/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.gif|png|jpe?g|svg/i,
        use: ['file-loader'],
      },
      {
        test: /\.css/,
        use: [
          {
          loader: 'style-loader'
          },
          {
          loader: 'css-loader'
          }
          ]
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader', 
          'sass-loader'
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          limit: 10000,
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style-bundle.css' 
    })  
  ]
}
