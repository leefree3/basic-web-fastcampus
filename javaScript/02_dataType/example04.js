//Number

const a = 37;
console.log(a, typeof a);

const b = 96.7;
console.log(b, typeof b);

const c = NaN; //Not a Number 인데, number 타입..
console.log(c, typeof c);

const d = Number("Mark"); //문자열을 숫자로 바꾸는 과정에서, 숫자가 아니다 => NaN => 를 출력
console.log(d, typeof d);

const e = Number("37");
console.log(e, typeof e);
