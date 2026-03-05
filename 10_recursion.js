
// Recursion 

// A function that calls itself is called a recursive function.

function countdown (number){
    if (number < 0){
        return console.log("Blast Off!!")
    };
    console.log(number);
    countdown(number - 1);
};

console.log(countdown(3));


// Exercise: Factorial of a number

function factorial(number) {
    if (number === 0 || number === 1){
        return 1
    } else {
        return number * factorial(number - 1)
    }
}

console.log(factorial(5))


// Exercise: Sum of numbers

function adittion(number) {
    if (number === 1){
        return 1
    } else {
        return number + adittion(number - 1)
    }
}

console.log(adittion(10))


// Exercise: Fibonacci

function fibonacci(number){
    if (number === 0){
        return 0
    } else if (number === 1){
        return 1
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2)    
    }
}

console.log(fibonacci(1))


// Practice: Count until 1

function count (number){
    if (number === 0){
        return
    } else {
        console.log(number)
        return count(number - 1)
    }
}

console.log(count(5))


// Practice: Empowerment

function empowerment(base, exponent){
    if (base === 1 || exponent === 0){
        return 1
    } else {
        return base * empowerment(base, exponent - 1)
    }
}

console.log(empowerment(5, 2))


// Practice: Invest Strings

function invert(text){
    if (text.length === 1){
        return text
    } else {
        return invert(text.slice(1)) + text[0]
    }
}

console.log(invert("dog"))