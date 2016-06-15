const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: "./app/App.js",
    functions: "./app/functions.js",
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
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
