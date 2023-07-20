// NEW GAMELOOP UNIFIED WITH DOMINTERACTION.JS

// Import necessary classes and modules
import Ship from "../factories/Ship";
import Gameboard from "../factories/Gameboard"
import Player from "../factories/Player"
import PlayerAI from "../factories/PlayerAI"


//Variables
let isGameActive = false; // Determines if a game is being played
let ghostDirection = "U"; // The direction of the ghost ship showed to the player
let playerAttackCoords = null; // store the attacked coordinates of the player
let actualShipSize = 5; // The size of the actual ghost ship being put on the gameboard


//// FUNCTIONS ////
/**
 * Starts the game
 * 
 * @return initializes listeners and starts the game
 */
export default function startGame() { 
    // Listeners
    // AI Board cell click, attacking a coordinate
    const aiCells = document.querySelectorAll('#ai-board td');
    aiCells.forEach(cell => { cell.addEventListener('click', handleAICellClick) });
    // Start button click listener
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", resetGame);
    // Left and right click listeners to rotate ghost ships
    document.addEventListener("keydown", leftRightArrows);
    
    // Start the game
    gameLoop(); // Inicia el bucle del juego
}


/**
 * Logic of a game loop
 * 
 * @return starts a game
 */
async function gameLoop() {
    // A game is being played
    isGameActive = true;

    // Create players and gameboards
    const playerGameboard = new Gameboard();
    const computerGameboard = new Gameboard();
    const player = new Player(playerGameboard, computerGameboard);
    const computer = new PlayerAI(computerGameboard, playerGameboard);

    // Render the empty boards
    renderBoards(playerGameboard, computerGameboard);

    // Create user ships
    let coord = await showGhostShip(5);
    console.log(coord)

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
    renderBoards(playerGameboard, computerGameboard);


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
        updatePlayerBoard(computerAttackCoords, computerAttackResult)
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
    renderBoards(playerGameboard, computerGameboard);


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
        updatePlayerBoard(computerAttackCoords, computerAttackResult)
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




// LISTENER FUNCTIONS //
/**
 * Handle AI Board cell click, attacking a coordinate.
 *
 * @param {Event} event The click event object.
 */
function handleAICellClick(event) {
    const cell = event.target;

    // Failed shot
    if (cell.classList.contains('water')) {
        cell.style.backgroundColor = '#0759b6';
    }

    // Successful shot
    cell.classList.remove('hidden');
    
    // Obtain the coords and shoot
    const row = cell.parentNode.rowIndex;
    const col = cell.cellIndex;
    const attackCoords = [row, col];
    setPlayerAttackCoords(attackCoords); // Almacena las coordenadas de ataque del jugador
}

/**
 * Resets a game
 *
 * Leaves the gameboards renders blank and starts a new game loop
 * 
 * @return a newly started game
 */
function resetGame(event) {
    // Reinicia el juego y oculta el mensaje
    resetGameboard();
    renderBoards(new Gameboard(), new Gameboard()); // Blank Gameboard objects to render empty gameboards
    hideMessage();

    // Inicia el bucle de juego
    //gameLoop();
}

/**
 * Add listener to left and right buttons to rotate the ghost ship showed
 * 
 * @return a newly started game
 */
function leftRightArrows(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
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
        updateGhostShipSize() // Moves the ghost ship according to the new direction
        console.log(ghostDirection);
    }
}



// BOARD FUNCTIONS //
/**
 * Render the gameboards on screen
 *
 * @param {Gameboard} playerGameboard The player's Gameboard object
 * @param {Gameboard} computerGameboard The AI's Gameboard object
 * @return the gameboard elements from the HTML with the cells rendered
 */
function renderBoards(playerGameboard, computerGameboard) {
    // Render the gameboards on the UI
    // Generar la representación del tablero para el jugador
    const playerBoard = document.getElementById("player-board");
    generateGameboardHTML(playerBoard, playerGameboard);

    // Generar la representación del tablero para la IA
    const aiBoard = document.getElementById("ai-board");
    generateGameboardHTML(aiBoard, computerGameboard);
}

// COULD BE MOVED TO DOMINTERACTION.JS
/**
 * Given a completed Gameboard (with Ships in it), generates the HTML table associated to it
 *
 * @param {HTMLElement} boardElement The HTML table associated to the gameboard
 * @param {Gameboard} gameboard The Gameboar object containing the initial state with ships of the board
 * @return the HTML render of the gameboard
 */
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

/**
 * Given an attack, updates the HTML render of the Gameboard
 *
 * @param {number[]} cellCoords The coordinates attacked
 * @param {string} result The attack to cellCoords was a Hit or No hit
 * @return the updated HTML render of the Gameboard attack
 */
function updatePlayerBoard(cellCoords, result) {
    const [row, col] = cellCoords;
    const cells = document.querySelectorAll('#player-board td');
    const cellIndex = row * 10 + col; // Obtain the relative position on the table (1 dimension)
    const cell = cells[cellIndex];

    // Paint the cell as a hit or a failed hit
    if (result === 'Hit') {
        cell.style.backgroundColor = 'red'; // Actualizar celda a color rojo en caso de impacto en un barco
    } else if (result === 'No hit') {
        cell.style.backgroundColor = '#0759b6'; // Actualizar celda a color gris en caso de impacto en el agua
    }
}

