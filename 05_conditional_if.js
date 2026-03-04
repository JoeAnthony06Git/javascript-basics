
// Conditional code with if

/*
The if statement is used to execute 
a block of code if a specified condition is true.
*/

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 16){
    console.log("You are a teenager.");
} else {
    console.log("You are a minor.");
}


// Nested if statements

age = 17;
let hasLicense = true;

if (age >= 18){
    if (hasLicense) {
        console.log('You can Drive');
    } else {
        console.log('You need a license to drive');
    }
} else {
    console.log('You are too young to drive');
}


// Logical operators in if statements

age = 20;
hasLicense = true;
if (age >= 18 && hasLicense) {
    console.log('You can Drive');
} else {
    console.log('You cannot drive');
}


// Refactoring code

age = 20;
hasLicense = true;
let canDrive = age >= 18 && hasLicense;

if (canDrive){
    console.log('You can Drive');
} else {
    console.log('You cannot drive');
}