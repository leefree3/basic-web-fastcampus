const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    config: {
      path: "postcss.config.js",
    },
  },
};
const isProduction = process.env.NODE_ENV === "PRODUCTION";

//url loader
//data: mediatype; base64,data
//base24 scheme: binary값을 문자열 형태로 변환
//인코딩된 결과값이 data로 들어간다.
//한글자로 출력

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js", //hash contenthash cunkhash
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        //test: 정규표현식으로 패턴 매칭
        //use: 사용할 로더키, options
        //rule들의 우선순위는 index가 클수록 높다.
        //filename.module.scss => css modules, filename.css => global
        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
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
              postcssLoader,
              "sass-loader",
            ],
          },
          {
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              postcssLoader,
              "sass-loader",
            ],
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name() {
                if (!isProduction) {
                  return "[path][name].[ext]";
                }
                return "[contenthash].[ext]";
              },
              publicPath: "assets/", //url 관리
              outputPath: "assets/", //dist폴더 내에 assets생성
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /.js/,
        exclude: /node_modules/,
        // loader: "babel-loader", //어떤 이유에서인지... loader를 적용하면 babel preset을 못찾는다.
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
