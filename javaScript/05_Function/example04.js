// 생성자 함수로 함수를 만드는 방식
//const hello = new Function();
// new Function(/*인자1, 인자2, ..., 함수의 바디 */)

const sum = new Function("a", "b", "c", "return a + b + c");
console.log(sum(1, 2, 3));
