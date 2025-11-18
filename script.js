let mapa = document.getElementById('mapa');
let win = document.getElementById('win');
let mat = [
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

attViewport();

function upmove() {

    for (let i = 1; i < 20; i++) {
        for (let j = 0; j < 20; j++) {

            if (mat[i-1][j] === 4 && mat[i][j] === 1){ 
                winViewport(true)
            }else if (mat[i][j] === 1 && mat[i - 1][j] !== 2) {
                mat[i][j] = 0;
                mat[i - 1][j] = 1;
            }
        }
    }
    enemyMovement();
    attViewport();

}function downmove() {

    for (let i = 18; i >= 0; i--) {
        for (let j = 0; j < 20; j++) {

            if (mat[i + 1][j] === 4 && mat[i][j] === 1){ 
                winViewport(true)
            }else if (mat[i][j] === 1 && mat[i + 1][j] !== 2) {
                mat[i][j] = 0;
                mat[i + 1][j] = 1;
            }
        }
    }
    enemyMovement();
    attViewport();

}function leftmove() {
    for (let i = 0; i < 20; i++) {
        for (let j = 1; j < 20; j++) {

            if (mat[i][j - 1] === 4 && mat[i][j] === 1){ 
                winViewport(true)
            } else if (mat[i][j] === 1 && mat[i][j - 1] !== 2) {
                mat[i][j] = 0;
                mat[i][j - 1] = 1;
            }
        }
    }
    enemyMovement();
    attViewport();

}function rightmove() {
    for (let i = 0; i < 20; i++) {
        for (let j = 18; j >= 0; j--) {

            if (mat[i][j + 1] === 4 && mat[i][j] === 1){ 
                winViewport(true)
            }else if (mat[i][j] === 1 && mat[i][j + 1] !== 2) {
                mat[i][j] = 0;
                mat[i][j + 1] = 1;
            }
        }
    }
    enemyMovement();
    attViewport();

}function buttonAndActivate(){

    let buttonI = 0;
    let buttonJ = 0;
    
    if(mat.includes(5)){

        for(i=0; i<20; i++){
            for(j=0; j<20; j++){

                if(mat[i][j] == 5){

                    buttonI = i
                    buttonJ = j
    
                }else if(mat[i][j] == 6){

                    mat[i][j] = 0
                    
                }
            }
        }
    }
    
}function enemyMovement(){

    let palyerI = 0;
    let playerJ = 0;

    let enemyPosI = 0;
    let enemyPosJ = 0;

    for(i=0; i<20; i++){
        for(j=0; j<20; j++){

            if(mat[i][j] == 1){
                
                playerI = i
                playerJ = j

            }else if(mat[i][j] == 3){

                enemyPosI = i
                enemyPosJ = j

            }
        }
    }

    let enemyMoveI = enemyPosI;
    let enemyMoveJ = enemyPosJ;
    
    for(i=0; i<20; i++){
        for(j=0; j<20; j++){

            if(mat[i][j] == 3){
                if(enemyPosI > playerI && mat[enemyPosI-1][enemyPosJ] != 2 && mat[enemyPosI-1][enemyPosJ] != 4){

                    enemyMoveI = enemyPosI - 1

                }else if(enemyPosI < playerI && mat[enemyPosI+1][enemyPosJ] != 2 && mat[enemyPosI+1][enemyPosJ] != 4){      

                    enemyMoveI = enemyPosI + 1

                }else if(enemyPosJ > playerJ && mat[enemyPosI][enemyPosJ-1] != 2 && mat[enemyPosI][enemyPosJ-1] != 4){   

                    enemyMoveJ = enemyPosJ - 1     

                }else if(enemyPosJ < playerJ && mat[enemyPosI][enemyPosJ+1] != 2 && mat[enemyPosI][enemyPosJ+1] != 4){

                    enemyMoveJ = enemyPosJ + 1

                }

                if(enemyMoveI != enemyPosI || enemyMoveJ != enemyPosJ){

                    mat[enemyPosI][enemyPosJ] = 0;
                    mat[enemyMoveI][enemyMoveJ] = 3;

                }
            }
        }
    }if(enemyMoveI === playerI && enemyMoveJ === playerJ){
        winViewport(false);
    }
    
}function attViewport(){

    mapa.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        mapa.innerHTML += "[ ";
        for (let j = 0; j < 20; j++) {

            let value = mat[i][j];
            let color = "";
            
            switch(value) {
                case 0:
                    color = "lightgray";
                    break;
                case 1:
                    color = "blue";
                    break;
                case 2:
                    color = "black";
                    break;
                case ("["||"]"):
                    color = "black";
                    break;
                case 3:
                    color = "red";
                    break;
                case 4:
                    color = "yellow";
                    break;
                case 5:
                    color = "green";
                    break;
                case 6:
                    color = "orange";
            }
            
            mapa.innerHTML += `<span style="color: ${color};">${value}</span> `;
        }
        mapa.innerHTML += "] <br>";
    }
}function winViewport(isVictory){

    // INNER HTML
    botao1.style.display = "none"
    botao2.style.display = "none"
    botao3.style.display = "none"
    botao4.style.display = "none"

    // INNER CSS
    win.style.font = "normal 24px arial"
    win.style.color = "black"
    mapa.style.display = "none"

    if(isVictory){

        win.innerHTML = "Você chegou ao Fim!"

    }else{

        win.innerHTML = "Você foi engolido!"

    }
}