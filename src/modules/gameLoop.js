// NEW GAMELOOP UNIFIED WITH DOMINTERACTION.JS

// Import necessary classes and modules
import Ship from "../factories/Ship";
import Gameboard from "../factories/Gameboard"
import Player from "../factories/Player"
import PlayerAI from "../factories/PlayerAI"

//Variables
let isGameActive = false;
let ghostDirection = "R"; // The direction of the ghost ship showed to the player

export default function startGame() {
    // Add listener to start button
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", () => {
        // Reinicia el juego y oculta el mensaje
        resetGameboard();
        hideMessage();

        // Inicia el bucle de juego
        gameLoop();
    });

    // Add listener to left and right buttons to rotate the ghost ship showed
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            console.log("RFD")
            switch (ghostDirection) {
                case "R":
                    ghostDirection = event.key === "ArrowLeft" ? "U" : "D";
                    break;
                case "U":
                    ghostDirection = event.key === "ArrowLeft" ? "L" : "R";
                    break;
                case "L":
                    ghostDirection = event.key === "ArrowLeft" ? "D" : "U";
                    break;
                case "D":
                    ghostDirection = event.key === "ArrowLeft" ? "R" : "L";
                    break;
            }
            console.log(ghostDirection);
        }
    });
    
    // Start the game
    isGameActive = true;
    testGame(); // Inicia el bucle del juego
}

async function gameLoop() {
    // Create players and gameboards
    const playerGameboard = new Gameboard();
    const computerGameboard = new Gameboard();
    const player = new Player(playerGameboard, computerGameboard);
    const computer = new PlayerAI(computerGameboard, playerGameboard);

    // Create user ships
    showGhostShip(5);


    // Populate gameboards with predetermined ship coordinates
    const defaultShipsData = [
        { length: 3, coordinates: [[3, 2], [3, 3], [3, 4]] },
        { length: 4, coordinates: [[4, 2], [5, 2], [6, 2], [7, 2]] },
        { length: 4, coordinates: [[8, 2], [8, 3], [8, 4], [8, 5]] },
        { length: 5, coordinates: [[5, 3], [5, 4], [5, 5], [5, 6], [5, 7]] },
    ];
    defaultShipsData.forEach((shipData) => {
        const ship = new Ship(shipData.length, shipData.coordinates);
        playerGameboard.placeShip(ship);
    });
    defaultShipsData.forEach((shipData) => {
        const ship = new Ship(shipData.length, shipData.coordinates);
        computerGameboard.placeShip(ship);
    });


    // Iniciar el juego llamando a la función de inicialización en domInteraction.js
    initializeGame(playerGameboard, computerGameboard);


    // Implement the game loop
    while (!gameOver() && isGameActive) {
        // Player's turn
        let playerAttackCoords = await getPlayerAttackCoordsAsync(); // Wait until attack coordinates are obtained
        while(!player.isValidMove(playerAttackCoords)) {
            playerAttackCoords = await getPlayerAttackCoordsAsync();
        }
        const playerAttackResult = player.attackEnemy(playerAttackCoords);
        gameOver()

        // Computer's turn
        let computerAttackCoords = computer.generateAttack()
        while(!computer.isValidMove(computerAttackCoords)) {
            computerAttackCoords = computer.generateAttack()
        }
        const computerAttackResult = computer.attackEnemy(computerAttackCoords);
        // Update UI to reflect the attack result
        updatePlayerBoard(computerAttackCoords, computerAttackResult, playerGameboard)
    }

    // Function to check if the game is over
    function gameOver() {
        if (computerGameboard.gameLost()) {
            showMessage("You Win!");
            return true
        }
        if (playerGameboard.gameLost()) {
            showMessage("You Lose!"); 
            return true
        }
        return false
    }
}

function showMessage(message) {
    const messageElement = document.getElementById("message");
    const messageTextElement = messageElement.querySelector("h3");
    messageTextElement.textContent = message;
    messageElement.classList.remove("hidden-message");
}

function hideMessage() {
    const messageElement = document.getElementById("message");
    messageElement.classList.add("hidden-message");
}

function resetGameboard() {
    const playerBoardContainer = document.getElementById("player-board");
    const aiBoardContainer = document.getElementById('ai-board');

    // Elimina las gameboards existentes si las hay
    playerBoardContainer.innerHTML = '';
    playerBoardContainer.appendChild(document.createElement('tbody'));
    aiBoardContainer.innerHTML = '';
    aiBoardContainer.appendChild(document.createElement('tbody'));
}

// Shows the boat to be added in the cursor
async function showGhostShip(shipSize) {
    const shipElement = document.createElement("div");
    shipElement.classList.add("ghost-ship");
    document.body.appendChild(shipElement);

    shipElement.style.width = `${shipSize * 40}px`
  
    // Función para dibujar el barco sobre el cursor
    const drawShipOnCursor = (event) => {
        const x = event.clientX - 15
        const y = event.clientY - 15
        shipElement.style.left = `${x}px`;
        shipElement.style.top = `${y}px`;
    };
  
    // Evento para detectar el movimiento del ratón
    document.addEventListener("mousemove", drawShipOnCursor);
}

// Deletes the ghost ships on the cursor
function removeGhostShips() {
    const ghostShips = document.querySelectorAll(".ghost-ship");
    ghostShips.forEach((ship) => ship.remove());
}


