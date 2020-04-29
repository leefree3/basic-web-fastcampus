// generic을 클래스 정의할 때에도 사용할 수 있다.
class LocalDB<T> {
  constructor(private localStorageKey: string) {}
  add(v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface User {
  name: string;
}

const userDB = new LocalDB<User>("user");
userDB.add({ name: "jay" });
// userDB.add('jay') //error => User type이 아니기 때문.
const userA = userDB.get();
userA.name;
