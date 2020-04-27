// let은 es5에서 지원되지 않는다.
// tsc hello.ts를 하게 되면, compile시에 let은 var로 바뀐다.
// es6문법을 사용하고 싶다면, tsc hello.ts --target es6로 컴파일 진행해야한다.
var hello = "hello";
let hello2 = "hello2";

// Promise: es5에서는 문법적으로 지원되지 않음
// 별도의 polyfill이 필요하다.
// script 태그로 추가하기 때문에, 동작하는데 문제 없다고 option을 줄 수 있다.
// tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom

/*
let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1 sec");
  }, 10000);
});

timeoutPromise.then(console.log);
 */

// tsc hello.ts --lib es2015,dom
// node hello.js
// tsc hello.ts --target es6 --lib es2015,dom
// node hello.js => 실행시 에러(syntax error), import 하려면, CommonJS환경이어야함
// target : es6, module: CommonJS환경으로 쓰려면 module option 이용
// tsc hello.ts -target es6 --lib es2015,dom --module commonjs
import add from "./util.js";
const value = add(1, 2);
console.log(value);

//typescript compile option file을 통해 option을 지정할 수 있다.
//show config 옵션
// tsc hello.ts -target es6 --lib es2015,dom --module commonjs --showConfig
