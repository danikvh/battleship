export default class Ship {
    constructor(length, position) {
        this.length = length
        this.validateCoordinates(position); // Validar las coordenadas al momento de crear el barco
        this.position = position
        this.hits = []
        this.isSunk = false
    }

    validateCoordinates(coordinates) {
        // Verificar si las coordenadas tienen la longitud correcta
        if (coordinates.length !== this.length) {
            throw new Error('Invalid coordinates');
        }
    
        // Verificar si las coordenadas son válidas (en este caso, dentro del rango 0-9)
        const validCoordinates = coordinates.every(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10);
    
        if (!validCoordinates) {
            throw new Error('Invalid coordinates');
        }
    }

    hit(coords) {
        this.hits.push(coords)
        if (this.hits.length === this.length) {
            this.isSunk = true
        }
    }

    isSunk() {
        return isSunk
    }
}
