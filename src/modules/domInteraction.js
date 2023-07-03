export function initializeGame(playerGameboard, computerGameboard) {
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
            cell.classList.remove('hidden'); // Remueve la clase 'hidden' al hacer clic en una celda de la IA
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