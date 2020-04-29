class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}
const cartJohn = new Cart({ name: "John" });
const cartJay = new Cart({ name: "Jay" });
const cart2 = new PromotionCart({ name: "John" });
//# sourceMappingURL=class1.js.map