# Frontend Fundamentals and Practice.

## HTML Intro:
* **HTML = The Structure.** Contains text, images tied to the text, and, in general, groups things together.
* **CSS = The Blueprint.** The rules of what goes where, the colors, sizes, fonts, backgrounds, etc...
  * Like HTML, it doesn't actually _do_ anything, it is just a set of rules to determine how things work/look.
* **Frontend/Client Javascript = The Smart Home.** Pre-programmed stuff you can tell your house to do.
* **Backend Javascript = The Pizza Place.** Where we can request things and get what we ask for.

## HTML:
* Static, like an essay.
* Tags - a building block. Describes what is inside of it.
  * Using best practices for tags is especially useful for accessibility on your websites.
  * Types:
    * `hx` (h1, h2, ...) = Heading.
    * `p` = Paragraph.
    * `input` = open box for text inputs. Self-closing tag.
    * `a` = Anchor. A link to somewhere else. <a href="https://www.github.com/s1dequest">My Profile</a>
    * `div` = Division. Like a cardboard box - defined by what is inside of it. A generic container for grouping other things.
      * Example: A blog would have each post in its own div.
    * `span` = A container for small bits of text. A ziplock bag. With CSS this division allows us to make the span text different than the rest.
    * `ol` = ordered list, ul = unordered list, li = list item.
    * `button` = A button. Used in conjunction with JS.
    * `img` = An image. Use to load images to a page. Can also use css for this, but css images are more designed for use as background images. IMG tags are more for content relevant to text.
      * `<img src="www.randomimage.com/100/100" alt="a random image"/>`
      * Each image tag will look like this, with a source referring to the image link and an alt that displays when the image cannot be (for accessibility, for example).
    * `textarea` = More text than an input tag.
    * `form` = For gathering data from users. Like a survey. A collection of input, textarea, and select tags.
    * `table` = Like excel. tr = table row. td = a cell in the table.
      * Think of td's as columns. Each td you add to a given tr adds another column to the row.
        * Though, I guess this would not be the case if you had rows that had different amounts of td's.
      * Was used to layout websites back in the day. Nowadays, you probably only want it to display something you'd display in excel.
    * And many more!
  * Attributes - Basically, subvalues you can add to a tag that allow you to do a bit more with the default tags.
    * Inputs:
      * `type="checkbox"`
      * `type="color"`
      * `type="file"`
      * `value`
      * `placeholder`
    * Classes:
      * Can go on any tag. Does nothing by itself.
      * Basically, you add a class to a tag to identify it later with CSS or JS.
      * Useful for CSS. Ex: Apply a class name of 'blog' to all divs containing blogs. Then, we can identify the class and apply CSS rules to _only_ that class.
      * **divs can (and often should) have multiple classes.**
    * ID's:
      * Way less useful than a Class.
      * Where we can reuse a class, recycling that code over and over, with ID's we are saying that this tag is unique.
    * Note: Name things semantically; name them about what they _DO_, not what they look like.
    * Use kebab-case, as HTML is not case sensitive.
