
// References and Prototypes

// Pass by Value

let score = 100;
let playerScore = score; // The value 100 is copied to playerScore

playerScore = 150; // We modify the copy

console.log(score); // -> 100 (The original value has not changed)
console.log(playerScore); // -> 150

// The same thing happens in a function
function increaseScore(currentScore) {
  currentScore = currentScore + 10; // We modify the function's local copy
  console.log("Inside the function:", currentScore); // -> 110
}

let initialScore = 100; // We create the original value

increaseScore(initialScore); // We pass the original value to the function and, because it is primitive, a copy of that value is created

console.log("Outside the function:", initialScore); // -> 100 - The original value has not changed


// Pass by Reference

// Object assignment example
let player1 = { name: "midu", hp: 100 };
let player2 = player1; // player2 now points to the *same* object as player1

player2.hp = 50; // We modify the object through player2

console.log(player1.hp); // -> 50 (The original object has changed!)
console.log(player2.hp); // -> 50

// Array assignment example
let team1 = ["midu", "dani"];
let team2 = team1; // team2 points to the *same* array as team1

team2.push("luffy"); // We modify the array through team2

console.log(team1); // -> ['midu', 'dani', 'luffy'] (The original array has changed!)
console.log(team2); // -> ['midu', 'dani', 'luffy']

// Pass-by-reference example in functions
function addMember(teamArray, member) {
  teamArray.push(member); // We modify the original array through its reference
  console.log("Inside the function:", teamArray);
}

let myTeam = ["SpiderMan", "IronMan"];
addMember(myTeam, "Hulk"); // ['SpiderMan', 'IronMan', 'Hulk']

console.log("Outside the function:", myTeam); // -> ['SpiderMan', 'IronMan', 'Hulk'] (The original array has changed!)

// Another example with objects
let character = { name: "Hero", level: 5 };

function updateLevel(level) {
  // we update the level value and return it
  level = level + 1;
  return level;
}

updateLevel(character.level); // -> 6 (The updated value is returned, but not assigned to character.level!)
console.log("Outside the function:", character.level); // -> 5 (The original value has not changed!)

// To modify the original object, we must pass the full object reference to the function
character = { name: "Hero", level: 5 };

function updateCharacter(character) {
  character.level = character.level + 1;
  return character.level;
}

updateCharacter(character);
console.log("Outside the function:", character); // -> { name: 'Hero', level: 6, status: 'active' }


// Prototypes

// Parent object (prototype)
const animal = {
  type: "Mammal",
  breathe() {
    console.log("Breathing...");
  },
};

// We create an object that inherits from animal
const dog = Object.create(animal);
dog.breed = "Labrador";
dog.bark = function () {
  console.log("Woof!");
};

// Own properties vs inherited properties
console.log(dog.breed); // "Labrador" (own)
console.log(dog.type); // "Mammal" (inherited)

dog.bark(); // "Woof!" (own)
dog.breathe(); // "Breathing..." (inherited)

// When you create an object with {} it automatically inherits from Object.prototype
const obj = {};
console.log(obj.toString()); // [object Object] (inherited)

// To create an object without a prototype
const noPrototype = Object.create(null);
console.log(noPrototype.toString); // undefined (does not inherit from Object.prototype)

// With Object.getPrototypeOf() we can get the prototype of an object.
const obj2 = { name: "Ana" };
console.log(Object.getPrototypeOf(obj2)); // Object.prototype

const dog2 = Object.create(animal);
console.log(Object.getPrototypeOf(dog2)); // animal

const empty = Object.create(null);
console.log(Object.getPrototypeOf(empty)); // null

const person = { name: "Ana" };
Object.setPrototypeOf(person, null);

// now person does not inherit from Object.prototype
console.log(Object.getPrototypeOf(person)); // null

const dog3 = Object.create(person);
console.log(Object.getPrototypeOf(dog3)); // person

// We made a mistake! Let's fix it
Object.setPrototypeOf(dog3, animal);
console.log(Object.getPrototypeOf(dog3)); // animal


// Constructor Functions

// Written with a capital letter by convention
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// We create instances
const ana = new Person("Ana", 25);
const carlos = new Person("Carlos", 30);

console.log(ana.name); // "Ana"
console.log(carlos.name); // "Carlos"
console.log(ana.age); // 25
console.log(carlos.age); // 30

// All constructor functions have a special property called prototype. This is where we put the methods we want all instances to share.
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// We add methods to the prototype
Car.prototype.accelerate = function () {
  console.log(`${this.brand} ${this.model} is accelerating`);
};

Car.prototype.brake = function () {
  console.log(`${this.brand} ${this.model} is braking`);
};

// We create instances
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Both can use the prototype methods
car1.accelerate(); // "Toyota Corolla is accelerating"
car2.brake(); // "Honda Civic is braking"

// All constructor functions have a special property called prototype. This is where we put the methods we want all instances to share.
function Person(name, age) {
  // Properties specific to each instance
  this.name = name;
  this.age = age;
}

// Shared methods in the prototype
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

Person.prototype.celebrateBirthday = function () {
  this.age++;
  console.log(`Happy birthday! I'm now ${this.age} years old`);
};

const aida = new Person("Aida", 25);
const peter = new Person("Peter", 30);

aida.greet(); // "Hi, I'm Aida"
peter.greet(); // "Hi, I'm Peter"
aida.celebrateBirthday(); // "Happy birthday! I'm now 26 years old"

// JavaScript gives us tools to verify if an object is an instance of a constructor function:
function Vehicle(type) {
  this.type = type;
}

const car = new Vehicle("car");
const bike = new Vehicle("motorcycle");

// instanceof - checks if an object is an instance of a function
console.log(car instanceof Vehicle); // true
console.log(bike instanceof Vehicle); // true
console.log(car instanceof Array); // false

// constructor - reference to the function that created the object
console.log(car.constructor === Vehicle); // true
console.log(bike.constructor === Vehicle); // true


// Inheritance with Constructor Functions
// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.breathe = function () {
  console.log(`${this.name} is breathing`);
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Calls the parent constructor
  this.breed = breed;
}

// We establish the inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// We add specific methods
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking: Woof!`);
};

const rex = new Dog("Rex", "Labrador");
rex.breathe(); // "Rex is breathing" (inherited)
rex.bark(); // "Rex is barking: Woof!" (own)

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percentage) {
  const discount = this.price * percentage;
  this.price -= discount;
  return `New price after discount: ${this.price}`;
};

Product.prototype.showInfo = function () {
  return `Name: ${this.name} - Price: ${this.price}`;
};

const apples = new Product("Apples", 2.5);
console.log(apples.applyDiscount(0.2)); // New price after discount: 2
console.log(apples.showInfo()); // Name: Apples - Price: 2

const mug = new Product("Mug", 10.0);
console.log(mug.applyDiscount(0.1)); // New price after discount: 9
console.log(mug.showInfo()); // Name: Mug - Price: 9
