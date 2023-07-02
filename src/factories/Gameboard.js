export default class Gameboard {
    constructor() {
        this.board = Array(10).fill(null).map(() => Array(10).fill({ hasShip: false, isShot: false }))
    }
}