// Import necessary classes and modules
import Ship from "../factories/Ship";
import Gameboard from "../factories/Gameboard"
import Player from "../factories/Player"
import PlayerAI from "../factories/PlayerAI"
import { initializeGame, getPlayerAttackCoordsAsync, updatePlayerBoard } from "./domInteraction";

//Variables
let isGameActive = false;

export default function startGame() {
    // Add listener to start button
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", () => {
        // Reinicia el juego y oculta el mensaje
        resetGameboard();
        hideMessage();
        showGhostShip();

        // Inicia el bucle de juego
        gameLoop();
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
function showGhostShip() {
    const shipElement = document.createElement("div");
    shipElement.classList.add("ghost-ship");
    document.body.appendChild(shipElement);
  
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