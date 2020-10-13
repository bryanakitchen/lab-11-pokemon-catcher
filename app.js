// import functions and grab DOM elements
import { rawPokemon } from './data.js';

const catchButton = document.querySelector('#catch');
const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
const names = document.querySelectorAll('#names');
const resetButton = document.querySelector('#reset-button');

for (let i = 0; i < radios.length; i++) {
    const pokeArray = radios[i].value;
}
// each value needs to be added to the pokemonCountArray. Push.

// initialize state
// let encountered = 0;
let captured = 0;
let gameCounter = 0;
let pokemonCountArray = [
    // {
    //     pokemon: '',
    //     encountered: 0,
    //     captured: 0,
    // }
];

// set event listeners to update state and DOM
function getPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}

function generateRandomPokemon() {
    // generating three pokemon
    let pokemonOne = getPokemon(rawPokemon);
    let pokemonTwo = getPokemon(rawPokemon);
    let pokemonThree = getPokemon(rawPokemon);
    // ensuring each generated pokemon are different
    while (pokemonOne.id === pokemonTwo.id) {
        pokemonOne = getPokemon(rawPokemon);
    }
    while (pokemonTwo.id === pokemonThree.id) {
        pokemonTwo = getPokemon(rawPokemon);
    }
    while (pokemonThree.id === pokemonOne.id) {
        pokemonThree = getPokemon(rawPokemon);
    }
    
    radios[0].value = pokemonOne.id;
    images[0].src = pokemonOne.url_image;
    names[0].id = pokemonOne.pokemon;
    names[0].textContent = pokemonOne.pokemon;
    
    radios[1].value = pokemonTwo.id;
    images[1].src = pokemonTwo.url_image;
    names[1].id = pokemonTwo.pokemon;
    names[1].textContent = pokemonTwo.pokemon;
    
    radios[2].value = pokemonThree.id;
    images[2].src = pokemonThree.url_image;
    names[2].id = pokemonThree.pokemon;
    names[2].textContent = pokemonThree.pokemon;
}

generateRandomPokemon();


catchButton.addEventListener('click', () => {
    gameCounter++;
    if (gameCounter === 10) {
        window.open('./results/index.html');
    }
    const selectedRadioButton = document.querySelector(':checked');
    const capturedPokemon = Number(selectedRadioButton.value);
    
    capturedIncrement(capturedPokemon, pokemonCountArray);
    generateRandomPokemon();
});

function addNewCaptured(id, array) {
    let result = findById(rawPokemon, id);
    const newPoke = {
        pokemon: result.pokemon,
        id,
        encountered: 0,
        captured: 0,
    };
    array.push(newPoke);
}

function capturedIncrement(id, array) {
    let result = findById(array, id);
    if (!result) {
        addNewCaptured(id, array);
        // 
        result = findById(array, id);
    } result.captured++;
}
    
function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        // is it item.name or item.id
        if (item.id === id) {
            return item;
        } 
    } 
}

// e.target.value = the id of whatever you clicked on.
// function encounteredPokemon() {

//     const pokemonInCart = findById(rawPokemon, pokeArray.id);
//     console.log(pokemonInCart);

// }

// radios.addEventListener('change', (e) => {
//     const capturedPokemon = e.target.value;
//     console.log(capturedPokemon);
//     return capturedPokemon;
// });

// pulling all the names
// names[i].id = encounteredPokemon;
// // this is only for encountered

// export function renderTableRow(allPoke, newPoke) {
//     const tr = document.createElement('tr');
//     const thName = document.createElement('th');
//     const thEncountered = document.createElement('th');
//     const thCaught = document.createElement('th');

//     thEncountered.textContent = cartItem.quantity;
    
//     const wigData = findById(wigs, cartItem.id);
    
//     const price = wigData.price;
//     const theName = wigData.name;
    
//     tdName.textContent = theName;

//     // new function 
//     const subtotal = calcLineItem(price, cartItem.quantity);
    
//     tdSubtotal.textContent = `$${subtotal}`;

//     tr.append(thName, thEncountered, thCaught);

//     return tr;
// }