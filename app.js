import { rawPokemon } from './data.js';

const POKEMON = 'POKEMON';

const catchButton = document.querySelector('#catch');
const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
const names = document.querySelectorAll('#names');
const resetButton = document.querySelector('#reset-button');

for (let i = 0; i < radios.length; i++) {
    const pokeArray = radios[i].value;
}
// each value needs to be added to the pokemonCountArray. Push.
let gameCounter = 0;
let pokemonCountArray = [];

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

    addNewEncountered(pokemonOne.id, pokemonCountArray);
    addNewEncountered(pokemonTwo.id, pokemonCountArray);
    addNewEncountered(pokemonThree.id, pokemonCountArray);
}

generateRandomPokemon();

catchButton.addEventListener('click', () => {
    gameCounter++;
    if (gameCounter === 10) {
        setInLocalStorage(POKEMON, pokemonCountArray);
        window.location.href = './results/index.html';
    }
    const selectedRadioButton = document.querySelector(':checked');
    const capturedPokemon = Number(selectedRadioButton.value);
    
    capturedIncrement(capturedPokemon, pokemonCountArray);
    console.log(pokemonCountArray);
    generateRandomPokemon();
});

function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        // is it item.name or item.id
        if (item.id === id) {
            return item;
        } 
    } 
}

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
    
function addNewEncountered(id, array) {
    let result = findById(array, id);
    if (result) {
        result.encountered++;
    } else {     
        let thePokemon = findById(rawPokemon, id);
        const newPoke = {
            pokemon: thePokemon.pokemon,
            id,
            encountered: 1,
            captured: 0,
        };
        array.push(newPoke); 
    }
}

export function setInLocalStorage(key, value) {
    const myString = JSON.stringify(value);
    localStorage.setItem(key, myString);
}

export function getFromLocalStorage(key) {
    const myKey = localStorage.getItem(key);
    return JSON.parse(myKey);

}