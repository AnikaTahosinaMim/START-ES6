const jsonData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((menu) => menu.json())
    .then((data) => console.log(data));
};

const jsonTodos = () => {
  const todos = "https://jsonplaceholder.typicode.com/todos";
  fetch(todos)
    .then((to) => to.json())
    .then((dos) => {
      console.log(dos);
      displayTodos(dos);
    });
};
const displayTodos = (todo) => {
  todo.forEach((todo) => {
    console.log(todo);
  });
};

// show ul...
const url = "https://jsonplaceholder.typicode.com/posts";
const jsonPost = () => {
  fetch(url)
    .then((post) => post.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    const postContant = document.createElement("div");
    postContant.innerHTML = `
    <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>

        </div>
    `;
    postContainer.appendChild(postContant);
  });
};
jsonPost();

// const displayPost = (menu) => {
//   const container = document.getElementById("container");
//   container.innerHTML = "";
//   menu.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerText = item.title;

//     console.log(li);
//     container.appendChild(li);
//     // console.log(menu);
//   });
// };
