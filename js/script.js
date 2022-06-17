// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// variabile che salva lescelte dell'utente
let userChoice;
let userNumberArray = [];
let numberOk = [];

// evoco la funzione che genera 5 numeri random in array
let generateNumberUser = generateNumber (5, 1, 100);
alert(generateNumberUser);
console.log('numeri random',generateNumber)



// la funzione partirà solo dopo x s
setTimeout (startPlay, 30000)


// funzione che ritarda la comparsa del prompt
function startPlay(){

    for(let i = 0; i < 5 ; i++){
    // console.log([i])
    userChoice = parseInt (prompt('Scrivi un numero da 1 a 100'));
    console.log(userChoice);

    // se il numero scelto dall'utente non è presente nell'array pusha
    if(!userNumberArray.includes(userChoice) && generateNumberUser.includes(userChoice)){

        userNumberArray.push(userChoice);
        console.log(userNumberArray)
    }
    console.log(userNumberArray)
    
    }

    alert(`'Hai indovinato: '${userNumberArray.length} numeri,  i numeri indovinati sono: ${userNumberArray}`)
    

   

}



   
// creo la funzione
function generateNumber (numberOfNumber, numMin, rangeMax){
    // creo un array vuoto dove inserire i numeri che verrnno generati
    let numberGenerateArray = [];

    // creo un ciclo while che vada avanti per tutta la lunghezza dell'array che deve essere inferiore al numero di bombe
    while(numberGenerateArray.length < numberOfNumber){
        // evoco la funzione random e la salvo in una variabile
        let randomNumber = getRndInteger(numMin, rangeMax);
        // console.log(randomNumber)
        // pusho solo i numeri che non sono gia presenti nell'array
        if(!numberGenerateArray.includes(randomNumber)){
            numberGenerateArray.push(randomNumber);
        }

    }
    console.log(numberGenerateArray)

    return numberGenerateArray
   

    
}

// creo una funzione che generi numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

