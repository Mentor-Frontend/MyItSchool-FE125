window.addEventListener("load", function () {
  let input = document.querySelector("#in");
  let button = document.querySelector("#add");
  let list = document.querySelector(".list");

  button.addEventListener("click", function () {
    if (input.value === "") return;
    let check = document.createElement("input");
    check.classList.add("check");
    check.setAttribute("type", "checkbox");
    list.append(check);

    let item = document.createElement("li");
    item.classList.add("item");
    item.innerHTML = input.value;
    list.append(item);
    item.style.backgroundColor = "pink";
    input.value = "";
    input.focus();

    list.classList.remove("hidden");

    let clear = document.querySelector(".clear");
    clear.classList.remove("hidden");
    clear.style.backgroundColor = "lightgreen";
    clear.style.borderRadius = "5px";

    clear.addEventListener("click", function () {
      item.innerHTML === "";
      list.classList.add("hidden");
      clear.classList.add("hidden");
      item.classList.add("hidden");
      check.classList.add("hidden");
    });

    check.addEventListener("click", function () {
      if (check.checked) {
        item.style.textDecoration = "line-through";
        item.style.backgroundColor = "yellowgreen";
        item.style.fontWeight = "normal";
      } else {
        item.style.backgroundColor = "pink";
        item.style.fontWeight = "600";
        item.style.textDecoration = "none";
      }
    });
  });
});