/**
 * Resets the gameboards HTML renders
 * 
 * @return the gameboard HTML elements with no elements/children on them
 */
function resetGameboard() {
    const playerBoardContainer = document.getElementById("player-board");
    const aiBoardContainer = document.getElementById('ai-board');

    // Elimina las gameboards existentes si las hay
    playerBoardContainer.innerHTML = '';
    playerBoardContainer.appendChild(document.createElement('tbody'));
    aiBoardContainer.innerHTML = '';
    aiBoardContainer.appendChild(document.createElement('tbody'));
}




// ATTACK FUNCTIONS //
/**
 * Asynchronously get the player's attack coordinates.
 * 
 * This function returns a Promise that resolves once the player's attack coordinates
 * have been obtained. It repeatedly checks for the attack coordinates every 100 ms
 * until they are available.
 * 
 * @return {Promise<Array<number> | null>} A Promise that resolves with an array
 *     containing the player's attack coordinates [row, col], or null if the attack
 *     coordinates are not yet available.
 */
function getPlayerAttackCoordsAsync() {
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

/**
 * This function retrieves the player's attack coordinates that were stored previously
 * in the variable playerAttackCoords. It then sets playerAttackCoords to null, clearing
 * the stored coordinates for the next attack.
 * 
 * @return {number[] | null} An array containing the player's attack coordinates
 *     [row, col], or null if the attack coordinates have not been set yet.
 */
function getPlayerAttackCoords() {
    let aux = playerAttackCoords
    playerAttackCoords = null
    return aux; // Devuelve las coordenadas de ataque del jugador almacenadas previamente
}

/**
 * Set the player's attack coordinates.
 * 
 * @param {number[]} coords An array containing the player's attack coordinates in the format [row, col].
 */
function setPlayerAttackCoords(coords) {
    playerAttackCoords = coords; // Almacena las coordenadas de ataque del jugador en la variable playerAttackCoords
}



// GHOST SHIP FUNCTIONS //
/**
 * Shows the boat to be added in the cursor
 * 
 * @param {number} shipSize The size of the ship added
 */
async function showGhostShip(shipSize) {
    actualShipSize = shipSize // Update for the rotate function

    const shipElement = document.createElement("div");
    shipElement.classList.add("ghost-ship");
    document.body.appendChild(shipElement);

    // Reset the ghost ship direction
    ghostDirection = "R"
    shipElement.style.width = `${shipSize * 40}px`
  
    // Evento para detectar el movimiento del ratón
    document.addEventListener("mousemove", (event) => {
        drawShipOnCursor(event, shipElement)});

    let coords = await clickGameboard();
    return coords
}

/**
 * Draws the ship on the cursor
 * 
 * @param {HTMLElement} shipElement the ghost ship HTML visual
 * @return the ship on the cursor
 */
// Función para dibujar el barco sobre el cursor
function drawShipOnCursor (event, shipElement) {
    let x = event.clientX - 15
    let y = event.clientY - 15
    switch (ghostDirection) {
        case "R":
            x = event.clientX - 15
            y = event.clientY - 15
            break;
        case "U":
            x = event.clientX - 15
            y = event.clientY - 15 - actualShipSize * 40 + 40
            break;
        case "L":
            x = event.clientX - 15 - actualShipSize * 40 + 40
            y = event.clientY - 15
            break;
        case "D":
            x = event.clientX - 15
            y = event.clientY - 15
            break;
    }

    shipElement.style.left = `${x}px`;
    shipElement.style.top = `${y}px`;
};

/**
 * Adjusts the ship size horizontally or vertically
 * 
 * @return the ship on the cursor rotated
 */
function updateGhostShipSize() {
    const ghostShip = document.querySelectorAll(".ghost-ship")[0]
    switch (ghostDirection) {
        case "R":
        case "L":
            ghostShip.style.width = `${actualShipSize * 40}px`
            ghostShip.style.height = `40px`
            break;
        case "U":
        case "D":
            ghostShip.style.width = `40px`
            ghostShip.style.height = `${actualShipSize * 40}px`
            break;
    }
}

// Deletes the ghost ships on the cursor
function removeGhostShips() {
    const ghostShips = document.querySelectorAll(".ghost-ship");
    ghostShips.forEach((ship) => ship.remove());
}

/**
 * The player click his gameboard and a ship is positioned on the player gameboard
 * 
 * @return {Array} [row, col] The coordinates of the selected cell
 */
async function clickGameboard() {
    return new Promise((resolve) => {
        const playerBoardCells = document.querySelectorAll("#player-board td");
        const clickListener = (event) => {
            const cell = event.target;
            const row = cell.parentNode.rowIndex;
            const col = cell.cellIndex;
            resolve([row, col]);
        };
    
        playerBoardCells.forEach((cell) => {
            cell.addEventListener("click", clickListener, { once: true });
        });
    });
}


// VISUALS //
/**
 * Shows a text on the message below the gameboards
 * 
 * @param {string} message string to show
 * @return shows the message on the page
 */
function showMessage(message) {
    const messageElement = document.getElementById("message");
    const messageTextElement = messageElement.querySelector("h3");
    messageTextElement.textContent = message;
    messageElement.classList.remove("hidden-message");
}

/**
 * Hides the message below the gameboards
 * 
 * @return hides the message on the page
 */
function hideMessage() {
    const messageElement = document.getElementById("message");
    messageElement.classList.add("hidden-message");
}