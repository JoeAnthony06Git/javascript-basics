
// async/await

// ❌ With Promises (works but verbose)
function getData() {
  return fetch("/api/data")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// ✅ With async/await (much cleaner)
async function getData2() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}


// An async function always returns a Promise
async function myFunction() {
  return 42;
}

console.log(myFunction()); // Promise { 42 }

myFunction().then((result) => {
  console.log(result);
}); // 42

// or with await
const result = await myFunction();
console.log(result); // 42


// You can only use await inside async functions

// function myFunction2() {
//   await new Promise(resolve => setTimeout(resolve, 1000))
//   return 42
// }

// myFunction() // SyntaxError: Unexpected reserved word


// await pauses execution until the Promise resolves

async function myFunction3() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Until one second passes, the next line will not run
  return 42;
}

async function run() {
  console.time("myFunction3");
  await myFunction3(); // 42
  console.timeEnd("myFunction3"); // myFunction3: 1.003s (1 second)
}

run();


// ❌ Sequential (slower)
async function loadProfileSequential(userId) {
  console.time("Slow Profile");

  // 1. Request user data and wait...
  const user = await api.getUser(userId); // takes 1 second
  // 2. When done, request friends and wait...
  const friends = await api.getFriends(userId); // takes 1 second
  // 3. When done, request posts and wait...
  const posts = await api.getPosts(userId); // takes 2 seconds

  console.timeEnd("Slow Profile"); // Adds the time of the 3 calls // Total time: 4 seconds
  console.log("Data loaded sequentially:", { user, friends, posts });
}

// ✅ Parallel (faster)
async function loadProfileParallel(userId) {
  console.time("Faster Profile");

  // Start all operations at the same time
  // and wait for all of them to finish
  const [user, friends, posts] = await Promise.all([
    getBasicInfo(userId), // takes 1 second
    getFriends(userId), // takes 1 second
    getPosts(userId), // takes 2 seconds
  ]);

  console.timeEnd("Faster Profile");
  // Total time: 2 seconds

  return {
    user,
    friends,
    posts,
  };
}

loadProfileParallel(123).then((profile) => {
  console.log("✅ Profile loaded:", profile.user.name);
  console.log("👥 Friends:", profile.friends.length);
  console.log("📝 Posts:", profile.posts.length);
});

