// interface에서 generic 사용하기
interface DB<T> {
  add(v: T): void;
  get(): T;
}

class D<T> implements DB<T> {
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

//특정 타입의 하위타입으로 정의할 수도 있다.
// scope을 정의해서, method 구현부에서, 고정된 타입로 정의해서 사용할 수 있다.
interface JSONSerialier {
  serialize(): string;
}

class LocalDB2<T extends JSONSerialier> implements DB<T> {
  constructor(private localStorageKey: string) {}
  add(v: T) {
    localStorage.setItem(this.localStorageKey, v.serialize());
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}
