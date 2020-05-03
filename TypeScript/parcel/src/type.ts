// type을 정의한 ts 파일
// default를 하지 않으면 별칭(이름)에 의미가 있다.
// import 시 이름 불러올 수 있게 된단 소리
// default로 내보낼 수 있는건 하나만 가능
export interface Hello {
  text: string;
}
export const user = {
  name: "user1",
};
/*;
export default class A {
  a() {}
}
*/
type d = Hello & { hi(): void };
export default d;
