// type annotaion
// primitive type
// number, string, boolean은 undefined의 상위 type,
// 따라서, undefined, null(하위타입)로 표현가능
// undefined, null은 최하위 type이므로, 다른 타입 할당 받지 못한다.
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
//reference type
let objValue: object;
let symbolValue: symbol;
// any타입은 모든 타입의 상위 타입으로, 다른 하위 type으로 선언해도 무방하다.
let anyValue: any;

numValue = 3;
// numValue ='3'; //Type error
stringValue = "hello"; //"",'', `` ok, `` 는 multiline 표현 가능
stringValue = `
hello
hi
${1 + 1}
`;
// stringValue = 3.3; //Type error
booleanValue = true;
undefinedValue = null;
numValue = null;
numValue = undefined;
anyValue = 1;
anyValue = "3";
anyValue = null;
anyValue = {};

objValue = { name: "jay" };
objValue = {};
objValue = new String("hello"); //문자열 primitive랑 다르다.

symbolValue = Symbol(); // 객체의 property 값으로 보통 쓰임
{
  symbolValue: "hello";
}

let nameList: string[];
// nameList = [1, 3]; //Type Error, anotaion 선언시, string으로 선언했기때문
nameList.push("hello");
nameList = ["1", "3"];

//inline type //property에 대한 type 정의
let user1: { name: string; score: number };
user1 = {
  name: "jay",
  score: 30,
};
// type aliace, class, interface, enum, tuple,...
let tuple2: [number, string];
// tuple2 = [1, 2] //type Error: number다음에는 string
tuple2 = [1, "helo"];

let tuple3: [number, number, number];
tuple3 = [1, 2, 3];
