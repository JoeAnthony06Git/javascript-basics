
// Switch statement

const day = new Date().getDay()

// according to the day of the week, we show a different message
switch (day) {
    case 0:
        console.log('Today is Sunday!')
        break
    case 1:
        console.log('Nooo, it\'s Monday!')
        break
    case 2:
        console.log('Today is Tuesday!')
        break
    case 3:
        console.log('Today is Wednesday!')
        break
    default:
        console.log('The weekend is approaching!')
        break
}


// We can also group cases together

switch (day) {
    case 0:
    case 6:
        console.log('Today is the weekend!')
        break
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Nooo, time to work!')
        break
    case 5:
        console.log('Today is Friday!')
        break
}


// We can also use switch with conditions

let age = 25

switch (true) {
    case age >= 18 && age < 25:
        console.log('You are an adult and you are young')
        break
    case age >= 25 && age < 40:
        console.log('You are an adult and you are in your prime')
        break
    case age >= 40:
        console.log('You are an adult and you are at your best age')
        break
    default:
        console.log('You are underage')
}