//Boolean

const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

const a = new Boolean(false);
console.log(a, typeof a);

if (a) {
  //객체일 경우, true
  console.log("false?");
}

const b = Boolean(false);
console.log(b, typeof b);

if (b) {
  //객체일 경우, true
  console.log("false?"); //따라서, 실행 안됨
}
