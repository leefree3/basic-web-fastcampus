//표준 내장 객체:Array

const a = new Array("read", "black", "white");
console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

//리터럴로도 사용가능
const b = ["red", "green", "yellow"];
console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

//Array에 들어있는 내장함수 slice(start, end)/
console.log(b.slice(0, 1));
console.log(Array.prototype.slice, Object.prototype.slice);
