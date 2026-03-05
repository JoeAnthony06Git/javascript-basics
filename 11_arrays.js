
// Arrays

// Create an array
const numbers = [1, 2, 3, 4, 5];

// Access elements
console.log(numbers[0]); // 1
console.log(numbers[2]); // 3


// Methods and Properties
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // 3

fruits.length = 2; // Truncate the array

fruits.push('strawberry'); // Add an element to the end
console.log(fruits); // ['apple', 'banana', 'strawberry']

fruits.pop(); // Remove the last element
console.log(fruits); // ['apple', 'banana']

fruits.shift(); // Remove the first element
console.log(fruits); // ['banana']

fruits.unshift('grape'); // Add an element to the beginning
console.log(fruits); // ['grape', 'banana']


// Concatenate arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const allNumbers = numbers1.concat(numbers2);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6]

const allNumbersSpread = [...numbers1, ...numbers2];
console.log(allNumbersSpread); // [1, 2, 3, 4, 5, 6]


// Practice: Process order
order1 = ['Peter Parker', 'Pizza'];

function processOrder(orders) {
    const customerName = orders.shift();
    orders.unshift("Beverage");
    orders.push(customerName);
    return orders;
};

console.log(processOrder(order1));


// Iterate over an array

const colors = ['red', 'green', 'blue'];

// Using a while loop
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

// Using a for loop
for (let j = 0; j < colors.length; j++){
    console.log(colors[j]);
}

// Using a for...of loop
for (const color of colors) {
    console.log(color);
}

// Using forEach method
colors.forEach(color => console.log(color));


// Practice: Sum of even numbers in an array

const numbersPractice = [19, 22, 31, 44, 55, 68, 77, 80, 93, 100];

function sumEvenNumbers(numbers){
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        if ((numbers[i] % 2) === 0){
            sum += numbers[i];
        };
    }

    return sum;
}

console.log(sumEvenNumbers(numbersPractice));


// Search in an array
const names = ['Alice', 'Bob', 'Charlie', 'David'];

// Using indexOf: Returns the index of the first occurrence of the element
console.log(names.indexOf("Charlie")); // 2
console.log(names.indexOf("Eve")); // -1 (not found)

// Using includes: Returns true if the element is found, false otherwise
console.log(names.includes("Bob")); // true
console.log(names.includes("Eve")); // false

// Using some: Returns true if at least one element satisfies the condition
console.log(names.some(name => name.length > 5)); // true (Charlie and David have more than 5 characters)
console.log(numbersPractice.some(number => number > 50)); // true (there are numbers greater than 50)

// Using every: Returns true if all elements satisfy the condition
console.log(numbersPractice.every(number => number % 2 === 0)); // false (not all numbers are even)
console.log(names.every(name => name.length >= 3)); // true (all names have at least 3 characters)

// Using find: Returns the first element that satisfies the condition
console.log(numbersPractice.find(number => number < 0)); // undefined (no negative numbers)
console.log(numbersPractice.find(number => number > 80)); // 93 (the first number greater than 80)

// Using findIndex: Returns the index of the first element that satisfies the condition
console.log(numbersPractice.findIndex(number => number < 0)); // -1 (no negative numbers)
console.log(numbersPractice.findIndex(number => number > 80)); // 8 (the index of the first number greater than 80)


// Practice: Check if all words in an array end with "a"

wordsEndingWhitoutA = ["house", "tree", "car"];
wordsEndingWithA = ["data", "sea", "camera"];


function endWithA(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].endsWith("a") === true){
        continue;
    } else {
        return false;
    };
  };
  return true;
};

console.log(endWithA(wordsEndingWhitoutA));
console.log(endWithA(wordsEndingWithA));


// Ordering an array
const unsortedNumbers = [51, 10, 9, 1, 5, 25, 6];

// Using sort without a compare function: Sorts elements as strings
unsortedNumbers.sort();
console.log(unsortedNumbers); // [1, 2, 5, 5, 6, 9] (but this can be incorrect for numbers)

// Using sort: Sorts the elements in place and returns the sorted array
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers); // [1, 2, 5, 5, 6, 9]


// Practice: Sort an array of numbers based on their absolute values

const numbersSort = [5, -10, -2, -25, -7];

function sortAbsoluteNumbers(numbers) {
    return numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
}

console.log(sortAbsoluteNumbers(numbersSort));


// Transform an array

const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const strings = ["apple", "banana", "cherry", "date"];

// Filter: Creates a new array with all elements that satisfy the condition
const evenNumbers = originalNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers) // [2, 4, 6]

