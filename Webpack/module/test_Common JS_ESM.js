/*
1. 원의 넓이를 구하는 공식
2. PI 정의
3. 공식을 통해 결과 얻기
*/

//1. CommonJS(Node.js) 환경 모듈이용하기 (node index.js)
// node js 의 기본 확장자는 .js이기 때문에 경로에 js를 생략해도 괜찮다.
// 값을 가져올 때 키워드는 require

const { getCircleArea } = require("./mathUtil");

//2. ESM 모듈 이용하기 (명령: node -r esm index.js)
// import { getCircleArea } from "./mathUtil";

// import mathUtil from "./mathUtil";

const result = getCircleArea(2);
// const result = mathUtil.getCircleArea(2);
console.log(result);
