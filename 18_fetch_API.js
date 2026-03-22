// Fetch API

// Basic syntax
// fetch(url, options)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error))


// First fetch request

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Response received:", response.status);
    return response.json(); // Convert to JSON
  })
  .then((data) => {
    console.log("📄 Data retrieved:");
    console.log("Title:", data.title);
    console.log("Content:", data.body);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });


// Response: Your packet inspector

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log("📊 Response info:");
    console.log("Status:", response.status); // 200, 404, 500, etc.
    console.log("OK:", response.ok); // true if status is 200-299
    console.log("URL:", response.url);
    console.log("Headers:", response.headers);

    // Check if the response is successful
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP Error: ${response.status}`);
    }
  })
  .then((user) => {
    console.log("👤 User:", user.name);
    console.log("📧 Email:", user.email);
  })
  .catch((error) => {
    console.log("❌ Error:", error.message);
  });


// HTTP request types
// GET: "What's on the menu?" (I only want to read)
// POST: "I want to order this" (create something new)
// PUT: "Replace my full order with this one" (replace everything)
// PATCH: "Only replace fries with salad" (modify one part)
// DELETE: "Cancel my order" (delete)


// GET - Retrieve data

// Get users list
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    console.log("👥 Users retrieved:", users.length);
    users.slice(0, 3).forEach((user) => {
      console.log(`- ${user.name} (${user.email})`);
    });
  })
  .catch((error) => {
    console.log("Error retrieving users:", error.message);
  });


// The second fetch parameter: request configuration

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    title: "My first post with Fetch",
    body: "This is the content of my post created with JavaScript",
    userId: 1,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("📄 New post data:");
    console.log("Title:", data.title);
    console.log("Content:", data.body);
    console.log("User:", data.userId);
  })
  .catch((error) => {
    console.log("❌ Error creating the post:", error.message);
  });


// POST - Send data

// Create a new post
function createPost() {
  const newPost = {
    title: "My first post with Fetch",
    body: "This is the content of my post created with JavaScript",
    userId: 1,
  };

  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((createdPost) => {
      console.log("✅ Post created successfully:");
      console.log("ID:", createdPost.id);
      console.log("Title:", createdPost.title);
      console.log("Content:", createdPost.body);
    })
    .catch((error) => {
      console.log("❌ Error creating post:", error.message);
    });
}

createPost();


// PUT - Fully update

// Update an entire post
function updatePost(id) {
  const updatedPost = {
    id: id,
    title: "Post updated with PUT",
    body: "This content has been fully replaced",
    userId: 1,
  };

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((updatedPostResult) => {
      console.log("🔄 Updated post:", updatedPostResult.title);
    })
    .catch((error) => {
      console.log("❌ Error updating:", error.message);
    });
}

updatePost(1);


// PATCH - Partial update

// Update only the title
function updateTitle(id, newTitle) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTitle,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log("📝 Updated title:", result.title);
      return result;
    })
    .catch((error) => {
      console.log("❌ Error:", error.message);
    });
}

updateTitle(1, "New title with PATCH");


// DELETE - Delete the resource

// Delete a post
function deletePost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // DELETE usually does not return useful content
      if (response.status === 200) {
        console.log(`🗑️ Post ${id} deleted successfully`);
      }

      return response;
    })
    .catch((error) => {
      console.log("❌ Error:", error.message);
    });
}

deletePost(1);


// HTTP status verification

// 2xx (200-299): 🟢 "Everything is perfect!"
// 3xx (300-399): 🟡 "I redirected you somewhere else"
// 4xx (400-499): 🔴 "You did something wrong"
// 5xx (500-599): 💥 "I (the server) did something wrong"

function requestWithErrorHandler(url) {
  return fetch(url)
    .then((response) => {
      // Fetch does NOT reject the promise for 4xx or 5xx codes
      // But you can verify if everything went well with response.ok
      if (!response.ok) {
        // Handle different error types
        switch (response.status) {
          case 404:
            throw new Error("🔍 Resource not found");
          case 401:
            throw new Error("🔐 Unauthorized");
          case 403:
            throw new Error("🚫 Forbidden access");
          case 500:
            throw new Error("💥 Internal server error");
          default:
            throw new Error(`❌ HTTP Error: ${response.status}`);
        }
      }

      return response.json();
    })
    .then((data) => {
      console.log("✅ Data retrieved:", data);
      return data;
    })
    .catch((error) => {
      if (error.name === "TypeError") {
        console.log("🌐 Connection error:", error.message);
      } else {
        console.log("Error:", error.message);
      }
    });
}

// Test with a URL that does not exist
requestWithErrorHandler(
  "https://jsonplaceholder.typicode.com/posts/999999",
);
