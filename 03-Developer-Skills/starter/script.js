// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// Problem 1 calculate max - min from given array
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // Find Max Value
const findMax = function (temps) {
  let max = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] !== 'number') continue;
    if (max < temperatures[i]) {
      max = temperatures[i];
      //   console.log(`new max is ${max}`);
    }
  }
  return max;
};

// // Find Min Value
const findMin = function (temps) {
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] !== 'number') continue;
    if (min > temperatures[i]) {
      min = temperatures[i];
      //   console.log(`new min is ${min}`);
    }
  }
  return min;
};

// // Calculate Daily Amplitude and log it
const dailyAmp = findMax(temperatures) - findMin(temperatures);
console.log(`The daily amplitude is ${dailyAmp}`);

// Problem 2: Create am object with the two functions in it
const maxMinObject = {
  max: function (temps) {
    let max = temperatures[0];
    for (let i = 0; i < temperatures.length; i++) {
      if (typeof temperatures[i] !== 'number') continue;
      if (max < temperatures[i]) {
        max = temperatures[i];
        //   console.log(`new max is ${max}`);
      }
    }
    return max;
  },

  min: function (temps) {
    let min = temperatures[0];
    for (let i = 0; i < temperatures.length; i++) {
      if (typeof temperatures[i] !== 'number') continue;
      if (min > temperatures[i]) {
        min = temperatures[i];
        //   console.log(`new min is ${min}`);
      }
    }
    return min;
  },
};

let tempMax = maxMinObject.max(temperatures);
let tempMin = maxMinObject.min(temperatures);
console.log(tempMax);


// Find common prefix
const strs = ['flower', 'flow', 'flight'];

const shortest = function (array) {
    let varLength = array[0].length;
    for (let i = 0; i < array.length; i++) {
        if (varLength > array[i].length) {
            varLength = array[i];
        }
    }
    return varLength.length;
};

// console.log(shortest(strs));

let shortestNum = shortest(strs);

// check if first letter of first word is same as rest of array check first letter of each one and then do if to see if they the same

const commonPrefix = function (array) {
    let prefix = '';
    let letter;
    for (let i = 0; i < shortestNum; i++) {
        letter = array[0][i];
        let brokenOut = false;
        for (let j = 1; j < array.length; j++) {
            if (array[j][i] !== letter) {
                brokenOut = true;
                break;
            }
        }
        if (brokenOut === false) {
            prefix += letter;
        }
        if (brokenOut === true) {
            break;
        }
    }
    console.log(prefix);
};

commonPrefix(strs);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees celsius:'),
//   };

//   const kelvin = measurement.value * 273
// };


// Problem 1
// const finalArray = [];

// const row = 6;
// const column = 4;

// for loop for each spot in array
// for (let i = 0; i < column; i++) {
//     finalArray[i] = [];
//     // Loop 7 times to print
//     for (let j = 0; j < row; j++) {
//         // if array spot is even X if odd O
//         if (i % 2 === 0) {

//             finalArray[i].push('X');
//         } else {
//             finalArray[i].push('0');
//         }
//     }
// }
// console.log(finalArray);

// Problem 2
// const finalArray = [];

// const row = 5;
// const column = 4;
// const firstLetter = 'X';
// // Loop to create the 4 arrays
// for (let i = 0; i < column; i++) {
//     finalArray[i] = [];
//     finalArray[i].push(firstLetter);
//     // Loop 7 times to print within the array
//     for (let j = 0; j < row; j++) {
//         // if array spot j - 1 === 'X' then O
//         if (finalArray[i][j] === 'X') {
//             finalArray[i].push('O');
//         } else {
//             finalArray[i].push('X');
//         }
//     }
// }
// console.log(finalArray);


//Problem 3
const finalArray = [];

const row = 4;
const column = 6;
const firstLetter = 'X';
// Loop to create the 4 arrays
for (let i = 0; i < row; i++) {
    finalArray[i] = [];
    // if in first array position start it with firstLetter
    if (i === 0) {
        finalArray[i].push(firstLetter);
        // if first letter of previous array = firstLetter then start the new array with 'O'
    } else if (finalArray[i - 1][0] === firstLetter) {
        finalArray[i].push('O');
        // if none of above work then that means you need to push a 'X'
    } else {
        finalArray[i].push(firstLetter);
    }

    // Loop 7 times to print within the array
    for (let j = 0; j < column - 1; j++) {
        // if array spot j - 1 === 'X' then O
        if (finalArray[i][j] === 'X') {
            finalArray[i].push('O');
        } else {
            finalArray[i].push('X');
        }
    }
}
console.log(finalArray);


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2, 7, 11, 15];
// // loop for first number
// for (let i = 0; i < nums.length; i++) {
//     // loop for second number
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[i] + nums[j] === 9) {
//             console.log([i, j]);
//         }
//     }
// }

let obj = {};
let target = 9;
for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined) {
        console.log([obj[target - nums[i]], i]);
    }
    obj[nums[i]] = i;
    console.log(obj);
}
*/

const arr = [12, 5, -5, 0, 4];

let tempScript = '';
const printForcast = function (tempArray) {
    for (let i = 0; i < arr.length; i++) {
        let temp = `... ${arr[i]}C in ${arr.indexOf(arr[i]) + 1} days `;
        tempScript += temp;
    }
    console.log(tempScript);
};

console.log(printForcast(arr));
