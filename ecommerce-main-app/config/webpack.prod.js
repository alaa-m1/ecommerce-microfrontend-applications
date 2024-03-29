const { merge } = require("webpack-merge");
const commenConfig = require("./webpack.commen");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const domain=process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // the name of the bundle
    publicPath:"/container/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ecommerce_app",
      remotes: {
        shopping: `shopping@${domain}/shopping/latest/remoteEntry.js`,
        auth: `auth@${domain}/shopping/latest/remoteEntry.js`,
        reactSharedLib: `react_shared_lib@${domain}/react-shared-lib/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commenConfig, prodConfig);
