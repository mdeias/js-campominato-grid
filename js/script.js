





// rendo unici i numeri random
function randomUnique(list, min, max) {
    let number = null;
    let valid = false;

    while !(valid) {
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





