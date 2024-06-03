/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);


// Variable name conventions
let firstName = 'Matilda';
let $function = 27;

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 - 2 *2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonas);

console.log(`Just a regular string!`);


const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 😀`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years!`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1; // '11' - 1
console.log(n);

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 1;
if (money) {
    console.log(`Don't sped it all`);
} else {
    console.log(`you should get a job!`);
}

let height = 1;
if (height) {
    console.log(`height is defined`);
} else {
    console.log(`height is undefined`);
}


const age = '18';
if (age === 18) console.log(`you just became a adult (strict)`);

if (age == 18) console.log(`you just became a adult (loose)`);

const favourite = Number(prompt(`What is your fav number?`));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
    console.log(`cool 23 is a dope number`);
} else if (favourite === 7) {
    console.log(`7 is also a dope number fum`);
} else {
    console.log(`your number is not dope at all trash number`)
}

if (favourite !== 23) {
    console.log(`you picked a trash number that number is not dope`);
}


const numNeighbours = +prompt('How many neighbour countries does your contry have?');

if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border!`);
} else {
    console.log(`No borders trash boy`);
}



const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`damn bro like lewis you should drive`);
// } else {
//     console.log(`DO NOT DRIVE I REPEAT DO NOT DRIVE!`);
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasDriversLicense && !isTired) {
    console.log(`damn bro like lewis you should drive`);
} else {
    console.log(`DO NOT DRIVE I REPEAT DO NOT DRIVE!`);
}


let scoreDolphins = (97 + 112 + 80) / 3;
let scoreKoalas = (109 + 95 + 50) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && (scoreDolphins && scoreKoalas) >= 100) {
    console.log("Both win the trophy");
} else {
    console.log(`No one wins the trophy!`)
}


const day = 'yo';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan Course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan Course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('record videos!');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');
}


const language = 'arabic';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('not one of the core languages aka its trashhh');
}


const age = 23;
// age >= 18 ? console.log(`i like to drink wine`) :
//     console.log(`i like to drink h20`);

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;

if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/