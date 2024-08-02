'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// CODE
// Show the deposits list
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Create usernames for accounts
const createUsernames = function (accountsArr) {
  accountsArr.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// calculate balance of deposits and display
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Calculate sum of in and out movements
const calcDisplaySummary = function (acc) {
  // Incoming Movements Sum
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  // Outgoing Movements Sum
  const OutgoingMov = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(OutgoingMov)}€`;

  // Interest Movements Sum
  // Interest gets counted if its above $1
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * (acc.interestRate / 100))
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // Get entered information
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAccount);

  // valid transfer checks
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // doing transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
  }

  // Update UI
  updateUI(currentAccount);
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // can only request loan if you have a deposit worth 10% of requested loan
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // push movement
    currentAccount.movements.push(amount);

    // Update UI and clear field
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount?.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    //log out and clear UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
    inputCloseUsername.value = inputClosePin.value = '';
    inputLoginPin.blur();
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});

//////////////////////////////// LECTURES //////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE (doesnt change OG array)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE (mutates the OG array)
// mostly used to delete last item
console.log('---------SPLICE---------');
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE (mutates OG array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(', '));


///////////// LESSON NEW AT METHOD /////////////////
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array value, .at is faster
console.log(arr[arr.length - 1]);
console.log(...arr.slice(-1));
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));   


///////////// LESSON forEach METHOD /////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [key, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${key + 1}: $${value} moved into the account`);
  } else {
    console.log(`Movement ${key + 1}: $${value} moved out of the account`);
  }
}

console.log('------------------');

movements.forEach(function (value, key, array) {
  if (value > 0) {
    console.log(`Movement ${key + 1}: $${value} moved into the account`);
  } else {
    console.log(`Movement ${key + 1}: $${value} moved out of the account`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...


/////////// LESSON forEach with MAPS and SETS /////////////////

// MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currrenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currrenciesUnique);
currrenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});


/////////// LESSON MAP METHOD (creates new array) ///////////////
// gets access to value, index, and array

const eurToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements.map(function (value) {
  return value * eurToUSD;
});
console.log(movements);
console.log(movementsUSD);

// Simplify above using arrow function
const movementsUSDArrow = movements.map(value => value * eurToUSD);

// Do everything above but use for of loop
const forOfLoopArray = [];
for (const mov of movements) {
  forOfLoopArray.push(mov * eurToUSD);
}
console.log(forOfLoopArray);

const movementsDescription = movements.map((value, key) => {
  return `Movement ${key + 1}: You ${
    value > 0 ? 'Deposited' : 'Withdrew'
  } $${value}`;
});

console.log(movementsDescription);


///////// LESSON FILTER METHOD (creates new array) /////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawal = movements.filter(mov => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawal);


///////// LESSON REDUCE METHOD (creates new value NOT A ENTIRE ARRAY) /////////
// reduce has a accumulator which is basically the sum or the 'snowball' its just the # that you keep adding to
// you can also specify the starting value which is what the 0 is
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (accumulator, mov, i, arr) {
  return accumulator + mov;
}, 0);
console.log(balance);

const balanceArrow = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balanceArrow);

// Maximum Value
// accumulator remembers whatever you tell it to, so if max is bigger then return that, if mov is bigger then return it so that then becomes the new max
// for max/min good practice to not use 0 and use first array item bcz if you do max and they all neg and you start at 0 then it won't work bcz 0 is max
const maxMovement = movements.reduce(
  (max, mov) => (max > mov ? max : mov),
  movements[0]
);

console.log(maxMovement);

///////// LESSON CHAINING METHODS TOGETHER /////////
// if you ever get a weird bug you can use the built in array (mov, i, array) and do a console log to see the array for each function to make sure it works properly
const eurToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);


///////// LESSON FIND METHOD /////////
// returns first element that is true
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


///////// LESSON SOME AND EVERY /////////
// says true or false
// use to test for condition if SOME of variables are equal
// Every tests if every variable is equal to condition

// SOME
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
const allDeposits = movements.every(mov => mov > 0);
console.log(allDeposits);

///////// LESSON SEPARATE CALLBACKS /////////
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


///////// LESSON flat AND flatMap /////////
// flat removes nested arrays and makes it into 1 array. ONLY GOES 1 LEVEL DEEP
// flatMap just combines flat and map together
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// get all movement arrays into 1 array
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

// use flat
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// CHAINING THEM ALL TOGETHER
const overalBalanceChain = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceChain);

// USING flatMap
const overalBalanceFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceFlatMap);


///////// LESSON sort() /////////
// sort mutates array so BE CAREFUL

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
// this way below doesnt work bcz it dont sort in order
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());

// return < 0, A before B (keep order with neg number)
// return > 0, B before A (switch order with positive #)
const movementsAscending = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementsAscending.sort((a, b) => a - b);
console.log(movementsAscending);

const movementsDescending = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementsDescending.sort((a, b) => b - a);
console.log(movementsDescending);
*/

///////// LESSON CREATING AND FILLING ARRAYS /////////

// Empty array + fill methods
const arr = [1, 2, 3, 4, 5, 6, 7];

const x = new Array(7);
console.log(x);

// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    mov => Number(mov.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  // or you can break it up so:
  const movementUI2 = [...document.querySelectorAll('.movements__value')];
  const mapped = movementUI2.map(mov =>
    Number(mov.textContent.replace('€', ''))
  );

  console.log(mapped);
});
