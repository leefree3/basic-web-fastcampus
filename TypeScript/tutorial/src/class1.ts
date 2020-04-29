interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

// es6에서는, constructor 내부에서만 property를 정의할 수 있었다.
// class에서 property를 정의할 수있는 방법이 논의 되고 있고, ts에서는 class의 body에서 정의 가능하다.

// es6에서는 접근제한자를 정의해서 사용하는 방법이 없지만, ts에는 있다.
// 접근제한자를 적지 않으면 default는 public, public은 모두 접근 가능
// protected: instance 접근 불가, 대신, Cart를 상속했을 경우, 상속한 calss 내부에서는 접근가능
// private: instance 접근 불가, store는 class 내부에서만 접근 가능, 상속시에도 내부에서 접근 불가

// 생성자 정의 시, 생성자의 매개변수를 정의한다.
// 생성자의 매개변수에 접근제한자를 같이 쓰면,
//속성을 정의하고 동시에 전달받은 인자를 한번에 처리할 수 있게 됨. (user를 예로 들겠음)

class Cart {
  //   protected user: User;
  //   private store: object;

  constructor(protected user: User, private store: object = {}) {
    // this.user = user;
    // this.store = {};
  }
  public put(id: string, product: Product) {
    this.store[id] = product;
  }
  public get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion() {
    this.user; //상속 시, protected는 접근 가능! private은 불가
  }
}

const cartJohn = new Cart({ name: "John" });
// cartJohn.get
// cartJohn.store //private 속성이기 때문에 접근불가
const cartJay = new Cart({ name: "Jay" });

const cart2 = new PromotionCart({ name: "John" });
//카트를 상속받은 method까지 사용가능.(접근제한자에 따라 상이하나, 가능)
