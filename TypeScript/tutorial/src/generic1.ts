// generic: type을 파라미터화 할 수 있다. 타입 변수라고 부르기도 한다.
// 함수에서 사용하기
// 다양한 type을 지원하게끔 한다.
// 여러개의 타입을 정의해서 사용할 수 있다.
// Type Shape를 유지하면서, 코드를 작성할 수 있다.

function createPromise<T>(x: T, timeout: number) {
  return new Promise((resolve: (v: T) => void, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}
createPromise(1, 100).then((v) => console.log(v));
createPromise("1", 100).then((v) => console.log(v));

function createPromise2<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}
createPromise2<string>("1", 100).then((v) => console.log(v));

function createTuple2<T, U>(v: T, v2: U): [T, U] {
  return [v, v2];
}
function createTuple3<T, U, D>(v: T, v2: U, v3: D): [T, U, D] {
  return [v, v2, v3];
}
const t2 = createTuple2("user1", 1000);
const t3 = createTuple3("user1", 10, "ASDF");
