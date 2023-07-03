import Gameboard from './Gameboard';

export default class Player {
    constructor(gameboard, enemyGameboard) {
        this.gameboard = gameboard
        this.enemyGameboard = enemyGameboard
    }

    attackEnemy(coord) {
        if (this.isValidMove(coord)) {
            return this.enemyGameboard.receiveAttack(coord)
        } else {
            return "Invalid move"
        }
    }

    isValidMove(coord) {
        if (coord[0] >= 0 && coord[0] < 10 && coord[1] >= 0 && coord[1] < 10 
                && !this.enemyGameboard.board[coord[0]][coord[1]].isShot) {
            return true
        } else {
            return false
        }
    }
}