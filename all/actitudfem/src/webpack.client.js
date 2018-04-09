const merge = require('webpack-merge')
const configBase = require('./webpack.base')
const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin') 

const config = {
  entry : './client/client.js',
  output : {
    filename:'main.js',
    path : path.resolve(__dirname, '../public')
  },

  //devtool: "cheap-module-source-map"
}

module.exports = merge(configBase, config)