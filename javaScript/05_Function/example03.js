// 선언적 function과 익명 함수를 만들어 변수에 할당의 차이점
//1. 선언적 방식: hoisting이 일어난다.

console.log(hello2);

hello1();
//hello2(); //not a function, undefined
//hello3(); // not defined

function hello1() {
  console.log("hello1");
}

//2. 익명함수 만들어 변수에 할당 (var)
var hello2 = function () {
  console.log("hello2");
};

//2.1 익명함수 만들어 변수에 할당(const)
const hello3 = function () {
  console.log("hello3");
};
