const gridContainer = document.querySelector('.grid-container');
const submitButton = document.getElementById('dimension-button').onclick = playGame;

function playGame(){
    let dimension = document.getElementById('number-input').value;
    if (dimension <= 0 || dimension > 100){
        alert('Please enter a value between 1 and 100');
    }
    else{
        clearGrid();
        generateBoard(dimension);
        colorCells(dimension);
    }
}

function clearGrid(){
    gridContainer.innerHTML = "";
}

function generateBoard(x){
    for (i = 0 ; i < x ; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('row'+i);
        gridContainer.appendChild(gridRow);
        for (j = 0 ; j < x ; j++){
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            gridCell.setAttribute("id", "cell-"+i+"-"+j); 
            gridRow.appendChild(gridCell);
        }
    }
}

function colorCells(x){
    for (i = 0 ; i < x ; i++){
        for (j = 0 ; j < x ; j++){
            let cell = document.querySelector(`#cell-${i}-${j}`);
            cell.addEventListener("mouseover", function (event){
                event.target.style.backgroundColor = 'orange';
            }, false);
        }
    }
}