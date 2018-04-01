const loader = require('css-loader')
const style = require('style-loader')
module.exports = {

  module : {
    rules : [
      {
        test: /\.js?$/,
        loader : 'babel-loader',
        exclude : /node_modules/,
        options : {
          presets : ['react', 'stage-0', ['env', {targets : {browsers:['last 2 versions']}}]]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },

  performance:{hints:false},

}