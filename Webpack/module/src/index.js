// Node Js가 가진 내장모듈 (Built in core)
// 사용자로부터 입력 받을 수 있다
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { getCircleArea, getSquareArea } = require("./mathUtil");
const { logFigureError, logInput, logResult } = require("./log");

rl.question(
  "넓이를 구하고자 하는 도형의 종류를 입력해 주세요. { 정사각형, 원 }: ",
  (figure) => {
    console.log(`선택된 도형: ${figure}`);

    switch (figure) {
      case "정사각형":
        rl.question("변의 길이를 입력해 주세요 : ", (input) => {
          console.log(logInput(input));
          console.log(logResult(figure, getSquareArea(input)));
          rl.close();
        });
        break;
      case "원":
        rl.question("변의 길이를 입력해 주세요 : ", (input) => {
          console.log(logInput(input));
          console.log(logResult(figure, getCircleArea(input)));
          rl.close();
        });
        break;
      default:
        console.log(logFigureError);
    }
  }
);
