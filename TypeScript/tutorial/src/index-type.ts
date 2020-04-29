// 인텍스 타입
// 일종의 map
// 인덱스 시그니처 매개변수는 string혹은 number만 가능
// 인덱스 시그니처 매개변수(key)가 string으로 정의될 경우, key로 number를 사용할 수 있다.
// key가 number로 정의될 경우, key로 stirng을 사용할 수 없다.
// 필수 property를 정의 하고 싶을 수 있다. (name) 처럼 쓰면 된다.
interface Props {
  name: string;
  [key: string]: string;
  // [key:number]: string;
}

const p: Props = {
  name: "hello",
  a: "d",
  b: "e",
  c: "3",
  // c: 3 //error => key문자열, value: 문자열이어야함
  0: "d",
  1: "b",
};

p.name;
p.d;
p.dfsddd;

let keys: keyof Props;

interface User {
  name: string;
  age: number;
  hello(mag: string): void;
}

// keyof 연산자를 이용하면, type의 특정 key에 접근이 가능하다.
// User의 key들이 union 형태로 보임
let keysOfUser: keyof User;
keysOfUser = "age";

// type을 정의할 때, 특정 operator를 가져온 경우
let helloMathod: User["hello"];
helloMathod = function (msg: string) {};
