const merge = require("webpack-merge");
const common = require("./webpack.common");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const config = {
  mode: "development",
  devServer: {
    //open: 최초로 웹팩과 관련된 스크립트를 실행했을 때,
    //기본 브라우저가 자동으로 함께 실행
    //따로 url 입력하지 않아도 실행시 바로 하나 뜨기 때문에 편의성 증가.
    //실습상 계속 tab이 열려서 false로 진행
    open: false,
    //overlay: 에러가 발생했을 때, 브라우저 화면에 에러가 뜨도록 함
    overlay: true,
    // historyApiFallbakc: 라우팅과 관련된 key
    // 특정 라우팅을 지정했을때 제공되지 않는 곳으로 가면 예외처리하거나 index.html쪽으로 이동시켜준다.
    // 특정한 html문서를 지칭할 수 있도록 해줌.
    historyApiFallback: {
      rewrites: [
        { from: /^\/subpage$/, to: "subpage.html" },
        { from: /./, to: "404.html" }, //지정되지 않은 링크에는 404
      ],
    },
    // port default는 8080인데, 지정할 수도 있음.
    port: 8080,
  },
  plugins: [new StyleLintPlugin()],
};

module.exports = merge(common, config);