* Meta HTML (doesn't produce visual things)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Some Title</title>
  </head>
  <body>
    <h1>A Header</h1>
    <!--- Some Great HTML --->
  </body>
</html>
```
  * DOCTYPE - declare html or version of html. Always just use html.
  * html tag - everything goes in here, beginning and end of doc
  * lang attribute - let the browser know its an english doc
  * head - all the meta info about your document. The title shown on a google result/tab/etc.
    * can also add things like viewport which allows you to shrink the page to fit on mobile.
    * css links
    * anything not shown to the user but used to configure the website.
  * body - stuff people _DO_ see.
  * script - for JS => how you link javascript files to your html.
  * style - for CSS => not typically used in html, generally in the css.
  * link - for CSS => how you bring in all your css.

## CSS INTRO (Cascading Style Sheets):
What if you want your html headers to look different? Let's say you want them to be red.
* Spoiler alert: you do that with css, by creating rules that dictate how the html is displayed.
```css
h1 {
  color: limegreen;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid pink;
}
```
* `h1` = the **selector**. Every h1 on the page, apply every rule within the curly braces.
* `color` = a **property**. There are a bunch of properties you can use. You won't use most properties.
* `red` = a **value**. A value that css understands. In this case, it would also understand hex and rgb values.
* `px` = literal value. `em` is also a measure of size, but it is the relative size based on font. Useful when you may change fonts.

#### **The Cascade:**
  * The Cascade settles potential conflicts between CSS Rules. Maybe you want different paragraphs to be different colors, for example. But setting `p {...}` wouldn't do that because it applies the rules within to all paragraph elements.
  * Classes!
```css
.branding {
  color: red;
}
.blog-post {
  color: green;
}
```
```html
<h1 class="branding">This is a red branding header</h1>
<h1 class="blog-post">This is a green blog post header</h1>
```
* Cascade continued...
  * Period before the selector means class.
  * Always use classes for styling. The one exception is if you want literally all types of an element to look the same. Think a table of contents that all have anchors. Something like that.
  * When two things are considered = in css, the one that occurs last (lower on the page) wins.
* example:
```css
.branding {
  border: 1px solid black;
  color: red;
}
.blog-post {
  color: green;
}
```
```html
<h1 class="branding blog-post">I am green AND have a black border.</h1>
```
  * In the above, since the color green comes last, it wins. Since the second class has no border though, it keeps the same border as the first class styling declares.
  * This is called **specificity**.
  * Styling becomes more **specific** if, for example, it has more than one class attached to the styling.
```css
.branding.title-3 {
  color: red;
}
.title-3 {
  color: green;
}
```
```html
<h1 class="branding title-3">This is a red branding header</h1>
```
  * Classes are also more specific than tags. So in the above example, if we had `h1` styling saying it should be yellow, it would still be red.
  * **ID's in Cascades:** they are wrecking balls and override like 10 classes. Basically, dont use them 99% of the time. Same with **!important**. Definitely dont use that.

* **Psuedo Classes:**
  * Associates CSS rules based on certain special events that happen within the markup or user action.
  * Ex: If you want the look of something to change upon hovering over it with your mouse, for example...
```css
.hover-example {
  color: limegreen;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid pink;
}
.hover-example:hover {
  background-color: crimson
}
```
  * There are a lot of these. `:focus`, `:active`, `:first-child`, `:last-child`, `:nth-child()`, to name a few.
  * Wildcard Selector:
    * `<style> * { font-weight: bold; } </style>`
      * In this example, everything on our page would become bold.

Note: CSS SpeciFISHity is a great chart for seeing the CSS hierarchy.

### Layout CSS:
CSS can also be used to layout a page differently (rather than just style it). Without it, you could not have two boxes next to eachother.
  * Float - the idea is basically to float something left or right in the css for a class (or whatever). If we say float left the class elements will start appearing as far left as possible. Each additional element will appear next to the prior one, just to the right of it (but still as left as the border allows).

  * **The Box Model**: V important. Should invest some time into understanding this a lot.
    * Display
      * Every tag in CSS has a `display` property associated with it by default.
      * `div`, for example, is `display: block` by default. Meaning it will take up all the width it possibly can, but respects height, width, padding, margins. In other words, by default a block will take up the whole line unless otherwise specified.
      * `span` is `display: inline` by default. It will NOT LET YOU CHANGE height, width, padding, margins. This is a common pitfall. If stuff wont change the way you want, you likely have the wrong `display`.
      * `inline-block` is a hybrid between the above two. It will make the browser try to place your tag inline, but still allows you to control the height, width, padding and margins of it.
      * `flex` and `inline-flex` are similar to blocks in that they can affect the tags around it, but gain a new superpower in how its interior tags are laid out.
      * `grid` and `inline-grid` are more advanced and allow you more power to layout tags inside of them.
      * `table` is used to make something actu like a table. In general, we use the `<table></table>` tag instead of using CSS to make things act like tables.
      * From outside to inside, `margin` (distance between the element and any other elements), `border` (of the actual element), `padding` (distance between border and element content), `interior content`.
        * Margin = outside element, Padding = inside the element.
        * Box sizing, border-box is the holy grail. This is what we will use the wildcard selector with. It allows you to set width sizing that includes everything, border, padding, etc...
          * by default this is not the case.
```html
<style>
  * {
    box-sizing: border-box;
  }
</style>
```
^ Don't put anything else in that wildcard styling.

### CSS Floats and Flexbox:
* How to setup elements in relation to eachother.
Ex: Basics, without setting things up with floats/flex yet. Below examples will depict derivations from this.
```html
<style>
  .box-1 {
    border: 1px solid black;
    color: white;
    background-color: blue;
    height: 150px;
    width: 300px;
  }
  .box-2 {
    border: 1px solid black;
    color: white;
    background-color: red;
    height: 100px;
    width: 300px;
  }
  .box-3 {
    border: 1px solid black;
    color: white;
    background-color: green;
    height: 200px;
    width: 100px;
  }
</style>
<div class="box-1">1</div>
<div class="box-2">2</div>
<div class="box-3">3</div>
```
#### Floats! 
* The old way. Only really use this if for some reason you need to support Windows XP.
  * The idea is basically to push an element as far right or left as possible. As you add more elements, it will continue to do this next to the prior element until it needs to go onto a new line.
```html
<style>
  .floated div { /* Space between the two means it is a Descendent. I.E. all the divs inside 'floated' */
    float: left; /* For above, could instead do .floated .box and add the box class below. */
  }
</style>
<div class="floated">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```
#### Flex! 
* A display mode for css `display: flex;`. Above, we needed to tell float to act on all `div` or `class="box"` under the class `floated`. With flex this is not the case. When using `display: flex` on a parent container, it automatically applies to everything inside of it.
  * Will not wrap unless specified. It will squish the boxes proportionally to fit on one line.
```html
<style>
  .flex-container {
    display: flex;
    width: 100%;
    border: 1px solid black;
  }
</style>
<div class="flex-container">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```
**Flex** continued...
* 3 Properties with Flex! `flex-direction`, `justify-content`, and `align-items`.
* `flex-direction`: Allows you to reverse the ordering of your row if you'd like.
  * `row-reverse`, `column-reverse`
```html
<style>
  .reverse {
    flex-direction: row-reverse;
  }
</style>
<div class="flex-container reverse">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```
* `justify-content`: fits your content against the right or left.
  * `flex-end` is basically `right`, because it sticks your content to the right side of the view.
  * `flex-start` is the default and sticks content on the left.
  * `flex-center` centers everything such that the space (unoccupied by elements within this parent) on the left and right of the screen is equal.
  * `space-between` sticks the end elements of a row against the left and right edge and centers any elements within it such that the space between them is equal. More useful than the following few.
  * `space-around` is similar to the above, but includes space on the left and right of the edge elements. By default the space around the beginning and end is half that of the space between elements themselves.
  * `space-evenly` is the same as above but the space on the left and right edge is equal to the space between elements.
  * This is all left/right/center. Not vertical.
```html
<style>
  .jc-right {
    justify-content: flex-end;
  }
</style>
<div class="flex-container jc-right">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```
* `align-items`: The vertical equivalent of `justify-content`.
  * `flex-end` sticks elements to the bottom.
  * `stretch` is a new one. Respects height, so we want to remove height if we want the results extended all the way top-bottom. Stretches out to fit the size of the `div`.
```html
<style>
  .al-fe {
    align-items: flex-end;
    padding-top: 20px;
  }
</style>
<div class="flex-container al-fe">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```
```html Stretch example
<style>
  .al-stretch {
    align-items: stretch;
    height: 200px;
  }
  .no-height {
    height: inherit; /* This will set any element with this class to inherit the height spec from its parent */
  } /* Generally you just would not set the height for the boxes to begin with. */
</style>
<div class="flex-container al-stretch">
  <div class="box-1 no-height">1</div>
  <div class="box-2 no-height">2</div>
  <div class="box-3 no-height">3</div>
</div>
```
* You can combine these to great effect. Example: to center everything, vertically and horizontally, you may use both `align-items: flex-center` and `justify-content: space-around`.
* Other flex properties:
  * `flex-wrap` makes multiple rows.
  * Lots of props that the childrenn element can have (everything above is specifically for parents) that can affect stuff, like `order` (orders stuff) and `align-self` (overrides `align-items`)

### Basic Patterns for Coding in CSS
#### Connecting CSS and HTML: (without using `<style>` tags in your html)
  * Use `<link>` tags in your `head`!
```html
<html lang="en">
<head>
  <title>foo</title>
  <link rel="stylesheet" href="./style.css" />
</head>
</html>
```
The `rel="stylesheet"` lets the html know this link should be interpreted as CSS. This will always be the same.
The `href="./style.css"` is where the css stylesheet *is*. `./` means 'in the same folder'. You don't actually need this.

#### When to use the Cascade:
  * Strive to not repeat yourself. Whenever many of the properties of various elements are going to be the same, put those into a base class. Then, anything else that needs to be changed for a specific element can just be put in a minimalist class that you add the the element in question. Ex: The color differences between a `WARN` and a `SUCCESS` button.

#### Dev Tools:
  * Inspect Element in Firefox and Chrome.
  * You can actually change css properties (and a bunch of other things) in here for rapid iteration.
  * Use **Box Model** in computed to visually see and change element spacing/margins/padding/etc...
  * `CTRL+SHIFT+i` to quickly open and close dev tools.
  * **Grid Inspector** in Firefox for working in CSS Grid.
  * **Code Mirror** in Firefox/Chrome.
  * View your code in various mobile devices, varying connection speeds (good 3G), turn off throttling, etc.
  * Color dropper to find what color is what.

## Javascript!
Mostly Review, but will take notes on the important bits.

* JS is single-threaded. Meaning, only one thing is every happening at a time. It executes one line of code at at time.
* Use camel-casing in JS.
* Control Flow
  * This is basically Conditional `if` statements. Sometimes you only want to run code if certain conditions are true.
  * Whatever is in the `()` in the `if (x) {...}` needs to evaluate to either true or false.
  * `=` 'is assigned'.
  * `==` 'is x equal to y'. **NEVER USE**. Does 'coercion', which tries to make strings/numbers work as equals.
  * `===` 'is x equal to y'. **ALWAYS USE**. If x and y are not the same type AND the same value, this is false.
  * `!==` 'is x not equal to y'. **ALWAYS USE**.
```javascript
const skyBlue = true;
if (skyBlue) {
  console.log('the sky is blue');
} else {
  console.log('the sky is not blue.');
}
```

#### Loops:
  * Use `let` for things you want to change. Not `var`, cuz its old, and not `const`, cuz that is a constant.
```js
let friends = 0;
while (friends < 10) {
  friends++;
}
console.log(friends)
```
  * Types: `if`, `while`, `do`, `for`
    * Only difference between `while` and `do` is that `do` runs AT LEAST once, whereas `while` doesn't need to run.
  * `**=` is the unary operator for exponent. `5 ** 2` would be 'five squared'.
  * **for loops**! They are important. `if`, `for`, and `while` are easily the most frequently used of the 4, but `for` is the most common of all of them. Example `for` loop below.
```js
let friends = 0;
for (let i = 0; i <= 10; i++) {
  friends++;
}
console.log(friends);
```
  * There are 3 parts to the `for` loop encapsulated in the `()`
    * 1. The Control Variable `(let i = 0;...)`: It's always `i`, arbitrarily. Subsequent loops are named after the subsequent letters in the alphabet. Generally you do not want to get past 'k'.
    * 2. The Condition `(...i <= 10;...)`
    * 3. What to do at the 'End' of every Loop `(...i++)`

#### Functions:
  * Basically useful for any code that will be reused. Example:
```js
function addTwo(number) { // Name = addTwo. Parameter = number.
  return number + 2; // Returns 'number' with 2 added to it.
}

const answer = addTwo(5) // upon invocation, specify the value number starts at.
console.log(answer)
```
```js
function greet(fn, ln, honorific, greeting) {
  return `${greeting} ${honorific} ${ln}. I am pleased you could join us. Enjoy your stay ${fn}.`
}

console.log(greet("Macks","Zin","Dowager Count","Aloha"))
```
  * Function names are generally verbs, and parameter names are generally nouns.
  * If functions have no parameters to add, invoke them via `addTwo()` (empty paranthesis).

#### Scope:
  * Every time you call a function, it has its own scope. Other things cannot peek into it, it has its own lil workspace to hangout in. Once the function is done, any var you have not explicitly held on to is gone!
  * Stuff from the global scope can be used within functions/anywhere else in the file. Generally, you do not want many things at the global scope.
  * Note: this also applies to functions within functions, though that is something you generally do not want to do.
  * `Reference Error` is the big indicator of scope errors.

#### Built-Ins:
```js
const sentence = "sPoNgEbOb CaSiNg";
console.log(sentence.toLowerCase());
```
  * The above is one example of a built-in js function.
  * Find this stuff at the `MDN` - Mozilla Dev Network.
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript
    * Alternatively, `"blah".` will show possible built-ins.
  * Other examples:
```js
Math.round(5.1);
Math.floor(5.5);
Math.ceil(6.1);
// Does a bunch of trig and other mathematical functions as well.
```
```js
const name = "Max Z"
console.log(name.substr(2,4)); // substr(indexToStart, howManyCharsToInclude)
```

#### Objects and Arrays:
  * So far we've only really talked about having one piece of data/one variable at a time: a first name, a number, etc...
  * Objects and Arrays are collections of data, not just one piece.
```js
const pii = { // Object start.
  name: "Max", // each of these items are combinations of KEYS and VALUES.
  hometown: "Munich",
  country: "DE",
  isLearning: true,
  coursesCompleted: 6,
  address: { // you can have objects within objects!
    street: "420 Handsome Ln",
    apartment: "23",
    city: "gvl"
  }
};

console.log(person);
console.log(person.name);
console.log(person["name"]); // same as above.
console.log(person.address.street);
```
  * Objects can also have their own functions:
```js
const dog = {
  name: "dog",
  speak() { // way to create a named fnc. = to 'speak: function() {...};'
    console.log("bark woof");
  }
}

dog.speak();
```

#### Context:
  * As a program progresses through JS code, there exists a context of its location that can be referenced via the 'this' keyword.
```js
const pii = {
  name: "Max",
  hometown: "Munich",
  country: "DE",
  isLearning: true,
  coursesCompleted: 6,
  address: { 
    street: "420 Handsome Ln",
    apartment: "23",
    city: "gvl"
  },
  getAddress() {
    return `${this.address.street}, Apt #: ${this.address.apartment}, ${this.address.city}`
  }
};
```
  * 'this' refers to whatever object it is on. The nearest object it is within. Not always true, but pretty close.
  * window is the global scope. If at global scope, `this === window` too!
    * In node, the scope is 'global', so `this === global`.
    * Thus, `console.log(this.scrollY);` === `console.log(window.scrollY);`. 
  * Try not to rely on context. The above example could instead be...
```js
getAddress(street, apartment, city) {
  street = pii.address.street;
  ...
}
```

#### Arrays:
  * Ordered/indexed collections of data. `const array1 = ["zero","one","two"]`.
    * `console.log(array1[0])` => 'zero'
  * Arrays also have a bunch of builtin's, like: `.length`, `.join(" | ")`, etc...
  * Okay so you have an array, how do you edit it? Add things, remove things, edit things, other stuff with things...
```js
// Add an element to the array after creation:
// Use PUSH! Addes the element to the end of the array.
const courses = [
  { teacher: "Mark", course: "Physics 101" },
  { teacher: "Carrie", course: "Linear Algebra II"}
];
courses.push({ teacher: "Max", course: "Learning how to Learn" });
console.log(courses);

// what if you want it to go at the beginning of the array?
courses.unshift({ teacher: "milo", course: "Naps 302" }); // not really used ever.

// edit objects?
const caresCourse = courses[1];
caresCourse.course = "Linear Algebra III";
```
  * How to list everything in an array:
    * there are a couple methods...
```js
const cities = [
  "Greenville",
  "Spartanburg",
  "Charlotte"
];

// method 1 - a function on an object
for (let i = 0; i < cities.length; i++ ) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function(city) { // city is a parameter of cities.
  console.log(city);
})
```

#### Document Object Model (the DOM):
  * The DOM is how javascript interacts with html and css.
  * Websites generally follow the order of operations below:
    * Write code and put it on a server somewhere.
    * The client's browser makes a request to your server for your index.html
    * Your server sends them a copy of it.
    * The browser reads the html and sees you have a `script.js` script tag in there.
    * Browsers make another request for the `script.js` file.
    * Your server sends them a copy of the script.
    * The browser reads and begins executing the code.
  * Example:
```html
<!-- Note: normally we separate <style> and <script> tags into separate css and js files. -->
<style>
  .red-square {
    width: 100px;
    height: 100px;
    background-color: crimson;
  }
