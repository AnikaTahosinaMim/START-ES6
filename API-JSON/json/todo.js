const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodos(data));
};
loadTodo();

// {
//     "userId": 10,
//     "id": 185,
//     "title": "voluptates dignissimos sed doloribus animi quaerat aut",
//     "completed": false
// }

const displayTodos = (todos) => {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.forEach((to) => {
    const creatNew = document.createElement("div");
    creatNew.innerHTML = `
    <div class= 'to-card'>
    <p>${to.completed == true ? `<i class="fa-solid fa-square-check"></i> ` : `<i class="fa-regular fa-square-check"></i> `} 
    
    </p>
    <h3>${to.title}</h3>
    </div>

    `;
    todoContainer.appendChild(creatNew);
  });
};
