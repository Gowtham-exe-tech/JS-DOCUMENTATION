const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js", // starting file, webpack follows the imports
  output: { filename: "bundle.[contenthash].js", path: path.resolve(__dirname, "dist"), clean: true },
  module: { rules: [
    { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } } }, // new js to old js
    { test: /\.css$/, use: ["style-loader", "css-loader"] } // lets us import css in js
  ] },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })], // adds bundle script tag automatically
  devtool: "source-map",
  devServer: { port: 8080 }
};
// commands: npm install | npm start | npm run build | npm run lint | npm run format
// package-lock.json (npm) or yarn.lock (yarn) locks versions, commit it. yarn: yarn add lodash / yarn start
