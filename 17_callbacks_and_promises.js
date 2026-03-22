
// Callbacks

// A callback is simply a function that is passed as a parameter to another function, so it can be executed at a specific moment (normally when something finishes executing).

function greet(name) {
  console.log("Hello, " + name + "!");
}

function goodbye(name) {
  console.log("Goodbye, " + name + "!");
}

function processUser(name, callback) {
  console.log("Processing user...");
  callback(name); // We execute the callback
}

// We use different callbacks
processUser("Ana", greet); // Processing user... // Hello, Ana!
processUser("Luis", goodbye); // Processing user... // Goodbye, Luis!


// Callbacks in Action: setTimeout

// This way we see that setTimeout is a function that receives a callback function as a parameter and executes after a certain amount of time.
function myFunction() {
  console.log("2 seconds have passed!");
}

console.log("Start");
setTimeout(myFunction, 2000); // 2000ms = 2 seconds
console.log("End?"); // Output: // "Start" // "End?" // (2 seconds later) "2 seconds have passed!"


// With Arrow Function
console.log("Program start");

setTimeout(() => {
  console.log("3 seconds have passed");
}, 3000);

console.log("The program continues...");


// Callbacks with parameters
function waitOneSecond(callback) {
  setTimeout(() => {
    const message = "1 second has already passed!";
    callback(message); // We pass a parameter to the callback
  }, 1000);
}

function showMessage(text) {
  console.log(text);
}

// Here we call the function and pass the callback
waitOneSecond(showMessage);


// setInterval: Repetitive Callbacks

// setInterval() executes a callback repeatedly every certain amount of time.
let seconds = 0;

const interval = setInterval(() => {
  seconds++;
  console.log("Have passed", seconds, "seconds");

  if (seconds >= 5) {
    clearInterval(interval); // We stop the interval
    console.log("Time finished!");
  }
}, 1000); // Every 1 second (1000ms)


// The Callback Hell

// getUser(1, (user) => {
//   console.log("User:", user.name)

//   getPosts(user.id, (posts) => {
//     console.log("User's posts:", posts)

//     getComments(posts[0].id, (comments) => {
//       console.log("Comments of the first post:", comments)

//       getLikes(comments[0].id, (likes) => {
//         console.log("Likes of the first comment:", likes)
//         ... and so on to infinity and beyond...
//       })
//     })
//   })
// })


// Promises

const myPromise = new Promise((resolve, reject) => {
  // We simulate an operation that takes time
  console.log("The Promise is pending...");

  setTimeout(() => {
    const success = true; // Change this to false to see the rejection

    if (success) {
      console.log("Resolving the Promise...");
      resolve("Successful operation!"); // We fulfill the promise
    } else {
      console.log("Rejecting the Promise...");
      reject("Something went wrong"); // We reject the promise
    }
  }, 2000);
});

console.log("Promise created:", myPromise);

// Consume the Promise
myPromise
  .then((result) => console.log("Result:", result))
  .catch((error) => console.log("Error:", error));


// Consuming Promises: .then() and .catch()

function createPromise(success) {
  return new Promise((resolve, reject) => {
    console.log("Processing...");

    setTimeout(() => {
      if (success) {
        resolve("Everything went well!");
      } else {
        reject("A DISASTER");
      }
    }, 1000);
  });
}

// Consuming the successful promise
createPromise(true)
  .then((result) => {
    console.log("Success:", result);
    return result.toUpperCase(); // You can transform the value
  })
  .then((resultUppercase) => {
    console.log("Transformed:", resultUppercase);
    // -> Transformed: EVERYTHING WENT WELL!
  })
  .catch((error) => {
    // This will never execute because the promise resolves successfully
    console.log("Error:", error);
  });

// Testing with error (after 2 seconds)
createPromise(false)
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error caught:", error);
    // -> Error caught: A DISASTER
  });


// Promise.all(): All or nothing

function downloadFile(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} downloaded`);
      resolve(`Content of ${name}`);
    }, time);
  });
}

const promises = [
  downloadFile("image1.jpg", 1000),
  downloadFile("image2.jpg", 1500),
  downloadFile("image3.jpg", 800),
];

Promise.all(promises)
  .then((results) => {
    console.log("All downloads completed:");
    console.log(results);
    // ['Content of image1.jpg', 'Content of image2.jpg', 'Content of image3.jpg']
  })
  .catch((error) => {
    console.log("Some download failed:", error);
  });


// Promise.race(): The First One to Finish

function server(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Response from ${name}`);
    }, time);
  });
}

const servers = [
  server("Server A", 2000),
  server("Server B", 1000), // This will be the fastest
  server("Server C", 3000),
];

Promise.race(servers).then((response) => {
  console.log("First server to respond:", response);
  // "Response from Server B" (after 1 second)
});


// Promise.allSettled(): All, regardless of the result

function operation(name, success, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(`${name} successful`);
      } else {
        reject(`${name} failed`);
      }
    }, time);
  });
}

const operations = [
  operation("Operation A", true, 1000),
  operation("Operation B", false, 800), // This one fails
  operation("Operation C", true, 1200),
];

Promise.allSettled(operations).then((results) => {
  console.log("Results of all operations:");
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✅ ${index + 1}: ${result.value}`);
    } else {
      console.log(`❌ ${index + 1}: ${result.reason}`);
    }
  });
  // ✅ 1: Operation A successful
  // ❌ 2: Operation B failed
  // ✅ 3: Operation C successful
});


// .finally(): Always executes

function importantOperation(success) {
  return new Promise((resolve, reject) => {
    console.log("Starting operation...");

    setTimeout(() => {
      if (success) {
        resolve("Operation completed");
      } else {
        reject("Operation failed");
      }
    }, 2000);
  });
}


// Practical example: Show/hide loader

function showLoader() {
  console.log("Showing loader...");
}

function hideLoader() {
  console.log("Hiding loader...");
}

showLoader();

importantOperation(true) // Change to false to test the error
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    hideLoader(); // Always executes
    console.log("Operation finished");
  });


// Multiple .catch(): Granular error handling

function step1() {
  return Promise.reject("Specific error from step 1");
}

function step2() {
  return Promise.resolve("Step 2 OK");
}

step1()
  .catch((error) => {
    console.log("Recovering from error:", error);
    return "Recovery value"; // We continue the chain
  })
  .then((result) => {
    console.log("Continuing with:", result);
    return step2();
  })
  .then((result) => {
    console.log("Successful finish:", result);
  })
  .catch((error) => {
    console.log("Unrecoverable error:", error);
  });
