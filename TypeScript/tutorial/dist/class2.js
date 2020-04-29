class KoreanProgrammer1 {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + ".....";
    }
    loveKimchi() {
        console.log("love~ kimchi!");
    }
}
const jay = new KoreanProgrammer1("jay");
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(msg) {
        console.log(msg);
    }
}
class KoreanProgrammer2 extends Korean {
    constructor(name, juminId) {
        super(name);
        this.name = name;
        this.juminId = juminId;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + ".....";
    }
    loveKimchi() {
        throw new Error("Method not implemented");
    }
}
const jay2 = new KoreanProgrammer2("jay", 880327);
//# sourceMappingURL=class2.js.map