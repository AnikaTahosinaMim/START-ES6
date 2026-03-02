const url = "https://jsonplaceholder.typicode.com/comments";
fetch(url)
  .then((res) => res.json())
  .then((data) => commentJson(data));

//   {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },

const commentJson = (comment) => {
  const sectionContainer = document.getElementById("section-container");
  sectionContainer.innerHTML = "";
  comment.forEach((item) => {
    const newElemnet = document.createElement("div");
    newElemnet.innerHTML = `
    <div class = "card">
    <h1> ${item.name} </h1>
    <p> ${item.email} </p>
    <p> ${item.body} </p>
    </div>

    `;
    sectionContainer.appendChild(newElemnet);
  });
};
