document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    })

});

function handleClick(event){
    // console.log(event.target);

    let square = event.target;
    let position = square.id;

    if(handleMove(position)) {
        setTimeout(() => { 
        alert('Jogador ' + (playerTime + 1) + ' ganhou!');
        restartGame();
        }, 200);
        
    };

    updateSquare(position);
    
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class=${symbol}></div>`;
}

// function updateSquare() {
//     let squares = document.querySelectorAll('.square');
//     squares.forEach(square => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != '') {
//             square.innerHTML = `<div class=${symbol}></div>`;
//         }
//     })
// }

function restartGame() {
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.innerHTML = `<div class=''></div>`
    })

    alert('Jogo reiniciado!');
}