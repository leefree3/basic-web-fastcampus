function add(x, y) {
    return x + y;
}
const result = add(1, 2);
function buildUserInfo(name = "-", email = "-") {
    return { name, email };
}
const user = buildUserInfo();
const add2 = (a, b) => a + b;
function store(type) {
    if (type === "통조림") {
        return { a: "통조림" };
    }
    else if (type === "아이스크림") {
        return { b: "아이스크림" };
    }
    else {
        throw new Error("unsupported");
    }
}
const s = store("통조림");
s.a;
const i = store("아이스크림");
i.b;
//# sourceMappingURL=function.js.map