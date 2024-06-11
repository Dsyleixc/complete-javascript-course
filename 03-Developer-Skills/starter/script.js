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
*/

// Find common prefix
const strs = ['floser', 'flos', 'flisht'];

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
