const cleanWebpackPlugin = require('clean-webpack-plugin')
const loader = require('css-loader')
const style = require('style-loader')
module.exports = {

  // decimos a webpack que transpile el codigo con babel
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

  plugins : [
    new cleanWebpackPlugin(['build', 'public'], {
      root:'/all/actitudfem/'
    })
  ]

}