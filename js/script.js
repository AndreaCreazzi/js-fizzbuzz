// Controllo JS
console.log(`JS OK`);

// Dati preliminari
const gameElement = document.getElementById(`game`)

let numbers = `100`
let testo = ` `

gameElement.classList.add(`btn`)

gameElement.classList.add(`btn-lg`)

let background;

// Dati concreti
for(let i = 1 ; i <= numbers ; i++){
    testo = i;
    background = `blue`
    if(i % 15 == 0){
        testo =`fizzbuzz`;
        background = `red`
    }else if(i % 3 == 0){
        testo = `fizz`;
        background = `green`
    }else if(i % 5 == 0){
        testo = `buzz`;
        background = `yellow`
    }
    console.log(testo);
    gameElement.innerHTML += `<div class="card ${background} display p-3 m-3">${testo}<div>`;
};
