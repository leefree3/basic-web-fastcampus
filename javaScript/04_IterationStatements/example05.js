//for of : iterable 객체에서 사용가능(iterable을 자체적으로 내장한 배열)
for (const i of [1, 2, 3]) {
  console.log(i);
}

//for in : 모든 프로퍼티에서 사용가능(객체)
Object.prototype.test = function () {};
for (const i in { a: 1, b: 2, c: 3 }) {
  console.log(i);
}
