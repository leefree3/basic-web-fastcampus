import { Board, DeadZone } from "./Board";

// named export (이름으로 내보내는 방법)
export class Game {
  readonly board = new Board();
  readonly upperDeadZone = new DeadZone("upper");
  readonly lowerDeadZone = new DeadZone("lower");

  constructor() {
    const boardContainer = document.querySelector(".board-container");
    if (boardContainer.firstChild !== null) {
      boardContainer.firstChild.remove();
    } else {
      console.log(boardContainer.firstChild, " error 발생");
    }
    boardContainer.appendChild(this.board._el);
  }
}
