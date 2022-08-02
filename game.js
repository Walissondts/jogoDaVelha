// Iniciar minhas variaveis

let board = ['','','','','','','','',''];
let playerTime = 0; // 0 para o jogador 1 e 1 para o jogador 2
let symbols = ['x', 'o'];
let gameOver = false;
let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {
    if (gameOver) {
        return;
    }
    if (board[position] == '' && !gameOver) {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (!gameOver) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
        // if (!gameOver) {

        //     if (playerTime == 0) {
        //         playerTime = 1;
        //     } else {
        //         playerTime = 0;
        //     }
        // }
    }
    return gameOver;
}

function isWin() {
    let win = false;
    for (i=0; i<winCombinations.length; i++) {
        let seq = winCombinations[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            win = true;
        }
    }
    
    return win;
}