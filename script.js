//Game Controller

const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,4,8], 
    [2,4,6], [0,3,6], [1,4,7], [2,5,8]
];














































/*var currentPlayer, gamePlaying, X, O;



//init();







function checkForWinner(){
   
}


function nextPlayer(){
    if(currentPlayer === X){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }
    checkForWinner();
}


function activeGame(){
    if(gamePlaying){
        document.getElementById('box-0').addEventListener('click', function(){
            document.getElementById('box-0').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-1').addEventListener('click', function(){
            document.getElementById('box-1').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-2').addEventListener('click', function(){
            document.getElementById('box-2').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-3').addEventListener('click', function(){
            document.getElementById('box-3').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-4').addEventListener('click', function(){
            document.getElementById('box-4').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-5').addEventListener('click', function(){
            document.getElementById('box-5').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-6').addEventListener('click', function(){
            document.getElementById('box-6').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-7').addEventListener('click', function(){
            document.getElementById('box-7').textContent = currentPlayer;
            nextPlayer();
        })
        document.getElementById('box-8').addEventListener('click', function(){
            document.getElementById('box-8').textContent = currentPlayer;
            nextPlayer();
        })
    }else{
        console.log('GAME OVER');
    }
    
    
    
    
}



document.querySelector('.button-1').addEventListener('click', init);



function init(){
    currentPlayer = 'X';
    X = 'X';
    O = 'O';
    gamePlaying = true;
    
    
    for (var i = 0; i < 9; i++) {
        document.getElementById('box-' + i).textContent = '';
    }
    activeGame();
}

*/






