const stringsWithA = strings.filter((string) => string.includes("a"));
console.log(stringsWithA); // ["apple", "banana", "date"]

// Map: Creates a new array with the results of calling a function on every element
const doubledNumbers = originalNumbers.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12, 14]

const stringsLength = strings.map((string) => string.length)
console.log(stringsLength) // [5, 6, 6, 4]

// Practice: Create a new array that contains the double of the even numbers from the original array
const doubleEvenNumbers = originalNumbers
    .filter((number) => number % 2 === 0)
    .map((number) => (number * 2));
console.log(doubleEvenNumbers); // [4, 8, 12]

// Reduce: Executes a reducer function on each element of the array, resulting in a single output value
const sum = originalNumbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0) // <- el 0 es el valor inicial
console.log(sum) // 28

// Practice: Create a new array that contains the double of the even numbers greater than 5 from the original array using reduce
const doubleEvenNumber = originalNumbers.reduce((accumulator, currentNumber) => {
    const isEven = currentNumber % 2 === 0;
    const double = currentNumber * 2;
    const greaterThanFive = (double) > 5;

    if (isEven && greaterThanFive){
        return accumulator.concat(double) // <- concat return a new array with the new element added
    } else {
        return accumulator // <- if the condition is not met, return the accumulator without changes
    };
}, []);
console.log(doubleEvenNumber)


// Practice: Create a function that takes an array of words and a word
// and returns a new array with the words that have more characters than the index of the given word in the original array.

const words = ["apple", "banana", "cherry", "plane", "date", "car", "house"];
const word = "date";

function searchWords(words, word) {
  const index = words.indexOf(word);

  const wordsGreater = words.filter((string) => string.length > index);
  return wordsGreater;
}

console.log(searchWords(words, word))


// Matrixes

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements in a matrix
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6

// Iterating over a matrix
for (let i = 0; i < matrix.length; i++) { // Outer loop iterates over rows
  for (let j = 0; j < matrix[i].length; j++) { // Inner loop iterates over columns
    console.log(matrix[i][j])
  }
}


// Practice: Check if there is a winner in a Tic Tac Toe game 
const TicTacToe = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
];

// Check the horizontal lines
for (let i = 0; i < TicTacToe.length; i++) {
    if (
        TicTacToe[i][0] === TicTacToe[i][1] && 
        TicTacToe[i][1] === TicTacToe[i][2]
    ){
        console.log(`The Winner is: ${TicTacToe[i][0]}`);
    }
};

// Check the vertical lines
for (let i = 0; i < TicTacToe.length; i++){
    if (
        TicTacToe[0][i] === TicTacToe[1][i] &&
        TicTacToe[1][i] === TicTacToe[2][i]
    ){
        console.log(`The Winner is: ${TicTacToe[0][i]}`);
    }
}

// Check the main diagonal
if (
  TicTacToe[0][0] === TicTacToe[1][1] &&
  TicTacToe[1][1] === TicTacToe[2][2]
) {
  console.log(`The Winner is: ${TicTacToe[0][0]}`);
}

// Check the anti-diagonal
if (
  TicTacToe[0][2] === TicTacToe[1][1] &&
  TicTacToe[1][1] === TicTacToe[2][0]
) {
  console.log(`The Winner is: ${TicTacToe[0][2]}`);
}


// Practice: Find the position of "JavaScript" in a matrix of programming languages

const languagesMatrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

function findJavaScript(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "JavaScript"){
            return [i, j];
        } else {
            continue
        };
    };
  };
  if (matrix.includes("JavaScript") === false){
    return [-1, -1];
  }
};

const position = findJavaScript(languagesMatrix);
console.log(position); // -> [0, 2]


// Algorithms with arrays

// Find the maximum number in an array

const numbersAlgorithm = [3, 7, 2, 9, 5];

function findMaxAlgorithm(array) {
  let max = array[0] // We start with the first element as the maximum

  // We iterate through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    // Is the current element greater than the maximum?
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max;
}

console.log(findMaxAlgorithm(numbersAlgorithm)); // 9


// Practice: Find the indices of the minimum and maximum number in an array

const booksPages = [300, 150, 450, 200, 100];

function minAndMaxIndices(pages) {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < pages.length; i++) {
    if (pages[i] < pages[minIndex]) {
      minIndex = i;
    }
    if (pages[i] > pages[maxIndex]) {
      maxIndex = i;
    }
  }

  return [minIndex, maxIndex];
}

console.log(minAndMaxIndices(booksPages)); // [4, 2]
