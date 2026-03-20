
// Error Handling

// A JavaScript error is an exceptional situation that happens during code execution and prevents the program from continuing normally.

console.log("Before the error");
// console.log(variableQueNoExiste); // ❌ ReferenceError: variableQueNoExiste is not defined
console.log("After the error"); // ❌ This line never runs


// try/catch syntax

try {
  // Code that could throw an error
  console.log("Trying to run code...");
  console.log(nonExistentVariable); // ❌ ReferenceError: nonExistentVariable is not defined
} catch (error) {
  // Code that runs if there is an error
  console.log("An error occurred!", error.message);
}

console.log("The program keeps running"); // ✅ This line does run


// Do not overuse try/catch!

function getLength(text) {
  try {
    return text.length;
  } catch (error) {
    console.log("It is not a string");
    return 0;
  }
}

// In many cases, it is better to avoid try/catch and use if checks before running the code.
function getLength(text) {
  if (typeof text !== "string") return 0;
  return text.length;
}

// Do not overuse try/catch to access object properties
const user = {
  name: "Ana",
  age: 25,
};

// ❌ With try/catch this becomes harder to read and understand
try {
  console.log(user.address.street); // ❌ Error: Cannot read property 'street' of undefined
} catch (error) {
  console.log("Could not access property:", error.message);
  console.log("Using default value");
}

console.log(user?.address?.street); // undefined


// Sometimes required validations are too complex. In those cases, try/catch can be a better choice.

const jsonString = '{"name": "John", "age": 30}';
const invalidJson = '{"name": "John", "age":}';

try {
  const object = JSON.parse(jsonString);
  console.log("Valid JSON:", object);
} catch (error) {
  console.log("Error parsing JSON:", error.message);
}

try {
  const object2 = JSON.parse(invalidJson);
  console.log("This message will not be shown");
} catch (error) {
  console.log("Invalid JSON detected:", error.message);
}


// The Error object

try {
  let result = nonExistentVariable + 5;
} catch (error) {
  console.log("Error name:", error.name); // "ReferenceError"
  console.log("Message:", error.message); // "nonExistentVariable is not defined"
  console.log("Stack trace:", error.stack); // Information about where it happened
}


// Finally

// Full syntax
try {
  // Code to try executing
} catch (error) {
  // Error handling (optional)
} finally {
  // Code that always runs (optional)
}


// Example: Resource cleanup

function processFile(file) {
  let resource = null;

  try {
    console.log("Opening file...");
    resource = openFile(file);

    console.log("Processing data...");
    let data = processData(resource);

    return data;
  } catch (error) {
    console.log("Error processing file:", error.message);
    return null;
  } finally {
    // ✅ Always close the file, whether there was an error or not
    if (resource) {
      console.log("Closing file...");
      closeFile(resource);
    }
  }
}
processFile("data.txt"); // Error processing file: openFile is not defined


// Example: Finally with return

function example() {
  try {
    return "value from try";
  } catch (error) {
    return "value from catch";
  } finally {
    // ⚠️ If you return here, it overrides the other returns
    return "value from finally";
  }
}

console.log(example()); // -> 'value from finally'


/// An important feature of finally is that it runs even when there is a return:
function withReturn() {
  try {
    console.log("1. In try");
    return "From try";
  } finally {
    console.log("2. In finally");
  }
  console.log("3. After try/finally"); // ❌ Never runs
}

console.log("Result:", withReturn());
// Output:
// "1. In try"
// "2. In finally"
// "Result: From try"


// Custom Errors

// Instead of letting this cause a generic issue:
function divide(a, b) {
  return a / b; // If b is 0, it returns Infinity (not very useful)
}

// We can throw a custom error:
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
// console.log(divide(10, 0)) // Error: Cannot divide by zero


// The throw keyword

function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }

  if (age > 150) {
    throw new Error("Age looks incorrect");
  }

  return age;
}

try {
  console.log(validateAge(25)); // 25
  console.log(validateAge(-5)); // ❌ Error: Age cannot be negative
  console.log(validateAge(200)); // This line never runs
} catch (error) {
  console.log("Error:", error.message);
}


// Example: User data validation

function createUser(data) {
  // Validate that data is provided
  if (!data) {
    throw new Error("User data is required");
  }

  // Validate email
  if (!data.email || !data.email.includes("@")) {
    throw new Error("A valid email is required");
  }

  return {
    id: Date.now(),
    name: data.name,
    email: data.email,
    age: data.age,
  };
}

// Usage with error handling
try {
  createUser({
    name: "anthony",
    email: "invalid-email",
    age: 16,
  });
} catch (error) {
  console.log("Error creating user:", error.message);
}


// Creating custom error classes

class ValidationError extends Error {
  constructor(field, value) {
    super(`Validation error in field '${field}': ${value}`);
    this.name = "ValidationError";
    this.field = field;
    this.value = value;
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
  }
}

// Usage
function validateUser(data) {
  if (!data.email) {
    throw new ValidationError("email", "is required");
  }

  if (!data.password) {
    throw new ValidationError("password", "is required");
  }
}

function authenticateUser(email, password) {
  if (password !== "123456") {
    throw new AuthenticationError("Invalid credentials");
  }
}

// Type-specific error handling
try {
  validateUser({ email: "", password: "123" });
  authenticateUser("user@test.com", "wrong");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation error in ${error.field}: ${error.value}`);
  } else if (error instanceof AuthenticationError) {
    console.log(`Authentication error: ${error.message}`);
  } else {
    console.log(`Unknown error: ${error.message}`);
  }
}
