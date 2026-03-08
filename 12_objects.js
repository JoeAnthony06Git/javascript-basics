
// Objects

// An object is a collection of properties, where each property is a key-value pair.  
const gameSystem = {
    name: 'PS5',
    price: 599,
    company: 'Sony',
    games: ['Resident Evil 4', 'Spider-Man 2', 'Hollow Knight: Silksong'],
    specs: {
        cpu: 'AMD',
        gpu: 'AMD',
        ram: '16GB',
        storage: '825GB'
    },
    // An object can also have methods
    runGame (game){
        console.log(game);
    }
};

// Accessing properties
console.log(gameSystem.name); // PS5
console.log(gameSystem.games[0]); // Resident Evil 4
console.log(gameSystem.specs.cpu); // AMD
console.log(gameSystem.runGame('Residen Revil 2')); // Residen Revil 2

// Modifying properties
gameSystem.price = 499;
console.log(gameSystem.price); // 499

// Deleting properties
delete gameSystem.company;
console.log(gameSystem.company); // undefined

// Practice: Create a function that takes a name and an subscribers, and returns an object with those properties.
function createObject(name, subs) {
  const youtuber = {
    name: name,
    subscribers: subs,
    hash: (name.length * subs),
    getStatus(){ 
        return `El canal de ${name} tiene ${subs} suscriptores`
    }
  };
  return youtuber;
};
console.log(createObject('Pepito', 1000));

// Shorthand property names: If the variable name is the same as the property name, we can use the shorthand syntax to create the object.
const name = 'Peter Parker';
const universe = 'Earth-616';
const spiderMan = {
    name, // Automatically assigns name: name
    universe, // Automatically assigns universe: universe
    powers: ['super strength', 'wall-crawling', 'spider-sense'],
    partner: {
        name: 'Mary Jane',
        universe: 42,
        powers: ['red hair', 'blue eyes']
    }
};
console.log(spiderMan);

// Destructuring: allows us to extract values from objects and arrays and assign them to variables in a more concise way.
const {powers} = spiderMan 
console.log(powers);

// We can also rename the variables when destructuring
const {name: spiderManName, universe: spiderManUniverse} = spiderMan
console.log(spiderManName); // Peter Parker
console.log(spiderManUniverse); // Earth-616

// We can also set default values when destructuring
const {isAvenger = false} = spiderMan
console.log(isAvenger); // false (default value)

// We can also destructure nested objects
const {
  partner: { name: namePartner }
} = spiderMan
console.log(namePartner) // 'Mary Jane'

// Iterating Objects: We can use a for...in loop to iterate over the properties of an object.
for (const property in spiderMan){
    console.log(property); // name, universe, powers, partner
    console.log(spiderMan[property]); // Returns the value of each property
}

// We can also use Object.keys() to get an array of the keys of an object.
console.log(Object.keys(spiderMan));

// We can also use Object.values() to get an array of the values of an object.
console.log(Object.values(spiderMan));

// We can also use Object.entries() to get an array of key-value pairs of an object.
console.log(Object.entries(spiderMan));

// We can also use forEach to iterate over the keys of an object.
const keys = Object.keys(spiderMan);
keys.forEach(key => {
    console.log(spiderMan[key]);
});

//Practice: Create a function that takes an object and returns an array of the keys of the properties that have boolean values.
const objPractice = { 
    a: true, 
    b: 42, 
    c: false 
};

function getKeysOfBooleanValues(obj) {
    const keys = Object.keys(obj);
    const booleanKeys = [];
    keys.forEach(key => {
        if (obj[key] === true || obj[key] === false){
            booleanKeys.push(key)
        }
    });
    return booleanKeys;
};

console.log(getKeysOfBooleanValues(objPractice));

/*
Optional chaining: allows us to access properties of an object without having to check if the property exists or not. 
If the property does not exist, it will return undefined instead of throwing an error.
*/

if (typeof gameSystem.specifications === 'object'){
    console.log(gameSystem.specifications.cpu);
}

if (
    'specifications' in gameSystem &&
    gameSystem.specifications !== undefined && 
    gameSystem.specifications !== null
){
    console.log(gameSystem.specifications.cpu);
} else {
    console.log('The property does not exist');
}

// Optional chaining operator (?.): This operator helps us write cleaner, more readable, and more error-resistant code.
console.log(gameSystem.specifications?.cpu); // undefined (does not throw an error)
console.log(gameSystem.whatever?.Something); // undefined
console.log(gameSystem.specs?.cpu); // AMD (exists)


/* 
Practice: Create a function that takes an object and a property, and returns true if the property exists 
in the object and is not undefined, and false otherwise. Use optional chaining to check for the property.
*/
const objOcean = {
    deep: {
        treasure: 'oro'
    }
}

function searchInOcean(ocean, section, item) {
    return ocean?.[section]?.[item] !== undefined;
}

console.log(searchInOcean(objOcean, "deep", "treasure")) // true
console.log(searchInOcean(objOcean, "deep", "fish"))     // false
console.log(searchInOcean(objOcean, "abyss", "treasure")) // false