//grabbing the html elements
const statusDiv = document.querySelector('.status');
const resetDiv =  document.querySelector('.reset');
//console.log(resetDiv);
const cellDivs = document.querySelectorAll('.game-cell');


//initializing new game elements
let gameIsLive=true; //game is going, when no longer game is on we will manually set it to false
let xIsNext=true; //if true, x's turn else o's turn
let winner=null;

//functions

const checkGameStatus = () => {
    const topleft=cellDivs[0].classList[2];
    const topmiddle=cellDivs[1].classList[2];
    const topright=cellDivs[2].classList[2];
    const middleleft=cellDivs[3].classList[2];
    const middlemiddle=cellDivs[4].classList[2];
    const middleright=cellDivs[5].classList[2];
    const bottomleft=cellDivs[6].classList[2];
    const bottommiddle=cellDivs[7].classList[2];
    const bottomright=cellDivs[8].classList[2];

    if(topleft && topleft==topmiddle && topmiddle==topright)
    {
        gameIsLive=false;
        winner=topleft;
        if(topleft=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    }
    else if(middleleft && middleleft==middlemiddle && middlemiddle==middleright)
    {
        gameIsLive=false;
        winner=middleleft;
        if(middleleft=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    }
    else if(bottomleft && bottomleft==bottommiddle && bottomright==bottommiddle)
    {
        gameIsLive=false;
        winner=bottomleft;
        if(bottomleft=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(topleft && topleft==middleleft && middleleft==bottomleft)
    {
        gameIsLive=false;
        winner=topleft;
        if(topleft=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if(topmiddle && topmiddle==middlemiddle && middlemiddle==bottommiddle)
    {
        gameIsLive=false;
        winner=topmiddle;
        if(topmiddle=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    }
    else if(topright && topright==middleright && middleright==bottomright)
    {
        gameIsLive=false;
        winner=topright;
        if(topright=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(topleft && topleft==middlemiddle && middlemiddle==bottomright)
    {
        gameIsLive=false;
        winner=topleft;
        if(topleft=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(topright && topright==middlemiddle && middlemiddle==bottomleft)
    {
        gameIsLive=false;
        winner=topright;
        if(topright=='x')
        statusDiv.innerHTML = 'X is the winner!!';
        else
        statusDiv.innerHTML = '<span>O is the winner!!</span>';
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if(topleft && topmiddle && topright && middleleft && middlemiddle && middleright && bottomleft && bottommiddle && bottomright)
    {
        gameIsLive=false;
        statusDiv.innerHTML = 'oops! Tie';
    }
    else{
        xIsNext=!xIsNext;
        if(xIsNext)
        {
            statusDiv.innerHTML = 'X is next';
        }
        else{
            statusDiv.innerHTML = '<span>O is next</span>';
        }
    }
};


//event handlers
const handleReset = (e) => {
    xIsNext=true;
    statusDiv.innerHTML='X is next';
    winner=null;
    for(const cellDiv of cellDivs)
    {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
    gameIsLive=true;
};

const handleCellClick = (e) => {
    
    const classList=e.target.classList; // in order to make sure that a cell contains only a single value
    const location=classList[1]; //whyyyyyyyyyyyyyy [1] : bcz the classlist at the first element contains the location of the cell
    if(classList[2]=='x' || classList[2]=='o')
    {
        return;
    }
    if(gameIsLive==false)
    {
        return;
    }
    if(xIsNext==true){
        e.target.classList.add('x');
        checkGameStatus();
    }
    else{
        e.target.classList.add('o');
        checkGameStatus();
    }
};


//event listeners
resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs)
{
    cellDiv.addEventListener('click', handleCellClick);
}