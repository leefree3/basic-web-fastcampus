//get, set
class A {
  _name = "no name";

  get name() {
    return this._name + "@@@";
  }
  set name(value) {
    this._name = value + "!!!";
  }
}

const a = new A();
console.log(a);
a.name = "Mark";
console.log(a);
console.log(a.name);
console.log(a._name);

//readonly
//setter 함수가 없기 때문
//_name: 외부에서 값을 바꾸지 말자 할때 언더바 사용
class B {
  _name = "no name";

  get name() {
    return this._name + "@@@";
  }
}

const b = new B();
console.log(b);
b.name = "Mark";
console.log(b);
