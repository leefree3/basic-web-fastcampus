var score1 = 0;
let score2 = 200;
const defaultScore = 0;

//var: 함수단위의 block scope를 갖는다.
//let: block 단위의 scope, 값을 처음에 할당하면, 다른타입의 값으로 변경할 수 없다., annotation으로 타입 지정가능
//const: 재할당이 불가능하다.
function outer() {
  // var keyword
  //   if (true) {
  //     var score = 0
  //   }
  //   for (var i = 0; i < 3; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 100);
  //   }
  // consoel.log(score)
  ////////////////////////////////////
  // let
  //   if (true) {
  //     let score: number; //type annotaion
  //     score = 30;
  //   }
  //   for (let i = 0; i < 3; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 100);
  //   }
  // if(true){
  //     const score =100; //const 는 상수, 따라서 반드시 값을 할당
  //     // score = 30; 재할당 안된다.
  // }
  // console.log(score); //블록안에서만 사용가능
}

outer();
