function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise(1, 100).then((v) => console.log(v));
createPromise("1", 100).then((v) => console.log(v));
function createPromise2(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise2("1", 100).then((v) => console.log(v));
function createTuple2(v, v2) {
    return [v, v2];
}
function createTuple3(v, v2, v3) {
    return [v, v2, v3];
}
const t2 = createTuple2("user1", 1000);
const t3 = createTuple3("user1", 10, "ASDF");
//# sourceMappingURL=generic1.js.map