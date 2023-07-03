import Player from '../factories/Player';
import PlayerAI from '../factories/PlayerAI';
import Gameboard from '../factories/Gameboard';
import Ship from '../factories/Ship';

let player1
let player2
let board1
let board2
let ship

beforeEach(() => {
    board1 = new Gameboard()
    board2 = new Gameboard()
    player1 = new Player(board1)
    player2 = new PlayerAI(board2)
    ship = new Ship(4, [[2,2],[2,3],[2,4],[2,5]])
    board2.placeShip(ship)
});

test('attack enemy boat', () => {
    expect(player1.attackEnemy(player2, [2,2])).toBe("Hit");
});
