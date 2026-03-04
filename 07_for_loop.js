
// For Loop

/*
for (initialization; condition; increment/decrement) {
  code to be executed
} 
  */

// Example of a for loop that counts from 1 to 10

for (let number = 1; number <= 10; number++) {
  console.log(number)
}


// Example of a for loop that counts down from 10 to 0

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log('¡Blast off!')
  } else {
    console.log(i + ' seconds left')
  }
}


// Example of a for loop with multiple variables

for (let i = 0, j = 5; i < 5; i++, j--) {
  console.log(i, j)
}


// Example of a for loop with a break and continue statement

for (let i = 0; i < 10; i++) {
  const isEven = i % 2 === 0
  if (isEven) {
    continue
  }

  // This will only show odd numbers
  console.log(i)

  // This will break the loop when i is 7
  if (i === 7) {
    break
  }
}


// Example of a nested for loop to print the multiplication table from 1 to 10

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const result = i * j
    console.log(i + ' x ' + j + ' = ' + result)
  }
}