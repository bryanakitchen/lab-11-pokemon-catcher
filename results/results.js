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

const pokeResultsData = getFromLocalStorage('POKEMON');

const pokeData = pokeResultsData.map((item) => {
    return item.pokemon;
});

const capturedData = pokeResultsData.map((item) => {
    return item.captured;
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: pokeData,
        datasets: [{
            label: 'Captured Pokemon',
            backgroundColor: 'rgb(179,161,37)',
            borderColor: 'rgb(255,222,0)',
            data: capturedData,
        }]
    },

    // Configuration options go here
    options: {}
});