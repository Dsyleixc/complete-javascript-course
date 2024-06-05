'use strict';

/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const canada = describeCountry('canada', '11', 'Ottawa')
const america = describeCountry('america', '12', 'washington')
const italy = describeCountry('italy', '2', 'idk where')

// console.log(canada, america, italy);



function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const canadaPercentage1 = percentageOfWorld1(11);
const americaPercentage1 = percentageOfWorld1(12);
const italyPercentage1 = percentageOfWorld1(2);

// console.log(canadaPercentage1, americaPercentage1, italyPercentage1);

let percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;

}

const canadaPercentage2 = percentageOfWorld2(11);
const americaPercentage2 = percentageOfWorld2(12);
const italyPercentage2 = percentageOfWorld2(2);

// console.log(canadaPercentage2, americaPercentage2, italyPercentage2);


const percentageOfWorld3 = population => (population / 7900) * 100;

const canadaPercentage3 = percentageOfWorld3(11);
const americaPercentage3 = percentageOfWorld3(12);
const italyPercentage3 = percentageOfWorld3(2);

// console.log(canadaPercentage3, americaPercentage3, italyPercentage3);

// How I did it
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world!`;
}

console.log(describePopulation('canada', 10));
console.log(describePopulation('china', 50));
console.log(describePopulation('america', 32));

// How solution was given
function describePopulationSolution(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world!`;
    console.log(description)
}
describePopulationSolution('canada', 10);
describePopulationSolution('china', 50);
describePopulationSolution('america', 32);


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = ['40', '10', '15', '30'];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages)


const neighbours = ['neighbour1', 'neighbour2', 'neighbour3'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop('Utopia');
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central european country :D`);
}

neighbours[neighbours.indexOf('neighbour2')] = 'new neighbour';
console.log(neighbours);


const myCountry = {
    country: 'Canada',
    capital: 'Ottawa',
    language: 'English',
    population: 20,
    neighbours: ['neighbour1', 'neighbour2', 'neighbour3']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);
*/

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}