let playerAttackCoords = null; // Variable para almacenar las coordenadas de ataque del jugador

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
    console.log(cell)
    if (result === 'Hit') {
        cell.style.backgroundColor = 'red'; // Actualizar celda a color rojo en caso de impacto en un barco
    } else if (result === 'No hit') {
        cell.style.backgroundColor = 'gray'; // Actualizar celda a color gris en caso de impacto en el agua
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