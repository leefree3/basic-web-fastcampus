// 넓이 계산하는 공식들 모듈
const PI = 3.14;
const getCircleArea = (r) => r * r * PI;
const getSquareArea = (d) => d * d;

//파일 밖으로 내보내기(CommonJS)

// 1.모듈 객체를 이용하여 내보내기
module.exports = {
  PI,
  getCircleArea,
  getSquareArea,
};

// 2.개별 값으로 내보내기
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

//ESM 이용하기
// export { PI, getCircleArea };

// export default { PI, getCircleArea };
