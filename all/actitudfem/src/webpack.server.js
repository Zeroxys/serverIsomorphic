const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')

const config = {
  target: 'node',
  entry : './server.js',
  output : {
    filename:'bundle.js',
    path : path.resolve(__dirname, '../build')
  },

  externals : [webpackNodeExternals({modulesDir:'../../../node_modules'})]
}

module.exports = merge(baseConfig, config)