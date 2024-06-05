'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

// const interface = 'Audio';


function logger() {
    console.log('My name is Aaron');
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`
}

console.log(yearsUntilRetire(1991, 'Aaron'));
console.log(yearsUntilRetire(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetire = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetire(1991, 'Aaron'));
console.log(yearsUntilRetire(1950, 'Mike'));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if ((avgDolphins * 2) <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'lastName', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1])
];
console.log(ages);


// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);

friends.unshift('John');
console.log(friends);

// Remove elements;
friends.pop();
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
    console.log('you have a friend called Steven');
};



// Write your code below. Good luck! 🙂

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[bills.length - 1])
];

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];



const jonas = {
    firstName: 'Jonas',
    lastName: 'Coco',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name'
console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

const interestedIn = prompt(`What do you want to know about Jonas? Choose between: firstName, lastName, age, job, and friends`);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`that aint one of the options we asked fum`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@nameoftwitter';

console.log(jonas);

// challange
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Coco',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // }

    // calcAge: function () {
    //     console.log(this.birthYear);
    //     return 2037 - this.birthYear
    // }\

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

// Challenge

console.log(jonas.getSummary());

// Write your code below. Good luck! 🙂 

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi})`);
};


for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repitition ${rep}`);
}


const jonasArray = [
    'Jonas',
    'Coco',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Option 1
    // types[i] = typeof jonasArray[i];

    // Option 2
    types.push(typeof jonasArray[i]);
}

console.log(types);
*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
const jonas = [
    'Jonas',
    'Coco',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
    'Jonas',
    'Coco',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

console.log('--- ONLY STRINGS ---')
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---STARTING EXERCISE ${exercise}---`);
    for (let reps = 1; reps <= 5; reps++) {
        console.log(`Exercise ${exercise}: repitition ${reps}`);
    }
}



// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE LOOP: Lifting weights repitition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`You rolled a ${dice} loop now ends`);
    }
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

Write your code below. Good luck! 🙂 
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
    const tip = calcTip(bills[i]);
    tips[i] = tip;
    totals[i] = tip + bills[i];

    // tips.push(tip);
    // totals.push(tip + bills[i]);
}

console.log(`the array for tips is --- ${tips}`);
console.log(`the array for totals is --- ${totals}`);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(`the average for the totals is --- ${calcAverage(totals)}`);

