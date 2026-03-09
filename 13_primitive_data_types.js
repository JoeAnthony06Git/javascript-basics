
// Primitive data types in JavaScript

let text = 'Hello, World!';
let number = 42;
let bigint = 123n;
let boolean = true;
let undefined; // Note: 'undefined' is a primitive value, not a variable
let symbol = Symbol('id');
let null_ = null;

/* 
Object Wrapper for primitive data types
When you write text.toUpperCase(), JavaScript does this internally:
1. Creates: new String("JavaScript")
2. Calls the method: new String("JavaScript").toUpperCase()
3. Returns the result: "JAVASCRIPT"
4. Destroys the temporary object
*/

console.log(typeof text) // "string" (no "object")

text.newproperty = 'test';
console.log(text.newproperty) // undefined (the property is not set on the primitive value)

let textObj = new String('Hello');
console.log(typeof textObj) // "object"
console.log(text === textObj) // false


// Strings

// Template literals
let name = 'Alice';
let age = 25;

let presentation = `My name is ${name} and I am ${age} years old.`;
console.log(presentation) // "My name is Alice and I am 25 years old."

let poem = `
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
`;
console.log(poem)

let calculation = `The result of 5 + 10 is ${5 + 10}.`;
console.log(calculation) // "The result of 5 + 10 is 15."


// Searching for substrings
let phrase = 'JavaScript is great. I love JavaScript!';

// indexOf() method: return the first coincidence
console.log(phrase.indexOf('JavaScript')) // 0 (first occurrence)
console.log(phrase.indexOf('a')); // 1 (first occurrence of 'a')
console.log(phrase.indexOf('Python')) // -1 (substring not found)

// lastIndexOf() method: return the last coincidence
console.log(phrase.lastIndexOf('JavaScript')) // 25 (last occurrence)
console.log(phrase.lastIndexOf('a')); // 17 (last occurrence of 'a')

// includes() method: return true if the substring is found, otherwise false
console.log(phrase.includes('JavaScript')) // true
console.log(phrase.includes('Python')) // false

// startsWith() and endsWith() methods: check if the string starts or ends with a specific substring
console.log(phrase.startsWith('JavaScript')) // true
console.log(phrase.endsWith('!')) // true
console.log(phrase.startsWith('Python')) // false
console.log(phrase.endsWith('.')) // false


// Extracting substrings
text = 'JavaScript Programming';

// slice - returns a substring from start index to end index (not inclusive)
console.log(text.slice(0, 10)) // "JavaScript"
console.log(text.slice(11)) // "Programming"
console.log(text.slice(-11)) // "Programming" (desde el final)

// substring - similar to slice but does not accept negative indices
console.log(text.substring(0, 10)) // "JavaScript"

// substr - extracts from an index with a specific length
console.log(text.substr(11, 7)) // "Program"


// Transforming strings
text = '  JavaScript Programming  ';

// toUpperCase() and toLowerCase() methods: convert the string to uppercase or lowercase
console.log(text.toUpperCase()) // "  JAVASCRIPT PROGRAMMING  "
console.log(text.toLowerCase()) // "  javascript programming  "

// Elimination of spaces
console.log(text.trim()) // "JavaScript Programming"
console.log(text.trimStart()) // "JavaScript Programming  "
console.log(text.trimEnd()) // "  JavaScript Programming"

// Replace
phrase = 'I like JavaScript and JavaScript is great!';
console.log(phrase.replace('JavaScript', 'Python')) // "I like Python and Python is great!" (only replaces the first occurrence);
console.log(phrase.replaceAll('JavaScript', 'Python')) // "I like Python and Python is great!" (replaces all occurrences)


// Division and joining methods
// split - converts string into array
let languages = 'JavaScript,Python,Java,C++'
let arrayLanguages = languages.split(',')
console.log(arrayLanguages) // ["JavaScript", "Python", "Java", "C++"]

