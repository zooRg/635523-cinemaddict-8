const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: `babel-loader`
    }]
  },
  devtool: `source-map`
};
