//NULL: 값은 가지고 있지만 빈 값
const a = null; //작성은 소문자, 타입은 대문자
console.log(a, typeof a);

//undefined: 값이 할당되지 않음
let b;
console.log(b, typeof b);

b = undefined;
console.log(b);

if (a == b) {
  // type이 비교 되지 않음. 둘다 값이 없는 것으로 인지해서 같다고 판단
  console.log(a == b);
}

if (a === b) {
  // type까지 비교해서 false반환
  console.log(a === b);
}
