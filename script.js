const btn = document.querySelector(".btn");
const arr = [];

// Load stored data when the page is loaded
window.addEventListener("load", () => {
  const storedData = JSON.parse(localStorage.getItem("data"));
  if (storedData && storedData.length > 0) {
    arr.push(...storedData);
    display();
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const myObj = {
    id: Date.now(),
    task: document.getElementById("task").value,
    date: document.getElementById("date").value,
  };

  arr.push(myObj);
  display();
});

function display() {
  let info = document.querySelector(".message");

  // Clear existing HTML
  info.innerHTML = "";

  // Iterate over array and create HTML elements for each item
  arr.forEach((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("task");
    itemDiv.innerHTML = `<div class='item-task'>${item.task} </div>
    <div class='date'>${item.date}</div>`;
    info.append(itemDiv);
  });

  // Append the created HTML elements to the container

  // Reset the form
  document.querySelector(".form-container").reset();

  // Store the updated data in local storage
  localStorage.setItem("data", JSON.stringify(arr));
}