</style>

<div class="red-square"></div>

<script>
  const redSquare = document.querySelector('.red-square');
  redSquare.style.backgroundColor = 'limegreen';
</script>
```
  * So what did we do here?
    * We called a method on `document` => a globally available var in the browser that you use to interact with the html and css. It has a bunch of built in methods.
    * For `document.querySelector` we pass in a css selector and it returns to you the *first* one that matches the selector that it finds.
    * Once we identified the html tag element `div.red-square`, we use `.style` to interact with the css styling, and set the `backgroundColor` (note: camelCase).
  * What if we wanted to change a bunch of  elements at once?
```html
<ul>
  <li class="target">Max</li>
  <li class="target">Carrie</li>
  <li>Milo</li>
  <li class="target">Shanti</li>
  <li>Alpha Goat</li>
</ul>

<script>
  const elementsToChange = document.querySelectorAll('.target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentEl = elementsToChange[i];
    currentEl.innerText = "ASDADS"
  }
</script>
```

#### Events and Listeners:
* Websites are meant to be reactive to users. In order to provide this reactivity, we need to wait for them to do stuff.
  * Clicking buttons, typing inputs, etc...
  * In other words, we are waiting for events to happen!
```html
<!-- Example! -->
<button class="event-button">Click Me!</button>
<script>
  const button = document.querySelector('.event-button');
  button.addEventListener('click', function () {
    alert("Hey There!");
  });
