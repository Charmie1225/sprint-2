
const rootDiv = document.getElementById('root');
function renderSignUp() {
    rootDiv.innerHTML = `
        <h1>Sign Up</h1>
        <form id="signupForm">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name"><br>
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email"><br>
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password"><br>
            <button type="button" onclick="handleSignUp()">Sign Up</button>
        </form>
    `;
    
}
let userName = '';

function handleSignUp() {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    if (nameInput && emailInput && passwordInput) {
        userName = nameInput;
        renderHomePage();  // Proceed to the home page after successful sign-up
    } else {
        alert('Please fill out all fields');
    }
}
function renderHomePage() {
    rootDiv.innerHTML = `
        <h1>Welcome, ${userName}!</h1>
        <h2>Create a Post</h2>
        <textarea id="postContent" placeholder="What's on your mind?"></textarea><br>
        <button type="button" onclick="handleCreatePost()">Post</button>
        <h3>Your Posts</h3>
        <ul id="postList"></ul>
    `;
}
let posts = [];

function handleCreatePost() {
    const postContent = document.getElementById('postContent').value;

    if (postContent) {
        posts.push(postContent);
        renderPostList();  // Update the post list after creating a post
    } else {
        alert('Post content cannot be empty');
    }
}
function renderPostList() {
    const postListElement = document.getElementById('postList');
    postListElement.innerHTML = '';  // Clear existing posts

    posts.forEach((post, index) => {
        const postItem = document.createElement('li');
        postItem.textContent = post;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => handleEditPost(index);  // 'index' is now correctly passed
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => handleDeletePost(index);

        // Append buttons to the post item
        postItem.appendChild(editButton);
        postItem.appendChild(deleteButton);

        postListElement.appendChild(postItem);
    });
}
function handleEditPost(index) {
    const newContent = prompt('Edit your post:', posts[index]);
    if (newContent) {
        posts[index] = newContent;  
        renderPostList();           
    }
}


function handleDeletePost(index) {
    posts.splice(index, 1);   
    renderPostList();         
}

renderSignUp();