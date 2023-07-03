export function initializeGame(playerGameboard, computerGameboard) {
    // Render the gameboards on the UI
    // Generar la representación del tablero para el jugador
    const playerBoard = document.getElementById("player-board");
    generateGameboardHTML(playerBoard, playerGameboard);

    // Generar la representación del tablero para la IA
    const aiBoard = document.getElementById("ai-board");
    generateGameboardHTML(aiBoard, computerGameboard);
}

// Function to generate the gameboard HTML
function generateGameboardHTML(boardElement, gameboard) {
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            // Check if the cell has a ship and set the appropriate CSS class
            if (gameboard.board[i][j].hasShip) {
                cell.classList.add('ship');
            } else {
                cell.classList.add('water');
            }
            row.appendChild(cell);
        }
        boardElement.querySelector('tbody').appendChild(row);
    }
}