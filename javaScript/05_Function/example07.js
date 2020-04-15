//new 함수();
//생성자 함수
// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법
function Person(name, age) {
  console.log(this); // 객체를 가리킴
  this.name = name;
  this.age = age;
}

const p = new Person("mini", 29);
console.log(p, p.name, p.age);

const a = new Person("jonghuyn", 32);
console.log(a, a.name, a.age);

//arrow function
//new 객체 생성 불가. this 를 가질 수 없음
const Cat = (name, age) => {
  console.log(this);
  this.name = name;
  this.age = age;
};

const c = new Cat("냥이", 1);
