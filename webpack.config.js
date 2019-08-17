const path = require('path');
const outputPath = path.resolve(__dirname, 'docs');

module.exports = {
  // 公開時には[production]
  // 制作段階では[development]
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      //babel
      { 
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", {
              useBuiltIns: "entry",  //import "core-js/stable"; import "regenerator-runtime/runtime";が必要
              //useBuiltIns: "usage",
              corejs: 3 // core-js@3
            }]
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
  
}