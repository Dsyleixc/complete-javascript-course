'use strict';

// Coding Challenge #5
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
   +_Arrival;bru0943384722;fao93766109;11:45
   +_Delayed_Arrival;hel7439299980;fao93766109;12:05
   +_Departure;fao93766109;lis2323639855;12:30`;

// clean up location data

const locationFunc = function (array) {
   return array.slice(0, 3).toUpperCase();
};

// create for loop to split string and go over each new array
for (const flight of flights.split('+')) {
   // Delayed departure or arrival normal
   const [depart, from, to, time] = flight.split(';');
   const delayed = depart.includes('Delayed')
      ? '🔴 Delayed Arrival'
      : 'Arrival';

   // Fix up time
   const departTime = time.replace(':', 'h').trim();

   console.log(
      `${delayed} from ${locationFunc(from)} to ${locationFunc(
         to
      )} (${departTime})`.padStart(45, ' ')
   );
}

// Delayed departure needs 🔴

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// My solution
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const text = document.querySelector('textarea').value;
// document
//    .querySelector('button')
//    .addEventListener('click', function (wordsList) {
//       const text = document.querySelector('textarea').value;
//       console.log(text);
//       const splitText = text.split('\n');
//       console.log(splitText);
//       for (const [key, value] of splitText.entries()) {
//          const trimmed = value.trim();
//          const lowerCase = trimmed.toLowerCase();
//          const camelCase =
//             lowerCase.slice(0, lowerCase.indexOf('_') + 1) +
//             lowerCase[lowerCase.indexOf('_') + 1].toUpperCase() +
//             lowerCase.slice(lowerCase.indexOf('_') + 2);
//          const undercasePosition = camelCase.indexOf('_');
//          const finalWord =
//             camelCase.slice(0, undercasePosition) +
//             camelCase.slice(undercasePosition + 1, camelCase.length);
//          console.log(`${finalWord.padEnd(30, ' ')} ${'✅'.repeat(key + 1)}`);
//       }
//    });

/*
// Jonas Solution
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;
document
   .querySelector('button')
   .addEventListener('click', function (wordsList) {
      const text = document.querySelector('textarea').value;
      const wordsIndividal = text.split('\n');
      console.log(wordsIndividal);
      for (const [key, value] of wordsIndividal.entries()) {
         const [first, second] = value.toLowerCase().trim().split('_');
         const camelCase =
            first + second.replace(second[0], second[0].toUpperCase());
         console.log(`${camelCase.padEnd(30, ' ')} ${'✅'.repeat(key + 1)}`);
      }
      // for (const [key, value] of splitText.entries()) {
      //    const trimmed = value.trim();
      //    const lowerCase = trimmed.toLowerCase();
      //    const camelCase =
      //       lowerCase.slice(0, lowerCase.indexOf('_') + 1) +
      //       lowerCase[lowerCase.indexOf('_') + 1].toUpperCase() +
      //       lowerCase.slice(lowerCase.indexOf('_') + 2);
      //    const undercasePosition = camelCase.indexOf('_');
      //    const finalWord =
      //       camelCase.slice(0, undercasePosition) +
      //       camelCase.slice(undercasePosition + 1, camelCase.length);
      //    console.log(`${finalWord.padEnd(30, ' ')} ${'✅'.repeat(key + 1)}`);
      // }
   });

// const wordsArray = function (wordsList) {
//    // const splitWords = wordsList.split('\n');
//    for (const [index, [word]] of wordsList.entries()) {
//       const trimmed = word.trim();
//       const lowerCase = trimmed.toLowerCase();
//       const camelCase =
//          lowerCase.slice(0, lowerCase.indexOf('_') + 1) +
//          lowerCase[lowerCase.indexOf('_') + 1].toUpperCase() +
//          lowerCase.slice(lowerCase.indexOf('_') + 2);
//       const undercasePosition = camelCase.indexOf('_');
//       const finalWord =
//          camelCase.slice(0, undercasePosition) +
//          camelCase.slice(undercasePosition + 1, camelCase.length);
//       console.log(`${finalWord.padEnd(30, ' ')} ${'✅'.repeat(index + 1)}`);
//    }
// };


// wordsArray(wordList);
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*

const gameEvents = new Map([
   [17, '⚽️ GOAL'],
   [36, '🔁 Substitution'],
   [47, '⚽️ GOAL'],
   [61, '🔁 Substitution'],
   [64, '🔶 Yellow card'],
   [69, '🔴 Red card'],
   [70, '🔁 Substitution'],
   [72, '🔁 Substitution'],
   [76, '⚽️ GOAL'],
   [80, '⚽️ GOAL'],
   [92, '🔶 Yellow card'],
]);

//  1)
const events = new Set(gameEvents.values());
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
console.log(`a game event happened every ${90 / gameEvents.size} minutes `);

// 4
for (const [key, value] of gameEvents) {
   const time = key <= 45 ? 'First' : 'Second';
   console.log(`${time} Half ${key}: ${value}`);
}


bookMap.set('pages', 464);

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

console.log(bookMap.size);

bookMap.has('author') === true &&
   console.log(`The author of the book is known`);

bookMap.has('author') === true
   ? console.log(`The author of the book is known`)
   : console.log('no');

const firstBookMap = new Map(Object.entries(books[0]));

for (const [key, value] of firstBookMap) {
   if (typeof value === Number) console.log(key);
}


// Question 1
const user = {
   name: 'Alice',
   age: 25,
   city: 'Wonderland',
};

// 1. Log each key in the user object to the console.
console.log(Object.keys(user));

// Question 2
const user2 = {
   name: 'Alice',
   age: 25,
   city: 'Wonderland',
};

// 2. Log each value in the user2 object to the console.
console.log(Object.values(user2));

// Question 3
const user3 = {
   name: 'Alice',
   age: 25,
   city: 'Wonderland',
};

// 3. Log each key-value pair in the user3 object to the console.
console.log(Object.entries(user3));

// Question 4
const car = {
   make: 'Toyota',
   model: 'Camry',
   year: 2020,
   color: 'blue',
};

// 4. Count the number of properties in the car object.
console.log(Object.keys(car).length);

// Question 5
const expenses = {
   rent: 1000,
   groceries: 300,
   utilities: 150,
   entertainment: 100,
};

// 5. Calculate the total sum of the values in the expenses object.
let sum = 0;
for (const num of Object.values(expenses)) {
   sum += num;
   console.log(sum);
}

// Question 6
const mixed = {
   id: 1,
   name: 'Gadget',
   price: 29.99,
   available: true,
};

// 6. Create a new object containing only the properties with string values from the mixed object.
const newObject = {};
for (const [key, value] of Object.entries(mixed)) {
   typeof value === 'string' && (newObject[key] = value);
}
console.log(newObject);

// Question 7
const scores = {
   math: 80,
   science: 85,
   literature: 90,
};

// 7. Create a new object where each value in the scores object is doubled.
for (const [key, value] of Object.entries(scores)) {
   scores[key] = value * 2;
}
console.log(scores);

// Question 8
const statuses = {
   theme: 'light',
   layout: 'grid',
};

// 8. Create a new object where the keys and values in the status object are swapped.
const newObj = {};
for (const [key, value] of Object.entries(statuses)) {
   newObj[value] = key;
}
console.log(newObj);

// Question 9
const defaults = {
   theme: 'light',
   layout: 'grid',
};

const userSettings = {
   layout: 'list',
   showNotifications: true,
};

// 9. Merge defaults and userSettings into one object. If a key exists in both objects, use the value from userSettings.

const merged = {};
for (const [key, value] of Object.entries(defaults)) {
   merged[key] = value;
}

for (const [key, value] of Object.entries(userSettings)) {
   merged[key] = value;
}
console.log(merged);

// Question 10
const company = {
   name: 'TechCorp',
   location: {
      city: 'San Francisco',
      state: 'CA',
   },
   employees: {
      total: 500,
      departments: {
         engineering: 150,
         marketing: 100,
         sales: 250,
      },
   },
};

// 10. Log all keys and values in the company object, including those in nested objects.
for (const [key, value] of Object.entries(company)) {
   console.log(key, value);
}


// #1
// Given the following variables:
let a = 10;
let b = 20;

// Assign a default value of 0 to a variable 'c' if 'a' is undefined.
let c = a || 0;


// #1
// Given the array:
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Use destructuring and the rest operator to extract the first color into a variable named 'firstColor' and the remaining colors into an array named 'remainingColors'.

const [firstColor, ...remainingColors] = colors;
console.log(firstColor, remainingColors);

// #2
// Given the object:
const person = {
   name: 'Alice',
   age: 30,
   city: 'New York',
   country: 'USA',
};
// Use destructuring and the rest operator to extract the 'name' and 'age' properties from the 'person' object, and the remaining properties into a variable named 'otherDetails'.

const { name, age, ...otherDetails } = person;
console.log(name, age, otherDetails);

// #3
// Given the array of objects:
const users = [
   { id: 1, name: 'John', age: 28, email: 'john@example.com' },
   { id: 2, name: 'Jane', age: 32, email: 'jane@example.com' },
   { id: 3, name: 'Jim', age: 24, email: 'jim@example.com' },
];
// Use destructuring and the rest operator to extract the first user into a variable named 'firstUser' and the remaining users into an array named 'otherUsers'.
// Also, create a new array 'userNames' that contains only the names of the remaining users.

const [firstUser, ...otherUsers] = users;
console.log(firstUser, otherUsers);
const []

// #4
// Given the object:
const product = {
   id: 1,
   name: 'Laptop',
   price: 1000,
   details: {
      manufacturer: 'BrandX',
      warranty: '2 years',
   },
   stock: 50,
};
// Use nested destructuring and the rest operator to extract the 'name' and 'price' properties from the 'product' object, and the remaining properties into a variable named 'productDetails'.
// Additionally, extract the 'manufacturer' property from the nested 'details' object into a variable named 'manufacturer'.

const {
   name,
   price,
   details: { manufacturer },
   ...productDetails
} = product;

// #5
// Given the array:
const inventory = [
   { id: 1, name: 'Laptop', quantity: 10, location: 'Warehouse A' },
   { id: 2, name: 'Phone', quantity: 25, location: 'Warehouse B' },
   { id: 3, name: 'Tablet', quantity: 15, location: 'Warehouse A' },
];

// Use destructuring and the rest operator to extract the 'id' and 'name' properties of the first item into variables 'firstItemId' and 'firstItemName', respectively.
// Also, extract the 'quantity' and 'location' properties into an object named 'firstItemDetails'.
// The remaining items should be stored in an array named 'remainingInventory'.

const [
   { id: firstItemID, name: firstItemName, ...firstItemDetails },
   ...remainingInventory
] = inventory;
console.log(firstItemDetails);


/////////////////////////////////////////////////////// DESTRUCTURING OBJECT AND ARRAY

// #1
// Given the array:
const numbers = [1, 2, 3];

// Use destructuring to extract the first and second elements of the array into variables named 'first' and 'second'.

const [first, second] = numbers;

// #2
// Given the object:
const person = {
   name: 'Alice',
   age: 30,
   address: {
      city: 'New York',
      country: 'USA',
   },
};

// Use destructuring to extract the 'name' and 'age' properties from the 'person' object.
// Also, extract the 'city' property from the nested 'address' object.

const {
   name,
   age,
   address: { city },
} = person;

// #3
// Given the array of objects:
const users = [
   { id: 1, name: 'John', age: 28 },
   { id: 2, name: 'Jane', age: 32 },
];

// Use destructuring to extract the 'name' of the second user into a variable named 'secondUserName'.
const [, { name: secondUserName }] = users;
console.log(secondUserName);

// #4
// Given the array of objects:
const books = [
   { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
   { title: '1984', author: 'George Orwell' },
];

// Use destructuring to extract the 'title' of the first book into a variable named 'firstBookTitle'.
const [{ title: firstBookTitle }] = books;
console.log(firstBookTitle);

// #5
// Given the array of objects:
const companies = [
   { name: 'Apple', location: 'Cupertino' },
   { name: 'Google', location: 'Mountain View' }
 ];
 
 // Use destructuring to extract the 'name' and 'location' of the second company into variables named 'secondCompanyName' and 'secondCompanyLocation'.
const [, {name: secondCompanyName, location: secondCompanyLocation}] = companies 


/////////////////////////////////////////////////////// DESTRUCTURING OBJECT
// #1
// Given the object:
const person = { name: 'Alice', age: 25 };

// Use destructuring to assign the 'name' and 'age' properties to variables named 'personName' and 'personAge'.
const { name: personName, age: personAge } = person;

// #2
// Given the object:
const product = { name: 'Laptop', price: 1000 };

// Use destructuring to assign the 'name' property to a variable named 'productName' and the 'price' property to 'productPrice'.
// Also, assign a default value of 'Unknown' to a variable named 'productCategory'.

const {
   name: productName,
   price: productPrice,
   productCategory = 'unknown',
} = product;

// #3
// Given the object:
const employee = { id: 1, details: { name: 'Bob', position: 'Developer' } };

// Use destructuring to assign the 'name' and 'position' properties from the 'details' object to variables named 'employeeName' and 'employeePosition'.

const {
   details: { name: employeeName, position: employeePosition },
} = employee;

// #4
// Given the object:
const book = { title: 'JavaScript Basics', author: 'John Smith' };

// Use destructuring to assign the 'title' property to a variable named 'bookTitle' and the 'author' property to 'bookAuthor'.

const { title: bookTitle, author: bookAuthor } = book;

// #5
// Write a function named 'displayUser' that takes an object as an argument.
// The object contains properties: 'username', 'email', and 'phone'.
// Use destructuring in the function parameter to extract these properties and log them to the console.

function displayUser({ username, email, phone }) {
   // Destructure the 'user' object in the function parameter
   console.log(username, email, phone);
}

/////////////////////////////////////////////////////// DESTRUCTURING ARRAY
// Given the array:
const fruits = ['apple', 'banana', 'cherry'];

// Use destructuring to assign the first and second elements to variables named 'firstFruit' and 'secondFruit'.
const [firstFruit, secondFruit] = fruits;

// Given the array:
const colors = ['red', 'green', 'blue', 'yellow'];

// Use destructuring to assign the first and third elements to variables named 'primaryColor1' and 'primaryColor2'.
const [primaryColor1, , primaryColor2] = colors;

// Given the array:
const numbers = [1, 2];

// Use destructuring to assign the first and second elements to variables named 'num1' and 'num2'.
// Also, assign a default value of 3 to a variable named 'num3'.

const [num1, num2, num3 = 0] = numbers;

// Given the variables:
let a = 5;
let b = 10;

// Use destructuring to swap the values of 'a' and 'b'.
[a, b] = [b, a];

// Given the array:
const nestedArray = [1, [2, 3], 4];

// Use destructuring to assign the values 2 and 3 from the nested array to variables named 'inner1' and 'inner2'.
const [, [inner1, inner2]] = nestedArray;
*/
