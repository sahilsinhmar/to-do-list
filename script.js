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
  if (task.value.trim() === "") {
    // if the task is empty, do nothing
    return;
  }
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
    <div class='date'>${item.date}</div>
    <button class="delete" data-id="${item.id}">Delete</button>`;
    info.append(itemDiv);
  });

  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const taskId = parseInt(e.target.getAttribute("data-id"));
      console.log(taskId);
      const taskIndex = arr.findIndex((item) => item.id === taskId);
      console.log(taskIndex);
      arr.splice(taskIndex, 1);
      display();
    });
  });

  // Append the created HTML elements to the container

  // Reset the form
  document.querySelector(".form-container").reset();

  // Store the updated data in local storage
  localStorage.setItem("data", JSON.stringify(arr));
}
