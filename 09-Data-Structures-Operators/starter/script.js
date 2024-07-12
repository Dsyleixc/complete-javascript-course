'use strict';

// Data needed for a later exercise
const flights =
   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
   [weekdays[3]]: {
      open: 12,
      close: 22,
   },
   fri: {
      open: 11,
      close: 23,
   },
   sat: {
      open: 0, // Open 24 hours
      close: 24,
   },
};

const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours,
   order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
};


////////////////// STRINGS PART 3 ////////////////////

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// my solution
// const passenger = 'jessica ann smith davis';
// let passengerNewName = '';
// const capitalizeName = function (name) {
//    const nameArray = name.split(' ');
//    for (const name of nameArray) {
//       passengerNewName += `${name[0].toUpperCase() + name.slice(1)} `;
//       console.log(passengerNewName);
//    }
// };
// capitalizeName(passenger);

// Jonas solution
const passenger = 'jessica ann smith davis';
let passengerNewName = [];
const capitalizeName = function (name) {
   const nameArray = name.split(' ');
   for (const names of nameArray) {
      passengerNewName.push(names[0].toUpperCase() + names.slice(1));
      console.log(passengerNewName);
   }
   console.log(passengerNewName.join(' '));
};
capitalizeName(passenger);

// Padding
// blocking credit card num
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(23, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
   const string = String(number);
   const blockedNum = string.slice(-4);
   console.log(blockedNum.padStart(string.length, '*'));
};

