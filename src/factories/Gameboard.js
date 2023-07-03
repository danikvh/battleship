import Ship from './Ship';

export default class Gameboard {
    constructor() {
        this.board = Array(10).fill(null).map(() => Array(10).fill({ hasShip: false, isShot: false }))
        this.ships = []
    }

    placeShip(ship) {
        if (!(ship instanceof Ship)) throw new Error("Not Ship object")

        // Verificar si las posiciones están disponibles
        const coordinates = ship.position
        const positionsAvailable = coordinates.every(([x, y]) => !this.board[x][y].hasShip);
        if (!positionsAvailable) {
            throw new Error('Cannot place ship at specified coordinates');
        }

        // Colocar el barco en las posiciones
        coordinates.forEach(([x, y]) => {
            this.board[x][y] = { hasShip: true, isShot: false };
        });
        this.ships.push(ship)
    }
}