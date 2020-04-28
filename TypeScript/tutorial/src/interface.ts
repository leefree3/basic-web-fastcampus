// js로 컴파일을 하면, interface 안보임
// annotaion을 ts에서 쓰더라도, 실제 js에서는 type만 체크하고 보이지 않음.

interface TV {
  // method:행위 정의만 한다.
  // 이름, 반환되는 것만 정의(안적으면 void)
  // body(구현부) 없음
  turnOn(): boolean;
  turnOff(): void;
}

const myTV: TV = {
  turnOn() {
    return true;
  },
  turnOff() {},
};

// TV interface를 사용하는, 함수
function tryTurnOn(tv: TV) {
  tv.turnOn();
}
tryTurnOn(myTV);

// ?를 붙임으로써, oprional한 속성임을 알려줌.
interface Cell {
  row: number;
  col: number;
  piece?: Piecce;
}

interface Piecce {
  move(form: Cell, to: Cell): boolean;
}

// k,v 값 같으면, 단축표현으로 객체 정의 가능
// row: row, col: col => row, col로 수정
function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row,
        col,
      });
    }
  }
  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};

// interface SignUp{
//     email: string;
//     id: string;
//     password: string;
// }

// function ajaxSignup(data: SignUp){

// }

// ajaxSignup({
//     email: '',
//     id:'',
//     password:''
// })