let sentence = 'Hello world JavaScript'
let words = sentence.split(' ')
console.log(words) // ["Hello", "world", "JavaScript"]

// repeat - repeats the string
let laugh = 'ha'
console.log(laugh.repeat(3)) // "hahaha"

// padStart and padEnd - pads the string
number = '5'
console.log(number.padStart(3, '0')) // "005"
console.log(number.padEnd(3, '0')) // "500"


// Verification of string content
let password = 'ABC123'

// charAt - returns the character at a specific index
console.log(password.charAt(0)) // "A"
console.log(password.charAt(3)) // "1"

// charCodeAt - returns the Unicode code of a character
console.log(password.charCodeAt(0)) // 65 (Unicode code of 'A')

// match - searches for matches with regular expressions
let email = 'usuario@example.com'
let result = email.match(/@(.+)\./) // Search for the domain name between '@' and '.'
console.log(result[1]) // "example"


// Practice: Create functions to validate email and password
function validateEmail(email){
    return email.includes('@') && email.includes('.');
};

function validatePassword(password){
    return (
        (password.length >= 8 && password.includes('@')) ||
        password.includes('#') ||
        password.includes('$')
    )
};

console.log(validateEmail('user@example.com')); // true
console.log(validateEmail('user@example')); // false
console.log(validatePassword('password123')); // false
console.log(validatePassword('password@123')); // true

// Practice: Create a function to format a character string
function formatName (name){
    return name
        .trim()
        .toLowerCase()
        .split()
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ')
};

console.log(formatName('  john doe  ')); // "John Doe"
console.log(formatName('  alice smith  ')); // "Alice Smith"


// Numbers

// Different types of numbers
let wholeNumber = 42;
let decimalNumber = 3.14;
let negativeNumber = -10;
let exponentialNumber = 1e6; // 1 million 
let hexadecimalNumber = 0xFF; // 255 in decimal
let binaryNumber = 0b1010; // 10 in decimal
let octalNumber = 0o777; // 511 in decimal

console.log(typeof wholeNumber);
console.log(typeof decimalNumber);

// Number Constructor
let numberFromString = Number('123');
console.log(numberFromString); // 123
console.log(typeof numberFromString); // "number"

let fromTrue = Number(true);
console.log(fromTrue); // 1
let fromFalse = Number(false);
console.log(fromFalse); // 0
let fromNull = Number(null);
console.log(fromNull); // 0
let fromUndefined = Number(undefined);
console.log(fromUndefined); // NaN (Not a Number)
let fromString = Number('abc');
console.log(fromString); // NaN (Not a Number)

// Infinity
console.log(1 / 0) // Infinity
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Math.pow(10, 1000)) // Infinity

// -Infinity
console.log(-1 / 0) // -Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity

// Verificar si es infinito
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(isFinite(42)) // true (función global)

// Operations that result in NaN
console.log(0 / 0) // NaN
console.log(Math.sqrt(-1)) // NaN
console.log(Number('texto')) // NaN
console.log(undefined + 1) // NaN

// isNan() and Number.isNaN() functions
console.log(isNaN('text')) // true (Converts the argument to a number before checking if it's NaN)
console.log(Number.isNaN('text')) // false

// Conversion Methods
number = 123.456789;

// toString - converts a number to a string
console.log(number.toString()) // "123.456789"
console.log(number.toString(2)) // "1111011.0111010..." (binary)
console.log(number.toString(16)) // "7b.74bc6a7ef9db2" (hexadecimal)

// toFixed - sets decimals
console.log(number.toFixed(2)) // "123.46" (rounds to 2 decimal places)
console.log(number.toFixed(0)) // "123" (rounds to 0 decimal places)

// toPrecision - sets significant digits
console.log(number.toPrecision(4)) // "123.5" (4 significant digits)
console.log(number.toPrecision(2)) // "1.2e+2" (2 significant digits in exponential notation)

// toExponential - converts to exponential notation
console.log(number.toExponential()) // "1.23456789e+2"
console.log(number.toExponential(2)) // "1.23e+2" (2 digits after the decimal point)

