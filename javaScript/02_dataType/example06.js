//symbol은 고유한 값
const a = Symbol();
const b = Symbol(37);
const c = Symbol("Mark");
const d = Symbol("Mark");

console.log(a, typeof a);
console.log(c === d); //c 와 d는 다르다.

new Symbol();
