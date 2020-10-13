// import functions and grab DOM elements
import { rawPokemon } from "./data.js";

const catchButton = document.querySelector('#catch');
const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
const names = document.querySelectorAll('#names');
const resetButton = document.querySelector('#reset-button');

// initialize state
let encountered = 0;
let captured = 0;
let clickCounter = 0;

// set event listeners to update state and DOM
function getPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}

let pokemonOne = getPokemon(rawPokemon);
let pokemonTwo = getPokemon(rawPokemon);
let pokemonThree = getPokemon(rawPokemon);

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

radios[1].value = pokemonTwo.id;
images[1].src = pokemonTwo.url_image;
names[1].id = pokemonTwo.pokemon;

radios[2].value = pokemonThree.id;
images[2].src = pokemonThree.url_image;
names[2].id = pokemonThree.pokemon;
// Event Listener
//     - onClick event listener for Catch Button:
//         - refresh radio buttons
//             - remove display hidden?
//         - increment encountered pokemon
//         - increment captured pokemon
//         - generate three new pokemon
//             - FUNCTION
//             - must be different
//         - upon reaching 10, go to results page
    
// Results Page
//     - List of encountered pokemon and how many times they were caught
//     - Total?
//     - Reset button - event listener
//         - return state to 0