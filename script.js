//Game Controller

const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,4,8], 
    [2,4,6], [0,3,6], [1,4,7], [2,5,8]
];




//init();







function checkForWinner(){
    for(var i = 0; i < 9; i++){
        var filled = document.getElementById('box-' + i).textContent;
        if(filled === ''){
            nextPlayer();
        }
    }
}


function nextPlayer(currentPlayer){
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }
    playerClicked(currentPlayer);
}


function playerClicked(currentPlayer){
    document.getElementById('box-0').addEventListener('click', function(){
        document.getElementById('box-0').textContent = currentPlayer;
    })
    document.getElementById('box-1').addEventListener('click', function(){
        document.getElementById('box-1').textContent = currentPlayer;
    })
    document.getElementById('box-2').addEventListener('click', function(){
        document.getElementById('box-2').textContent = currentPlayer;
    })
    document.getElementById('box-3').addEventListener('click', function(){
        document.getElementById('box-3').textContent = currentPlayer;
    })
    document.getElementById('box-4').addEventListener('click', function(){
        document.getElementById('box-4').textContent = currentPlayer;
    })
    document.getElementById('box-5').addEventListener('click', function(){
        document.getElementById('box-5').textContent = currentPlayer;
    })
    document.getElementById('box-6').addEventListener('click', function(){
        document.getElementById('box-6').textContent = currentPlayer;
    })
    document.getElementById('box-7').addEventListener('click', function(){
        document.getElementById('box-7').textContent = currentPlayer;
    })
    document.getElementById('box-8').addEventListener('click', function(){
        document.getElementById('box-8').textContent = currentPlayer;
    })
    checkForWinner(currentPlayer);
}



document.querySelector('.button-1').addEventListener('click', function() {
    init();
})



function init(){
    for (var i = 0; i < 9; i++) {
        document.getElementById('box-' + i).textContent = '';
    }
    
    playerClicked('X');
    
    
}
























