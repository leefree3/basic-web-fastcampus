const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV == "PRODUCTION";

module.exports = {
  entry: "./index.js",
  output: {
    filename: "[name].[chunkhash].js", //hash contenthash cunkhash
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        //test: 정규표현식으로 패턴 매칭
        //use: 사용할 로더키, options
        test: /\.css$/i,
        use: [
          // {
          //   loader: "style-loader",
          //   options: {
          //     injectType: "singletonStyleTag",
          //   },
          // },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  //외부저장소에서 사용된 plugt-in
  plugins: [
    new MiniCssExtractPlugin({ filename: "[contenthash].css" }),
    new HtmlWebpackPlugin({
      title: "Webpack",
      template: "./template.hbs",
      meta: {
        viewport: "width=device-width, initail-scale=1.0",
      },
      // production일때는 압축(compressor), 개발환경일때는 압축안해!
      minify: isProduction
        ? {
            collapseWhitespace: true,
            useShortDoctype: true,
            removeScriptTypeAttributes: true,
          }
        : false,
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      //true일 때 production 빌드에서 사용.
      IS_PRODUCTION: isProduction,
    }),
  ],
};
