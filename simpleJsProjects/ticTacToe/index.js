const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;
let turn;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// function to initialise the game

function initGame(){
    currentPlayer = "X";
    turn = 0;
    // remove turns from grid
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    // remove turns from Ui
    boxes.forEach((box, index)=>{
       box.innerText = "";
       boxes[index].style.pointerEvents = "all";
       box.classList.remove("win");
    });
    newGameBtn.classList.remove("active");   
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

boxes.forEach((box, index)=>{
    box.addEventListener("click", ()=>{
        handleClick(index);
    })
});

function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swapt the turn 
        swapTurn();

        // check for win
        checkGameOver();
    }
}

function swapTurn(){
    if(currentPlayer === "X"){
       currentPlayer = "O";
    }
    else{
       currentPlayer = "X";
    }
    
    // UI update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver(){
    let answer = "";

    winningPositions.forEach((position)=>{
        if(gameGrid[position[0]] !== "" && gameGrid[position[1]] !== "" && gameGrid[position[2]] !== "" && gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]]){
            answer = gameGrid[position[0]];
             console.log(answer);

            // remove pointer events from all the boxes
            
            boxes.forEach((box)=>{
                box.style.pointerEvents = "none";
            })
            
            //color the wining boxes

           boxes[position[0]].classList.add("win");
           boxes[position[1]].classList.add("win");
           boxes[position[2]].classList.add("win");

           newGameBtn.classList.add("active"); 
           gameInfo.innerText = `Winner Player - ${answer}`; 
           return;
        }
    })
    updateTurn(answer);
}

function updateTurn(answer){
    turn++;     
    if(turn === 9 && answer === ""){
        newGameBtn.classList.add("active"); 
        gameInfo.innerText = `Game Tied !`; 
    }
}

newGameBtn.addEventListener("click", initGame);

