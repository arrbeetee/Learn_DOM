const box = document.getElementById("myDiv");
box.textContent = "Hello!";

const list = document.getElementById("myList");
list.children[0].textContent = "A new first item";

// dom element: form
const form = document.getElementById("myForm");
form.style.backgroundColor = "lightblue";

// dom element: button
const button = document.getElementById("submitBtn");
button.textContent = "Click me";
button.disabled = true;
button.type = "button";

const newButton = document.createElement("button")
newButton.type = "reset"
newButton.textContent = "Reset"
button.value = "byebye";
console.log(button.value);
form.appendChild(newButton)