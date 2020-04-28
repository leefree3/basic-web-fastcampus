// ts는 매개변수에도 type annotaion을 사용할 수 있다.
function add(x: number, y: number) {
  return x + y;
}

// add(1, "2")  //type error : number type이 아님
// ts는 함수의 반환되는 type을 추론한다.
//즉 두 number의 타입을 받아서, number를 반환한다를 인지
const result = add(1, 2);

//사용자 정보가 없는 경우도 있기 때문에 optional하게 정보를 받아야 할 경우도 있다.
//그럴때는, ? 를 붙여주자
// default parameter를 줄 수도 있다. 이경우엔 optional, type를 적지 않아도 된다.
function buildUserInfo(name = "-", email = "-") {
  return { name, email };
}
const user = buildUserInfo();

//화살표 함수
const add2 = (a: number, b: number) => a + b;
// const add2 = (a: number, b: number): number => a+b;

//overload
interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}

// string type을 받아서, Storage로 반환한다.
// function store(type: string): Storage

//overload signature 목록
function store(type: "통조림"): Storage;
function store(type: "아이스크림"): ColdStorage;

// union type , 실질적인 구현체
function store(type: "통조림" | "아이스크림") {
  if (type === "통조림") {
    return { a: "통조림" };
  } else if (type === "아이스크림") {
    return { b: "아이스크림" };
  } else {
    throw new Error("unsupported");
  }
}

const s = store("통조림");
s.a;

const i = store("아이스크림");
i.b;