</script>
```
* In the above example, we are waiting for someone to click the button. Once it is clicked, the subsequent code is run.
* Also known as a **callback** => Basically still just a function.
```html
<!-- Example! -->
<input placeholder="type here pls" class="input-to-copy"/>
<p class="p-to-copy-to">Nothing happened yet</p>
<script>
  const input = document.querySelector('.input-to-copy');
  const paragraph = document.querySelector('.p-to-copy-to');
  input.addEventListener('keyup', function () {
    paragraph.innerText = input.value;
  });
</script>
```
* Common events: keyup, change, click
* **Event Delegation**
  * Event Bubbling - used for listening on many elements/events. When the event fires on an element, the event bubbles up to its parent, and continues bubbling up until its at the root element we added the listener to. This allows us to listen for events on many similar elements at once without adding listeners to each one individually.
```html
<!-- Example! -->
<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
<script>
  document.querySelector('.button-container').addEventListener('click', (event) => {
    alert(`You clicked button number ${event.target.innerText}`);
  });
</script>
```
* Above, we call upon the `event` parameter. `event` is always present. An event listener's first parameter is always an event object, which contains a bunch of information about the event. We, however, are mostly interested in the `event.target` bit of the object. `target` is just the html tag that the event originated from => here, the button that caused the event.

## Ajax
#### Background
* Stupid acronym meaning 'async javascript and xml', kinda. This is what it used to be, but since it has become something that is not what its name implies. Now, it stands for what we do when a website requests more info from a server after the page has loaded.
* XML is no longer something we use with JS
  * We use JSON now instead.
* OK, so lets actually use AJAX for something now...
#### Requesting Data from an API
* API = Application Programming Interface. Everyone forgets what it means. Basically, in this context, its a public server/container that will allow us to make AJAX calls to it to get some data back. Most big websites have API's. Clicking refresh on GMAIL makes an AJAX request to the server handling your mail.
* Ex: use the api via dog.ceo to grab random pictures of dogs. 
  * Add to `~/4-doggos/`.
* The AJAX request to the dogs api will return a JSON object with the response status and the image source.
* Note: A nice feature would be to add a loading gif. Use an `<img>` tag that shows when you're loading a new dog and hide it when you're done.

## Integrating with other Libraries!
* Integrating with other freely made, open-source libraries is one of the most important things we can do as javascript devs.
* Ex: popmotion - an 11.5kb (maximum) swiss army knife for animators and interaction devs. Let's integrate with it!
  * Example added in `~/5-popmotion/`

## Building your Code with Node.js
* Install Node.js and install parcel using `npm install parcel-bundler`. Do this with `~/5-popmotion/`.
* `npm init -y` to create barebones package.json
* `npm install popmotion` to install popmotion.
* `npm info cats` to see whats in an npm package.
* `parcel index.html` to build and run code locally.
  * Bundles everything up, including referenced files, and runs a live local server. Updates automatically (hot model refresh, or something like that).
  * Can require in other js files in the existing one. Ex:
```js useless.js
console.log("A useless log");
```
``` js animation.js
require('./useless');
```
And you will now see this console.log in the live server.
* Do modules with ES6 instead...