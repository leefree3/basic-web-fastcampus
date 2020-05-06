import { Board, DeadZone, Cell } from "./Board";
import { Player, PlayerType } from "./Player";
import { Lion } from "./Piece";
// import "./Piece";

// named export (이름으로 내보내는 방법)
export class Game {
  // 현재 플레이어, 게임상태, turn 등에 대한 정보
  private selectedCell: Cell;
  private turn = 0;
  private currentPlayer: Player;
  private gemeInfoEl = document.querySelector(".alert");
  private state: "STARTED" | "END" = "STARTED";

  // plyer가 잡은 말 정보
  readonly upperPlayer = new Player(PlayerType.UPPER);
  readonly lowerPlayer = new Player(PlayerType.LOWER);
  readonly board = new Board(this.upperPlayer, this.lowerPlayer);
  readonly upperDeadZone = new DeadZone("upper");
  readonly lowerDeadZone = new DeadZone("lower");

  constructor() {
    const boardContainer = document.querySelector(".board-container");
    if (boardContainer.firstChild !== null) {
      boardContainer.firstChild.remove();
    } else {
      // 강사님 코드에서는 null처리를 하지 않아도, 초기화가 되어있는 듯한데.. 어디가 잘못된건지 못찾겠어서
      // 일단 if else로 처리를 해두었다.(error처리)
      console.log(boardContainer.firstChild);
    }
    boardContainer.appendChild(this.board._el);

    this.currentPlayer = this.upperPlayer;
    this.board.render();
    this.renderInfo();

    this.board._el.addEventListener("click", (e) => {
      if (this.state === "END") {
        return false;
      }
      // type guard, e.target은 반드시 HTML Element일 것.
      if (e.target instanceof HTMLElement) {
        let cellEl: HTMLElement;
        if (e.target.classList.contains("cell")) {
          cellEl = e.target;
        } else if (e.target.classList.contains("piece")) {
          cellEl = e.target.parentElement;
        } else {
          return false;
        }
        const cell = this.board.map.get(cellEl);

        if (this.isCurrentUserPiece(cell)) {
          this.selected(cell);
          return false;
        }
        if (this.selectedCell) {
          this.move(cell);
          this.changeTurn();
        }
      }
    });
  }
  // 현재 유저 정보
  isCurrentUserPiece(cell: Cell) {
    return (
      cell != null &&
      cell.getPiece() != null &&
      cell.getPiece().ownerType === this.currentPlayer.type
    );
  }
  // 실제 셀을 선택하는 함수
  selected(cell: Cell) {
    if (cell.getPiece() === null) {
      return;
    }
    if (cell.getPiece().ownerType !== this.currentPlayer.type) {
      return;
    }
    if (this.selectedCell) {
      this.selectedCell.deactive();
      this.selectedCell.render();
    }
    this.selectedCell = cell;
    cell.active();
    cell.render();
  }
  //움직였을 때, 로직
  move(cell: Cell) {
    this.selectedCell.deactive();
    const killed = this.selectedCell
      .getPiece()
      .move(this.selectedCell, cell)
      .getKilled();
    this.selectedCell = cell;

    if (killed) {
      if (killed.ownerType === PlayerType.UPPER) {
        this.lowerDeadZone.put(killed);
      } else {
        this.upperDeadZone.put(killed);
      }

      if (killed instanceof Lion) {
        this.state = "END";
      }
    }
  }

  //   ?를 씀으로써, 매개변수가 있을수도, 없을수도 없음을 알려줌
  renderInfo(extraMessage?: string) {
    this.gemeInfoEl.innerHTML = `#${this.turn}턴 ${
      this.currentPlayer.type
    } 차례 ${extraMessage ? "| " + extraMessage : ""}`;
  }
  changeTurn() {
    this.selectedCell.deactive();
    this.selectedCell = null;

    if (this.state === "END") {
      this.renderInfo("END!");
    } else {
      this.turn += 1;
      this.currentPlayer =
        this.currentPlayer === this.lowerPlayer
          ? this.upperPlayer
          : this.lowerPlayer;
      this.renderInfo();
    }
    this.board.render();
  }
}
