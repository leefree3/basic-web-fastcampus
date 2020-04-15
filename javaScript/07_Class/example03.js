//멤버 변수
//객체의 프로퍼티 (this.name)

class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log(new A("mini", 29));

//class field는 런타임 확인
//문법을 이해하지 못하는 런타임 에러 발생
//node를 삭제하고, nvm을 설치해서 실행해야 돌아감
//nvm 설치시, 글로벌 패키지 설치했던 자료들이 다 날아감(node) 추후 관리 필요

class B {
  name;
  age;
}
console.log(new B());

class C {
  name = "no name";
  age = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log(new C("minhee", 27));
console.log(new C());
