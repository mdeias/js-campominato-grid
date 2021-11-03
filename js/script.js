// recupero il bottone e aggiungo l'evento click

document.getElementById("play").addEventListener("click",function(){
    play();
})

// creo una funzione che conterrà tutto il procedimento

function play(){
    const opzioni = 
   parseInt(document.getElementById("opzioni").value);
    let numeroCelle = 100;
    if (opzioni === 2) {
        numeroCelle = 81;
    }else if (opzioni === 3) {
        numeroCelle = 49;
    }
    console.log(numeroCelle);
}

