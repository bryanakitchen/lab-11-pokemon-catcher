import { getFromLocalStorage } from '../utils.js';

function renderTable() {
    const table = document.querySelector('tbody');
    const pokeResults = getFromLocalStorage('POKEMON') || [];

    for (let i = 0; i < pokeResults.length; i++) {
        const item = pokeResults[i];
    
        const tr = renderTableRow(item);
    
        table.appendChild(tr);
    }
}
renderTable();

function renderTableRow(pokemon) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const thEncountered = document.createElement('td');
    const thCaptured = document.createElement('td');

    thEncountered.textContent = pokemon.captured;
    thCaptured.textContent = pokemon.encountered;
        
    tdName.textContent = pokemon.pokemon;

    tr.append(tdName, thEncountered, thCaptured);
    return tr;
}