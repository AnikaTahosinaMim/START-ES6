const url = "https://jsonplaceholder.typicode.com/users";
const userJson = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUser(data));
};
const displayUser = (item) => {
  const sectionContainer = document.getElementById("section-container");
  sectionContainer.innerHTML = "";
  item.forEach((data) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `
    <p>id: ${data.id}</p>
    <h2>Name: ${data?.name ?? "No Name"}</h2>
    <p>Address: ${data?.address?.city ?? "No Company"}</p>
     <p>Phone: ${data?.phone ?? "No Phone"}</p>
    <p>Company: ${data?.company?.catchPhrase ?? "No Company"}</p>
    
    `;
    sectionContainer.appendChild(newElement);
  });
};
// userJson()
