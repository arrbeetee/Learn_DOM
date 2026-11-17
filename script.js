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

button.type = "button";

const newButton = document.createElement("button");
newButton.type = "reset";
newButton.textContent = "Reset";
newButton.disabled = true;
newButton.value = "byebye";
console.log(button.value);
form.appendChild(newButton);

// dom element: input
// read the value as you type
const firstName = document.getElementById("name");
firstName.addEventListener("input", () => {
  console.log(firstName.value);
});

const agree = document.getElementById("agree");
agree.addEventListener("change", () => {
    console.log(agree.checked);
})

// enter a placeholder in the text field
firstName.placeholder = "Enter your fist name";

// add medium radio button
const mediumRadio = document.createElement("input");
mediumRadio.type = "radio";
mediumRadio.id = "sizeMedium";
mediumRadio.name = "size";
mediumRadio.value = "medium";

const mediumLabel = document.createElement("label");
mediumLabel.htmlFor = "sizeMedium";
mediumLabel.textContent = "Medium";

// place the medium radio in between the small and large radio 
const smallLabel = document.querySelector('label[for="sizeSmall"]');
smallLabel.after(mediumRadio, mediumLabel);


// dom element: div
// const box = document.getElementById("myDiv"); <-- deactivated because already on top
// change style
box.style.color = "blue";
box.style.backgroundColor = "orange";
box.style.fontSize = "50px";
box.style.padding = "10px";

// change the content of the div 
box.textContent = "Wilkommen auf meiner Test-Website";


// dom element: table
const table = document.getElementById("myTable");

// change stylee 
table.style.backgroundColor = "beige";
table.style.color = "red";

// access the table head first cell and change Name to First Name
table.tHead.rows[0].cells[0].textContent = "First Name";

// access the table body first cell and change the persons name from Anna to Maria
table.tBodies[0].rows[0].cells[0].textContent = "Maria";

// create a caption for the table
const caption = table.createCaption();
caption.textContent = "People and their ages";


// dom element: ul
// const list = document.getElementById("myList");  <-- deactivated because already on top

// count the list and show it in the developer tools
list.children.length;
console.log(list.children.length);

// replace the text content of the list
list.children[2].textContent = "The last item";

// edit the inline style
list.style.color = "green"


// dom element: canvas
// create the canvas
const canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.width = 300;
canvas.height = 150;
canvas.style.border = "2px solid black";


// append it at the bottom of the body
document.body.appendChild(canvas);

// draw the austrian flag
const context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(0, 0, 300, 50);
context.fillRect(0, 100, 300, 50);

// dom element: select / option
const select = document.getElementById("color");
// add another color
const newOption = document.createElement("option");
newOption.value = "pink";
newOption.textContent = "Pink";
select.appendChild(newOption);
// change the default selected color to the newly added one
select.selectedIndex = 4;
// number of available options and show it in developer tools
select.options.length
console.log(select.options.length)
// print the current selected color
console.log(select.value)