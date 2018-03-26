// Este va a ser el bundle que sera enviado y manejado por el cliente,

const merge = require('webpack-merge')
const configBase = require('./webpack.base')
const path = require('path')


const config = {
  // le decimos a webpack donde va a estar el fichero 
  // raiz de nuestro server
  entry : './client/client.js',
  // le decimos a webpack a donde colocara nuestro bundle
  output : {
    filename:'main.js',
    path : path.resolve(__dirname, '../public')
  },
}

module.exports = merge(configBase, config)