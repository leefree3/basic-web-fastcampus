//객체에 속성 추가하기(property)
//값을 속성으로 넣기

function A() {
  this.name = "Mark";
}
const a = new A(); //{name: 'Mark'}
console.log(a);

//함수를 속성으로 넣기
function B() {
  this.hello = function () {
    console.log("hello");
  };
}
new B().hello();

//new Function()