//A test game with predefined boats and same boats on both sides
async function testGame() {
    // Create players and gameboards
    const playerGameboard = new Gameboard();
    const computerGameboard = new Gameboard();
    const player = new Player(playerGameboard, computerGameboard);
    const computer = new PlayerAI(computerGameboard, playerGameboard);

    // Populate gameboards with predetermined ship coordinates
    const defaultShipsData = [
        { length: 3, coordinates: [[3, 2], [3, 3], [3, 4]] },
        { length: 4, coordinates: [[4, 2], [5, 2], [6, 2], [7, 2]] },
        { length: 4, coordinates: [[8, 2], [8, 3], [8, 4], [8, 5]] },
        { length: 5, coordinates: [[5, 3], [5, 4], [5, 5], [5, 6], [5, 7]] },
    ];
    defaultShipsData.forEach((shipData) => {
        const ship = new Ship(shipData.length, shipData.coordinates);
        playerGameboard.placeShip(ship);
    });
    defaultShipsData.forEach((shipData) => {
        const ship = new Ship(shipData.length, shipData.coordinates);
        computerGameboard.placeShip(ship);
    });


    // Iniciar el juego llamando a la función de inicialización en domInteraction.js
    initializeGame(playerGameboard, computerGameboard);


    // Implement the game loop
    while (!gameOver() && isGameActive) {
        // Player's turn
        let playerAttackCoords = await getPlayerAttackCoordsAsync(); // Wait until attack coordinates are obtained
        while(!player.isValidMove(playerAttackCoords)) {
            playerAttackCoords = await getPlayerAttackCoordsAsync();
        }
        const playerAttackResult = player.attackEnemy(playerAttackCoords);
        gameOver()

        // Computer's turn
        let computerAttackCoords = computer.generateAttack()
        while(!computer.isValidMove(computerAttackCoords)) {
            computerAttackCoords = computer.generateAttack()
        }
        const computerAttackResult = computer.attackEnemy(computerAttackCoords);
        // Update UI to reflect the attack result
        updatePlayerBoard(computerAttackCoords, computerAttackResult, playerGameboard)
    }

    // Function to check if the game is over
    function gameOver() {
        if (computerGameboard.gameLost()) {
            showMessage("You Win!");
            return true
        }
        if (playerGameboard.gameLost()) {
            showMessage("You Lose!"); 
            return true
        }
        return false
    }
}




// DOMINTERACTION.JS

// LISTENERS //
// AI Board cell click, attacking a coordinate
const aiCells = document.querySelectorAll('#ai-board td');
aiCells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Failed shot
        if (cell.classList.contains('water'))  {
            cell.style.backgroundColor = '#0759b6'
        }
        // Succesful shot
        cell.classList.remove('hidden'); // Remueve la clase 'hidden' al hacer clic en una celda de la IA
        const row = cell.parentNode.rowIndex;
        const col = cell.cellIndex;
        const attackCoords = [row, col];
        setPlayerAttackCoords(attackCoords); // Almacena las coordenadas de ataque del jugador
    });
});



let playerAttackCoords = null; // Variable para almacenar las coordenadas de ataque del jugador

function initializeGame(playerGameboard, computerGameboard) {
    // Render the gameboards on the UI
    // Generar la representación del tablero para el jugador
    const playerBoard = document.getElementById("player-board");
    generateGameboardHTML(playerBoard, playerGameboard);

    // Generar la representación del tablero para la IA
    const aiBoard = document.getElementById("ai-board");
    generateGameboardHTML(aiBoard, computerGameboard);


    // Agrega el evento de clic a las celdas del tablero de la IA
    const aiCells = document.querySelectorAll('#ai-board td');
    aiCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('water'))  {
                cell.style.backgroundColor = '#0759b6'
            }
            cell.classList.remove('hidden'); // Remueve la clase 'hidden' al hacer clic en una celda de la IA
            const row = cell.parentNode.rowIndex;
            const col = cell.cellIndex;
            const attackCoords = [row, col];
            setPlayerAttackCoords(attackCoords); // Almacena las coordenadas de ataque del jugador
        });
    });
}

// Function to generate the gameboard HTML
function generateGameboardHTML(boardElement, gameboard) {
    const shipColors = ['#111111', '#222222', '#333333', '#444444', '#555555'];

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            // Check if the cell has a ship and set the appropriate CSS class
            if (gameboard.board[i][j].hasShip) {
                const shipIndex = gameboard.getShipPosition([i,j])
                cell.style.backgroundColor = shipColors[shipIndex]; // Asignar color basado en el índice del barco
                cell.classList.add('ship');
            } else {
                cell.classList.add('water');
            }
            // Add specific class for AI cells
            if (boardElement.id === 'ai-board') {
                cell.classList.add('hidden');
            }
            row.appendChild(cell);
        }
        boardElement.querySelector('tbody').appendChild(row);
    }
}

export function updatePlayerBoard(cellCoords, result, board) {
    const [row, col] = cellCoords;
    const cells = document.querySelectorAll('#player-board td');
    const cellIndex = row * 10 + col;
    const cell = cells[cellIndex];
    if (result === 'Hit') {
        cell.style.backgroundColor = 'red'; // Actualizar celda a color rojo en caso de impacto en un barco
    } else if (result === 'No hit') {
        cell.style.backgroundColor = '#0759b6'; // Actualizar celda a color gris en caso de impacto en el agua
    }
}


export function getPlayerAttackCoordsAsync() {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            const playerAttackCoords = getPlayerAttackCoords();
            if (playerAttackCoords !== null) {
                clearInterval(interval);
                resolve(playerAttackCoords);
            }
        }, 100); // Intervalo de verificación cada 100 ms (puedes ajustarlo según tus necesidades)
    });
}

function getPlayerAttackCoords() {
    let aux = playerAttackCoords
    playerAttackCoords = null
    return aux; // Devuelve las coordenadas de ataque del jugador almacenadas previamente
}

function setPlayerAttackCoords(coords) {
    playerAttackCoords = coords; // Almacena las coordenadas de ataque del jugador en la variable playerAttackCoords
}