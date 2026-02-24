<h1>Hello I'm Bushra</h1>
live site link:: https://mebushraa.github.io/job-tracker-as/
<br />
github link:: https://github.com/mebushraa/job-tracker-as

<p>Some Questions and Answers</p>
<br/>
<br/>

<h2>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h2>
 <br/>
<p>
i. getElementById()
<br/>
🔹 Selects one element by its id <br/>
🔹 Returns a single element object <br/>
🔹 IDs must be unique <br/>
<br/> <br/>
ii. getElementsByClassName()
<br/>
🔹 Selects elements by class name <br/>
🔹 Returns an HTMLCollection (array-like object) <br/>
🔹 Can return multiple elements <br/><br/>

iii. querySelector() <br/>

🔹 Uses CSS selector <br/>
🔹 Returns first matching element only <br/> <br/>

iv. querySelectorAll() <br/>

🔹 Uses CSS selector <br/>
🔹 Returns NodeList <br/>
🔹 Can return multiple elements <br/> <br/>

</p>
</br>
</br>

<h2>2. How do you create and insert a new element into the DOM?</h2>
<br/>
<p>
<span style="font-weight: bold">Steps are: <span/> <br/> <br/>
const newDiv = document.createElement("div"); <br/>
newDiv.textContent = "Hello World"; <br/ >
document.body.appendChild(newDiv);

</p>
<br/>
<br/>

<h2>3. What is Event Bubbling? And how does it work?</h2>
<br/>
<p>

Definition: Event bubbling is the default JavaScript behavior where an event triggered on a child element propagates upward through its ancestor elements in the DOM tree—from the innermost target up to the document object. It works by first firing the event on the target element, then its parent, then parents parent.....
<br/>
<br>
it works as:
<br/>
<img src="https://javascript.info/bubbling-and-capturing">
<br>
<br>

step 1: The event travels down from the window to the target. <br>
step 2: The event triggers on the actual element clicked. <br>
step 3: The event moves back up the DOM tree, triggering listeners on every ancestor.

<br>
This is the engine behind Event Delegation; it allows a parent to "hear" what happens to its children. You can stop this process at any time by calling event.stopPropagation().

</p>
<br/>
<br/>

<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>
<br/>
<p>

Event Delegation is a design pattern where you attach a single event listener to a parent element instead of multiple listeners to individual child elements.
<br/>
<br/>
It is useful because it improves performance, reduces the number of event listeners, and also works for dynamically added elements.

</p>
<br/>
<br/>

<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>
<br/>
<p>

preventDefault() stops the browser’s default behavior for an event. For example, it can prevent a form from submitting or stop a link from navigating to another page.
<br/>
stopPropagation() stops the event from propagating (bubbling) up or down the DOM tree, so parent or ancestor event listeners will not be triggered.

</p>
<br/>
<br/>
