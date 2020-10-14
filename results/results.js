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

const encounteredData = pokeResultsData.map((item) => {
    return item.encountered;
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: pokeData,
        datasets: [{
            yAxisisID: 'first-y-axis',
            label: 'Captured Pokemon',
            backgroundColor: 'rgb(204,0,0)',
            borderColor: 'rgb(255,222,0)',
            borderWidth: 2,
            data: capturedData,
        }, {
            yAxisisID: 'second-y-axis',
            label: 'Encountered Pokemon',
            backgroundColor: 'rgb(179,161,37)',
            borderColor: 'rgb(255,222,0)',
            borderWidth: 2,
            data: encounteredData,
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                fontColor: 'rgb(255,222,0)',
                fontSize: 25
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    stepSize: 1,
                    min: 0,
                    // max: 10,
                    fontSize: 15,
                    fontColor: 'rgb(255,222,0)'
                },
            }],
            xAxes: [{
                ticks: {
                    fontSize: 20,
                    fontColor: 'rgb(255,222,0)'
                },
            }]
        } 
    }
});