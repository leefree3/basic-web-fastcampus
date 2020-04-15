//static 변수, 함수
// 객체가 아니고, 클래스의 변수와 함수

class A {
  static age = 37;
  static hello() {
    console.log(A.age);
  }
}

console.log(A, A.age);
A.hello();

class B {
  age = 27;
  static hello() {
    console.log(this.age);
  }
}

console.log(B, B.age);
B.hello();
//new B().hello(); //static으로 만든 함수이기 때문에, 객체에서 새로 생성할 수 없다.

class C {
  //static 변수가, 이름을 뜻함...(?)
  static name = "이 클래스의 이름은 C가 아니다.";
}

console.log(C);
