const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "core-js",
    "regenerator-runtime/runtime",
    require.resolve("../src/index.js"),
    "react-hot-loader/patch",
    "./src",
  ],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "image/svg+xml",
          },
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: "url-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/font-woff",
          },
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/octet-stream",
          },
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    disableHostCheck: true,
    port: port,
    historyApiFallback: true,
    open: true,
    stats: "errors-only",
    hot: true,
    watchOptions: {
      poll: true,
      ignored: "/node_modules/",
    },
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
      "@components": path.resolve(__dirname, "..", "src/components/"),
      "@assets": path.resolve(__dirname, "..", "src/assets/"),
      "@pages": path.resolve(__dirname, "..", "src/pages/"),
      "@utils": path.resolve(__dirname, "..", "src/utils/"),
      "@stores": path.resolve(__dirname, "..", "src/stores/"),
      "@routes": path.resolve(__dirname, "..", "src/routes/"),
      "@apis": path.resolve(__dirname, "..", "src/apis/"),
      "@hooks": path.resolve(__dirname, "..", "src/hooks/"),
    },
  },
};
