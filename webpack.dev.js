const Dotenv = require('dotenv-webpack')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname,'./.env.development'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: 3005,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
}
