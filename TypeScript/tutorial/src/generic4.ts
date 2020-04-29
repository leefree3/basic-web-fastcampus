// 조건부 type을 generic으로 쓰는 방법
interface Vegitable {
  v: string;
}
interface Meat {
  m: string;
}
interface MarketCart<T> {
  getItem(): T extends Vegitable ? Vegitable : Meat;
}

const cart1: MarketCart<string> = {
  getItem() {
    return { m: "" };
  },
};
const cart3: MarketCart<Vegitable> = {
  getItem() {
    return { v: "" };
  },
};

cart1.getItem();
