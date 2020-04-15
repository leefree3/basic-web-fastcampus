//클래스
//객체를 만들 수 있는 새로운 방법
// 기존의 prototype기반의 상속보다 명료하게 보이기 위한 방법

//선언적 방식
class A {}
console.log(new A());

//class 표현식을 변수에 할당
const B = class {};
console.log(new B());

// 선언적 방식이지만 호이스팅은 일어나지 않는다.
//new C();
//class C {}
