import Ship from './Ship';

export default class Gameboard {
    constructor() {
        this.board = Array(10).fill(null).map(() => Array(10));

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            this.board[i][j] = { hasShip: false, isShot: false };
          }
        }
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

    findShipByCoord(coord) {
        return this.ships.find(ship => ship.position.some(pos => pos[0] === coord[0] && pos[1] === coord[1]));
    }

    // Function to get the position of a ship in gameboard.ships based on its coordinates
    getShipPosition(coord) {
        return this.ships.findIndex(ship => ship.position.some(pos => pos[0] === coord[0] && pos[1] === coord[1]));
    }

    receiveAttack(coord) {
        const [x, y] = coord;
        // Shot position
        if (this.board[x][y].isShot) {
            return "Already shot position"
        }

        // Not shot position
        this.board[x][y].isShot = true
        // Ship hit
        if (this.board[x][y].hasShip) {
            let ship = this.findShipByCoord(coord)
            ship.hit(coord)
            return "Hit"
        // Water hit
        } else {
            return "No hit"
        }
    }

    gameLost() {
        return this.ships.every(ship => ship.isSunk)
    }
}