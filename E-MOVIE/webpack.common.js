const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: './emovie/src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
              loader: "style-loader"
          },
          {
              loader: "css-loader"
          }
      ]
  },
  {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [{
          loader: 'file-loader',
          options: {
              name: "[name]-[hash].[ext]",
              outputPath: "images",
          },
      }]
  },
]
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './emovie/src/index.html',
      filename: 'index.html'
    })
  ]
};