// type 별칭 (카워드: type)
interface User {
  name: string;
}
interface Action {
  do(): void;
}

//intersection을 만들고, type alias를 정하기
type UserAction = User & Action;
function createUserAction(): UserAction {
  return {
    do() {},
    name: "",
  };
}

type StringOrNumber = string | number;
// Arr type은 type parameter로 T를 받아서, T[]배열 타입을 가리킨다.
type Arr<T> = T[];
type P<T> = Promise<T>;

//단순 별칭만 지정하는게 아니라, interface처럼 특정 타입을 정할 수도 있다.
type User2 = {
  name: string;
  login(): boolean;
};
class UserImpl implements User2 {
  login(): boolean {
    throw new Error("Method not implemented.");
  }
  name: string;
}

// 문자형 리터럴 타입을 가진다.
type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User2): UserState {
  if (user.login()) {
    return "APPROVED";
  } else {
    return "REJECTED";
  }
}
