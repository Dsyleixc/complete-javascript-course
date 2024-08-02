'use strict';

//////////////////////// DEFAULT VALUES ///////////////////////////
/*
const bookings = [];

const createBooking = function (
  flightNum, 
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// if you want to skip one arguement thats in middle area of function and use its default in function pass in undefined bcz undefined is false so it goes to the default val
createBooking('LH123', undefined, 5);



//////////////////////// PRIMATIVES VS OBJECTS IN FUNCTIONS ///////////////////////
// TLDR IS THAT OBJECTS CAN GET VALUES REASSIGNED BCZ IT POINTS TO THE OBJECT STORED IN HEAP BUT FOR PRIMATIVES YOU CREATE COPY OF IT SO ITS NOT ACTUALLY CHANGED

const flight = 'LH234';
const jonas = {
  name: 'Jonas',
  passport: 2313123421,
};

const checkIn = function (flightNum, passengerObj) {
  flightNum = 'LH999';
  passengerObj.name = `Mr. ${passengerObj.name}`;

  if (passengerObj.passport === 2313123421) {
    alert('Check in');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


//////////////////////// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ///////////////////////

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// higher order function
const transformer = function (str, func) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function () {
  console.log('smack');
};
['Jonas', 'Marta', 'Adam'].forEach(high5);


//////////////////////// FUNCTIONS RETURNING FUNCTIONS ///////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greet('Hello')('Aaron');

// Challenge do it in a arrow function (not really used):
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow('Wassup')('Aaron');

//////////////////////// CALL, APPLY, AND BIND ///////////////////////
// Call lets you set .this to any object but it calls it right away
// Apply is identical to call but you pass the data in an array for the function

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    this.bookings.push({ flight: this.iataCode + flightNum, name });
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'John Smith');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work bcz this points to window
// book(23, 'sarah');

// CALL METHOD
book.call(euroWings, 23, 'Sarah');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 250, 'Frank');
console.log(swiss);

// APPLY METHOD
const flightData = [583, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

// never need to use apply bcz you can just use spread operator
book.call(swiss, ...flightData);

// BIND METHOD
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(421, 'Steven');
console.log(euroWings);

// you can pass default values so the OG function needed flight num and name but you basically give bookEW23 the default val of 23 for flightNum, think of it as the call function but you can like give it the value ahead of time now and still leave the name value empty to be passed in later
const bookEW23 = book.bind(euroWings, 23);
bookEW23('Martha');
console.log(euroWings);

// WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// if you dont use a this in the function you still gotta skip it so you use null to do so
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Challenge create the above using a functions returning a function
const tax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addTaxRate = tax(0.13);
console.log(addTaxRate(100));


//////////////////////// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ///////////////////////

// if you call it once it will only run once but you can call it again and again if you want
const runOnce = function () {
  console.log('this will never run again');
};

runOnce();

// this is actually only used once it dont even got a name wrap it to avoid error then slap a () at the end to run it right away
(function () {
  console.log('this will never run again');
})();

(() => console.log('this will also  never run again'))();
 

//////////////////////// CLOSURES ///////////////////////
// tldr is every function has a backpack of the variables during its creation. So below function gets returned to booker function. the passengerCount++ still can find the let passengerCount=0 bcz that variable is in the backpack since the returned function can always get variables created during its birthplace
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// can use console.dir to see the scope that would show the variables in the backpack
console.dir(booker);

// Closure example1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
h();
f();
console.dir(f);
*/

// Closure example2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// this variable wont get used bcz in scope/backpack has priority
const perGroup = 1000;

boardPassengers(180, 3);
