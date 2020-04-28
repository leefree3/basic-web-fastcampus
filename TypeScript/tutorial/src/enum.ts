//열거형: 상수들의 집합을 정의할 때 사용
//player의 종류, starbucks의 등급
enum StarbucksGrade {
  //(index 정의하지 않는다면, 자동으로 할당됨)
  //주의할 점은 중간에 열거할 상수를 집어넣게 되면, index에 혼란이 올 수 있다.
  // 따라서, 초기값을 할당해서 안전하게 사용하는 편이 좋다.
  // 숫자 뿐만아니라, 문자열로 정의할 수도 있다.
  WELCOME = "WELCOME",
  BRONZE = "BRONZE",
  GREEN = "GREEN",
  GOLD = "GOLD",
}

// 할인값 반환
function getDiscount(v: StarbucksGrade): number {
  switch (v) {
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

/*
//자동 index 할당시
console.log(getDiscount(StarbucksGrade.GREEN)); //5
console.log(StarbucksGrade.GREEN); //1 (index num)

//직접 초기화(숫자로)
console.log(StarbucksGrade); //객체로 표현됨 (문자열, number 쌍방으로 정의되어 있음)
console.log(StarbucksGrade["0"]);
console.log(StarbucksGrade["WELCOME"]);

//직접 초기화(문자로)
console.log(StarbucksGrade.GREEN === "GREEN"); // true
*/
