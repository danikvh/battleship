import Ship from '../factories/Ship';

let ship

beforeEach(() => {
    ship = new Ship(4,[[2,2],[2,3],[2,4],[2,5]])
  });

test('normal ship', () => {
    expect(ship).toEqual({
        length: 4,
        position: [[2,2],[2,3],[2,4],[2,5]],
        hits: [],
        isSunk: false
    });
});

test('hit', () => {
    ship.hit([2,3])
    expect(ship).toEqual({
        length: 4,
        position: [[2,2],[2,3],[2,4],[2,5]],
        hits: [[2,3]],
        isSunk: false
    });
});

