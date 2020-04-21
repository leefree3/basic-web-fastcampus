// 웹팩에 대한 설정 내용

//__dirname : 변수를 사용하고 있는 절대경로를 담는다.
//path module : 노드에서 제공하는 path 모듈

//npx webpack 실행시 bundle.js 생성
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "node",
};
