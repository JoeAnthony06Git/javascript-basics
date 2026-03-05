
// Functions are reusable blocks of code that perform a specific task.


// Function Declaration

function greet() {
    return "Hello, World!";
};


// Function to obtein a random number between 1 and 10

function getRandomNumber(){
    const random = Math.random()
    const multiplied = random * 10
    const rounded = Math.floor(multiplied)
    const result = rounded + 1
    return result
}


// Function with Parameters

function greetPerson(name) {
    return "Hello " + name;
}

function sum(a, b) {
    return a + b;
}

console.log(greet())
console.log(getRandomNumber())
console.log(greetPerson("Alice"))
console.log(sum(5, 10))


// Functions like Parameters

function greet(name){
    return "Hello " + name;
}

function dismiss(name){
    return "Goodbye " + name;
}

function greetOrDismiss(name, action){
    return action(name)
}

console.log(greetOrDismiss("Emily", greet))
console.log(greetOrDismiss("Milena", dismiss))


// Exercise: flexible calculator

function addition(a, b){
    return a + b
}

function subtraction(a, b){
    return a - b
}

function multiplication(a, b){
    return a * b
}

function division(a, b){
    return a / b
}

function calculator(number_1, number_2, operation){
    const resultado = operation(number_1, number_2)
    return "El resultado es: " + resultado
}

console.log(calculator(3, 4, division));
console.log(calculator(3, 4, subtraction));
console.log(calculator(3, 4, multiplication));
console.log(calculator(3, 4, addition));


// Function Expression
const sum = function(a, b) {
    return a + b;
};


// Arrow Function

const greet = (name) => "Hello " + name;

