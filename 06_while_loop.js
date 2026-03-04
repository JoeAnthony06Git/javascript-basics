
// While loop in JavaScript

let countdown = 10;

while (countdown > 0) {
    console.log(countdown);
    countdown -= 1; // This is the same as countdown = countdown - 1
}
console.log("Blast off!");


// Break statement example

countdown = 5;

while (countdown > 0) {
    if (countdown === 3){
        console.log("Countdown is at 3, breaking the loop.");
        break; // This will exit the loop immediately when countdown is 3
    }
    console.log(countdown);
    countdown -= 1; // This is the same as countdown = countdown - 1
}
console.log("Blast off!");


// Continue statement example

countdown = 10;
while (countdown > 0) {
    countdown -= 1; // This is the same as countdown = countdown - 1
    if (countdown % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(countdown);
}
console.log("Blast off!");


// Nested while loops example

const REVISION_NUMBER = 3;
countdown = 5;

while (countdown > 0) {
    console.log(countdown + 's left');

    let revisions = 0;
    while (revisions < REVISION_NUMBER){
        revisions += 1;
        console.log(revisions + ' revision(s) done');
    }

    countdown -= 1;
}


// Variable inside while loops 

countdown = 5;

while (countdown > 0) {
    let revisions = 3;
    console.log(revisions);
    countdown -= 1;
}

console.log(revisions); // This will cause an error because revisions is not defined outside the loop