// Static verification methods
// isInteger - verifies if it is an integer
console.log(Number.isInteger(42)) // true
console.log(Number.isInteger(42.0)) // true
console.log(Number.isInteger(42.1)) // false

// isSafeInteger - verifies if it is in safe range
console.log(Number.isSafeInteger(123)) // true
console.log(Number.isSafeInteger(Math.pow(2, 53))) // false

// isFinite - verifies if it is finite
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(Infinity)) // false

// isNaN - verifies if it is NaN
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('text')) // false

// Parsing Methods
// parseInt - converts to integer
console.log(Number.parseInt('42')) // 42
console.log(Number.parseInt('42.7')) // 42
console.log(Number.parseInt('42px')) // 42
console.log(Number.parseInt('px42')) // NaN

// With specific base
console.log(Number.parseInt('FF', 16)) // 255
console.log(Number.parseInt('1010', 2)) // 10

// parseFloat - converts to decimal
console.log(Number.parseFloat('42.7')) // 42.7
console.log(Number.parseFloat('42.7px')) // 42.7
console.log(Number.parseFloat('px42.7')) // NaN

// BigInt
let int = 1234567890123456789012345678901234567890;
console.log(int); // 1.2345678901234568e+39 (loss of precision)

let bigInt1 = 1234567890123456789012345678901234567890n;
console.log(bigInt1); // 1234567890123456789012345678901234567890n (exact value!)

// Bitwise operators
let bits1 = 0b1010n // 10n
let bits2 = 0b1100n // 12n

// Bitwise operators
console.log(bits1 & bits2) // 8n (AND)
console.log(bits1 | bits2) // 14n (OR)
console.log(bits1 ^ bits2) // 6n (XOR)
console.log(~bits1) // -11n (NOT)
console.log(bits1 << 2n) // 40n (left shift)
console.log(bits1 >> 1n) // 5n (right shift)

// Symbols
// Each Symbol is unique
let sym1 = Symbol()
let sym2 = Symbol()
let sym3 = Symbol('description')
let sym4 = Symbol('description')
console.log(sym1 === sym2) // false
console.log(sym3 === sym4) // false (even with the same description!)
console.log(typeof sym1) // "symbol"

// Symbol.for() uses a global registry
let global1 = Symbol.for('key')
let global2 = Symbol.for('key')
console.log(global1 === global2) // true (same symbol!)

// Symbol.keyFor() gets the key from the registry
console.log(Symbol.keyFor(global1)) // "key"

// Local symbols are not in the registry
let local = Symbol('description')
console.log(Symbol.keyFor(local)) // undefined

// Symbols as unique properties
let id = Symbol('id')
let nameSymbol = Symbol('name')

let user = {
    [id]: 12345,
    [nameSymbol]: 'John',
    age: 30
}
console.log(user[id]) // 12345
console.log(user[nameSymbol]) // 'John'
console.log(user.age) // 30

// No conflicts with string properties
user.id = 'string-id'
user.name = 'string-name'

console.log(user[id]) // 12345 (symbol)
console.log(user.id) // 'string-id' (string)
console.log(user[nameSymbol]) // 'John' (symbol)
console.log(user.name) // 'string-name' (string)

// Application states
const STATES = {
    LOADING: Symbol('loading'),
    COMPLETED: Symbol('completed'),
    ERROR: Symbol('error'),
    UNKNOWN_ERROR: Symbol('unknown error')
}

function changeState(newState) {
    switch (newState) {
        case STATES.LOADING:
            console.log('Loading...')
            break
        case STATES.COMPLETED:
            console.log('Completed!')
            break
        case STATES.ERROR:
            console.log('Error occurred')
            break
        case STATES.UNKNOWN_ERROR:
            console.log('Unknown error')
            break
        default:
            console.log('Unknown state')
    }
}
changeState(STATES.LOADING) // "Loading..."
