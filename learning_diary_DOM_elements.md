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