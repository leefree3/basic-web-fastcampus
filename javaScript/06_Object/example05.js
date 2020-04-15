// 프로토 타입을 이용한 객체 확장
// prototype 상속: Person객체(부모)를 Korean(자식)에게 상속한 것 같은 관계
// 프로토 타입을 이용해서, property를 전달할 수 있다.
function Person() {}

Person.prototype.hello = function () {
  console.log("hello");
};

function Korean(region) {
  this.region = region;
  this.where = function () {
    console.log("where", this.region);
  };
}

Korean.prototype = Person.prototype;

const k = new Korean("Seoul");
k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);
//가장 근접한 값은 Korean,
//Korean의 프로토 타입 체인을 가진 객체는 Person
//모든 객체의 가장 최상위 객체는 Object
