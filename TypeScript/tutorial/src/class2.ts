// class의 상속과 interface 의 관계
interface Person {
  name: string;
  say(message: string): void;
}
interface Programmer {
  writeCode(requirement: string): string;
}

// Korean은 Person임을 보장받음
class KoreanProgrammer1 implements Person, Programmer {
  constructor(public name: string) {}

  say(message: string): void {
    console.log(message);
  }
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + ".....";
  }
  loveKimchi() {
    console.log("love~ kimchi!");
  }
}

const jay = new KoreanProgrammer1("jay");

// abstract class: 추상클래스
// 해당 클래스에서 정의 하지 않고, 하위 클래스에서 정의함
// 하위 타입에서 반드시 가지게 해야함
abstract class Korean implements Person {
  public abstract juminId: number;
  constructor(public name: string) {}
  say(msg: string) {
    console.log(msg);
  }
  abstract loveKimchi(): void;
}

class KoreanProgrammer2 extends Korean implements Programmer {
  constructor(public name: string, public juminId: number) {
    // 부모클래스인 Korean의 생성자 함수 호출
    super(name);
  }

  say(message: string): void {
    console.log(message);
  }
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + ".....";
  }
  loveKimchi() {
    throw new Error("Method not implemented");
  }
}

const jay2 = new KoreanProgrammer2("jay", 880327);
// 추상클래스는, instance를 만들 수 없다.(반드시 상속 받아서 사용할 수 있다.)
// const jay3 = new Korean('jay') //error
