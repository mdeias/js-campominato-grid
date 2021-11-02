
const container = document.querySelector('.container');
const listNumbers = [];


// variabili select 
const difficolta = document.getElementById("opzioni");
console.log(difficolta);

const facile = document.querySelector(".facile");
console.log(facile);

const normale = document.querySelector(".normale");
console.log(normale);

const difficile = document.querySelector(".difficile");
console.log(difficile);


let livello = difficolta[normale] ;
init(livello);  




// Creo il ciclo che genera gli square
function init(tot){
    for(let i = 0; i < tot; i++){
        const sq = createSquare(container);
        console.log(sq);
    }
}


//creo la funzione che genera le caselle

function createSquare(target) {
    const sq = document.createElement("div");
    const numbRandom = randomUnique(listNumbers, 1, 100);
    console.log(numbRandom);
    sq.innerHTML = numbRandom ;
    sq.classList.add("square");
    if (livello === 100) {
        sq.classList.add("easy");
    }else if (livello === 81) {
        sq.classList.add("hard");
    }else{
        sq.classList.add("crazy");
    }
    target.append(sq);
    return sq;
    
}


// rendo unici i numeri random
function randomUnique(list, min, max) {
    let number = null;
    let valid = false;

    while (!valid) {
        number = randomNumbgenerator(min, max);
        if (!list.includes(number)) {
            valid = true;
            list.push(number);
        }
    }
    return number;
}


// creo generatore numeri random con una funzione
function randomNumbgenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}





