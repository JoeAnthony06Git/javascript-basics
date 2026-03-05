
// GUESS THE NUMBER

// 1. Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let availableLives = 3;

// 2. Ask the user to guess the number
let userNumber = parseInt(prompt("Guess the Number!!"));

// 3. Check if the user's guess is correct
while (userNumber !== randomNumber && availableLives > 1){
    let message = 
        userNumber > randomNumber 
            ? "The number is smaller" 
            : "The number is larger"

    console.log( "Very Close!! " + message);
    userNumber = parseInt(prompt("Try Again!"));
    availableLives--;
};

if (userNumber === randomNumber){
        console.log("You Made It!!! Congratulations! 💦");
    };