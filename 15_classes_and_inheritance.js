
// Classes

// Classes are templates for creating objects with properties and methods.
// They help us organize our code in a more structured and reusable way.

class Person_ {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`-> New person: ${name}, ${age} years old`);
  }
}

const maria = new Person_("Maria", 25); // -> New person: Maria, 25 years old
const juan = new Person_("Juan", 30); // -> New person: Juan, 30 years old


// Sometimes we want certain information or methods to be accessible without creating a class instance. For that, we use the static keyword.

class Mathematics {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }

  static calculateArea(radius) {
    return this.PI * radius * radius;
  }

  static isEven(number) {
    return number % 2 === 0;
  }
}

// They are called on the class, not on instances.
console.log(Mathematics.add(5, 3)); // 8
console.log(Mathematics.calculateArea(10)); // 314.159
console.log(Mathematics.isEven(4)); // true

// They do not work on instances.
const math = new Mathematics();
// math.add(1, 2)  // ❌ Error: math.add is not a function


// Getters and Setters

// Getters and setters are special methods used to read and write the value of a property. They are useful for controlling access and adding logic when reading or assigning values, without creating explicit methods for it.

class Temperature {
  constructor(celsius = 0) {
    this._celsius = celsius; // Convention: _ for "private" properties
  }

  // Getter - used like a property
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  // Setter - used like an assignment
  set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature cannot be below -273.15°C");
    }
    this._celsius = value;
  }
}

const temp = new Temperature(25);

// Using getters: notice we do not use parentheses.
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77

// Using setters: just like an assignment.
temp.fahrenheit = 100; // Using the setter
console.log(temp.celsius); // 37.777...

// Setters execute the logic inside them.
// temp.celsius = -300 // Error: Temperature cannot be below -273.15°C


// Private properties and methods

class BankAccount {
  #balance = 0; // Private property
  #accountNumber; // Private property

  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  // Private method
  #validateOperation(amount) {
    return amount > 0 && amount <= this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  }

  withdraw(amount) {
    // ✅ Here we can access private methods and properties.
    if (this.#validateOperation(amount)) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log("Invalid operation");
    }
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount("123456", 1000);
account.deposit(500);
console.log(account.balance); // 1500

// We cannot access private properties directly.
// console.log(account.#balance)     // ❌ SyntaxError
// account.#validateOperation(100)   // ❌ SyntaxError


// Class inheritance

// The main advantage of classes is that they greatly simplify object inheritance thanks to the extends keyword.

class Animal {
  constructor(name) {
    this.name = name;
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says: Woof!`);
  }
}

const rex = new Dog("Rex", "Labrador");
rex.sleep(); // "Rex is sleeping" (inherited)
rex.bark(); // "Rex says: Woof!" (own method)


// The super keyword

// This is used to call the parent class constructor and also lets us access the parent class methods and properties.

class Vehicle {
  accelerate() {
    console.log("Accelerating...");
  }
}

class Motorcycle extends Vehicle {
  accelerate() {
    super.accelerate(); // Calls the parent method
    console.log("Doing a wheelie!"); // Adds extra behavior
  }
}

const motorcycle = new Motorcycle();
motorcycle.accelerate(); // "Accelerating..." // "Doing a wheelie!"


// Practical inheritance example
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }

  getPaid() {
    console.log(`${this.name} earns ${this.salary}€`);
  }
}

class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary); // Calls the parent constructor
    this.language = language;
  }

  // Overrides the parent method
  work() {
    super.work(); // Calls the parent method
    console.log(`Coding in ${this.language}`);
  }

  // Own method
  code() {
    console.log(`${this.name} is coding in ${this.language}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, team) {
    super(name, salary);
    this.team = team;
  }

  work() {
    super.work();
    console.log(`Managing a team of ${this.team.length} people`);
  }

  lead() {
    console.log(`${this.name} is leading the team`);
  }
}

const dev = new Developer("Ana", 45000, "JavaScript");
const boss = new Manager("Carlos", 60000, ["Ana", "Luis", "Maria"]);

dev.work(); // "Ana is working" // "Coding in JavaScript"
boss.work(); // "Carlos is working" // "Managing a team of 3 people"
dev.getPaid(); // "Ana earns 45000€" (inherited)
boss.lead(); // "Carlos is leading the team" (own method)


// Inheritance chains

// We can create more complex inheritance chains where one class inherits from another class that already inherits from a third one.

class LivingBeing {
  constructor(name) {
    this.name = name;
    this.alive = true;
  }

  breathe() {
    console.log(`${this.name} is breathing`);
  }
}

class Animals extends LivingBeing {
  constructor(name, species) {
    super(name);
    this.species = species;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

class Mammal extends Animals {
  constructor(name, species, fur) {
    super(name, species);
    this.fur = fur;
  }

  nurse() {
    console.log(`${this.name} is nursing`);
  }
}

class Cat extends Mammal {
  constructor(name, breed) {
    super(name, "Feline", true);
    this.breed = breed;
  }

  meow() {
    console.log(`${this.name} says: Meow!`);
  }
}

const kitty = new Cat("Michi", "Persian");

// It can use methods from all parent classes.
kitty.breathe(); // From LivingBeing
kitty.move(); // From Animals
kitty.nurse(); // From Mammal
kitty.meow(); // Cat's own method
