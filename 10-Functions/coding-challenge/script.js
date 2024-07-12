'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// function to get user answer, check if its valid, and tally correct answer
const registerNewAnswer = function () {
  //display prompt window
  const userAnswer = prompt(`What is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++
      (Write option number)`);
  // check if answer is valid and if valid add to answers array
  if (userAnswer > 3 || userAnswer < 0) {
    alert(`not a valid answer!`);
  } else {
    this.answers[userAnswer]++;
  }
};

// displays results
const displayResults = function (type = 'string') {
  if (type === 'string') {
    console.log(`Poll results are: ${this.answers.join(', ')}`);
  } else if (type === 'array') {
    console.log(poll.answers);
  }
};

const poll = {
  registerNewAnswer,
  answers: [0, 0, 0, 0],
  displayResults,
};

// 2
document.querySelector('.poll').addEventListener('click', function () {
  registerNewAnswer.call(poll);
  displayResults.call(poll);
});

// NOT DONE BONUS
