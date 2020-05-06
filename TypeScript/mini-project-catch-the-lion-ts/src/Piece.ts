// typeScript에서는 image 경로를 모듈로 인식해서 error 발생된다.
// global.d.ts로 type definition 을 정의할 수 있다.

import lionImage from "./images/lion.png";
import chickenImage from "./images/chicken.png";
import giraffeImage from "./images/giraffe.png";
import elephantImage from "./images/elephant.png";

import { Cell, Position } from "./Board";
import { PlayerType } from "./Player";

export class MoveResult {
  constructor(private killedPiece: Piece) {}
  getKilled() {
    return this.killedPiece;
  }
}

export interface Piece {
  ownerType: PlayerType;
  currentPosition: Position;
  move(from: Cell, to: Cell): MoveResult;
  render(): string;
}

abstract class DefaultPiece implements Piece {
  constructor(
    public readonly ownerType: PlayerType,
    public currentPosition: Position
  ) {}
  move(from: Cell, to: Cell): MoveResult {
    // 공동 로직, canMove에서 각각 로직 구현하도록 강제
    if (!this.canMove(to.position)) {
      throw new Error("can no move!");
    }
    const moveResult = new MoveResult(
      to.getPiece() != null ? to.getPiece() : null
    );
    to.put(this);
    from.put(null);
    this.currentPosition = to.position;
    return moveResult;
  }
  abstract canMove(position: Position): boolean;
  abstract render();
}

//각 동물별 움직이는 동작 정의(lion, elephant, giraffe, chicken)
// image를 상대경로로 넣고, bundlinig을 할 때, 실제 번들링 된 후의 경로명을 parcel로 받아올 수 있다.
export class Lion extends DefaultPiece {
  canMove(pos: Position) {
    const canMove =
      (pos.row === this.currentPosition.row + 1 &&
        pos.col === this.currentPosition.col) ||
      (pos.row === this.currentPosition.row - 1 &&
        pos.col === this.currentPosition.col) ||
      (pos.row === this.currentPosition.row &&
        pos.col === this.currentPosition.col + 1) ||
      (pos.row === this.currentPosition.row &&
        pos.col === this.currentPosition.col - 1) ||
      (pos.row === this.currentPosition.row + 1 &&
        pos.col === this.currentPosition.col + 1) ||
      (pos.row === this.currentPosition.row + 1 &&
        pos.col === this.currentPosition.col - 1) ||
      (pos.row === this.currentPosition.row - 1 &&
        pos.col === this.currentPosition.col + 1) ||
      (pos.row === this.currentPosition.row - 1 &&
        pos.col === this.currentPosition.col - 1);
    return canMove;
  }
  render(): string {
    return `<img class="piece ${this.ownerType}" src="${lionImage}" width="90%" height="90%"/>`;
  }
}
export class Elephant extends DefaultPiece {
  canMove(pos: Position) {
    const canMove =
      (pos.row === this.currentPosition.row + 1 &&
        pos.col === this.currentPosition.col + 1) ||
      (pos.row === this.currentPosition.row + 1 &&
        pos.col === this.currentPosition.col - 1) ||
      (pos.row === this.currentPosition.row - 1 &&
        pos.col === this.currentPosition.col + 1) ||
      (pos.row === this.currentPosition.row - 1 &&
        pos.col === this.currentPosition.col - 1);
    return canMove;
  }
  render(): string {
    return `<img class="piece ${this.ownerType}" src="${elephantImage}" width="90%" height="90%"/>`;
  }
}
export class Giraffe extends DefaultPiece {
  canMove(pos: Position) {
    const canMove =
      (pos.row === this.currentPosition.row + 1 &&
        pos.col === this.currentPosition.col) ||
      (pos.row === this.currentPosition.row + 1 &&
        pos.col === this.currentPosition.col) ||
      (pos.row === this.currentPosition.row &&
        pos.col === this.currentPosition.col + 1) ||
      (pos.row === this.currentPosition.row &&
        pos.col === this.currentPosition.col - 1);
    return canMove;
  }
  render(): string {
    return `<img class="piece ${this.ownerType}" src="${giraffeImage}" width="90%" height="90%"/>`;
  }
}
export class Chicken extends DefaultPiece {
  canMove(pos: Position) {
    return (
      this.currentPosition.row +
        (this.ownerType == PlayerType.UPPER ? +1 : -1) ===
      pos.row
    );
  }
  render(): string {
    return `<img class="piece ${this.ownerType}" src="${chickenImage}" width="90%" height="90%"/>`;
  }
}
