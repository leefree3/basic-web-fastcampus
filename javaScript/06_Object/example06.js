// 객체 리터럴
const a = {};
console.log(a, typeof a);

const b = {
  name: "Mark",
};

console.log(b, typeof b);

const c = {
  name: "Mark",
  hello1() {
    console.log("hello1", this.name); //객체에 접근 가능
  },
  hello2: function () {
    console.log("hello2", this.name); //객체에 접근가능
  },
  hello3: () => {
    console.log("hello3", this.name); //arrow function은 객체에 접근 불가
  },
};

c.hello1();
c.hello2();
c.hello3();