maskCreditCard(9823421223419864);

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
   console.log(`there are ${n} planes in line: ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(2);
planesInLine(7);
/*
////////////////// STRINGS PART 2 ////////////////////
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(airline.toUpperCase());

// Fix capitalization of name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
   passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// compare emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const LowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = LowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
   'All passengers come to boarding door 23. Boarding door 23!';

// gotta add the slash to make it regular and the g says global can use the replaceAll tho
console.log(announcement.replace(/door/g, 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('J0E'));
console.log(plane.startsWith('Air'));

plane.startsWith('Airbus') === true && plane.endsWith('neo') === true
   ? console.log('part of the new airbus family')
   : console.log('not part of it');

// Practice exercise
const checkBaggage = function (items) {
   const baggage = items.toLowerCase();
   if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('GET DOWN MR PRESIDENT');
   } else {
      console.log('enjoy your flight');
   }
};
checkBaggage('I have a laptop, some Food, and a pocket knife');
checkBaggage('socks and camera');
checkBaggage('got some snacks and a GUN RAA');

// ////////////////  STRINGS PART 1 ////////////////////////

const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
   // Middle seats are B or E
   const seatLetter = seat.slice(-1);
   seatLetter === 'B' || seatLetter === 'E'
      ? console.log('You got a middle seat fum')
      : console.log('You window or isle seat brother');
};
checkMiddleSeat('11E');


// ////////////////  MAPS: ITERATION ////////////////////////
// use this when bulk adding to maps and .set for adding stuff later
const question = new Map([
   ['question', 'what is the best programming language?'],
   [1, 'C'],
   [2, 'Java'],
   [3, 'Javascript'],
   ['correct', 3],
   [true, 'Correct'],
   [false, 'try again womp womp'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app example
console.log(question.get('question'));
for (const [key, value] of question) {
   if (typeof key === 'number') {
      console.log(`Answer ${key}: ${value}`);
   }
}
const answer = Number(prompt('Your answer:'));
// my solution
// console.log(
//    answer === question.get('correct') ? question.get(true) : question.get(false)
// );
// Jonas solution
console.log(question.get(answer === question.get('correct')));

// Convert map to array (maps are array in array, so you basically put the map in a empty array and pop it so its still an array in an array but just not a map now)
console.log([...question]);


// ////////////////  MAPS: FUNDAMENTALS ////////////////////////
const rest = new Map();
rest.set('name', 'Classico Italiono');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
   .set('open', 11)
   .set('close', 23)
   .set(true, 'we are open')
   .set(false, 'we are closed');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const array = [1, 2];
rest.set(array, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(array));


// ///////////////////  SETS //////////////////////////////
const ordersSet = new Set([
   'Pasta',
   'Pizza',
   'Pizza',
   'Risotto',
   'Pasta',
   'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
   console.log(order);
}

// Example not converting set to array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// let staffSet = new Set(staff);
// console.log(staffSet);

// converting it to an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
let staffSet = [...new Set(staff)];
console.log(staffSet);

// You can combo the .size into the creation of the set
console.log(new Set('JonasJoeMomma').size);


// ///////////////////  LOOPING OBJECTS, KEYS, VALUES, ENTRIES //////////////////////////////

//KEYS
const keys = Object.keys(openingHours);
console.log(keys);

for (const day of Object.keys(openingHours)) {
   console.log(day);
}

console.log('------------------');

// VALUES
const values = Object.values(openingHours);
console.log(values);

for (const day of Object.values(openingHours)) {
   console.log(day);
}

for (const { open, close } of Object.values(openingHours)) {
   console.log(`we are open at: ${open}, closed at ${close}`);
}

console.log('------------------');

// ENTRIES
const entries = Object.entries(openingHours);
console.log(entries);
for (const day of Object.entries(openingHours)) {
   console.log(day);
}


// ///////////////////////   OPTIONAL CHAINING ///////////////////////////////////

console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example:
const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
   const open = restaurant?.openingHours[day]?.open;
   console.log(
      restaurant.openingHours?.[day] === undefined
         ? `not open on ${day}`
         : `We are open on ${day} at ${open}`
   );
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderDontWork?.(0, 1) ?? 'method does not exist');

// Arrays
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'user array empty');
console.log(users[12222]?.name ?? 'user array empty');


// ///////////////////////   FOR OF LOOP ///////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menu) {
   console.log(item);
}

// Menu.entries creates arrays for each item and its position in the array
for (let item of menu.entries()) {
   console.log(item);
}

// Using destructuring to assign each element in the array to its own thing so the position is one element and the item is the other which you use in the cl
for (let [i, el] of menu.entries()) {
   console.log(`${i + 1}: ${el}`);
}

// Practice:
let pageSum = 0;
for (let book of books) {
   pageSum += book.pages;
}

const allAuthors = [];
for (const author of books.author) {
   if (typeof author === 'string') {
      allAuthors.push(author);
   } else {
      allAuthors.push(...author);
   }
}

for (let [num, author] of allAuthors.entries()) {
console.log(`${num + 1}: ${author}`);
}


We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];

const [players1, players2] = game.players;

console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.
function printGoals(...playerName) {
   let totalGoals = 0;
   for (let i = 0; i < playerName.length; i++) {
      totalGoals++;
      console.log(
         `goal scored by ${playerName[i]}, ${totalGoals} goals have been scored!`
      );
   }
}

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 wins');
team2 < team1 && console.log('Team 2 wins');


// ///////////////////////   OR assignment Operator ///////////////////////////////////

// Long way of checking if things exist if not add them in
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Short way of OR addition
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Using nullish assignment you get around that 0 bug that you get with the ||. Only works on null or undefined to get a falsy
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// Using && to remove something that does exist
rest2.owner &&= 'anonymous';

console.log(rest1);
console.log(rest2);

// ///////////////////////   NULLISH COALESCING OPERATOR ///////////////////////////////////
// the || sees 0 as false not a number
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// the ?? evaluates the '' and 0 as true whereas the || sees both as false
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// ///////////////////////   || and && SHORT CIRCUITING ///////////////////////////////////
// the || picks the first truthy value and if nothing true just picks very last one
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

// long way
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// short way
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// && SHORT CIRCUITING//
// the && is opposite so it picks first falsy value but if all true it picks last one
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('hello' && 23 && null && 'jonas');

// long way to order a pizza
if (restaurant.orderPizza) {
   restaurant.order('mushrooms', 'spinach');
}

// first part checks if order was made if not then moves to second one which actually orders it
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Problems

const books = {
   title: 'Algorithms',
   author: ['Robert Sedgewick', 'Kevin Wayne'],
   programmingLanguage: 'Java',
};

const hasExamplesInJava = function (books) {
   return books.programmingLanguage === 'Java' || 'no data available';
};

let joe = hasExamplesInJava(books.programmingLanguage);
console.log(joe);


// //////////////////////////   REST OPERATOR //////////////////////////////////////
// grouping everything after B into an array of others
const [a, b, ...others] = [1, 2, 3, 4, 5];

// REST ON ARRAYS Using spread on right side to expand 2 arrays and then using rest on the left side to pick 2 elements you want and dump the rest into an array called otherFood
const [pizza, , risotto, ...otherFood] = [
   ...restaurant.mainMenu,
   ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//REST ON OBJECTS, the ...weekdays takes everything not selected and throws them in a object
const { sat: weekend, ...weekdays } = restaurant.openingHours;
console.log(weekend, weekdays);

// Functions
const add = function (...numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
   }
   console.log(sum);
};

const x = [23, 5, 7];

// need to do this bcz you gotta break up the array so rest can form the array again in the function
add(...x);

// passes the strings into the function order Pizza which has a rest condition to merge them into array
restaurant.orderPizza('mushroom', 'onion', 'tomato', 'spinach');

// Problems
const [mainKeyword, ...rest] = books[0].keywords;

const {publusher: bookPublisher, ...restOfTheBook} = books[1];

const printBookAuthorsCount = function(title, ...authors){
console.log(`The book "${title}" has ${authors.length} authors`);
}


// //////////////////////////   SPREAD OPERATOR //////////////////////////////////////
// breaks up array into individual elements
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

// creating new array containing content of old array + add new stuff
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Iterables are arrays, strings, maps, and sets, NOT Objects
const str = 'Jonas';
const letters = [...str, '', '.S'];
console.log(letters);
console.log(...str);

// Example using order pasta function
// const ingredients = [
//    prompt(`lets make some pasta! Ingredient 1:`),
//    prompt(`lets make some pasta! Ingredient 2:`),
//    prompt(`lets make some pasta! Ingredient 3:`),
// ];

// restaurant.orderPasta(...ingredients);

// Spread in Objects to create a copy:
const newRestaurant = {
   ...restaurant,
   founder: 'Guessipe',
   foundingYear: 1998,
};
console.log(newRestaurant);

const copyRestaurant = { ...restaurant };

// Problems
// const bookAuthors = [...books[0].author, ...books[1].author];

const spellWord = function (str) {
   console.log(...str);
};
console.log(spellWord('javascript'));

// //////////////////////////   DESTRUCTURING OBJECTS //////////////////////////////////////

// creating variables using things in object
const { name, openingHours, categories } = restaurant;

// creating variables but giving unique names
const {
   name: restaurantName,
   openingHours: hours,
   categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// giving default values to variables that you are not sure if in object
// so if menu not in object its []
const { menu = [] } = restaurant;

// same as above but for renamed variables
const { starterMenu: starters = [] } = restaurant;

// MUTATING VARIABLES (switching variable values with values in object) gotta have brackets around curly brackets just bcz thats how it works idk
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

// Destructuring nested objects (first one is to show you get the object, 2nd is actually getting open and close for their own variables)
// const {
//    fri,
//    fri: { open, close },
// } = openingHours;
// console.log(fri, open, close);

// same as above just assigning variables new names now so its not the same from the original object
const {
   fri,
   fri: { open: o, close: c },
} = openingHours;
console.log(fri, o, c);

// Passing in object to orderDeliery function
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
 });
 
 restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
 });


// Passing in object to orderDeliery function
restaurant.orderDelivery({
   time: '22:30',
   address: 'Via del Sole, 21',
   mainIndex: 2,
   starterIndex: 2,
});

restaurant.orderDelivery({
   address: 'Via del Sole, 21',
   starterIndex: 1,
});

//  Practice problems:
const {title, author, ISBN} = books[0];

const {keywords: tags} = books[0];

const {language, programmingLanguage = 'unknown'} = books[6];

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title: bookTitle, author: bookAuthor} = books[0]);

const {thirdParty: {goodReads: {rating: bookRating}}} = books[0];

const printBookInfo = function ({title, author, year = 'year unknown'}) {
    console.log(`${title} by ${author}, ${year}.`);
}

// //////////////////////////   DESTRUCTURING ARRAYS //////////////////////////////////////
const arr = [2, 3, 4];
const [a, b, c] = arr;

// only takes first two
const [first, second] = restaurant.categories;

// skips second takes third
const [first1, , third] = restaurant.categories;
// console.log(first1, third);

// using array above
let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// switching variables values with each other
[main, secondary] = [secondary, main];
// console.log(main, secondary);

// Declaring/receiving 2 variables at once using the function order in object
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring (if array in array)
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [k, , [, l]] = nested;
console.log(k, l);

// Default Values
const [one = 1, two = 1, three = 0] = [0, 2];

// Practice Problems
const [firstBook, secondBook] = books;

const [, , thirdBook] = books;

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
*/
