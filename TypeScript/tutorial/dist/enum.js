var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade["WELCOME"] = "WELCOME";
    StarbucksGrade["BRONZE"] = "BRONZE";
    StarbucksGrade["GREEN"] = "GREEN";
    StarbucksGrade["GOLD"] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(StarbucksGrade.GREEN === "GREEN");
//# sourceMappingURL=enum.js.map