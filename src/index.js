//const playBattleships = require('./playBattleships')
import './style.css';
import Gameboard from "./factories/Gameboard"

// Ejecutar el juego
//playBattleships();
const board = new Gameboard()
const boardElement = document.getElementById('board');
const boardSize = 10; // Tamaño del tablero (10x10 en este caso)

// Generar las filas y celdas del tablero
for (let row = 0; row < boardSize; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < boardSize; col++) {
        const td = document.createElement('td');
        td.dataset.row = row;
        td.dataset.col = col;
        tr.appendChild(td);
    }
    boardElement.querySelector('tbody').appendChild(tr);
}


console.log(board)