const { merge } = require("webpack-merge");
const commenConfig = require("./webpack.commen");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // the name of the bundle
    publicPath:"/shopping/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shopping",
      filename: "remoteEntry.js",
      exposes: {
        "./ShoppingIndex": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commenConfig, prodConfig);
