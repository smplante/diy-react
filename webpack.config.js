const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
  favicon: "./public/favicon.ico"
});
module.exports = {
  optimization: {
    minimize: false,
  },
  entry: { index: "./public/index.js" },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /server/],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};