Document is not declared in the script.js. The browser provides it automatically when it runs the script.

I can use document to find things on the webpage.
It can also read and change them.


Document object model elements

<!-- select / option -->
<select> ist der Container selber. Also die Box
<option> Eine liste aller verfügbaren Einträge / values die auswählbar sind.
sind die einzelnen Optionen bzw. Werte die es zum auswählen gibt.
Die options / values sind vorgefertigt, man kann nichts selber hinzufügen.

<!-- form -->
JavaScript can access the form and the values or settings of its fields.
At first you need to find the form in js: const form = document.getElementById("myForm")
Then you can for example change the background: form.style.backgroundColor = "lightyellow";

form can have other properties besides id such as action, method.
action: says where the form sends its data.
method: how the data is sent

<!-- button -->
JS can access following properties:
id - identifier
type - its type (wont submit form)
textContent - the displayed text in the button
disabled - whether its disabled
value - if a value is set, it can be displayed with console.log()

To change the buttont content, first find the button in js: const button = document.getElementById("submitBtn")
Then change the displayed text: button.textContent = "Click me";

To disable a button (button still displayed but not clickable) type : button.disabled = true;

There are three types of html buttons
type = "button" is a regular button
type = "submit" submits the form it belongs to
type = "reset" resets the form fields to their original values

<!-- input  -->
JS can acess following properties:
.value - the text entered
.type - input type, e.g. "text", "radio" or "checkbox"
.checked - whether a radio or checkbox button is selected
.name and .id - the inputs name and identifier
.placeholder - hint text, if provided
.disabled - whether the input is disabled


firstName.value and .checked are read at the beginning when the page loads. 
They are not updating as I type something in it or check the box.
To read the firstName add:
firstName.addEventListener("input", () => {
  console.log(firstName.value);
});
and
const agree = document.getElementById("agree");
agree.addEventListener("change", () => {
    console.log(agree.checked);
})

To create a placeholder into an empty text field enter:
firstName.placeholder = "Enter your fist name";

Clickable round buttons are called radio buttons.
A third button with the label medium can be created with:
const mediumRadio = document.createElement("input");
mediumRadio.type = "radio";
mediumRadio.id = "sizeMedium";
mediumRadio.name = "size";
mediumRadio.value = "medium";

const mediumLabel = document.createElement("label");
mediumLabel.htmlFor = "sizeMedium";
mediumLabel.textContent = "Medium";

To put it in between the small and large radio button enter:
const smallLabel = document.querySelector('label[for="sizeSmall"]');
smallLabel.after(mediumRadio, mediumLabel);

<!-- div -->
First we need to create a JS variable of the div so we can access it in html.
const box = document.getElementById("myDiv");

box.id - can read and change the id "myDiv"
box.textContent - read or changes its text
box.innerHTML - reads or changes the HTML inside it
box.className - read or changes the CSS class
box.style - able to change the inline styles --> box.style.color = "blue"
box.hidden - reads or changes whether its hidden

I changed some css style elements and  the text content of the div in js.
It is also possible to create a css class for the div in js,
but I would need to create a separate css file in order to change its style.

<!-- table -->
call the table
const table = document.getElemenById("myTable");

table.id - gives the table's id
table.rows - gives all rows, including the header row
table.head - access the head section
table.body - access the body section
table.caption - access to the tables caption
table.style - changes the appearance

Changed the style and edited the text of the first cell from Name to FirstName.
I was able to change the name of the person Anna to Maria.
Also added a table caption to tell that the table represents the people's name and age.