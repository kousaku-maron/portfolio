const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  // entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: 'dist'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: {
          loader: 'eslint-loader'
        },
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', 'react-native-web')
        ]
      },
      {
        test: /\.jsx?$/,
        use:{
          loader: 'babel-loader',
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'html/index.html'),
      
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'html/404.html'),
      filename: '404.html'
    })
  ]
}
