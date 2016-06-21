const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: "./app/App.js"
  },
  output: {
    filename: "public/build/[name].bundle.js",
    sourceMapFilename: "public/build/bundle.map"
  },
  devtools: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
