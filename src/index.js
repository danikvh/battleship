//const playBattleships = require('./playBattleships')
import './style.css';
import Gameboard from "./factories/Gameboard"

// Ejecutar el juego
//playBattleships();
const boardContainer = document.getElementById('board');
const board = new Gameboard()
console.log(board)