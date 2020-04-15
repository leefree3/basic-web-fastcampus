//프로토타입 체인
//.prototype
//javaScript는 객체를 prototype으로 대부분 연결 할 수 있다.
//프로토 타입에 의한 상속개념 추후 찾아서 좀 더 알아봐야할 것 같다
// 객체와 객체의 연결을 통한 단방향 공유 관계를 프로토타입 체인

function Person(name, age) {
  this.name = name;
  this.age = age;
  //   this.hello = function () {
  //     console.log("hello", this.name, this.age);
  //   };
}

Person.prototype.hello = function () {
  console.log("hello", this.name, this.age);
};

const p = new Person("minhee", 29);
p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);
