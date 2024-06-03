const country = 'Canada';
const continent = 'North America';
let population = '100';
const isIsland = false;
let language = 'English';

let halfPopulation = population / 2;

population++;

let finlandPopulation = 6;

const averagePopulation = 33;

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

console.log(halfPopulation);
console.log(population);
console.log(population > finlandPopulation);
console.log(population > averagePopulation);
console.log(description)

if (population > averagePopulation) {
    console.log(`${country}'s population is ${population - averagePopulation} million greater than average!`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million less than average!`);
}

console.log(`${country}'s population is ${population > averagePopulation ? 'above' : 'below'} average.`)