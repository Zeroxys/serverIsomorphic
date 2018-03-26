const path = require('path')
const merge = require('webpack-merge') // <-- libreria para hacer merge de webpack.base.js
const webpackNodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')

const config = {
  // Informamos a webpack que se construira un bundle
  // para nodejs, en lugar de hacerlo para el browser
  target: 'node',
  // le decimos a webpack donde va a estar el fichero 
  // raiz de nuestro server
  entry : './server.js',
  // le decimos a webpack a donde colocara nuestro bundle
  output : {
    filename:'bundle.js',
    path : path.resolve(__dirname, '../build')
  },

  externals : [webpackNodeExternals({modulesDir:'./'})]
}

module.exports = merge(baseConfig, config)