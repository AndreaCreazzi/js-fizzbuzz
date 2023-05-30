// Controllo JS
console.log(`JS OK`);

// Dati preliminari
const gameElement = document.getElementById(`game`)

let numbers = `100`
let testo = ``

// Dati concreti
for(let i = 1 ; i <= numbers ; i++){
    testo = i;
    if(i % 15 == 0){
        testo =`fizzbuzz`;
    }else if(i % 3 == 0){
        testo = `fizz`;
    }else if(i % 5 == 0){
        testo = `buzz`;
    }
    console.log(testo);
};
