//intersection type
interface User {
  name: string;
}
interface Action {
  do(): void;
}

//intersection예 : User와 Action을 합친 타입
function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}
const u = createUserAction({ name: "Jay" }, { do() {} });


//union type (with primitive type)
function compare(x: string, y: string);
function compare(x: number, y: number);
function compare(x: string | number, y: string | number) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw Error("not support type");
}

const v1 = compare(1, 2);
const v2 = compare("a", "b");
// const v3 = compare("a", 1);

console.log([3, 2, 1].sort(compare));
console.log(["c", "b", "a"].sort(compare));


//union type(with interface)
// User, Action 은 interface이기 때문에 instanceOf로 접근이 불가는하다.
// js에는 interface가 없기 때문에, 컴파일 시에 비교 불가 그럼 어떻게 해야할까?
// v라는 값 안의 멤버를 비교해서 판단 할 수 있다.
// 단, v가 User인지, Action인지 assertion을 해줌으로서 판단할 수있게끔 해주어야한다. (<Action>v).do
// 그런데 매번 <Action>v.do 형태로 쓰기는 번거롭다. type gard를 정의해서 해결해보자.
/*
function process(v: User|Action){
    if((<Action>v).do){
        (<Action>v).do()
    }
}
*/

function isAction(v: User|Action): v is Action{
    return (<Action>v).do !== undefined
}

function process(v: User|Action){
    if(isAction(v)){
        // isAction(type gaurd에 의해서, v 를 Action이라고 인식)
        v.do()
    }else{
        console.log(v.name)
    }
}
