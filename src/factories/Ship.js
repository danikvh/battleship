export default class Ship {
    constructor(length, position) {
        this.length = length
        this.position = position
        this.hits = []
        this.isSunk = false
    }

    hit(index) {
        this.hits.push(index)
        if (this.hits === this.length) {
            this.isSunk = true
        }
    }

    isSunk() {
        return isSunk
    }
}
