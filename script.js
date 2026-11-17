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
// change css properties 
box.style.color = "blue";
box.style.backgroundColor = "orange";
box.style.fontSize = "50px";
box.style.padding = "10px"

// change the content of the div 
box.textContent = "Wilkommen auf meiner Test-Website"

