import Gameboard from '../factories/Gameboard';
import Ship from '../factories/Ship';

let board
let ship

beforeEach(() => {
    board = new Gameboard()
    ship = new Ship(4, [[2,2],[2,3],[2,4],[2,5]])
    board.placeShip(ship)
  });

test('board with boat', () => {
    expect(board.board[2][2].hasShip).toBe(true);
    expect(board.board[2][3].hasShip).toBe(true);
    expect(board.board[2][4].hasShip).toBe(true);
    expect(board.board[2][5].hasShip).toBe(true);
    expect(board.ships[0]).toEqual({
        length: 4,
        position: [[2,2],[2,3],[2,4],[2,5]],
        hits: [],
        isSunk: false
    });
});

test('find boat', () => {
    let s = board.findShipByCoord([2,2])
    expect(s).toBe(ship);
});

test('shoot boat', () => {
    expect(board.receiveAttack([2,2])).toBe("Hit");
});

test('shoot failed', () => {
    expect(board.receiveAttack([4,2])).toBe("No hit");
});

test('boat sunk', () => {
    board.receiveAttack([2,2]) 
    board.receiveAttack([2,3])
    board.receiveAttack([2,4])
    board.receiveAttack([2,5])
    expect(board.gameLost()).toBe(true);
});

test('boat almost sunk', () => {
    board.receiveAttack([2,2]) 
    board.receiveAttack([2,3])
    board.receiveAttack([2,4])
    expect(board.gameLost()).toBe(false);
});

describe('Gameboard functions', () => {
	let testBoard;
	beforeEach(() => {
		testBoard = new Gameboard();
	});

	it('initializes a gameboard with the appropriate amount of cells', () => {
		const arr = Array(10).fill(null).map(() => Array(10));

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            arr[i][j] = { hasShip: false, isShot: false };
          }
        }
		expect(testBoard.board).toEqual(arr);
	});

	it('updates a cell when receiving a shot', () => {
		testBoard.receiveAttack([1,0]);
		expect(testBoard.board[1][0].isShot).toBe(true);
	});

	it('responds to a miss', () => {
		expect(testBoard.board[1][0].isShot).toBe(false);
	});

	it('confirms a hit', () => {
		ship = new Ship(4, [[1,0],[1,1],[1,2],[1,3]])
        testBoard.placeShip(ship)
		expect(testBoard.receiveAttack([1,0])).toBe("Hit");
	});
});