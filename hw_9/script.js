let list = document.querySelector(".showTask");
let hideTask = document.querySelector(".HideTaskListButton");
let input = document.querySelector("input");
let listItems = document.querySelector(".tasks");
let clearList = document.querySelector(".clearTaskList");

hideTask.addEventListener("click", function () {
  list.classList.toggle("hidden");
});

input.addEventListener("keydown", function (event) {
  if (event.keyCode === ENTER) {
    let li = document.createElement("li");
    listItems.append(li);
    let checkbox = document.createElement("div");
    checkbox.setAttribute("class", "checkbox");
    li.append(checkbox);
    let span = document.createElement("span");
    span.innerHTML = this.value;
    li.append(span);
    this.value = "";

    checkbox.addEventListener("click", function () {
      span.classList.toggle("crosstext");
      if (checkbox.style.backgroundColor == GREEN) {
        checkbox.style.backgroundColor = BLUE;
      } else checkbox.style.backgroundColor = GREEN;
    });

    span.addEventListener("click", function () {
      let fix = prompt("Fix a task");
      span.innerHTML = fix;
    });

    clearList.addEventListener("click", function () {
      listItems.innerHTML = "";
    });
  }
});
