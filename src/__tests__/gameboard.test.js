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
