// alert('🍆');

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let postion = square.id;

    function emoji() {
        if (playerTime == 0){
            return '🛡️'
        }
        if (playerTime == 1) {
            return '⚔️'
        }
    }

    if (handleMove(postion)) {

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + emoji());
        }, 10);

    };
    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.innerHTML = ``
        board = ['', '', '', '', '', '', '', '', '']
        playerTime = 0;
        symbols = ['o', 'x'];
        gameOver = false;
    })

}

let button = document.getElementById('restart');

button.addEventListener('click', updateSquares);