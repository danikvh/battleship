import Gameboard from './Gameboard';

export default class Player {
    constructor(gameboard) {
        this.gameboard = gameboard
    }

    attackEnemy(player, coord) {
        if (this.isValidMove(coord)) {
            return player.gameboard.receiveAttack(coord)
        } else {
            return "Invalid move"
        }
    }

    isValidMove(coord) {
        if (coord[0] >= 0 && coord[0] < 10 && coord[1] >= 0 && coord[1] < 10 
                || !this.board[coord[0]][coord[1]].isShot) {
            return true
        } else {
            return false
        }
      }
}