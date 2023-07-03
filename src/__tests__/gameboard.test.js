import Gameboard from '../factories/Gameboard';
import Ship from '../factories/Ship';

let board

beforeEach(() => {
    board = new Gameboard()
  });

test('board with boat', () => {
    let ship = new Ship(4, [[2,2],[2,3],[2,4],[2,5]])
    board.placeShip(ship)
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
